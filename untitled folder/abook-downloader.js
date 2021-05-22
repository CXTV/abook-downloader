"use strict";
(async function () {
	let request = require("request");
	let fs = require("fs");
	let readline = require("readline");
	let crypto = require("crypto");
	let util = require("util");
	// let getAliplayerPlayInfo = await require("./aliplayer-downloader");
	let promisify = function (f, self, args) {
		args = Array.from(args);
		return new Promise(function (resolve, reject) {
			let existCallback = false;
			for (let i = 0; i < args.length; i++) {
				if (args[i] === promisify.callback) {
					existCallback = true;
					args[i] = function () {
						resolve(arguments);
					};
				}
			}
			if (!existCallback) {
				args.push(function () {
					resolve(arguments);
				});
			}
			try {
				f.apply(self, args);
			} catch (e) {
				reject(e);
			}
		});
	};
	/*
	let getVideoURL = module.exports.getVideoURL = async function getVideoURL(resourceInfoId) {
		let response1 = JSON.parse((await promisify(request, null, ["https://abook.hep.com.cn/OpenAPIURL.action?resourceInfoId=" + resourceInfoId]))[2]);
		let response2 = JSON.parse((await promisify(request, null, [response1.URL]))[2]);
		return JSON.parse((await promisify(request, null, [await getAliplayerPlayInfo(response1.VideoId, response2.PlayAuth)]))[2]);
	};
	*/
	let input = function (prompt) {
		process.stdout.write(prompt);
		return new Promise(function (resolve) {
			let rlInterface = readline.createInterface({
				input: process.stdin
			});
			rlInterface.on("line", function (str) {
				rlInterface.close();
				resolve(str);
			});
		});
	};
	Object.defineProperty(Array.prototype, "len", {
		get: function () {
			return this.length;
		}
	});
	Object.defineProperty(Array.prototype, "last", {
		get: function () {
			return this[this.length - 1];
		}
	});
	let range = function range(start = 0, stop, step = 1) {
		if (arguments.length == 1) {
			stop = start;
			start = 0;
		}
		return {
			[Symbol.iterator]() {
				let current = start;
				return {
					next: function () {
						let ret;
						if (current < stop) {
							ret = {
								value: current,
								done: false
							}
						} else {
							ret = {
								value: undefined,
								done: true
							}
						}
						current += step;
						return ret;
					}
				};
			}
		};
	};
	let print = function (...args) {
		let temp;
		for (let i in args) {
			temp = args[i];
			if (temp instanceof Buffer) {
				let binary = false;
				for (let i of temp) {
					if (i > 127) {
						binary = true;
						break;
					}
				}
				if (binary) {
					temp = temp.toString("hex");
				} else {
					temp = temp.toString();
				}
				temp = "Buffer[" + temp + "]"
			}
			if (typeof (temp) === "string" || typeof (temp) === "number" || (temp instanceof Number) || (temp instanceof String)) {
				temp = temp.toString();
			} else {
				try {
					temp = JSON.stringify(temp, null, 4);
				} catch (e) {
					temp = temp.toString();
				}
			}
			args[i] = temp;
		}
		console.log.apply(console, args);
	};
	let sleep = function (n) {
		return new Promise(function (resolve) {
			setTimeout(resolve, n);
		});
	};
	String.prototype.format = function (...args) {
		args.unshift(String(this));
		return util.format.apply(util, args);
	};
	let base64 = function (n) {
		return Buffer.from(n).toString("base64");
	};
	let debase64 = function (n) {
		return Buffer.from(n, "base64").toString();
	};
	let Pending = class Pending {
		constructor(n = 1) {
			let self = this;
			this.counter = n;
			let resolve;
			this.promise = new Promise(function (r) {
				resolve = r;
			});
			self.promise.resolve = resolve;
			if (n <= 0) {
				resolve();
			}
		};
		resolve(n = 1) {
			this.counter -= n;
			if (this.counter <= 0) {
				this.promise.resolve();
			}
		};
		resolveAll(value) {
			self.promise.resolve(value);
		};
	};
	let Session = function (session, maxConnection = 64) {
		let queue = [], connection = 0;
		let ret = async function (url, options = {}) {
			if (connection > maxConnection) {
				let pending = new Pending();
				queue.push(pending);
				await pending.promise;
			}
			if (!options.stream) {
				connection++;
				let result = await promisify(session, this, [url, options]);
				connection--;
				if (queue.length) {
					queue.shift().resolve();
				}
				if (result[0]) {
					return [result[0], undefined];
				}
				if (result[1].statusCode >= 400) {
					let error = new Error("HTTP(S) request error " + result[1].statusCode + ": " + result[1].statusMessage);
					error.statusMessage = result[1].statusMessage;
					error.statusCode = result[1].statusCode;
					error.response = result[1];
					error.body = result[2];
					return [error, undefined];
				}
				if (options.parseJSON) {
					try {
						result[2] = JSON.parse(result[2]);
					} catch (e) {
						return [e, undefined];
					}
				}
				return [false, result[2]];
			} else {
				let origConnection = connection;
				try {
					connection++;
					let stream = session(url, options);
					stream.on("close", function () {
						connection--;
					});
					return [false, stream];
				} catch (e) {
					connection = origConnection;
					return [e, undefined];
				}
			}
		};
		return ret;
	};

	let validateFilename = function (file_name) {
		file_name = file_name.trim();
		let key_word = ["/／", ':：', '*﹡', '?？', '"”', '<﹤', '>﹤', "|∣"];
		for (let i of range(key_word.len)) {
			file_name = file_name.replaceAll(key_word[i][0], key_word[i][1]);
		}
		//		/╱／∕		|∣		\＼		*✱✲✳✽﹡		<﹤〈＜‹		>﹥〉＞›
		return file_name;
	};
	let mkdir_p = function (filename) {
		try {
			fs.mkdirSync(validateFilename(filename), {
				recursive: true
			})
		} catch (e) {}
	};
	let defaultRetry = async function (n) {
		if (n !== 0 && n & 0b111) {
			print("Retry in 1 seconds.");
			await sleep(1000);
		} else {
			if ((await input("Retry? (Y/N): ")).toLowerCase() === "n") {
				return false;
			}
		}
		return true;
	}
	let json2key_value = function (json) {
		let ret = "", temp;
		for (let i in json) {
			temp = json[i];
			if (temp instanceof Buffer) {
				let binary = false;
				for (let i of temp) {
					if (i > 127) {
						binary = true;
						break;
					}
				}
				if (binary) {
					temp = temp.toString("base64");
				} else {
					temp = temp.toString();
				}
			}
			if (typeof (temp) === "string" || typeof (temp) === "number" || (temp instanceof Number) || (temp instanceof String)) {
				temp = temp.toString();
			} else {
				try {
					temp = JSON.stringify(temp);
				} catch (e) {
					temp = temp.toString();
				}
			}
			ret += encodeURIComponent(i) + "=" + encodeURIComponent(temp) + "&";
		}
		return ret.slice(0, -1);
	};
	let login = async function (session, userName, password) {
		let response = await session("https://abook.hep.com.cn/loginMobile.action", {
			body: json2key_value({
				'device': 'iPhone',
				'loginUser.loginName': userName,
				'loginUser.loginPassword': crypto.createHash("md5").end(password).digest().toString("hex"),
				'packageId': 'com.hep.abook',
				'passType': 'MD5',
				'version': 'v1.182'
			}), headers: {
				"User-Agent": "iPhone",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			method: "post",
			parseJSON: true
		});
		if (response[0]) {
			return response[0];
		}
		try {
			if (response[1][0]["message"] == "successful") {
				return false;
			} else {
				return response[1][0]["message"];
			}
		} catch (e) {
			return e;
		}
	};
	let fetchCourseList = async function (session) {
		let courseList = await session("https://abook.hep.com.cn/selectMyCourseList.action?mobile=true&cur=1", { parseJSON: true });
		if (!courseList[0]) {
			try {
				courseList = courseList[1][0].myMobileCourseList;
				let ret = [];
				for (let i in courseList) {
					ret[i] = [courseList[i].courseInfoId, courseList[i].courseTitle];
					ret[courseList[i].courseInfoId] = [i, courseList[i].courseTitle];
				}
				return [false, ret];
			} catch (e) {
				return [e, undefined];
			}
		}
		return [courseList[0], undefined];
	};
	let parseResourceStructure = function (resourceStructure, courseInfoId) {
		courseInfoId = -0;
		let root = {
			haveMenu: false,
			name: "root",
			pId: -1,
			id: -courseInfoId,
			type: -1
		}, allResources = resourceStructure, allResourcesById = {};
		allResources.push(root);
		for (let i of allResources) {
			i.path = [];
			i.children = [];
			i.childrenById = {};
			i.serializable = {
				name: i.name,
				id: i.id,
				children: []
			};
			allResourcesById[i.id] = i;
			if (i.pId === 0) {
				i.pId = -courseInfoId;
			}
		}
		for (let i of allResources) {
			if (i === root) {
				i.parent = null;
				continue;
			}
			allResourcesById[i.pId].serializable.children.push(i.serializable);
			allResourcesById[i.pId].children.push(i);
			allResourcesById[i.pId].childrenById[i.id] = i;
			i.parent = allResourcesById[i.pId];
			delete i.pId;
		}
		for (let i of allResources) {
			let cur = i;
			while (cur !== root) {
				i.path.unshift(validateFilename(cur.name));
				cur = cur.parent;
			}
		}
		allResourcesById[0] = root;
		return [root, allResources, allResourcesById];
	};
	let fetchResourceStructure = async function (session, courseInfoId) {
		let resourceStructure = await session("https://abook.hep.com.cn/resourceStructure.action?courseInfoId=%s".format(courseInfoId), { parseJSON: true });
		return (resourceStructure[0]) ? ([resourceStructure[0], undefined]) : ([false, parseResourceStructure(resourceStructure[1], courseInfoId)]);
	};
	let getResourceUnitInfo = async function (session, courseInfoId, resourceStructure, downloadLinks, retry = defaultRetry) {
		let resourceInfoURL = "https://abook.hep.com.cn/courseResourceList.action?courseInfoId=%s&treeId=%s&cur=".format(courseInfoId, resourceStructure.id);
		let pageCount = Infinity, resourceInfo = [], temp;
		for (let cur = 1; cur <= pageCount; cur++) {
			for (let i = 1; [temp = await session(resourceInfoURL + cur, { parseJSON: true }), temp[0]].last; i++) {
				if (!await retry(i)) {
					return [temp[0], undefined];
				}
			}
			if (temp[1][0].message === debase64("6K+l5YaF5a656K+35Zyo55S16ISR56uv5p+l55yL44CC")) {
				resourceInfo = "needDesktop";
				break;
			}
			if (temp[1][0].message === debase64("6K+l55uu5b2V5LiL5peg5YaF5a6544CC6K+354K55Ye75Y+z5L6n566t5aS05bGV5byA5ZCO5rWP6KeI5LiL5LiA57qn6IqC54K555qE5pyJ5YWz5YaF5a6544CC")) {
				return [];
			}
			if (temp[1][0].message !== debase64("5Yqg6L295oiQ5Yqf")) {
				print(temp[1][0].message)
				throw ("TODO"); // TODO
			}
			pageCount = temp[1][0].page.pageCount;
			resourceInfo = resourceInfo.concat(temp[1][0].myMobileResourceList);
		}
		if (resourceInfo === "needDesktop") {
			print("TODO", resourceStructure.serializable);
			return [];
			throw ("TODO"); // TODO
		} else {
			for (let i of resourceInfo) {
				if (downloadLinks[i.resourceInfoId]) {
					i.resFileUrl = downloadLinks[i.resourceInfoId];
				}
				temp = i.resFileUrl.indexOf(".");
				if (temp !== -1) {
					i.format = i.resFileUrl.slice(temp + 1);
				} else {
					i.format = "";
				}
				i.path = resourceStructure.path;
			}
		}
		return [false, resourceInfo];
	};
	let getResourceInfo = async function (session, courseInfoId, resourceStructure, downloadLinks, retry = defaultRetry) {
		for (let i = 1, temp; (temp = (await session("https://abook.hep.com.cn/enterCourse.action?courseInfoId=%s&roleGroupId=4&ishaveEdit=0".format(courseInfoId))))[0]; i++) {
			log("Failed to enter course %s.".format(courseInfoId));
			if (!await retry(i)) {
				return [temp[0], undefined];
			}
		}
		let ret = [];
		if (resourceStructure.type === 1) {
			let temp = await getResourceUnitInfo(session, courseInfoId, resourceStructure, downloadLinks, retry);
			if (temp[0]) {
				return [temp[0], undefined];
			}
			ret = ret.concat(temp[1]);
		}
		let pending = new Pending(resourceStructure.children.len);
		for (let i of resourceStructure.children) {
			getResourceInfo(session, courseInfoId, i, downloadLinks, retry).then(function (n) {
				if (n[1]) {
					ret = ret.concat(n[1]);
				}
				pending.resolve();
			});
		}
		await pending.promise;
		return [false, ret];
	};
	let getDownloadLinks = async function (session, courseInfoId, log = print, retry = defaultRetry) {
		for (let i = 1, temp; (temp = (await session("https://abook.hep.com.cn/enterCourse.action?courseInfoId=%s&roleGroupId=4&ishaveEdit=0".format(courseInfoId))))[0]; i++) {
			log("Failed to enter course %s.".format(courseInfoId));
			if (!await retry(i)) {
				return [temp[0], undefined];
			}
		}
		let ret = {}, temp, temp1;
		for (let i = 1; [temp = await session("https://abook.hep.com.cn/AjaxSelectMyResource.action?treeId=0&show=largeIcons&ifUser=resList&cur=1"), temp[0]].last; i++) {
			if (!await retry(i)) {
				return [temp[0], undefined];
			}
		}
		for (let i of temp[1].match(/<input type="hidden" id="hid[0-9]+" value=".*"\/>/g)) {
			temp1 = i.indexOf('" value="');
			ret[i.slice(28, temp1)] = i.slice(temp1 + 9, -3);
		}
		let pageCount = Number(temp[1].match(/<input type='hidden' name='page.pageCount' value='[0-9]+/)[0].slice(50)), pending = new Pending(pageCount - 1);
		for (let cur = 2; cur <= pageCount; cur++) {
			setImmediate(async function () {
				for (let i = 1; [temp = await session("https://abook.hep.com.cn/AjaxSelectMyResource.action?treeId=0&show=largeIcons&ifUser=resList&cur=" + cur), temp[0]].last; i++) {
					if (!await retry(i)) {
						pending.resolveAll(temp[0]);
					}
				}
				for (let i of temp[1].match(/<input type="hidden" id="hid[0-9]+" value=".*"\/>/g)) {
					temp1 = i.indexOf('" value="');
					ret[i.slice(28, temp1)] = i.slice(temp1 + 9, -3);
				}
				pending.resolve();
			});
		}
		if (temp = await pending.promise) {
			return [temp, undefined];
		}
		// print(ret);
		// await sleep(5000);
		// print(ret);
		return [false, ret];
	};
	let getCourseResourceInfoAll = async function (session, courseInfoId, log = print, retry = defaultRetry) {
		let resourceStructure;
		log("Fetching resource structure.");
		for (let i = 1; resourceStructure = await fetchResourceStructure(session, courseInfoId), resourceStructure[0]; i++) {
			log("Failed to fetched resource structure.");
			if (!await retry(i)) {
				return [resourceStructure[0], undefined];
			}
		}
		resourceStructure = resourceStructure[1];
		log("Successfully fetched resource structure.");
		log("Fetching download links.");
		let downloadLinks = await getDownloadLinks(session, courseInfoId);
		if (downloadLinks[0]) {
			print("Failed to fetch download links.");
			return [downloadLinks[0], undefined];
		}
		downloadLinks = downloadLinks[1];
		log("Successfully fetched download links.");
		log("Fetching resource information. This may take up to a minute.");
		let resourceInfo = await getResourceInfo(session, courseInfoId, resourceStructure[0], downloadLinks);
		if (resourceInfo[0]) {
			print("Failed to fetch resource information.");
			return [resourceInfo[0], undefined];
		}
		return [false, resourceInfo[1]];
	};
	let getCourseResourceInfo = async function (session, courseInfoId, read = input, log = print, retry = defaultRetry) {
		let resourceStructure;
		log("Fetching resource structure.");
		for (let i = 1; resourceStructure = await fetchResourceStructure(session, courseInfoId), resourceStructure[0]; i++) {
			log("Failed to fetched resource structure.");
			if (!await retry(i)) {
				return [resourceStructure[0], undefined];
			}
		}
		resourceStructure = resourceStructure[1];
		log("Successfully fetched resource structure.");
		log("Fetching download links.");
		let downloadLinks = await getDownloadLinks(session, courseInfoId);
		if (downloadLinks[0]) {
			print("Failed to fetch download links.");
			return [downloadLinks[0], undefined];
		}
		downloadLinks = downloadLinks[1];
		log("Successfully fetched download links.");
		log("Resource structure of cource %s:".format(courseInfoId));
		log(resourceStructure[0].serializable);
		let resourceId = await read("The ID of the resource / resource tree you would like to download: ");
		log("Fetching resource information. This may take up to a minute.");
		let resourceInfo = await getResourceInfo(session, courseInfoId, resourceStructure[2][resourceId], downloadLinks);
		if (resourceInfo[0]) {
			print("Failed to fetch resource information.");
			return [resourceInfo[0], undefined];
		}
		return [false, resourceInfo[1]];
	};
	let downloadResource = async function (session, resourceInfoList, pathBase, retry = defaultRetry) {
		// let download_url_base = "https://abook.hep.com.cn/ICourseFiles/"; let download_link_url2 = "https://abook.hep.com.cn/selectResource.action?roleMenuId={}".format(root_chapter['id']);
		// print(resourceInfoList);
		// let pending = new Pending(resourceInfoList.len);
		let ret1 = "", ret2 = "", dirs = {};
		for (let resourceInfo of resourceInfoList) {
			let path = pathBase.concat(resourceInfo.path);
			dirs[path.join("/")] = true;
			path = path.concat([validateFilename(resourceInfo.resTitle + "." + resourceInfo.format)]);
			ret1 += ("curl '" + "https://abook.hep.com.cn/ICourseFiles/" + resourceInfo.resFileUrl + "' -o '" + path.join("/") + "'") + "\n";
			/*
			setImmediate(async function () {
				for (let i = 1; [temp = await session("https://abook.hep.com.cn/ICourseFiles/" + resourceInfo.resFileUrl), temp[0]].last; i++) {
					if (!await retry(i)) {
						pending.resolveAll(temp[0]);
					}
				}
				pending.resolve();
			});
			*/
		}
		for (let i in dirs) {
			ret2 += "mkdir -p '" + i + "'\n";
		}
		return ret2 + ret1;
	};

	(async function main() {
		let session = Session(request.defaults({
			jar: request.jar(),
			forever: true
		}));
		let config = {};
		while (true) {
			let userName = await input("Username: ");
			let password = await input("Password: ");
			print("login().");
			if (!await login(session, userName, password)) {
				print("login() succeeded.");
				config.userName = userName;
				config.password = password;
				break;
			}
			print("login() failed.");
		}
		let courseList;
		let printCoursesList = function (courseList) {
			print("There are %s course(s) available: ".format(courseList.len));
			for (let i of range(courseList.len)) {
				print(i, courseList[i][0], courseList[i][1]);
			}
		};
		while (true) {
			while (true) {
				print("Fetching course list.");
				courseList = await fetchCourseList(session);
				if (courseList[0]) {
					print("Failed to fetched course list. Retry in 1 second.");
					await sleep(1000);
				} else {
					courseList = courseList[1];
					print("Successfully fetched course list.");
					break;
				}
			}
			printCoursesList(courseList);
			while (true) {
				let choice = (await input("Course number / ID, or R to reload, Q to quit: ")).toLowerCase();
				/*
				if (choice === "a") {
					for (let i of range(courseList.len)) {
						await getCourseResourceInfoAll(session, i.courseInfoId);
					}
					printCoursesList(courseList);
					continue;
				}
				*/
				if (choice === "r") {
					break;
				}
				if (choice === "q") {
					return;
				}
				if (choice !== "" && !isNaN(choice) && choice < courseList.len) {
					choice = courseList[choice][0];
				}
				if (choice !== "" && !isNaN(choice) && choice > 5000000000) {
					let resourceInfo = await getCourseResourceInfo(session, choice);
					if (resourceInfo[0]) {
						printCoursesList(courseList);
						continue;
					}
					print("Use the following command to download:");
					print(await downloadResource(session, resourceInfo[1], ["downloads", validateFilename(courseList[choice][1])]));
					print();
					printCoursesList(courseList);
					continue;
				}
				print("Invalid input.");
			}
		}
	})();
})();

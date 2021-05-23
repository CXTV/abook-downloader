let vm = require("vm"), zlib = require("zlib");
let file = module.filename = process.argv.splice(2, 1)[0];
let decompress = function (n) {
	// return zlib.brotliDecompressSync(n);
	return n;
};
delete global.gc;
let moduleFunction = vm.runInThisContext('(function(a,b,c){return c.compileFunction(a,["exports","require","module","__filename","__dirname"],{filename:b});})')(decompress(require("fs").readFileSync(file)).toString(), module.filename, vm);
/*
let moduleFunction = vm.runInThisContext('(function (code, filename, vm) { \
	return vm.compileFunction(code, ["exports", "require", "module", "__filename", "__dirname"], { \
		filename: filename \
	}); \
})')(decompress(require("fs").readFileSync(file)).toString(), module.filename, vm);
*/
moduleFunction(module.exports, module.require, module, file, __dirname);
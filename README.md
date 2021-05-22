## 一个用于在高等教育出版社的Abook网站上下载课程资源的小工具。
能用，但还不是很完善。

用户界面很粗糙，而且没有内置下载器，只能生成curl命令来下载。可能有些小bug，但是我还没有发现。
以后我会抽时间把它完善一下。

使用nodejs编写，依赖request模块。

使用方法
```
sam0230@Sam0230-macOS:~/abook-downloader/untitled folder$ node abook-downloader.min.js
Username: Sam0230 (输如你的用户名)
Password: XXXXXXXXXX (你的密码)
login().
login() succeeded.
Fetching course list.
Successfully fetched course list.
There are 5 course(s) available: 
0 5000003017 有机化学（第六版）
1 5000003391 无机化学（第四版）
2 5000003478 普通化学（第七版）
Course number / ID, or R to reload, Q to quit: 2 (在此处输入你想下载的课程前面的数字)
Fetching resource structure.
Successfully fetched resource structure.
Fetching download links.
Successfully fetched download links.
Resource structure of cource 5000003478: (课程文件的树形结构)
{
    "name": "root",
    "id": 0,
    "children": [
        {
            "name": "课程介绍",
            "id": 5000360653,
            "children": []
        },
        {
            "name": "电子教案",
            "id": 5000360654, (注意这里)
            "children": [
                {
                    "name": "绪论、第一章",
                    "id": 5000360661,
                    "children": []
                },
                {
                    "name": "第二章",
                    "id": 5000360662,
                    "children": []
                },
                {
                    "name": "第三章",
                    "id": 5000360663,
                    "children": []
                },
                {
                    "name": "第四章",
                    "id": 5000360664,
                    "children": []
                },
                {
                    "name": "第五章",
                    "id": 5000360665,
                    "children": []
                },
                {
                    "name": "第六章",
                    "id": 5000360666,
                    "children": []
                },
                {
                    "name": "第七章",
                    "id": 5000360667,
                    "children": []
                },
                {
                    "name": "第八章",
                    "id": 5000360668,
                    "children": []
                },
                {
                    "name": "第九章",
                    "id": 5000360669,
                    "children": []
                }
            ]
        },
        {
            "name": "重难点习题讲解",
            "id": 5000360655, (注意这里)
            "children": [
                {
                    "name": "1. 化学热力学",
                    "id": 5000360670,
                    "children": [
                        {
                            "name": "试题1",
                            "id": 5000360671,
                            "children": []
                        },
                        {
                            "name": "试题2",
                            "id": 5000360678,
                            "children": []
                        },
                        {
                            "name": "试题3",
                            "id": 5000360680,
                            "children": []
                        },
                        {
                            "name": "试题4",
                            "id": 5000360681,
                            "children": []
                        },
                        {
                            "name": "试题5",
                            "id": 5000360691,
                            "children": []
                        },
                        {
                            "name": "试题6",
                            "id": 5000360692,
                            "children": []
                        },
                        {
                            "name": "试题7",
                            "id": 5000360693,
                            "children": []
                        },
                        {
                            "name": "试题8",
                            "id": 5000360694,
                            "children": []
                        },
                        {
                            "name": "试题9",
                            "id": 5000360695,
                            "children": []
                        },
                        {
                            "name": "试题10",
                            "id": 5000360696,
                            "children": []
                        },
                        {
                            "name": "试题11",
                            "id": 5000360697,
                            "children": []
                        },
                        {
                            "name": "试题12",
                            "id": 5000360698,
                            "children": []
                        },
                        {
                            "name": "试题13",
                            "id": 5000360699,
                            "children": []
                        },
                        {
                            "name": "试题14",
                            "id": 5000360700,
                            "children": []
                        },
                        {
                            "name": "试题15",
                            "id": 5000360701,
                            "children": []
                        },
                        {
                            "name": "试题16",
                            "id": 5000360702,
                            "children": []
                        },
                        {
                            "name": "试题17",
                            "id": 5000360703,
                            "children": []
                        },
                        {
                            "name": "试题18",
                            "id": 5000360704,
                            "children": []
                        },
                        {
                            "name": "试题19",
                            "id": 5000360705,
                            "children": []
                        },
                        {
                            "name": "试题20",
                            "id": 5000360706,
                            "children": []
                        },
                        {
                            "name": "试题21",
                            "id": 5000360707,
                            "children": []
                        },
                        {
                            "name": "试题22",
                            "id": 5000360708,
                            "children": []
                        },
                        {
                            "name": "试题46",
                            "id": 5000360731,
                            "children": []
                        },
                        {
                            "name": "试题48",
                            "id": 5000360733,
                            "children": []
                        }
                    ]
                },
                {
                    "name": "2. 电化学",
                    "id": 5000360672,
                    "children": [
                        {
                            "name": "试题23",
                            "id": 5000360673,
                            "children": []
                        },
                        {
                            "name": "试题24",
                            "id": 5000360709,
                            "children": []
                        },
                        {
                            "name": "试题25",
                            "id": 5000360710,
                            "children": []
                        },
                        {
                            "name": "试题26",
                            "id": 5000360711,
                            "children": []
                        },
                        {
                            "name": "试题27",
                            "id": 5000360712,
                            "children": []
                        },
                        {
                            "name": "试题28",
                            "id": 5000360713,
                            "children": []
                        },
                        {
                            "name": "试题29",
                            "id": 5000360714,
                            "children": []
                        },
                        {
                            "name": "试题30",
                            "id": 5000360715,
                            "children": []
                        },
                        {
                            "name": "试题31",
                            "id": 5000360716,
                            "children": []
                        },
                        {
                            "name": "试题32",
                            "id": 5000360717,
                            "children": []
                        },
                        {
                            "name": "试题49",
                            "id": 5000360734,
                            "children": []
                        }
                    ]
                },
                {
                    "name": "3. 化学动力学",
                    "id": 5000360674,
                    "children": [
                        {
                            "name": "试题33",
                            "id": 5000360675,
                            "children": []
                        },
                        {
                            "name": "试题34",
                            "id": 5000360718,
                            "children": []
                        },
                        {
                            "name": "试题35",
                            "id": 5000360719,
                            "children": []
                        },
                        {
                            "name": "试题36",
                            "id": 5000360720,
                            "children": []
                        },
                        {
                            "name": "试题37",
                            "id": 5000360721,
                            "children": []
                        },
                        {
                            "name": "试题38",
                            "id": 5000360722,
                            "children": []
                        },
                        {
                            "name": "试题39",
                            "id": 5000360723,
                            "children": []
                        },
                        {
                            "name": "试题40",
                            "id": 5000360724,
                            "children": []
                        }
                    ]
                },
                {
                    "name": "4. 配位化学",
                    "id": 5000360676,
                    "children": [
                        {
                            "name": "试题41",
                            "id": 5000360677,
                            "children": []
                        },
                        {
                            "name": "试题42",
                            "id": 5000360725,
                            "children": []
                        },
                        {
                            "name": "试题43",
                            "id": 5000360726,
                            "children": []
                        },
                        {
                            "name": "试题44",
                            "id": 5000360727,
                            "children": []
                        }
                    ]
                },
                {
                    "name": "5. 其他",
                    "id": 5000360729,
                    "children": [
                        {
                            "name": "试题45",
                            "id": 5000360730,
                            "children": []
                        },
                        {
                            "name": "试题47",
                            "id": 5000360732,
                            "children": []
                        },
                        {
                            "name": "试题50",
                            "id": 5000360735,
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "name": "拓展知识",
            "id": 5000360656,
            "children": [
                {
                    "name": "1.手性药物",
                    "id": 5000360657,
                    "children": []
                },
                {
                    "name": "2.拆分原理",
                    "id": 5000360658,
                    "children": []
                },
                {
                    "name": "3.扁桃酸",
                    "id": 5000360659,
                    "children": []
                }
            ]
        }
    ]
}
The ID of the resource / resource tree you would like to download: 5000360655 (比如说，你想下载电子教案，就输入5000360654，就是上面电子教案那一栏里的ID，而重难点习题讲解的就是5000360655)
Fetching resource information. This may take up to a minute.
Use the following command to download: (运行下面的这些命令。如果你用的是UNIX-like的操作系统，直接粘贴到命令行就行了。如果是Windows的话去 https://mirrors.tuna.tsinghua.edu.cn/cygwin/x86_64/release/curl/curl-7.76.1-2.tar.xz 下载curl，解压把usr/bin/curl.exe拖出来，和 https://frippery.org/files/busybox/busybox64.exe 放在一起，然后在这个目录下cmd运行`busybox64 ash`，再粘贴。)
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/4. 配位化学/试题43'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/4. 配位化学/试题41'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/4. 配位化学/试题42'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/4. 配位化学/试题44'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题23'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题49'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题32'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题27'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题25'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题29'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题24'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题26'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题31'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题30'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题28'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题13'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题15'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题9'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题5'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题14'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题46'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题1'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题6'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题21'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题20'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题17'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题22'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题8'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题4'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题19'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题16'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题18'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题2'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题10'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题11'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题3'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题48'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题12'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题7'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/5. 其他/试题50'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/5. 其他/试题47'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/5. 其他/试题45'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题33'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题36'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题40'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题37'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题34'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题35'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题39'
mkdir -p 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题38'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/5bcceeeb-1a68-4e5f-a44f-3f12adbbde08.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/4. 配位化学/试题43/43配题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/0fd37d8f-f85c-4545-a7c3-4a1e4855d0a0.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/4. 配位化学/试题41/41配题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/080289d9-095d-4cdc-9460-ada1cbe2e1ab.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/4. 配位化学/试题42/42配题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/4fb1a3c8-d392-426a-8da9-932437e5756a.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/4. 配位化学/试题44/44配题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/220c2b68-ff1d-4bb4-9a3f-d259789b08ce.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题23/23电题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/672df16e-0164-44f8-9433-3bc20b0dc900.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题49/49概题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/35764b6d-f00c-47bc-90c7-abfdeb2c0858.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题32/32电题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/9399a8fb-9497-4b00-a58a-ac8a391d4297.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题27/27电题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/e37bbcd5-fd1e-4ec3-98f4-6d40ead6ffd8.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题25/25电题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/9ab27a81-734a-435e-8cb0-3d74d8c1458c.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题29/29电题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/f385b28b-92f7-4d93-a2bb-de57d2dd415e.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题24/24电题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/6427795d-430a-486a-b677-0a00b917996f.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题26/26电题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/f9c09aca-12ac-4c16-93c2-e216c845a8a3.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题31/31电题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/21193ba4-2230-4a27-9e5d-b6ff862b0360.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题30/30电题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/aabcc8d2-f91d-4057-b113-3871fa87b34b.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/2. 电化学/试题28/28电题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/e2512d68-d2b7-43ad-87c7-b606e43e63ec.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题13/13热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/c9d089a2-df21-422b-b1dd-ec4b3b370d21.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题15/15热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/0163ca84-a443-456c-a6c6-49ce3d17b30e.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题9/9热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/394a68e8-49ad-492e-a201-9f287cfb571f.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题5/5热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/a90cddc6-0fc3-4678-9fa4-27e39b66dd41.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题14/14热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/d86d680a-12c5-4eb8-ba04-ca6b05d8e091.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题46/46概题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/6b59dfbf-ee02-4627-81ee-a1fa8e066676.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题1/1热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/5de84d77-505a-4ef9-b1ed-330f9ee6716a.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题6/6热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/5d3ddf72-189d-4c8c-bac4-a9a6ecbc1d14.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题21/21热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/b2884c71-a73a-459f-aef0-819a42d2cc54.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题20/20热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/2a29c907-169c-4a5a-a32b-feb176989d06.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题17/17热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/9cefc764-663f-47ee-ae20-ad89508d6ae9.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题22/22热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/92732ffa-cdad-4cd1-9b5f-af7b8220f457.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题8/8热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/015746bf-5b30-407f-9436-faa2a57ecc6f.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题4/4热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/c2ac8eab-a947-44fc-a069-4aecfcf07360.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题19/19热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/eada06c1-6efc-4c37-b3f0-680972806bba.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题16/16热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/37013ec2-1d90-4643-aa2e-59c52cd07347.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题18/18热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/636bfe71-4a44-4b9c-9e55-ca3a08e9b4c7.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题2/2热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/8162a43a-b7e4-40bc-9ab0-c3fd312754f5.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题10/10热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/0dc8e517-792c-4fe3-b850-a815d4d7e639.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题11/11热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/5f090e1f-504b-41a2-b1a1-57b0bad9b246.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题3/3热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/0601d4c3-7621-424e-a4a5-ddb3ce1c0c02.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题48/48概题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/09972697-56e6-4e70-9bbe-e85742bd5df3.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题12/12热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/1cc9ebd0-ce30-4d97-a0b7-540ff8e6f533.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/1. 化学热力学/试题7/7热题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/232d3107-0677-475b-9df6-4ae5a28d92c5.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/5. 其他/试题50/50概题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/b389cf65-a880-4343-8727-32cf7762739c.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/5. 其他/试题47/47概题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/7f4cd975-354a-4ef1-89aa-73d0a8f78f38.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/5. 其他/试题45/45概题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/c86ddcc4-2465-4c0c-9135-13b9ac6e4eba.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题33/33动题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/a904a312-3187-471f-9855-6c496fb8c86c.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题36/36动题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/47637576-cc8e-4bb5-b5fc-8a4f852f262c.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题40/40动题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/5ee11dbb-01b4-4499-a916-5c13f1492f04.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题37/37动题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/14db7e31-2578-4d80-bb23-dda9b466d0db.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题34/34动题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/c62bb13a-d061-4d3c-8d26-87feb0ae5e0e.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题35/35动题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/9dec0d9a-9548-4406-8bc1-6c4b1229d954.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题39/39动题.mp4'
curl 'https://abook.hep.com.cn/ICourseFiles/5000003478/resourses/2019/9/29/f5d265fc-4548-4f01-9ef6-dc8f6fe6ce10.mp4' -o 'downloads/普通化学（第七版）/重难点习题讲解/3. 化学动力学/试题38/38动题.mp4'


There are 5 course(s) available: 
0 5000003017 有机化学（第六版）
1 5000003391 无机化学（第四版）
2 5000003478 普通化学（第七版）
Course number / ID, or R to reload, Q to quit: Q
sam0230@Sam0230-macOS:~/abook-downloader/untitled folder$ 
```

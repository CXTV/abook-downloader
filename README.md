## 一个用于在高等教育出版社的Abook网站上下载课程资源的小工具

#### Bug:
#### 请不要使用上一个Release里提供的微型Node.js！我在打包时不小心加了--expose-gc选项，因此所有garbage-collection停止自动执行，导致内存泄漏。
#### 请到https://npm.taobao.org/mirrors/node/v16.2.0/ 下载Node.js运行环境。node-v16.2.0-darwin-arm64.tar.gz是M1 Mac的，node-v16.2.0-darwin-x64.tar.gz是Intel Mac的，win-x64/node.exe是Windows的。
#### 去https://github.com/Sam0230/abook-downloader/releases/download/beta-05-23-2021/abook-downloader.bundle.min.js 下载bundle，Windows的使用方法不变，macOS是把abook-downloader.bundle.min.js移动到解压出的文件夹里的bin，右键bin，再选择 新建位于文件夹位置的终端标签页（接下来详见https://www.zhihu.com/question/267013491/answer/1902121086 ）
#### 今天（2021.05.24）我只能用信息课时间写一下这个，我回家后会让我父母明天晚上把我自己的电脑带来，重新打包（我是高中生）。

使用Node.js编写，依赖progress、request、string-width、performance-now模块。

abook-downloader.js是源代码，abook-downloader.bundle.min.js是打包好的bundle，可独立运行。packer.sh是打包器。

使用方法
```
sam0230@Sam0230-macOS:~/abook-downloader$ node-mac-arm64 abook-downloader.bundle.min.js    (启动程序：前面的node-mac-arm64对不同的电脑来说不一样。node-mac-arm64是M1芯片上的macOS，node-mac-x64是Intel CPU上的macOS，对于大部分Windows用户，直接把下载下来的abook-downloader.bundle.min.js拖到node-windows-x64.exe上就行了，而M1 Mac上用虚拟机软件运行的Windows要用node-windows-arm64.exe。Linux用户用包管理器安装Node.js，然后node abook-downloader.bundle.min.js)
Username: Sam0230    (输如你的用户名)
Password: XXXXXXXXXX    (输如你的密码)
login().
login() succeeded.
Fetching course list.
Successfully fetched course list.
There are 5 course(s) available: 
0 5000003017 有机化学（第六版）
1 5000003391 无机化学（第四版）
2 5000003478 普通化学（第七版）
Course number / ID, or R to reload, A to download all, Q to quit: 2    (输入你想下载的课程前面的数字，或R来刷新列表，A来下载全部，Q来退出)
Fetching resource structure.
Successfully fetched resource structure.
Fetching download links.
Successfully fetched download links.
Resource structure of cource 5000003478:
{
    "name": "root",
    "id": 0,    (注意这里)
    "children": [
        {
            "name": "课程介绍",
            "id": 5000360653,    (注意这里)
            "children": []
        },
        {
            "name": "电子教案",
            "id": 5000360654,
            "children": [
                {
                    "name": "绪论、第一章",
                    "id": 5000360661,    (注意这里)
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
            "id": 5000360655,
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
The ID of the resource / resource tree you would like to download, or R to return: 5000360654    (输入你要下载的部分的ID。比如，你想下载电子教案，就输入5000360654，就是上面电子教案那一栏里的ID，而重难点习题讲解的就是5000360655，0是下载全部。)
Fetching resource information. This may take up to a minute for some large course.
Successfully fetched resource information.
Do you want to download manually? (y/N): n    (建议不要手动下载。)
Downloading downloads/普通化学（第七版）/电子教案/第五章/第5章.pptx .
[================================================================>] 100.00 %   2.68 MB/s
Downloading downloads/普通化学（第七版）/电子教案/第七章/第7章.pptx .
[================================================================>] 100.00 %   2.62 MB/s
Downloading downloads/普通化学（第七版）/电子教案/第八章/第8章.pptx .
[================================================================>] 100.00 %   2.34 MB/s
Downloading downloads/普通化学（第七版）/电子教案/第四章/第4章.pptx .
[================================================================>] 100.00 %   2.41 MB/s
Downloading downloads/普通化学（第七版）/电子教案/第九章/第9章.pptx .
[================================================================>] 100.00 %   2.11 MB/s
Downloading downloads/普通化学（第七版）/电子教案/第六章/第6章.pptx .
[================================================================>] 100.00 %   2.64 MB/s
Downloading downloads/普通化学（第七版）/电子教案/第二章/第2章.pptx .
[================================================================>] 100.00 %   2.80 MB/s
Downloading downloads/普通化学（第七版）/电子教案/第三章/第3章.pptx .
[================================================================>] 100.00 %   2.39 MB/s
Downloading downloads/普通化学（第七版）/电子教案/绪论、第一章/绪论+第1章.pptx .
[================================================================>] 100.00 %   2.70 MB/s
There are 5 course(s) available: 
0 5000003017 有机化学（第六版）
1 5000003391 无机化学（第四版）
2 5000003478 普通化学（第七版）
Course number / ID, or R to reload, Q to quit: q
sam0230@Sam0230-macOS:~/abook-downloader$ 
```

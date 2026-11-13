// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.packageinstaller",
  "name": "应用包管理组件",
  "groups": [
    {
      "key": 0,
      "name": "功能类-放弃开启安全守护",
      "fastQuery": true,
      "activityIds": "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
      "actionMaximum": 1,
      "rules": [
        {
          "matches": "[text=\"30天内不再提示\"][checked=false]",
          "exampleUrls": "https://e.gkd.li/fe6682cd-a27a-4183-8717-15fd373bafcf",
          "snapshotUrls": "https://i.gkd.li/i/16487140",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"放弃\"]",
          "exampleUrls": "https://e.gkd.li/859dac99-62ca-4876-bdfb-c84795254111",
          "snapshotUrls": "https://i.gkd.li/i/16487142",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity"
        },
        {
          "matches": "[text=\"30天内不再提示\"][checked=false]",
          "exampleUrls": "https://e.gkd.li/fe6682cd-a27a-4183-8717-15fd373bafcf",
          "snapshotUrls": "https://i.gkd.li/i/16487140",
          "fastQuery": true,
          "activityIds": "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
          "actionMaximum": 1
        },
        {
          "preKeys": 2,
          "matches": "[text=\"放弃\"]",
          "exampleUrls": "https://e.gkd.li/859dac99-62ca-4876-bdfb-c84795254111",
          "snapshotUrls": "https://i.gkd.li/i/16487142",
          "fastQuery": true,
          "activityIds": "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-自动安装/更新应用",
      "desc": "该规则仅适配关闭[应用安全验证]和[安全守护]的情况，可在安装页面右上角设置里关闭，关闭后的风险自行承担",
      "matchRoot": true,
      "fastQuery": true,
      "actionMaximum": 1,
      "rules": [
        {
          "name": "点击[安装]/[更新]",
          "activityIds": [
            "com.miui.packageInstaller.NewInstallerPrepareActivity",
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity"
          ],
          "excludeMatches": "[text=\"已了解此应用存在风险\"][checked=false][visibleToUser=true]",
          "matches": "@FrameLayout[clickable=true] > LinearLayout[childCount=1] > [text^=\"继续\" || text^=\"仍然\"][text.length=4][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/bd3e2764-4978-44ed-93d3-f176c23c3ec4",
          "snapshotUrls": [
            "https://i.gkd.li/i/16487278",
            "https://i.gkd.li/i/16487282",
            "https://i.gkd.li/i/17691996",
            "https://i.gkd.li/i/20053957"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/25095995",
          "matchRoot": true,
          "fastQuery": true,
          "actionMaximum": 1
        },
        {
          "preKeys": 0,
          "name": "点击[完成]",
          "activityIds": "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
          "excludeMatches": "[text*=\"安装失败\"]",
          "matches": "[text=\"完成\"]",
          "exampleUrls": "https://e.gkd.li/0011622b-580a-4810-81a4-b4a1181d121d",
          "snapshotUrls": "https://i.gkd.li/i/16487274",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20282424",
          "matchRoot": true,
          "fastQuery": true,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-自动允许应用安装软件",
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": [
        "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
        "com.miui.packageInstaller.NewInstallerPrepareActivity"
      ],
      "rules": [
        {
          "name": "点击[记住我的选择]",
          "matches": [
            "[text^=\"是否允许\"][text*=\"安装应用\"][visibleToUser=true]",
            "CheckBox[text=\"记住我的选择\"][checked=false][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/af834ca4-744a-485f-bec6-9802979fe949",
          "snapshotUrls": [
            "https://i.gkd.li/i/16487366",
            "https://i.gkd.li/i/16487389",
            "https://i.gkd.li/i/18937578",
            "https://i.gkd.li/i/20287209"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击[允许]",
          "matches": "[text=\"允许\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/4f4ce827-6b74-4b55-8fed-5e009acd4bbd",
          "snapshotUrls": [
            "https://i.gkd.li/i/16487365",
            "https://i.gkd.li/i/18937576",
            "https://i.gkd.li/i/20287160"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-安装来源不可信",
      "desc": "点击[授权本次安装]",
      "fastQuery": true,
      "activityIds": [
        "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
        "com.miui.packageInstaller.NewPackageInstallerActivity"
      ],
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.3511",
            "top": "height * 0.5"
          },
          "activityIds": "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
          "matches": "[text$=\"授权本次安装\"]",
          "exampleUrls": "https://e.gkd.li/e470baf2-56dc-4e3c-8da0-9747eeec602f",
          "snapshotUrls": "https://i.gkd.li/i/17898736",
          "actionMaximum": 1
        },
        {
          "position": {
            "left": "width * 0.8743",
            "top": "width * 0.1202"
          },
          "matches": "LinearLayoutCompat > [text*=\"授权本次安装\"]",
          "exampleUrls": "https://m.gkd.li/57941037/e30144c7-c895-4950-a91d-9ce56a8570c8",
          "snapshotUrls": "https://i.gkd.li/i/14456398",
          "fastQuery": true,
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewPackageInstallerActivity"
          ],
          "actionMaximum": 1
        },
        {
          "position": {
            "left": "width * 0.6663",
            "top": "width * 0.1012"
          },
          "matches": "ViewGroup > [text*=\"授权本次安装\"]",
          "exampleUrls": "https://m.gkd.li/57941037/4bcc94e7-17cb-4887-9e1d-067cf823b109",
          "snapshotUrls": "https://i.gkd.li/i/14925748",
          "fastQuery": true,
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewPackageInstallerActivity"
          ],
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-关闭备案信息弹窗",
      "desc": "点击[继续安装]",
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "matches": [
            "[text$=\"备案信息\"]",
            "[text=\"继续安装\"]"
          ],
          "exampleUrls": "https://e.gkd.li/d5bc4b1a-e363-4aab-9240-e6d914730935",
          "snapshotUrls": [
            "https://i.gkd.li/i/17908298",
            "https://i.gkd.li/i/20642970"
          ],
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-无视风险继续安装",
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
      "rules": [
        {
          "matches": "@[clickable=true] >2 [text=\"无视风险继续安装\"]",
          "exampleUrls": "https://e.gkd.li/46f06948-5ec1-4054-8aa3-a8f39e5d1f26",
          "snapshotUrls": "https://i.gkd.li/i/18002566",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"继续\"]",
          "exampleUrls": "https://e.gkd.li/375fc2ec-841a-4af6-be99-9391ebeb7dc5",
          "snapshotUrls": "https://i.gkd.li/i/18002704",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity"
        },
        {
          "preKeys": 1,
          "matches": "@[clickable=true][desc=\"更多\"] > [vid=\"action_menu_item_child_icon\"]",
          "exampleUrls": "https://e.gkd.li/de8fb9c9-ea4e-4c03-93bd-047bf31cd4c8",
          "snapshotUrls": "https://i.gkd.li/i/18002708",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity"
        },
        {
          "preKeys": 2,
          "matches": "@[clickable=true] >(1,2) [text=\"单次安装授权\"]",
          "exampleUrls": "https://e.gkd.li/0e8afdd7-04d3-46fd-9095-b61123d041b2",
          "snapshotUrls": [
            "https://i.gkd.li/i/18002712",
            "https://i.gkd.li/i/20746863"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity"
        }
      ]
    },
    {
      "key": 6,
      "name": "功能类-自动勾选[已了解此应用存在风险]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "matches": "[text=\"已了解此应用存在风险\"][checked=false][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25095995"
        }
      ]
    },
    {
      "key": 7,
      "name": "功能类-频繁安装应用自动点[验证]",
      "desc": "弹窗,点击[验证]",
      "rules": [
        {
          "fastQuery": true,
          "actionDelay": 200,
          "matches": [
            "[text*=\"频繁安装应用\"]",
            "[text=\"验证\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/34111857",
          "exampleUrls": "https://e.gkd.li/abecebb8-cfb1-4cd0-b035-eceda488e40e"
        }
      ]
    },
    {
      "key": 8,
      "name": "功能类-自动第三方安装应用",
      "desc": "自动允许第三方应用调用安装，安装应用",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [],
          "matches": "TextView[text*=\"尝试安装应用\"] < LinearLayout +2n LinearLayout > Button[text=\"继续\"]",
          "snapshotUrls": "https://i.gkd.li/i/12874746",
          "fastQuery": true
        },
        {
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "matches": "@[text=\"允许\"] + [text=\"禁止\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13054478",
            "https://i.gkd.li/i/13399425"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 9,
      "name": "功能类-自动安装应用",
      "desc": "启用后安装高风险应用将自动完成，请自行评估风险决定是否启用",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "name": "点击\"继续安装\"",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "matches": "[text=\"继续安装\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12818034",
            "https://i.gkd.li/i/12818054",
            "https://i.gkd.li/i/12889120",
            "https://i.gkd.li/i/16322775"
          ],
          "fastQuery": true
        },
        {
          "name": "点击\"继续\"",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "matches": "[text=\"取消\"] - @*[clickable=true] >2 [text=\"继续\"]",
          "snapshotUrls": "https://i.gkd.li/i/14392314",
          "fastQuery": true
        },
        {
          "name": "勾选\"已了解此应用未经安全检测\"",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "matches": "[id=\"com.miui.packageinstaller:id/install_checked\"][checked=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888410",
            "https://i.gkd.li/i/12889120"
          ],
          "fastQuery": true
        },
        {
          "name": "点击\"了解风险\"",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "matches": "@[text=\"了解风险\"] + [text=\"取消安装\"]",
          "snapshotUrls": "https://i.gkd.li/i/12889135",
          "fastQuery": true
        },
        {
          "name": "勾选\"已了解此应用存在高风险\"",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "matches": "[text^=\"已了解此\"][checked=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12889137",
            "https://i.gkd.li/i/12889148",
            "https://i.gkd.li/i/16171390"
          ],
          "fastQuery": true
        },
        {
          "name": "点击\"仍然安装\"",
          "activityIds": [
            "com.miui.packageInstaller.NewInstallerPrepareActivity",
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity"
          ],
          "matches": "[text=\"仍然安装\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12889148",
            "https://i.gkd.li/i/16187625"
          ],
          "fastQuery": true
        },
        {
          "name": "点击\"完成\"",
          "forcedTime": 30000,
          "activityIds": [
            "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
            "com.miui.packageInstaller.InstallProgressActivity",
            "com.miui.packageInstaller.ui.securemode.PureInstallProgressActivity"
          ],
          "matches": "[id=\"com.miui.packageinstaller:id/done_layout\"] > [text=\"完成\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12818044",
            "https://i.gkd.li/i/13229404",
            "https://i.gkd.li/i/13501872"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 10,
      "name": "功能类-自动更新应用",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "name": "点击\"继续更新\"-1",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "matches": [
            "[text=\"取消更新\"]",
            "[text=\"继续更新\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12817988",
            "https://i.gkd.li/i/12910080",
            "https://i.gkd.li/i/14392274"
          ],
          "fastQuery": true
        },
        {
          "name": "点击\"继续更新\"-2",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "matches": "@[text=\"继续更新\"] + [text=\"取消更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13024731",
            "https://i.gkd.li/i/13038465"
          ],
          "fastQuery": true
        },
        {
          "name": "勾选\"已了解此安装包未经安全检测\"",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "matches": "[text=\"已了解此安装包未经安全检测\"][checked=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13024730",
            "https://i.gkd.li/i/13024731"
          ],
          "fastQuery": true
        },
        {
          "name": "点击\"完成\"",
          "forcedTime": 30000,
          "activityIds": [
            "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
            "com.miui.packageInstaller.InstallProgressActivity"
          ],
          "matches": "[id=\"com.miui.packageinstaller:id/done_layout\"] > [text=\"完成\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12817999",
            "https://i.gkd.li/i/13255733"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 11,
      "name": "功能类-澎湃-自动安装/更新",
      "desc": "启用后安装高风险应用将自动完成，请自行评估风险决定是否启用",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "name": "点击【继续更新】/【继续】",
          "activityIds": "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
          "matches": "@FrameLayout > LinearLayout > [text*=\"继续\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14083552",
            "https://i.gkd.li/i/14083554"
          ],
          "fastQuery": true
        },
        {
          "name": "点击【无视风险安装】",
          "activityIds": "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
          "matches": "[text=\"无视风险安装\"]",
          "snapshotUrls": "https://i.gkd.li/i/14653062",
          "fastQuery": true
        },
        {
          "preKeys": 1,
          "activityIds": "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
          "name": "点击【继续】",
          "matches": "[text=\"继续\"]",
          "snapshotUrls": "https://i.gkd.li/i/14653087",
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "name": "点击右上角三点展开菜单",
          "activityIds": "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
          "matches": "@LinearLayout[index=0] > [vid=\"action_menu_item_child_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/14654045",
          "fastQuery": true
        },
        {
          "preKeys": 3,
          "name": "授权本次安装",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "matches": "@[clickable=true] > [text=\"单次授权安装\"]",
          "snapshotUrls": "https://i.gkd.li/i/14653096",
          "fastQuery": true
        },
        {
          "name": "点击[完成]",
          "activityIds": "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
          "matches": "[text=\"完成\"]",
          "exampleUrls": "https://e.gkd.li/0011622b-580a-4810-81a4-b4a1181d121d",
          "snapshotUrls": "https://i.gkd.li/i/16487274",
          "fastQuery": true
        }
      ]
    }
  ]
});

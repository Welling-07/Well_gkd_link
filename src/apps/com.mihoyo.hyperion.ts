// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mihoyo.hyperion",
  "name": "米游社",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动打卡",
      "desc": "点击[打卡],切换板块自动签到",
      "activityIds": "com.mihoyo.hyperion.main.HyperionMainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13721772",
        "https://i.gkd.li/i/13721776"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.HyperionMainActivity",
          "matches": "TextView[vid=\"signTv\"][text=\"打卡\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13721772",
            "https://i.gkd.li/i/13721776"
          ]
        },
        {
          "matches": "TextView[id=\"com.mihoyo.hyperion:id/signTv\"][text=\"打卡\"][visibleToUser=true]",
          "activityIds": "com.mihoyo.hyperion.main.HyperionMainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-游戏版本活动",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.popup.HomePopupDialogActivity",
          "matches": "[vid=\"closeIv\"]",
          "exampleUrls": "https://e.gkd.li/5c54c1cc-95ae-420d-b3af-37e8553a6327",
          "snapshotUrls": "https://i.gkd.li/i/16818949",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-游戏版本活动",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": ".main.HyperionMainActivity",
      "exampleUrls": "https://e.gkd.li/197dfb66-6b42-4fbd-b60c-4d801a8c729c",
      "rules": [
        {
          "name": "点击关闭",
          "matches": "[vid=\"bottomBarBgIv\"] + * > [vid=\"close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/16996311",
          "fastQuery": true,
          "activityIds": ".main.HyperionMainActivity"
        },
        {
          "preKeys": 0,
          "name": "点击确定",
          "matches": "[vid=\"rootLayout\"] > [vid=\"confirmTv\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/16996319",
          "fastQuery": true,
          "activityIds": ".main.HyperionMainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-米游自动签到全家桶",
      "desc": "包含崩坏3、绝区零、原神、星穹铁道",
      "forcedTime": 10000,
      "activityIds": ".web2.MiHoYoWebActivity",
      "rules": [
        {
          "name": "点击签到",
          "excludeMatches": "[text^=\"请在此绑定你的\"][visibleToUser=true]",
          "anyMatches": [
            "[getChild(0).getChild(1).text*=\"签到\"] + View >2 View[childCount=11] > @View[childCount=3][visibleToUser=true] > Image[index=0][text!=null]",
            "[getChild(0).getChild(1).text*=\"签到\"] + View >2 View[childCount=10] > View + TextView[childCount=0][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/53d22dc7-b368-46c0-85d2-fe132b0832a9",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601269",
            "https://i.gkd.li/i/17601338",
            "https://i.gkd.li/i/17611619",
            "https://i.gkd.li/i/17611613",
            "https://i.gkd.li/i/14967627",
            "https://i.gkd.li/i/19586048",
            "https://i.gkd.li/i/19586142",
            "https://i.gkd.li/i/34215019"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17601295",
            "https://i.gkd.li/i/17601347",
            "https://i.gkd.li/i/17611621",
            "https://i.gkd.li/i/19581359",
            "https://i.gkd.li/i/17611617",
            "https://i.gkd.li/i/19586048",
            "https://i.gkd.li/i/19586142",
            "https://i.gkd.li/i/19587714"
          ],
          "forcedTime": 10000,
          "activityIds": ".web2.MiHoYoWebActivity"
        },
        {
          "preKeys": 0,
          "name": "关闭签到后的弹窗",
          "matches": "@TextView[visibleToUser=true][text=\"\"] - View[childCount=2] >2 [text*=\"签到成功\"]",
          "exampleUrls": "https://e.gkd.li/ef30277a-bd5d-444a-a9d5-ce63406d1269",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601273",
            "https://i.gkd.li/i/17601340",
            "https://i.gkd.li/i/17611620",
            "https://i.gkd.li/i/17611616",
            "https://i.gkd.li/i/14967631"
          ],
          "forcedTime": 10000,
          "activityIds": ".web2.MiHoYoWebActivity"
        },
        {
          "preKeys": 1,
          "name": "关闭签到提醒",
          "matches": "[text=\"不用了\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/56299b94-01fb-4d83-9796-ec9bd6bbae64",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601283",
            "https://i.gkd.li/i/17601345"
          ],
          "forcedTime": 10000,
          "activityIds": ".web2.MiHoYoWebActivity"
        },
        {
          "preKeys": [
            1,
            2
          ],
          "name": "从签到页返回",
          "excludeMatches": "[text=\"不用了\"][visibleToUser=true]",
          "matches": "WebView[text*=\"签到\"] > View >3 View[index=0][childCount=1] > TextView[childCount=0][text=\"\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/cc68f623-5dc7-4703-9768-28826c4f16f6",
          "snapshotUrls": [
            "https://i.gkd.li/i/17601295",
            "https://i.gkd.li/i/17601347",
            "https://i.gkd.li/i/17611621",
            "https://i.gkd.li/i/17611617",
            "https://i.gkd.li/i/17629453"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17601283",
            "https://i.gkd.li/i/17601345"
          ],
          "forcedTime": 10000,
          "activityIds": ".web2.MiHoYoWebActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.HyperionMainActivity",
          "matches": [
            "[text^=\"开启通知提醒\"]",
            "@[clickable=true] > [text$=\"拒绝\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/24489020"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-自动开启参量质变仪提醒",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".web2.MiHoYoWebActivity",
          "matches": "[text=\"提醒\"] <n @[clickable=true] - [text=\"参量质变仪\"]",
          "snapshotUrls": "https://i.gkd.li/i/25608285",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25608302",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "青少年模式",
      "desc": "点击[我知道了]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "exampleUrls": "https://e.gkd.li/db8bb97e-f0f0-4f85-a262-14dd760f812b",
      "snapshotUrls": [
        "https://i.gkd.li/i/17002129",
        "https://i.gkd.li/i/12775850"
      ],
      "rules": [
        {
          "matches": "[vid=\"tv_dialog_go_to_teenage_mode\"] + [vid=\"tv_dialog_i_know\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 7,
      "name": "更新提示",
      "desc": "关闭版本更新提示弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12675513",
      "rules": [
        {
          "matches": "TextView[id=\"com.mihoyo.hyperion:id/mUpgradeDialogCancel\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 8,
      "name": "功能类-原神自动签到",
      "desc": "点击签到-关闭弹窗-返回",
      "enable": false,
      "forcedTime": 5000,
      "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity",
      "rules": [
        {
          "name": "点击签到",
          "matches": "[text=\"米游社原神每日签到\"] >4 View[childCount=11] > @View[childCount=3][visibleToUser=true] > Image[index=0]",
          "exampleUrls": "https://m.gkd.li/57941037/6654679e-58a9-4d6c-85a3-11bd2f82c15e",
          "snapshotUrls": [
            "https://i.gkd.li/i/14369790",
            "https://i.gkd.li/i/14371469",
            "https://i.gkd.li/i/14967627"
          ],
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        },
        {
          "preKeys": 0,
          "name": "关闭签到后的弹窗",
          "matches": "[text=\"米游社原神每日签到\"] >3 TextView[index=2][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/b02eca70-f7d3-4169-99d6-9906c534392a",
          "snapshotUrls": "https://i.gkd.li/i/14371439",
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        },
        {
          "preKeys": 1,
          "name": "返回上一个页面",
          "matches": "[text=\"米游社原神每日签到\"] - View > TextView[clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/c232ba4c-d50e-4887-85ab-91739928119e",
          "snapshotUrls": "https://i.gkd.li/i/14371469",
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        },
        {
          "name": "点击签到 (2)",
          "matches": "[text=\"米游社原神每日签到\"] >4 View[childCount=11] > @View[childCount=3] > Image[index=0]",
          "exampleUrls": "https://m.gkd.li/57941037/6654679e-58a9-4d6c-85a3-11bd2f82c15e",
          "snapshotUrls": [
            "https://i.gkd.li/i/14967627",
            "https://i.gkd.li/i/14371469"
          ],
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        },
        {
          "preKeys": 3,
          "name": "关闭签到后的弹窗 (2)",
          "matches": "[text=\"米游社原神每日签到\"] >3 TextView[index=2][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/b02eca70-f7d3-4169-99d6-9906c534392a",
          "snapshotUrls": "https://i.gkd.li/i/14371439",
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        },
        {
          "preKeys": 4,
          "name": "返回上一个页面 (2)",
          "matches": "[text=\"米游社原神每日签到\"] - View > TextView[clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/c232ba4c-d50e-4887-85ab-91739928119e",
          "snapshotUrls": "https://i.gkd.li/i/14371469",
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        }
      ]
    },
    {
      "key": 9,
      "name": "功能类-星穹铁道自动签到",
      "desc": "点击签到-关闭弹窗-返回",
      "enable": false,
      "forcedTime": 5000,
      "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity",
      "rules": [
        {
          "name": "点击签到",
          "matches": "[text=\"《崩坏：星穹铁道》签到福利\"] >4 View > View + TextView",
          "exampleUrls": "https://m.gkd.li/57941037/a9f426c4-3184-4525-b283-ad77d6f83d02",
          "snapshotUrls": [
            "https://i.gkd.li/i/14376296",
            "https://i.gkd.li/i/14432972"
          ],
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        },
        {
          "preKeys": 0,
          "name": "关闭签到后的弹窗",
          "matches": "[text=\"《崩坏：星穹铁道》签到福利\"] >3 TextView[visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/3babb231-30a7-4891-9c4a-c11946838741",
          "snapshotUrls": [
            "https://i.gkd.li/i/14371787",
            "https://i.gkd.li/i/14967631"
          ],
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        },
        {
          "preKeys": 1,
          "name": "返回上一个页面",
          "matches": "[text=\"《崩坏：星穹铁道》签到福利\"] > View > View[index=0] >3 TextView[clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/d8031907-105b-4d37-8542-b71e854b3b8a",
          "snapshotUrls": "https://i.gkd.li/i/14371790",
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        },
        {
          "name": "点击签到 (2)",
          "matches": "[text=\"《崩坏：星穹铁道》签到福利\"] >4 View[childCount=10] > View + TextView",
          "exampleUrls": "https://m.gkd.li/57941037/a9f426c4-3184-4525-b283-ad77d6f83d02",
          "snapshotUrls": "https://i.gkd.li/i/14376296",
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        },
        {
          "preKeys": 3,
          "name": "关闭签到后的弹窗 (2)",
          "matches": "[text=\"《崩坏：星穹铁道》签到福利\"] >3 TextView[index=1]",
          "exampleUrls": "https://m.gkd.li/57941037/3babb231-30a7-4891-9c4a-c11946838741",
          "snapshotUrls": "https://i.gkd.li/i/14967631",
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        },
        {
          "preKeys": 4,
          "name": "返回上一个页面 (2)",
          "matches": "[text=\"《崩坏：星穹铁道》签到福利\"] > View > View[index=0] >3 TextView[clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/d8031907-105b-4d37-8542-b71e854b3b8a",
          "snapshotUrls": "https://i.gkd.li/i/14371790",
          "forcedTime": 5000,
          "activityIds": "com.mihoyo.hyperion.web2.MiHoYoWebActivity"
        }
      ]
    }
  ]
});

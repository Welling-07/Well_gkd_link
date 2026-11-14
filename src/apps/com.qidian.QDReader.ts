// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qidian.QDReader",
  "name": "起点读书",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"splash_skip_button\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/33750455",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][clickable=true][width<500 && height<300]",
          "snapshotUrls": "https://i.gkd.li/i/33750485",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/33630317",
            "https://i.gkd.li/i/33750400"
          ],
          "exampleUrls": "https://e.gkd.li/2c5cc57a-1e92-4e83-b31e-9342aa75034c",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".framework.widget.dialog.judian",
          "matches": "[text$=\"新版本\"] +2 * >2 [vid=\"cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12641026",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.tencent.upgrade.ui.UpgradeDialogActivity",
          "matches": "[vid=\"upgrade_dialog_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/33833374",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text$=\"新版本\"] +2 * >2 [id=\"com.qidian.QDReader:id/cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12641026"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/upgrade_dialog_close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13116821"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "青少年模式",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12640241",
        "https://i.gkd.li/i/12709168",
        "https://i.gkd.li/i/12905817"
      ],
      "rules": [
        {
          "activityIds": [
            ".bll.helper.z0",
            ".ui.activity.MainGroupActivity",
            ".framework.widget.dialog.judian"
          ],
          "matches": "[vid=\"btnEnterTeen\"] + [vid=\"btnCancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12640241",
            "https://i.gkd.li/i/12905817",
            "https://i.gkd.li/i/31594056"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.qidian.QDReader:id/btnEnterTeen\"] + [id=\"com.qidian.QDReader:id/btnCancel\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".ui.activity.MainGroupActivity",
            ".framework.widget.dialog.judian",
            ".ui.activity.BookLastPageNewActivity",
            "com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI"
          ],
          "matches": "[vid=\"imgClose\" || vid=\"btnClose\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12640158",
            "https://i.gkd.li/i/12818198",
            "https://i.gkd.li/i/13469004",
            "https://i.gkd.li/i/23210736",
            "https://i.gkd.li/i/23249358"
          ],
          "exampleUrls": "https://e.gkd.li/79947364-3b02-4113-a7de-2c26cca14286"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "desc": "x掉",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12640242",
      "rules": [
        {
          "activityIds": "com.afollestad.materialdialogs.MaterialDialog",
          "matches": "@[vid=\"ivClose\"] + [text^=\"开启推送\"]",
          "snapshotUrls": "https://i.gkd.li/i/12640242",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".ui.activity.MainGroupActivity",
          "matches": "ImageView < [vid=\"ivUpdateNoticeClose\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24913610",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.qidian.QDReader:id/ivClose\"] + [text^=\"开启推送\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-悬浮广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".ui.activity.QDBookDetailActivity",
            ".ui.activity.MainGroupActivity"
          ],
          "matches": "[vid=\"ivAdClose\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12717032",
            "https://i.gkd.li/i/31591781"
          ]
        },
        {
          "name": "书架页面右侧悬浮广告",
          "activityIds": "com.qidian.QDReader.ui.activity.MainGroupActivity",
          "fastQuery": true,
          "matches": "[id=\"com.qidian.QDReader:id/ivAd\"] + [id=\"com.qidian.QDReader:id/ivAdClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/12717032"
        },
        {
          "name": "详情页右侧悬浮广告",
          "activityIds": "com.qidian.QDReader.ui.activity.QDBookDetailActivity",
          "matches": "[id=\"com.qidian.QDReader:id/floatingView\"] + [id=\"com.qidian.QDReader:id/ivAdClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13459031"
        }
      ]
    },
    {
      "key": 6,
      "name": "评价提示",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.CircleHomePageActivity",
          "matches": "@[vid=\"fClose\"] - [visibleToUser=true] > [text*=\"给个好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/31592429",
          "exampleUrls": "https://e.gkd.li/4a4e064a-742b-41d3-8cce-8fc9ab54528c"
        }
      ]
    },
    {
      "key": 10,
      "name": "局部广告-信息流广告",
      "desc": "每日导读页-游戏广告",
      "activityIds": "com.qidian.QDReader.flutter.DailyReadingMainPageActivity",
      "snapshotUrls": "https://i.gkd.li/i/13406169",
      "rules": [
        {
          "activityIds": ".flutter.DailyReadingMainPageActivity",
          "matches": "@ImageView[clickable=true] < [desc^=\"游戏广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/31592925",
          "exampleUrls": "https://e.gkd.li/84123bd4-a6d5-4186-88fe-e35320a241cb"
        },
        {
          "matches": "View[desc=\"更多游戏\"] - ImageView[clickable=true]",
          "activityIds": "com.qidian.QDReader.flutter.DailyReadingMainPageActivity"
        }
      ]
    },
    {
      "key": 12,
      "name": "全屏广告-红包弹窗",
      "desc": "点击x掉",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".ui.activity.hongbao_square.NewHongBaoSquareActivity",
            ".ui.activity.MainGroupActivity",
            ".flutter.HongBaoSquareActivity"
          ],
          "matches": "[vid=\"rootView\"] > [vid=\"btnHongbaoClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13918466",
            "https://i.gkd.li/i/23291755",
            "https://i.gkd.li/i/28931164"
          ],
          "exampleUrls": "https://e.gkd.li/a11d58b2-70fd-420c-86f1-7a11a8603ee7"
        },
        {
          "activityIds": "com.qidian.QDReader.ui.activity.hongbao_square.NewHongBaoSquareActivity",
          "matches": "[id=\"com.qidian.QDReader:id/rootView\"] > [id=\"com.qidian.QDReader:id/btnHongbaoClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13918466",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 17,
      "name": "全屏广告-追更至最新章节弹窗",
      "desc": "①[取消勾选]提醒 ②x掉弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "activityIds": ".ui.activity.QDReaderActivity",
      "rules": [
        {
          "name": "①[取消勾选]提醒",
          "matches": "[vid=\"switchUpdate\"][checkable=true][checked=true]",
          "snapshotUrls": "https://i.gkd.li/i/34316607",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": ".ui.activity.QDReaderActivity"
        },
        {
          "name": "②x掉弹窗",
          "matches": "@[vid=\"ivClose\"] +2 [visibleToUser=true] >2 [text=\"追更至最新章节\"]",
          "snapshotUrls": "https://i.gkd.li/i/34316605",
          "exampleUrls": "https://e.gkd.li/f969ad39-da92-458f-95f6-e2939857c808",
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": ".ui.activity.QDReaderActivity"
        }
      ]
    },
    {
      "key": 18,
      "name": "全屏广告-活动弹窗",
      "enable": false,
      "activityIds": [
        "com.qidian.QDReader.ui.activity.MainGroupActivity",
        "com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI",
        "com.qidian.QDReader.framework.widget.dialog.judian",
        "com.qidian.QDReader.ui.activity.BookLastPageNewActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12640195",
        "https://i.gkd.li/i/12640158",
        "https://i.gkd.li/i/12818198",
        "https://i.gkd.li/i/13469004"
      ],
      "rules": [
        {
          "matches": "[id=\"com.qidian.QDReader:id/imgBKT\"] + [id=\"com.qidian.QDReader:id/imgClose\"]",
          "activityIds": [
            "com.qidian.QDReader.ui.activity.MainGroupActivity",
            "com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI",
            "com.qidian.QDReader.framework.widget.dialog.judian",
            "com.qidian.QDReader.ui.activity.BookLastPageNewActivity"
          ]
        }
      ]
    },
    {
      "key": 21,
      "name": "未分类-请求通知权限提示信息",
      "desc": "点击顶部提醒左侧x按钮",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.afollestad.materialdialogs.MaterialDialog",
      "snapshotUrls": "https://i.gkd.li/i/12640242",
      "rules": [
        {
          "matches": "@[id=\"com.qidian.QDReader:id/ivClose\"] + [text^=\"开启推送\"]",
          "fastQuery": true,
          "activityIds": "com.afollestad.materialdialogs.MaterialDialog"
        }
      ]
    }
  ]
});

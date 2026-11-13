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
      "key": 7,
      "name": "功能类-自动[展开]书籍简介",
      "desc": "书单列表页/书籍详情页",
      "fastQuery": true,
      "rules": [
        {
          "actionCd": 500,
          "activityIds": [
            ".ui.activity.RecomBookListDetailActivity",
            ".ui.activity.QDBookDetailActivity"
          ],
          "matches": "[vid=\"etvBookRecomWord\" || vid=\"tvIntro\"][text$=\"...展开\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/31593523",
            "https://i.gkd.li/i/31593865"
          ],
          "exampleUrls": [
            "https://e.gkd.li/48250906-5ae1-448e-84f8-900cdfbff970",
            "https://e.gkd.li/7f933b03-487c-48ad-825a-bb3a1ff08154"
          ],
          "fastQuery": true
        },
        {
          "actionCd": 2000,
          "forcedTime": 5000,
          "activityIds": ".flutter.QDBookDetailFlutterActivity",
          "matches": "@ImageView[clickable=true] < View[desc.length>30] <n ScrollView < View < View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/33534760",
            "https://i.gkd.li/i/33535207",
            "https://i.gkd.li/i/33535541"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/33534953",
          "exampleUrls": "https://e.gkd.li/c44b8465-e586-4dd7-8957-7e3c90097564",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 8,
      "name": "功能类-自动[收起]书架上方推广",
      "desc": "点击1次[收起]",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.activity.MainGroupActivity",
          "matches": "@[vid=\"operationItemCloseIcon\"] - [text=\"收起\"]",
          "snapshotUrls": "https://i.gkd.li/i/33534248",
          "exampleUrls": "https://e.gkd.li/d8f0794f-2cc4-463f-ae76-55a417ad4a5a"
        }
      ]
    },
    {
      "key": 9,
      "name": "功能类-扫描自动确认[登录]",
      "desc": "点击[登录]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.QDBrowserActivity",
          "matches": "@[id=\"scanLogin\"] <<(7,9) [vid=\"webViewContainer\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12903081",
            "https://i.gkd.li/i/28999743"
          ]
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
      "key": 11,
      "name": "功能类-福利中心看完广告-知道了",
      "desc": "点击[知道了]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.QDBrowserActivity",
          "matches": "@TextView[text$=\"知道了\"][visibleToUser=true] < [index=parent.childCount.minus(1)] <n View < View - [id=\"app\"] <<4 [vid=\"webViewContainer\"]",
          "exampleUrls": "https://e.gkd.li/54f41a5a-1c71-4618-bdab-5335172ab7f5",
          "snapshotUrls": [
            "https://i.gkd.li/i/22909666",
            "https://i.gkd.li/i/24339296"
          ]
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
      "key": 13,
      "name": "功能类-移动网络下自动点击播放视频",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.QDBrowserActivity",
          "matches": [
            "[text^=\"当前处于移动网络\"]",
            "@[clickable=true] >2 [text=\"播放\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/ea612e44-12a9-405f-aa03-60a19cebef57",
          "snapshotUrls": "https://i.gkd.li/i/15857381"
        },
        {
          "fastQuery": true,
          "activityIds": "com.qidian.QDReader.ui.activity.QDBrowserActivity",
          "matches": "[text^=\"当前处于移动网络\"]",
          "exampleUrls": "https://m.gkd.li/57941037/ea612e44-12a9-405f-aa03-60a19cebef57",
          "snapshotUrls": "https://i.gkd.li/i/15857381"
        }
      ]
    },
    {
      "key": 14,
      "name": "功能类-自动签到",
      "desc": "①点击[签到] ②退出福利中心",
      "fastQuery": true,
      "rules": [
        {
          "name": "①点击[签到]",
          "activityIds": ".ui.activity.MainGroupActivity",
          "excludeMatches": "[vid=\"tvTipNum\"][text=\"--\"][visibleToUser=true]",
          "matches": "@[vid=\"btnCheckIn\"] >2 [text=\"签到\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/22634962",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23210761",
            "https://i.gkd.li/i/23211622"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "name": "②退出福利中心",
          "activityIds": ".ui.activity.QDBrowserActivity",
          "matches": "@View[id=null][childCount=0][clickable=true] < View < View < WebView[text=\"福利中心\"] < WebView < FrameLayout < [vid=\"webViewContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/24012947",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 15,
      "name": "功能类-订阅后续章节后自动[返回]",
      "desc": "返回小说正文页 (对于自定义订阅不可用)",
      "fastQuery": true,
      "activityIds": [
        ".ui.activity.QDDirectoryActivity",
        ".ui.activity.SplashActivity",
        ".ui.activity.QDReaderActivity"
      ],
      "rules": [
        {
          "name": "①未订最新章-待后续",
          "action": "none",
          "actionMaximum": 1,
          "matches": "[text^=\"订阅后续付费章\"]",
          "snapshotUrls": "https://i.gkd.li/i/26221300",
          "fastQuery": true,
          "activityIds": [
            ".ui.activity.QDDirectoryActivity",
            ".ui.activity.SplashActivity",
            ".ui.activity.QDReaderActivity"
          ]
        },
        {
          "name": "①未订后续章",
          "action": "none",
          "forcedTime": 5000,
          "actionMaximum": 1,
          "activityIds": ".flutter.BatchOrderDialogActivity",
          "matches": "@[desc^=\"订阅后续付费章\"] <2 View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/33536620",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "name": "②已订最新章-返回键",
          "action": "back",
          "matches": "[text=\"已订阅至最新章节\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26220488",
            "https://i.gkd.li/i/27051045",
            "https://i.gkd.li/i/27156111"
          ],
          "exampleUrls": "https://e.gkd.li/40df3df2-a5a5-4044-bf82-8622396bf39a",
          "fastQuery": true,
          "activityIds": [
            ".ui.activity.QDDirectoryActivity",
            ".ui.activity.SplashActivity",
            ".ui.activity.QDReaderActivity"
          ]
        },
        {
          "preKeys": 1,
          "name": "②提示已订阅n章",
          "action": "none",
          "forcedTime": 10000,
          "activityIds": ".flutter.BatchOrderDialogActivity",
          "matches": "@ImageView[desc^=\"已订阅\"] <2 View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/33537343",
          "fastQuery": true
        },
        {
          "preKeys": [
            2,
            3
          ],
          "name": "③退出目录",
          "forcedTime": 10000,
          "matches": "@[vid=\"btnBack\"][clickable=true] + * >6 [vid=\"layoutTitle\"][text=\"目录\"]",
          "snapshotUrls": "https://i.gkd.li/i/26221238",
          "fastQuery": true,
          "activityIds": [
            ".ui.activity.QDDirectoryActivity",
            ".ui.activity.SplashActivity",
            ".ui.activity.QDReaderActivity"
          ]
        }
      ]
    },
    {
      "key": 16,
      "name": "功能类-书友圈自动[打卡]",
      "rules": [
        {
          "fastQuery": true,
          "actionDelay": 300,
          "forcedTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "match",
          "activityIds": ".ui.activity.CircleHomePageActivity",
          "matches": "[text=\"打卡\"] < [vid=\"layoutTopButton\"]",
          "snapshotUrls": "https://i.gkd.li/i/31843604",
          "exampleUrls": "https://e.gkd.li/a1fe7a7d-3863-4e5f-befc-47eae3a505f0"
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
      "key": 19,
      "name": "功能类-起点中文网登录自动确认",
      "desc": "自动点击\"登录\"",
      "enable": false,
      "activityIds": "com.qidian.QDReader.ui.activity.QDBrowserActivity",
      "snapshotUrls": "https://i.gkd.li/i/12903081",
      "rules": [
        {
          "matches": "[id=\"scanLogin\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.QDBrowserActivity"
        }
      ]
    },
    {
      "key": 20,
      "name": "功能类-福利中心看视频后获得奖励",
      "desc": "自动点击“我知道了”",
      "enable": false,
      "activityIds": "com.qidian.QDReader.ui.activity.QDBrowserActivity",
      "actionMaximum": 1,
      "resetMatch": "activity",
      "matchTime": 10000,
      "snapshotUrls": "https://i.gkd.li/i/13606901",
      "rules": [
        {
          "matches": "View[desc=\"我知道了\"]",
          "activityIds": "com.qidian.QDReader.ui.activity.QDBrowserActivity",
          "actionMaximum": 1,
          "resetMatch": "activity",
          "matchTime": 10000
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

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kugou.android.lite",
  "name": "酷狗概念版",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/94c7fc27-891f-4206-b933-f26661041b99",
          "snapshotUrls": "https://i.gkd.li/i/21451911",
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[desc*=\"跳过\"][desc.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/7aa8bc5b-e14c-4cef-9eae-b89aac8ef459",
          "snapshotUrls": "https://i.gkd.li/i/21750055",
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告",
      "desc": "点击[x掉/狠心拒绝/放弃优惠]",
      "fastQuery": true,
      "activityIds": [
        "com.kugou.android.app.setting.YoungModeTipsActivity",
        "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity",
        "com.kugou.android.app.MediaActivity"
      ],
      "rules": [
        {
          "name": "VIP已过期",
          "anyMatches": [
            "[text*=\"已过期\"] +n [text=\"放弃优惠\" || text=\"狠心拒绝\"]",
            "@[text=\"狠心拒绝\"] -n FrameLayout >3 [text*=\"已过期\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14321698",
            "https://i.gkd.li/i/25020137",
            "https://i.gkd.li/i/26031222",
            "https://i.gkd.li/i/25640086"
          ],
          "exampleUrls": "https://e.gkd.li/1a5e5107-8e05-4031-873c-d3feed467cd7",
          "fastQuery": true,
          "activityIds": [
            "com.kugou.android.app.setting.YoungModeTipsActivity",
            "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity",
            "com.kugou.android.app.MediaActivity"
          ]
        },
        {
          "name": "弹窗-点击x掉",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 ViewGroup[childCount=3] < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14321700",
            "https://i.gkd.li/i/25018524",
            "https://i.gkd.li/i/27670397"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.kugou.android.app.setting.YoungModeTipsActivity",
            "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity",
            "com.kugou.android.app.MediaActivity"
          ]
        },
        {
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "@[text*=\"跳过\"] + [text*=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/64dd159b-bff5-4dff-a4b9-d63f5b34acb7",
          "snapshotUrls": "https://i.gkd.li/i/16407631",
          "fastQuery": true
        },
        {
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "@ImageView[clickable=true][width<170 && height<170] +n [text=\"领奖通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/27670451",
          "fastQuery": true
        },
        {
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "@ImageView[clickable=true][width<160 && height<160] <2 [childCount=3] < FrameLayout < LinearLayout < LinearLayout <2 LinearLayout < FrameLayout < FrameLayout <2 FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/0776da1e-3ff6-4fba-a7e9-de8fa1fe5344",
          "snapshotUrls": "https://i.gkd.li/i/23619626",
          "fastQuery": true
        },
        {
          "fastQuery": false,
          "activityIds": "com.kugou.framework.musicfees.ui.feeintercept.FeeInterceptWebActivity",
          "matches": "WebView > [id=\"body\"] > [id=\"root\"] >(2,3) [name$=\"TextView\" || name$=\"Image\"][index=0][width<131 && height<131][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25022292",
            "https://i.gkd.li/i/27398903"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-我的页面-右侧悬浮反馈图标",
      "activityIds": "com.kugou.android.app.MediaActivity",
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[vid!=null][clickable=true][visibleToUser=true] +(2,3) ImageView[vid!=null]",
          "excludeMatches": "[text=\"空间音效\" || text=\"蝰蛇\"][visibleToUser=true]",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26030255",
          "snapshotUrls": [
            "https://i.gkd.li/i/14321713",
            "https://i.gkd.li/i/14321718"
          ],
          "activityIds": "com.kugou.android.app.MediaActivity"
        },
        {
          "preKeys": 0,
          "fastQuery": true,
          "matches": "[text=\"是否取消？\"] +4 * > [text=\"确认\"]",
          "snapshotUrls": "https://i.gkd.li/i/14321724",
          "activityIds": "com.kugou.android.app.MediaActivity"
        },
        {
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "FrameLayout > RelativeLayout > @ImageView[vid!=null][clickable=true][visibleToUser=true] +(2,3) ImageView[vid!=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14321713",
            "https://i.gkd.li/i/14321718"
          ]
        },
        {
          "preKeys": 2,
          "activityIds": "com.kugou.android.app.MediaActivity",
          "fastQuery": true,
          "matches": "[text=\"是否取消？\"] +4 * > [text=\"确认\"]",
          "snapshotUrls": "https://i.gkd.li/i/14321724"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14622566",
      "rules": [
        {
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "@ImageView - * > [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/14622566",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView - * > [text=\"立即升级\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 5,
      "name": "评价提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "@ImageView[clickable=true][childCount=0] - LinearLayout > [text*=\"求五星鼓励\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25002911"
        }
      ]
    },
    {
      "key": 6,
      "name": "分段广告-评论区广告",
      "fastQuery": true,
      "activityIds": "com.kugou.android.app.MediaActivity",
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/25020531",
          "fastQuery": true,
          "activityIds": "com.kugou.android.app.MediaActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"关闭这条广告\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/25020623",
          "fastQuery": true,
          "activityIds": "com.kugou.android.app.MediaActivity"
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告",
      "activityIds": [
        "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity",
        "com.kugou.android.app.MediaActivity"
      ],
      "fastQuery": true,
      "rules": [
        {
          "name": "播放器背景",
          "matches": "@[text*=\"跳过\"] + [text*=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25021020",
          "exampleUrls": "https://e.gkd.li/4d41ba0c-d2b0-41cf-9153-b602d66a2570",
          "activityIds": [
            "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity",
            "com.kugou.android.app.MediaActivity"
          ],
          "fastQuery": true
        },
        {
          "name": "[左下角Ad]Toast",
          "matches": "@ImageView[clickable=true][parent.childCount<4][index=parent.childCount.minus(1)] <3 LinearLayout +(6,7) LinearLayout > [text=\"评论\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25021318",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25021659",
          "activityIds": [
            "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity",
            "com.kugou.android.app.MediaActivity"
          ],
          "fastQuery": true
        },
        {
          "name": "[设为铃声]Toast",
          "matches": "@[desc=\"关闭\"] - [text^=\"喜欢就设为铃声\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/27210121",
          "activityIds": [
            "com.kugou.common.useraccount.app.KgUserLoginAndRegActivity",
            "com.kugou.android.app.MediaActivity"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 8,
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14321697",
      "rules": [
        {
          "matches": "[text=\"开启青少年模式\"] + [text=\"知道了\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 9,
      "name": "全屏广告-VIP弹窗",
      "enable": false,
      "rules": [
        {
          "name": "新人限时优惠弹窗",
          "activityIds": "com.kugou.android.app.setting.YoungModeTipsActivity",
          "fastQuery": true,
          "matches": "[text^=\"新人限时开通\"] +3 [text=\"放弃优惠\"]",
          "snapshotUrls": "https://i.gkd.li/i/14321698"
        },
        {
          "name": "组队抽奖弹窗",
          "activityIds": "com.kugou.android.app.setting.YoungModeTipsActivity",
          "matches": "[id=\"android:id/content\"] > ViewGroup[childCount=3] > ImageView + ImageView + ImageView[clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14321700"
        }
      ]
    }
  ]
});

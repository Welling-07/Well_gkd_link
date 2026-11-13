// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kugou.android",
  "name": "酷狗音乐",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[desc=\"跳过\"||desc=\"GdtCountDownView\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775410",
            "https://i.gkd.li/i/13426030",
            "https://i.gkd.li/i/13468987"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "position": {
            "left": "width * 0.6858",
            "top": "width * 0.3906"
          },
          "matches": "[desc=\"createSkipView\"]",
          "exampleUrls": "https://m.gkd.li/57941037/fc4a38c9-20aa-4cfc-9a92-c20e9194418b",
          "snapshotUrls": "https://i.gkd.li/i/14609953",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[desc=\"createSkipView\"]",
          "position": {
            "left": "width * 0.6794",
            "top": "width * 0.3822"
          },
          "snapshotUrls": "https://i.gkd.li/i/14606816",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "activityIds": "com.kugou.android.app.MediaActivity",
      "matchRoot": true,
      "rules": [
        {
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": ".app.MediaActivity",
          "matches": "ViewGroup[childCount=2] > ImageView + @FrameLayout[clickable=true] > LinearLayout > ImageView <<n [id=\"android:id/list\"]",
          "snapshotUrls": "https://i.gkd.li/i/16434752",
          "matchRoot": true
        },
        {
          "fastQuery": true,
          "activityIds": ".app.MediaActivity",
          "matches": "@ImageView[desc=\"关闭\"][visibleToUser=true][clickable=true] <n ViewGroup < LinearLayout <(2,3) [id=\"android:id/list\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14964889",
            "https://i.gkd.li/i/15024041",
            "https://i.gkd.li/i/15468481",
            "https://i.gkd.li/i/16200618",
            "https://i.gkd.li/i/26493761"
          ],
          "matchRoot": true
        },
        {
          "activityIds": ".app.MediaActivity",
          "matches": "[desc=\"关闭广告\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15024812",
          "matchRoot": true
        },
        {
          "fastQuery": true,
          "activityIds": ".app.MediaActivity",
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/15520336",
          "matchRoot": true
        },
        {
          "forcedTime": 10000,
          "activityIds": ".app.MediaActivity",
          "matches": "RelativeLayout > @RelativeLayout[clickable=true] > [desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/16114590",
          "matchRoot": true
        },
        {
          "fastQuery": true,
          "activityIds": ".app.MediaActivity",
          "matches": "@ImageButton[clickable=true][childCount=0][visibleToUser=true] - LinearLayout > [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/fcb3e4d2-73bf-49b5-9157-08cac0c11584",
          "snapshotUrls": "https://i.gkd.li/i/18207953",
          "matchRoot": true
        },
        {
          "fastQuery": true,
          "activityIds": ".app.MediaActivity",
          "matches": "@ImageButton[childCount=0][clickable=true] < RelativeLayout - LinearLayout > [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/13b95c9a-1e6c-4d63-8372-1cff2261253c",
          "snapshotUrls": "https://i.gkd.li/i/23687213",
          "matchRoot": true
        },
        {
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "ViewGroup[childCount=2] > ImageView + @FrameLayout[clickable=true] > LinearLayout > ImageView <<n [id=\"android:id/list\"]",
          "snapshotUrls": "https://i.gkd.li/i/16434752",
          "matchRoot": true
        },
        {
          "fastQuery": true,
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "TextView[text!=null] <n ViewGroup > @ImageView[desc=\"关闭\"][visibleToUser=true][clickable=true] <<n [id=\"android:id/list\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14964889",
            "https://i.gkd.li/i/15024041",
            "https://i.gkd.li/i/15468481",
            "https://i.gkd.li/i/16200618",
            "https://i.gkd.li/i/17088057"
          ],
          "matchRoot": true
        },
        {
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "[desc=\"关闭广告\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15024812",
          "matchRoot": true
        },
        {
          "fastQuery": true,
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "@ImageView[clickable=true] <n * > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/15520336",
          "matchRoot": true
        },
        {
          "forcedTime": 10000,
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "RelativeLayout > @RelativeLayout[clickable=true] > [desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/16114590",
          "matchRoot": true
        },
        {
          "forcedTime": 5000,
          "matches": "ViewGroup[childCount=2] > ImageView + @FrameLayout[clickable=true] > LinearLayout > ImageView",
          "exampleUrls": "https://m.gkd.li/87047583/9e150986-2103-4130-a12f-12ed2b07ef90",
          "snapshotUrls": "https://i.gkd.li/i/13558426",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matchRoot": true
        },
        {
          "matches": "TextView[text!=null] <2 ViewGroup[childCount=6] > ImageView[desc=\"关闭\"]",
          "exampleUrls": "https://m.gkd.li/57941037/adb9a250-d23d-48ef-b1a5-5e828d56cb97",
          "snapshotUrls": [
            "https://i.gkd.li/i/14964889",
            "https://i.gkd.li/i/15024041"
          ],
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matchRoot": true
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-VIP弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "@ImageView[clickable=true][visibleToUser=true] + RelativeLayout >2 [text*=\"豪华VIP已过期\"]",
          "exampleUrls": "https://e.gkd.li/cab683ac-801d-4089-8b5d-548954761c08",
          "snapshotUrls": "https://i.gkd.li/i/13548005",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".app.MediaActivity",
          "matches": "@[id=null][text=\"退出页面\" || text=\"\"][width<200 && height<200] <(1,3) [childCount>3] >(1,2) [visibleToUser=true][text*=\"会员\" || text*=\"VIP\" || text*=\"支持蝰蛇\"]",
          "exampleUrls": "https://e.gkd.li/86e4a797-5366-4579-81ee-bc5354e95568",
          "snapshotUrls": [
            "https://i.gkd.li/i/17177377",
            "https://i.gkd.li/i/18070974",
            "https://i.gkd.li/i/22310624",
            "https://i.gkd.li/i/29639642"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".app.MediaActivity",
          "matches": "WebView[text=\"开通会员\"] >7 @TextView[clickable=true][childCount=0] +2 [text=\"当前歌曲支持蝰蛇全景声\"]",
          "exampleUrls": "https://e.gkd.li/86e4a797-5366-4579-81ee-bc5354e95568",
          "snapshotUrls": "https://i.gkd.li/i/17177377",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "RelativeLayout[childCount=2] > View + RelativeLayout[childCount=2] > @ImageView + RelativeLayout",
          "exampleUrls": "https://m.gkd.li/87047583/84c1379f-5eb1-4982-b27b-35e267594101",
          "snapshotUrls": "https://i.gkd.li/i/13548005",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-[看广告免费听歌]弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": ".app.MediaActivity",
          "matches": "[desc=\"看广告，免费听会员歌\"] +2 [desc=\"关闭\"]",
          "exampleUrls": "https://m.gkd.li/57941037/dfd70c7c-3200-493e-9afa-404de5fcd2ff",
          "snapshotUrls": "https://i.gkd.li/i/14722104"
        },
        {
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "[desc=\"看广告，免费听会员歌\"] +2 [desc=\"关闭\"]",
          "exampleUrls": "https://m.gkd.li/57941037/dfd70c7c-3200-493e-9afa-404de5fcd2ff",
          "snapshotUrls": "https://i.gkd.li/i/14722104"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-[开启音乐DJ]弹窗",
      "desc": "勾选[今日不再提醒]-点击[关闭]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[checked=false] + [text=\"今日不再提醒\"]",
          "exampleUrls": "https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f",
          "snapshotUrls": "https://i.gkd.li/i/14722457",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 0,
          "matches": "@ImageView - * > [text=\"今日不再提醒\"]",
          "exampleUrls": "https://m.gkd.li/57941037/69f564e9-464a-488b-a181-f1085176b49f",
          "snapshotUrls": "https://i.gkd.li/i/14722457",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".app.MediaActivity",
          "matches": "@[clickable=true][width<113][height<113] <(1,2) [childCount=2] > ImageView[desc=null][focusable=true][visibleToUser=true][width>120 && width<210][height>120 && height<210]",
          "exampleUrls": "https://e.gkd.li/2b240676-4dac-4375-b238-2d570962efd1",
          "snapshotUrls": [
            "https://i.gkd.li/i/17004903",
            "https://i.gkd.li/i/18057265",
            "https://i.gkd.li/i/27167415"
          ]
        },
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.kugou.android.app.MediaActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][index=1] <2 FrameLayout[childCount=2] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout - FrameLayout >8 [desc=\"底部导航\"] + [text=\"我的\"]",
          "exampleUrls": "https://e.gkd.li/2b240676-4dac-4375-b238-2d570962efd1",
          "snapshotUrls": "https://i.gkd.li/i/17004903"
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告-签到弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "position": {
            "left": "width * 0.9287",
            "top": "width * 0.8935"
          },
          "activityIds": ".app.flexowebview.uploadvideo.ContributeWebActivity",
          "matches": "@FrameLayout > WebView > WebView[text=\"金币中心\"] > View[id=\"body\"] > TextView[id=\"root\"][childCount=0]",
          "exampleUrls": "https://e.gkd.li/f2a44161-d0a2-421d-a5e7-26fcf005daf2",
          "snapshotUrls": "https://i.gkd.li/i/18071067",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 7,
      "name": "功能类-自动关闭速听模式",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".app.MediaActivity",
      "rules": [
        {
          "fastQuery": true,
          "matches": "@[desc=\"关闭\"][visibleToUser=true] < RelativeLayout < RelativeLayout + FrameLayout >3 ViewGroup[desc=\"速听卡片\"] >2 [text=\"喜欢\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/e24dda6a-c5fa-4c93-9026-cda7a4d9e205",
          "snapshotUrls": "https://i.gkd.li/i/18164732",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".app.MediaActivity"
        },
        {
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] < RelativeLayout - [desc=\"暂停\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/ffb25ec5-35b0-47ff-9387-54c757c90f29",
          "snapshotUrls": "https://i.gkd.li/i/18165065",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".app.MediaActivity"
        }
      ]
    }
  ]
});

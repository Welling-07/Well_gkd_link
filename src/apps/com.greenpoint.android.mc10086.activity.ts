// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.greenpoint.android.mc10086.activity",
  "name": "中国移动",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "priorityTime": 10000,
      "actionMaximumKey": 0,
      "rules": [
        {
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16335136",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "position": {
            "left": "width * 0.8731",
            "top": "width * 0.1352"
          },
          "matches": "@FrameLayout[childCount=2] > [vid=\"ll_top_right\"][childCount=0]",
          "exampleUrls": "https://e.gkd.li/6fca95f1-d672-4d1d-bcf5-e71f1865dd52",
          "snapshotUrls": "https://i.gkd.li/i/20903074",
          "excludeSnapshotUrls": "https://i.gkd.li/i/16335136",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16335136",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "[text=\"暂不更新\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/130e0c2e-f568-4a96-9c06-9876a21e0466",
          "snapshotUrls": "https://i.gkd.li/i/18271745",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "Button[text=\"以后再说\"][id^=\"com.greenpoint.android.mc10086.activity:id/dialog_btn\"]",
          "exampleUrls": "https://m.gkd.li/57941037/65ee49f0-f3f2-4ef8-9f76-e832b0551b86",
          "snapshotUrls": "https://i.gkd.li/i/12534264",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "@[vid=\"close_btn\" || vid=\"iv_close_top\"] <n LinearLayout >2 [vid=\"ad_image\" || vid=\"ll_ad_logo\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662361",
            "https://i.gkd.li/i/31612036"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.greenpoint.android.mc10086.activity:id/ad_image\"] < RelativeLayout + [id=\"com.greenpoint.android.mc10086.activity:id/close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12662361",
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "请求推送通知弹窗，点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.mc10086.cmcc.base.StartPageActivity",
          "matches": [
            "[text*=\"开启推送通知\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13327880",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "[text=\"授权提醒\"] +3 [text=\"拒绝\"]",
          "snapshotUrls": "https://i.gkd.li/i/13775652",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text*=\"开启推送通知\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12662213",
            "https://i.gkd.li/i/13327880"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"授权提醒\"] +3 [text=\"拒绝\"]",
          "snapshotUrls": "https://i.gkd.li/i/13775652",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-请求获取剪贴板权限弹窗",
      "desc": "请求获取剪贴板权限弹窗，点击不允许",
      "activityIds": [
        "com.mc10086.cmcc.view.tabs.AppTabFragment",
        "com.mc10086.cmcc.base.StartPageActivity"
      ],
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text*=\"获取您的\"] < LinearLayout +(2) LinearLayout >(2) [text=\"不允许\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662251",
            "https://i.gkd.li/i/13775651",
            "https://i.gkd.li/i/15944173"
          ],
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.mc10086.cmcc.view.tabs.AppTabFragment",
            "com.mc10086.cmcc.base.StartPageActivity"
          ]
        },
        {
          "matches": "[text*=\"获取您的\"] < LinearLayout +(2) LinearLayout >(2) [text=\"不允许\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662251",
            "https://i.gkd.li/i/13775651"
          ],
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-右侧悬浮小图标",
      "fastQuery": true,
      "rules": [
        {
          "actionCd": 300,
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "[vid=\"close_btn\" || vid=\"close_btn_bottom\" || vid=\"cmcc_digital_delete_float_icon_ll\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662265",
            "https://i.gkd.li/i/14570369",
            "https://i.gkd.li/i/25768816"
          ],
          "exampleUrls": [
            "https://m.gkd.li/57941037/276c7811-52f7-4379-8782-f9fb0b6cec1c",
            "https://e.gkd.li/56c11ab7-227f-4b35-a2e0-8763dd557f69"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "[vid=\"tab_ai_tag\"] >2 [vid=\"ai_floatingBar_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/25768547",
          "exampleUrls": "https://e.gkd.li/c8c018e9-4082-43f2-8d6d-98bc99bd4806",
          "fastQuery": true
        },
        {
          "activityIds": "com.cmccit.webview.ac.CommonHtml5Activity",
          "matches": "@Image[clickable=true][text!=null] <<3 WebView[text=\"余量查询\"] <<2 [vid=\"patmentwebview\"]",
          "exampleUrls": "https://m.gkd.li/57941037/69c6bf73-d901-4816-a9da-e4bcb0f4b9c6",
          "snapshotUrls": "https://i.gkd.li/i/14738550",
          "fastQuery": true
        },
        {
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "[id=\"com.greenpoint.android.mc10086.activity:id/close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12662265",
          "fastQuery": true
        },
        {
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "[vid=\"close_btn_bottom\"]",
          "exampleUrls": "https://m.gkd.li/57941037/276c7811-52f7-4379-8782-f9fb0b6cec1c",
          "snapshotUrls": "https://i.gkd.li/i/14570369",
          "fastQuery": true
        },
        {
          "activityIds": "com.cmccit.webview.ac.CommonHtml5Activity",
          "matches": "[text=\"余量查询\"] > View > View > @Image[clickable=true][text!=null] <<n [vid=\"patmentwebview\"]",
          "exampleUrls": "https://m.gkd.li/57941037/69c6bf73-d901-4816-a9da-e4bcb0f4b9c6",
          "snapshotUrls": "https://i.gkd.li/i/14738550",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "评价提示-请求好评弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": "@[vid=\"close_img\"][desc=\"关闭\"] - RelativeLayout >(2) [text$=\"好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/12662345",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.greenpoint.android.mc10086.activity:id/close_img\"][desc=\"关闭\"] - RelativeLayout >(2) [text$=\"好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/12662345",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 7,
      "name": "权限提示-通讯录权限申请弹窗",
      "desc": "点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.cmccit.paycenter.PayCenterActivity",
          "matches": [
            "[text=\"通讯录权限申请\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://e.gkd.li/7d332325-497f-47a4-a322-729ffa5dd121",
          "snapshotUrls": "https://i.gkd.li/i/16369235",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 8,
      "name": "权限提示-定位权限",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mc10086.cmcc.view.tabs.AppTabFragment",
          "matches": [
            "[text^=\"位置权限\" || text$=\"定位权限\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23445705",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 9,
      "name": "通知提示-请求推送通知弹窗",
      "desc": "请求推送通知弹窗，点击取消",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text*=\"开启推送通知\"] +(2) LinearLayout > [text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12662213",
            "https://i.gkd.li/i/13327880"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

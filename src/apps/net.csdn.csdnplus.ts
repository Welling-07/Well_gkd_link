// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "net.csdn.csdnplus",
  "name": "CSDN",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "net.csdn.csdnplus.activity.MainActivity",
        "net.csdn.csdnplus.activity.SetActivity"
      ],
      "rules": [
        {
          "activityIds": [
            ".activity.MainActivity",
            ".activity.SetActivity"
          ],
          "matches": "[vid=\"update\"] -2 [vid=\"cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673693",
            "https://i.gkd.li/i/12673654"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"net.csdn.csdnplus:id/update\"] -2 [id=\"net.csdn.csdnplus:id/cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673693",
            "https://i.gkd.li/i/12673654"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "net.csdn.csdnplus.activity.MainActivity",
            "net.csdn.csdnplus.activity.SetActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-信息流广告",
      "fastQuery": true,
      "activityIds": ".activity.MainActivity",
      "rules": [
        {
          "matches": "[text=\"广告\"] + [vid=\"iv_more\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673738",
            "https://i.gkd.li/i/13224538"
          ],
          "fastQuery": true,
          "activityIds": ".activity.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [vid=\"img_feedback_title\"][text=\"重复推荐该广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673787",
            "https://i.gkd.li/i/13224551"
          ],
          "fastQuery": true,
          "activityIds": ".activity.MainActivity"
        },
        {
          "matches": "[text=\"广告\"] + [id=\"net.csdn.csdnplus:id/iv_more\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673738",
            "https://i.gkd.li/i/13224538"
          ],
          "fastQuery": true,
          "activityIds": [
            "net.csdn.csdnplus.activity.MainActivity"
          ]
        },
        {
          "preKeys": 2,
          "matches": "@[clickable=true] > [id=\"net.csdn.csdnplus:id/img_feedback_title\"][text=\"重复推荐该广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673787",
            "https://i.gkd.li/i/13224551"
          ],
          "fastQuery": true,
          "activityIds": [
            "net.csdn.csdnplus.activity.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "评价提示-软件好评弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13251085",
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": "[vid=\"tv_cancel\"][text=\"残忍拒绝\"]",
          "snapshotUrls": "https://i.gkd.li/i/13251085",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"net.csdn.csdnplus:id/tv_cancel\"][text=\"残忍拒绝\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "desc": "点击【x】",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "LinearLayout[childCount=2] > [vid=\"img_cancel\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25171470",
          "exampleUrls": "https://e.gkd.li/3debb965-7773-4160-b172-15dc052ac6c9"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": [
            "[text=\"开启推送通知\"]",
            "[vid=\"iv_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12673638",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"开启推送通知\"]",
            "[id=\"net.csdn.csdnplus:id/iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12673638"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "分段广告-底部广告",
      "desc": "点击关闭-点击不感兴趣",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".mvvm.ui.activity.BlogDetailActivity",
          "matches": "ViewGroup > ViewGroup[childCount=2] > @ImageView[index=1][clickable=true][childCount=0][visibleToUser=true] <<n [vid=\"fl_template_container\" || vid=\"fl_bottom_ad_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13830821",
            "https://i.gkd.li/i/14312501"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "activityIds": ".mvvm.ui.activity.BlogDetailActivity",
          "matches": "@LinearLayout[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13830858",
            "https://i.gkd.li/i/14312349",
            "https://i.gkd.li/i/24376480"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity",
          "matches": "[vid$=\"_container\"] > FrameLayout[childCount=3] >(2,3) ViewGroup[childCount=2] >2 ViewGroup[childCount=2] > ImageView[visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13830821",
            "https://i.gkd.li/i/14312501"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "fastQuery": true,
          "activityIds": "net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity",
          "matches": "@LinearLayout[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13830858",
            "https://i.gkd.li/i/14312349"
          ]
        },
        {
          "activityIds": "net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity",
          "matches": "@ImageView[clickable=true] <<2 ViewGroup <<2 ViewGroup - FrameLayout <<6 FrameLayout[id=\"net.csdn.csdnplus:id/fl_template_container\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13830821",
          "fastQuery": true
        },
        {
          "preKeys": 4,
          "activityIds": "net.csdn.csdnplus.mvvm.ui.activity.BlogDetailActivity",
          "matches": "FrameLayout[id=\"android:id/content\"] [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13830858",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 6,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<=10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12673680",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13826577",
            "https://i.gkd.li/i/13224627"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12673680"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid=\"fl_third_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/13826577",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[id$=\"tt_splash_skip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13224627",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 7,
      "name": "未分类-关闭好评弹窗",
      "enable": false,
      "resetMatch": "app",
      "actionMaximum": 1,
      "fastQuery": true,
      "activityIds": "net.csdn.csdnplus.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13251085",
      "rules": [
        {
          "matches": "[id=\"net.csdn.csdnplus:id/tv_cancel\"][text=\"残忍拒绝\"]",
          "resetMatch": "app",
          "actionMaximum": 1,
          "fastQuery": true,
          "activityIds": "net.csdn.csdnplus.activity.MainActivity"
        }
      ]
    },
    {
      "key": 8,
      "name": "未分类-请求推送通知弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "net.csdn.csdnplus.activity.MainActivity",
      "rules": [
        {
          "matches": [
            "[text=\"开启推送通知\"]",
            "[id=\"net.csdn.csdnplus:id/iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12673638"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "net.csdn.csdnplus.activity.MainActivity"
        }
      ]
    }
  ]
});

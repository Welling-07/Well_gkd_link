// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.youtube",
  "name": "YouTube",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-视频播放-跳过广告",
      "fastQuery": true,
      "activityIds": [
        "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
        "com.google.android.apps.youtube.app.watchwhile.MainActivity",
        "com.google.android.youtube"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
            "com.google.android.apps.youtube.app.watchwhile.MainActivity"
          ],
          "matches": "[vid=\"skip_ad_button\" || vid=\"modern_skip_ad_text\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13797491",
            "https://i.gkd.li/i/12565261",
            "https://i.gkd.li/i/13705106"
          ]
        },
        {
          "name": "类型1",
          "matches": "[id=\"com.google.android.youtube:id/skip_ad_button_text\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13797491",
            "https://i.gkd.li/i/12565261"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
            "com.google.android.apps.youtube.app.watchwhile.MainActivity",
            "com.google.android.youtube"
          ]
        },
        {
          "name": "类型2",
          "matches": "[id=\"com.google.android.youtube:id/modern_skip_ad_text\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13705106"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
            "com.google.android.apps.youtube.app.watchwhile.MainActivity",
            "com.google.android.youtube"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-视频播放-赞助商广告",
      "fastQuery": true,
      "activityIds": [
        "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
        "com.google.android.apps.youtube.app.watchwhile.MainActivity"
      ],
      "rules": [
        {
          "matches": "@[clickable=true][index>0][desc=\"关闭广告面板\" || desc=\"Close ad panel\" || desc=\"隐藏广告\"] <<(10-n) [vid=\"panel_header\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13797491",
            "https://i.gkd.li/i/13705106",
            "https://i.gkd.li/i/14784199",
            "https://i.gkd.li/i/27373744",
            "https://i.gkd.li/i/27373748",
            "https://i.gkd.li/i/33054103"
          ],
          "exampleUrls": [
            "https://e.gkd.li/e1655855-8497-4b92-8919-4fdb4f6f00b1",
            "https://e.gkd.li/d024797b-88c5-4ab4-aa53-433b1889eaf1"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
            "com.google.android.apps.youtube.app.watchwhile.MainActivity"
          ]
        },
        {
          "matches": "@[desc=\"关闭广告面板\" || desc=\"Close ad panel\"] <<n [vid=\"panel_header\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13797491",
            "https://i.gkd.li/i/13705106",
            "https://i.gkd.li/i/14784199"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
            "com.google.android.apps.youtube.app.watchwhile.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-会员广告",
      "fastQuery": true,
      "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
      "rules": [
        {
          "name": "视频",
          "matches": "[!(getChild(0).getChild(0).desc=\"Image attachment\")] + @[desc=\"不用了，谢谢\" || desc=\"关闭\" || desc=\"我暂时不要\" || desc=\"Close\" || desc=\"No thanks\" || desc=\"I’ll pass this time\"][clickable=true] <3 ViewGroup <<(-n+8) [vid=\"bottom_ui_container\" || vid=\"custom\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13797512",
            "https://i.gkd.li/i/19578085",
            "https://i.gkd.li/i/25865404",
            "https://i.gkd.li/i/28486200"
          ],
          "exampleUrls": "https://e.gkd.li/1292c8c9-26e3-4053-bec4-e5ebe50cde8e",
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity"
        },
        {
          "name": "开屏",
          "matches": "[!(getChild(0).getChild(0).desc=\"Image attachment\")] + @[desc=\"不用了，谢谢\" || desc=\"关闭\" || desc=\"我暂时不要\" || desc=\"Close\" || desc=\"No thanks\"][visibleToUser=true] -n ImageView < * < [vid=\"custom\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18017075",
            "https://i.gkd.li/i/18549944"
          ],
          "exampleUrls": "https://e.gkd.li/11cdf5b2-97a8-42f0-a2eb-dc1cb2c98ac1",
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14194155",
      "rules": [
        {
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "matches": [
            "[text=\"开启通知\"]",
            "[text=\"不用了\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14194155",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"开启通知\"]",
            "[text=\"不用了\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14194155",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启通知\"] < * < * +2 * >2 [text=\"不用了\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "其他-关闭播放器无障碍辅助弹窗",
      "desc": "点击[Dismiss/关闭]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "matches": "[vid=\"mealbar_action_button\"] - [vid=\"mealbar_dismiss_button\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/aa8f2617-fd6d-43a8-951d-1bd6efc504d3",
          "snapshotUrls": [
            "https://i.gkd.li/i/19930694",
            "https://i.gkd.li/i/25461814"
          ]
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "matches": "@ImageView[clickable=true][index=parent.childCount.minus(1)] - [desc=\"更多选项\"] < ViewGroup[childCount=2] < * < [vid=\"panel_header\"]",
          "snapshotUrls": "https://i.gkd.li/i/23787178",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25461943"
        }
      ]
    },
    {
      "key": 8,
      "name": "分段广告-播放页广告",
      "fastQuery": true,
      "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
      "rules": [
        {
          "matches": "[vid=\"collapsible_ad_cta_overlay_container\"] >4 [vid=\"overflow_button\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23790199",
            "https://i.gkd.li/i/26672553"
          ],
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] >(1,2) [vid=\"list_item_text\"][text=\"关闭\" || text=\"Dismiss\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23772979",
            "https://i.gkd.li/i/25461885",
            "https://i.gkd.li/i/33272478"
          ],
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity"
        }
      ]
    },
    {
      "key": 12,
      "name": "全屏广告-Shorts-赞助商广告",
      "desc": "[赞助商Ad]视频自动划掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "matches": "[text=\"赞助商广告\"] <<3 [desc$=\"广告\"] <<2 [childCount<=2] <2 * <<3 [vid=\"reel_player_delegated_overlay\"]",
          "action": "swipe",
          "swipeArg": {
            "start": {
              "left": "width * 0.5",
              "top": "width * 1.5"
            },
            "end": {
              "left": "width * 0.6",
              "top": "width * 1.0"
            },
            "duration": 114
          },
          "snapshotUrls": "https://i.gkd.li/i/27376863",
          "exampleUrls": "https://e.gkd.li/a144a709-4fa2-492a-9776-a78a1e45b1e4"
        }
      ]
    },
    {
      "key": 13,
      "name": "评价提示-评论满意度评价",
      "desc": "随机评论出现[你对以上评论作何评价] => x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "matches": "@[desc=\"关闭\"] -2 [text^=\"你对以上评论作\"] <n [index=parent.childCount.minus(1)] <n ViewGroup[childCount>1] <n [vid=\"results\"]",
          "snapshotUrls": "https://i.gkd.li/i/28418922",
          "exampleUrls": "https://e.gkd.li/c21a846e-dbab-4d4e-b388-b96335414bae"
        }
      ]
    },
    {
      "key": 14,
      "name": "局部广告-视频播放-跳过调查",
      "desc": "Ad很有趣?-> 跳过调查",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "matches": "@[vid=\"skip_button\"][clickable=true][visibleToUser=true] < LinearLayout <n [vid=\"survey_answers\"] + [vid=\"survey_attribution\"][text^=\"YouTube\"]",
          "snapshotUrls": "https://i.gkd.li/i/29379447",
          "exampleUrls": "https://e.gkd.li/1b442e3c-0e50-4b3d-b12d-75b7e725ed1d"
        }
      ]
    },
    {
      "key": 15,
      "name": "其他-xp模块更新提示",
      "desc": "ReVanced Xposed 有更新,点击[取消]",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "matches": [
            "[text*=\"ReVanced Xposed\"]",
            "[text=\"Cancel\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/31118557",
          "exampleUrls": "https://e.gkd.li/5f07de6a-1e4d-4297-a516-ccc695df72fc"
        }
      ]
    },
    {
      "key": 16,
      "name": "局部广告-首页会员广告",
      "enable": false,
      "activityIds": "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
      "snapshotUrls": "https://i.gkd.li/i/12877357",
      "rules": [
        {
          "matches": "ImageView < @Button < ViewGroup +3 Button[desc*=\"YouTube Premium\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity"
        }
      ]
    },
    {
      "key": 17,
      "name": "全屏广告-订阅浮窗广告",
      "enable": false,
      "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13797512",
      "rules": [
        {
          "matches": "ViewGroup[desc=\"免费试用 1 个月\"] < * - * > ViewGroup[text=\"不用了，谢谢\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity"
        }
      ]
    },
    {
      "key": 18,
      "name": "局部广告-视频播放页-赞助商广告",
      "enable": false,
      "activityIds": [
        "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
        "com.google.android.apps.youtube.app.watchwhile.MainActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12877346",
        "https://i.gkd.li/i/13797491",
        "https://i.gkd.li/i/13705106",
        "https://i.gkd.li/i/14786081"
      ],
      "rules": [
        {
          "matches": "[desc=\"更多选项\"||desc^=\"More\"] + [desc=\"关闭广告面板\"||desc^=\"Close\"]",
          "activityIds": [
            "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
            "com.google.android.apps.youtube.app.watchwhile.MainActivity"
          ]
        }
      ]
    }
  ]
});

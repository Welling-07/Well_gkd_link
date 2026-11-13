// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ximalaya.ting.android",
  "name": "喜马拉雅",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-播放页广告",
      "fastQuery": true,
      "activityIds": ".host.activity.MainActivity",
      "rules": [
        {
          "matches": "@[visibleToUser=true] < ViewGroup[childCount=1] - ViewGroup[childCount=6] > [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/bbf93e2c-08b8-4155-b82c-89a629a62737",
          "snapshotUrls": "https://i.gkd.li/i/18500523",
          "fastQuery": true,
          "activityIds": ".host.activity.MainActivity"
        },
        {
          "actionCd": 300,
          "matches": "[vid=\"main_buy_view_yellow_zone_btn_close\" || vid=\"main_play_ad_close_real\" || vid=\"main_card_close\" || vid=\"x_play_ad_banner_close_real\"][clickable=true]",
          "exampleUrls": "https://e.gkd.li/bf820eed-00ad-47a0-9581-8cdb3d76bde5",
          "snapshotUrls": [
            "https://i.gkd.li/i/18683999",
            "https://i.gkd.li/i/24330967",
            "https://i.gkd.li/i/27471367"
          ],
          "fastQuery": true,
          "activityIds": ".host.activity.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-信息流广告",
      "desc": "点击关闭-点击屏蔽",
      "fastQuery": true,
      "activityIds": [
        ".host.activity.MainActivity",
        ".adsdk.view.DislikeDialog.DislikeBottomDialog"
      ],
      "rules": [
        {
          "matches": "[vid=\"xm_ad_close_real\" || vid=\"main_close_layout\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17112326",
            "https://i.gkd.li/i/17112313"
          ],
          "fastQuery": true,
          "activityIds": [
            ".host.activity.MainActivity",
            ".adsdk.view.DislikeDialog.DislikeBottomDialog"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"屏蔽\" || text=\"直接关闭\" || text=\"不喜欢此内容\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13260487",
            "https://i.gkd.li/i/13275928",
            "https://i.gkd.li/i/17111444",
            "https://i.gkd.li/i/17111452",
            "https://i.gkd.li/i/24589005"
          ],
          "fastQuery": true,
          "activityIds": [
            ".host.activity.MainActivity",
            ".adsdk.view.DislikeDialog.DislikeBottomDialog"
          ]
        },
        {
          "preKeys": 0,
          "matches": "[text=\"直接关闭\" || text=\"不喜欢此内容\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/30309831",
          "fastQuery": true,
          "activityIds": [
            ".host.activity.MainActivity",
            ".adsdk.view.DislikeDialog.DislikeBottomDialog"
          ]
        },
        {
          "matches": "[vid=\"xm_ad_close_real\" || vid=\"main_close_layout\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17112326",
            "https://i.gkd.li/i/17112313"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.ximalaya.ting.android.host.activity.MainActivity",
            "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog"
          ]
        },
        {
          "preKeys": 3,
          "matches": "@[clickable=true] > [text=\"屏蔽\" || text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13260487",
            "https://i.gkd.li/i/13275928",
            "https://i.gkd.li/i/17111444",
            "https://i.gkd.li/i/17111452"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.ximalaya.ting.android.host.activity.MainActivity",
            "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "青少年模式",
      "order": -8,
      "fastQuery": true,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12506209",
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".host.activity.MainActivity",
          "matches": [
            "[text*=\"青少年模式\"][vid=\"host_btn_set\"]",
            "[vid=\"host_dialog_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12506209",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text*=\"青少年模式\"][id=\"com.ximalaya.ting.android:id/host_btn_set\"]",
            "[id=\"com.ximalaya.ting.android:id/host_dialog_close\"]"
          ],
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": ".host.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13263421",
      "rules": [
        {
          "matches": "[!(text=\"定时\")] + [vid=\"main_iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13251713",
            "https://i.gkd.li/i/29967591",
            "https://i.gkd.li/i/30176023"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/30299404",
          "exampleUrls": [
            "https://e.gkd.li/8efcd568-13f2-4ac4-872a-fe6fc4affaec",
            "https://e.gkd.li/f82ca167-35a0-42b4-b955-c5ef6e5d94dd"
          ],
          "fastQuery": true,
          "activityIds": ".host.activity.MainActivity"
        },
        {
          "matches": "@[vid=\"host_close_firework\"] +2 [vid=\"host_firework_ad_tag\"]",
          "snapshotUrls": "https://i.gkd.li/i/13263421",
          "exampleUrls": "https://e.gkd.li/4f9a66b8-3bf5-4a8e-8ca6-db35625df270",
          "fastQuery": true,
          "activityIds": ".host.activity.MainActivity"
        },
        {
          "matches": "@[id=\"com.ximalaya.ting.android:id/host_close_firework\"] +2 [id=\"com.ximalaya.ting.android:id/host_firework_ad_tag\"]",
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "desc": "取消推送通知",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".host.activity.MainActivity",
          "matches": [
            "[text*=\"通知权限\"][visibleToUser=true]",
            "[text=\"取消\" || text=\"暂不开启\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/ab40c096-d024-4b7c-9c6f-245beafd373a",
          "snapshotUrls": [
            "https://i.gkd.li/i/13389145",
            "https://i.gkd.li/i/18391977",
            "https://i.gkd.li/i/20499323"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/cancel_btn\"]",
          "exampleUrls": "https://m.gkd.li/33366298/f6ac028a-509b-49d8-959a-7da90fb4d9df",
          "snapshotUrls": "https://i.gkd.li/i/13389145",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-免流提示",
      "desc": "关闭[开免流送会员]弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".host.activity.MainActivity",
          "matches": "[vid=\"host_iv_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/2a7e189b-b935-4bbd-9672-c18f2bf454e9",
          "snapshotUrls": "https://i.gkd.li/i/18326083"
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告-签到弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".host.activity.MainActivity",
          "matches": "ImageView < @[clickable=true] < [visibleToUser=true] >3 [text=\"立即签到\"]",
          "snapshotUrls": "https://i.gkd.li/i/30167710",
          "exampleUrls": "https://e.gkd.li/8b93b8fb-1d31-42d2-95a1-c76dc0186e96"
        }
      ]
    },
    {
      "key": 7,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/7ef0b1fb-aaa0-475d-b6b4-e927776adb27",
          "snapshotUrls": "https://i.gkd.li/i/17068586",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 8,
      "name": "局部广告-首页右侧浮动广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12472620"
      ],
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_broadside_close_real\"]",
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity"
        }
      ]
    },
    {
      "key": 9,
      "name": "局部广告-播放页面-播放控制区域的广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "rules": [
        {
          "name": "暂停按钮下方的广告",
          "matches": "[id=\"com.ximalaya.ting.android:id/x_play_ad_banner_close_real\"]",
          "snapshotUrls": "https://i.gkd.li/i/12506218",
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity"
        },
        {
          "name": "喜马小游戏广告",
          "matches": "[id=\"com.ximalaya.ting.android:id/host_game_close_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/12927110",
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity"
        },
        {
          "name": "体验会员广告",
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_close\"]",
          "exampleUrls": "https://m.gkd.li/6328439/ea870e6f-07c9-4167-ab62-03e52838110b",
          "snapshotUrls": "https://i.gkd.li/i/13546642",
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity"
        }
      ]
    },
    {
      "key": 10,
      "name": "局部广告-播放页面-底部推荐列表-夹杂广告",
      "desc": "点击关闭-点击屏蔽",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            "com.ximalaya.ting.android.main.dialog",
            "com.ximalaya.ting.android.host.activity.MainActivity"
          ],
          "matches": "@[clickable=true] > [text=\"屏蔽\"] + [text=\"关闭当前广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12506269",
            "https://i.gkd.li/i/13296565"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matches": "@[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true] > [id=\"com.ximalaya.ting.android:id/main_mark_text\"][text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12506225",
            "https://i.gkd.li/i/12701414",
            "https://i.gkd.li/i/13314183"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 11,
      "name": "局部广告-播放页面-播放前广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.ximalaya.ting.android.host.activity.MainActivity",
        "com.ximalaya.ting.android.framework.view.dialog"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12506250",
        "https://i.gkd.li/i/12520626"
      ],
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_play_ad_close_real\"]",
          "fastQuery": true,
          "activityIds": [
            "com.ximalaya.ting.android.host.activity.MainActivity",
            "com.ximalaya.ting.android.framework.view.dialog"
          ]
        }
      ]
    },
    {
      "key": 12,
      "name": "局部广告-热播推荐广告",
      "enable": false,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "rules": [
        {
          "matches": "[text=\"热播推荐\"] + ImageView + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12506270",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity"
        }
      ]
    },
    {
      "key": 13,
      "name": "更新提示",
      "desc": "点击关闭",
      "order": -9,
      "enable": false,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12506287",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/host_tv_update_later\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 14,
      "name": "局部广告-评论区广告",
      "enable": false,
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12869426",
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_close_real\"][visibleToUser=true]",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 15,
      "name": "全屏广告-首页-专辑订阅推荐弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13251713",
      "rules": [
        {
          "matches": "[text=\"你可能感兴趣的专辑\"] + [id=\"com.ximalaya.ting.android:id/main_iv_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity"
        }
      ]
    },
    {
      "key": 16,
      "name": "分段广告-播放页面-底部推荐列表-夹杂广告",
      "desc": "点击关闭-点击屏蔽",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "preKeys": 1,
          "activityIds": [
            "com.ximalaya.ting.android.main.dialog",
            "com.ximalaya.ting.android.host.activity.MainActivity"
          ],
          "matches": "@[clickable=true] > [text=\"屏蔽\"] + [text=\"关闭当前广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12506269",
            "https://i.gkd.li/i/13296565"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matches": "@[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true] > [id=\"com.ximalaya.ting.android:id/main_mark_text\"][text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12506225",
            "https://i.gkd.li/i/12701414",
            "https://i.gkd.li/i/13314183"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 17,
      "name": "分段广告-首页-推荐列表广告",
      "desc": "点击关闭-选择原因",
      "enable": false,
      "activityIds": [
        "com.ximalaya.ting.android.host.activity.MainActivity",
        "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog"
      ],
      "rules": [
        {
          "fastQuery": true,
          "matches": "[id=\"com.ximalaya.ting.android:id/xm_ad_close_real\"]",
          "snapshotUrls": "https://i.gkd.li/i/12506253",
          "activityIds": [
            "com.ximalaya.ting.android.host.activity.MainActivity",
            "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog"
          ]
        },
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_ad_dynamic_lay\"] >(4) ImageView + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12701374",
          "activityIds": [
            "com.ximalaya.ting.android.host.activity.MainActivity",
            "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog"
          ]
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "点击关闭原因【屏蔽】",
          "fastQuery": true,
          "matches": "@[name=\"android.widget.RelativeLayout\" || name=\"android.widget.LinearLayout\"] > [text=\"屏蔽\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12506258",
            "https://i.gkd.li/i/13260487",
            "https://i.gkd.li/i/13275928"
          ],
          "activityIds": [
            "com.ximalaya.ting.android.host.activity.MainActivity",
            "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog"
          ]
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "点击【不感兴趣】",
          "actionCdKey": 2,
          "fastQuery": true,
          "matches": "[text=\"直接关闭\"][text.length<=5]",
          "snapshotUrls": "https://i.gkd.li/i/14019835",
          "activityIds": [
            "com.ximalaya.ting.android.host.activity.MainActivity",
            "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog"
          ]
        }
      ]
    },
    {
      "key": 18,
      "name": "分段广告-卡片式广告",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "name": "我的页面-点击卡片右上角关闭按钮",
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matches": "[id=\"com.ximalaya.ting.android:id/main_close_layout\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13194838",
            "https://i.gkd.li/i/13296565"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "name": "我的页面-点击不感兴趣",
          "activityIds": "com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog",
          "matches": "[id=\"com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_un_interest\"]",
          "snapshotUrls": "https://i.gkd.li/i/13194839",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 19,
      "name": "通知提示",
      "desc": "取消推送通知",
      "enable": false,
      "rules": [
        {
          "actionMaximum": 1,
          "fastQuery": true,
          "activityIds": "com.ximalaya.ting.android.host.activity.MainActivity",
          "matches": "[id=\"com.ximalaya.ting.android:id/cancel_btn\"]",
          "exampleUrls": "https://m.gkd.li/33366298/f6ac028a-509b-49d8-959a-7da90fb4d9df",
          "snapshotUrls": "https://i.gkd.li/i/13389145"
        }
      ]
    },
    {
      "key": 20,
      "name": "全屏广告-体验会员广告",
      "enable": false,
      "exampleUrls": "https://m.gkd.li/6328439/ea870e6f-07c9-4167-ab62-03e52838110b",
      "snapshotUrls": "https://i.gkd.li/i/13546642",
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_close\"]"
        }
      ]
    },
    {
      "key": 21,
      "name": "局部广告-有声书分类页面-信息流广告",
      "enable": false,
      "activityIds": "com.ximalaya.ting.android.host.activity.SplashAdActivity",
      "snapshotUrls": "https://i.gkd.li/i/13334685",
      "rules": [
        {
          "matches": "[id=\"com.ximalaya.ting.android:id/main_iv_dislike\"]",
          "activityIds": "com.ximalaya.ting.android.host.activity.SplashAdActivity"
        }
      ]
    }
  ]
});

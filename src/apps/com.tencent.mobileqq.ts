// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.mobileqq",
  "name": "QQ",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "excludeActivityIds": [
        "com.tencent.mobileqq.activity.ChatActivity",
        "com.tencent.mobileqq.search.activity.UniteSearchActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13062244",
        "https://i.gkd.li/i/13093155",
        "https://i.gkd.li/i/13207731",
        "https://i.gkd.li/i/13217807",
        "https://i.gkd.li/i/13856647",
        "https://i.gkd.li/i/13868177"
      ],
      "priorityTime": 10000,
      "actionMaximumKey": 0,
      "rules": [
        {
          "excludeActivityIds": [
            ".activity.ChatActivity",
            ".search.activity.UniteSearchActivity"
          ],
          "excludeMatches": "[vid=\"root\"]",
          "matches": "TextView[text^=\"跳过\"][text.length<=10][!(vid=\"title\")]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13093155",
            "https://i.gkd.li/i/13207731"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/13217807",
            "https://i.gkd.li/i/13856647",
            "https://i.gkd.li/i/13868177",
            "https://i.gkd.li/i/14341023",
            "https://i.gkd.li/i/15334565"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "excludeMatches": "[vid=\"root\"]",
          "matches": "TextView[text^=\"跳过\"][text.length<=10][vid!=\"title\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13093155",
            "https://i.gkd.li/i/13207731",
            "https://i.gkd.li/i/13217807",
            "https://i.gkd.li/i/13856647",
            "https://i.gkd.li/i/13868177",
            "https://i.gkd.li/i/14341023",
            "https://i.gkd.li/i/15334565"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "excludeActivityIds": [
            "com.tencent.mobileqq.activity.ChatActivity",
            "com.tencent.mobileqq.search.activity.UniteSearchActivity"
          ],
          "actionMaximumKey": 0
        },
        {
          "excludeMatches": "[vid=\"chat_item_content_layout\"]",
          "matches": "TextView[text^=\"跳过\"][text.length<=10][vid!=\"title\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "excludeActivityIds": [
            "com.tencent.mobileqq.activity.ChatActivity",
            "com.tencent.mobileqq.search.activity.UniteSearchActivity"
          ],
          "priorityTime": 10000,
          "actionMaximumKey": 0
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告",
      "desc": "点击关闭",
      "rules": [
        {
          "name": "好友动态详情页广告",
          "fastQuery": true,
          "activityIds": [
            "com.qzone.reborn.base.QZoneTransparentShellActivity",
            "com.qzone.reborn.base.QZoneShellActivity"
          ],
          "matches": "@[desc=\"关闭广告\"][visibleToUser=true] <4 RelativeLayout <2 LinearLayout <2 LinearLayout < FrameLayout <n RecyclerView < FrameLayout - FrameLayout >2 [text=\"详情\"]",
          "exampleUrls": "https://e.gkd.li/b78a3e44-3bd9-445d-9199-e989269c2be3",
          "snapshotUrls": [
            "https://i.gkd.li/i/17009847",
            "https://i.gkd.li/i/17815694",
            "https://i.gkd.li/i/17827969"
          ]
        },
        {
          "name": "推荐你试试这些玩法",
          "activityIds": "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
          "fastQuery": true,
          "matches": "@[desc=\"关闭\"] - [text=\"推荐你试试这些玩法\"]",
          "exampleUrls": "https://e.gkd.li/6cf71a22-0e21-4877-86a7-69d84353ad5a",
          "snapshotUrls": "https://i.gkd.li/i/18236745"
        },
        {
          "fastQuery": true,
          "activityIds": ".activity.SplashActivity",
          "matches": "@ImageView[desc=\"关闭\"][clickable=true][childCount=0] -2 [text$=\"试用超级会员\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/23837678"
        },
        {
          "fastQuery": true,
          "activityIds": ".activity.SplashActivity",
          "matches": "@ImageView[clickable=true][width<100 && height<100][desc=\"关闭\" || desc=null][index!=0] <<n FrameLayout <(2,3) * <2 [childCount=4] <2 [vid=\"root\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24230528",
            "https://i.gkd.li/i/28426083",
            "https://i.gkd.li/i/28425887",
            "https://i.gkd.li/i/28425944",
            "https://i.gkd.li/i/29140037"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29032927"
        },
        {
          "actionDelay": 500,
          "activityIds": ".activity.QPublicFragmentActivity",
          "matches": "ImageView[width<62] < [visibleToUser=true][desc=\"关闭广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/33948809"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告",
      "desc": "①点击[广告/更多] ②点击[关闭这条] ③点击[直接关闭]",
      "fastQuery": true,
      "activityIds": [
        "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity",
        "com.qzone.reborn.layer.part.QzoneFeedProGalleryActivity",
        "com.qzone.reborn.layer.part.QZoneFeedXGalleryActivity",
        ".guild.base.QPublicFragmentActivityForMainWebActivity",
        "com.qzone.reborn.base.QZoneShellActivity",
        ".activity.SplashActivity"
      ],
      "rules": [
        {
          "name": "①点击[广告]",
          "anyMatches": [
            "[text=\"广告\"][clickable=true]",
            "@[clickable=true] > [text=\"广告\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/30876372",
            "https://i.gkd.li/i/33749525",
            "https://i.gkd.li/i/21947672",
            "https://i.gkd.li/i/24404962",
            "https://i.gkd.li/i/28888622"
          ],
          "exampleUrls": [
            "https://e.gkd.li/ab1f2c2a-a565-42d4-ab24-49747ad558ec",
            "https://e.gkd.li/b272a9a4-ba11-4bee-9608-123683475c68",
            "https://e.gkd.li/76ce897a-7ff5-4edb-b3de-381187bcea1a"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity",
            "com.qzone.reborn.layer.part.QzoneFeedProGalleryActivity",
            "com.qzone.reborn.layer.part.QZoneFeedXGalleryActivity",
            ".guild.base.QPublicFragmentActivityForMainWebActivity",
            "com.qzone.reborn.base.QZoneShellActivity",
            ".activity.SplashActivity"
          ]
        },
        {
          "name": "①点击[更多]",
          "activityIds": ".activity.SplashActivity",
          "matches": "@[desc=\"更多\"][clickable=true] - [desc=\"广告\"][visibleToUser=true] - LinearLayout > [text=\"今天\"]",
          "snapshotUrls": "https://i.gkd.li/i/33749900",
          "exampleUrls": "https://e.gkd.li/4c4b12cf-777b-4e27-92ea-f764055025a2",
          "fastQuery": true
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "②点击[关闭]此条广告",
          "matches": "@[clickable=true] >(1,2) [text^=\"关闭\"][text*=\"条\"][text.length<10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/21947698",
            "https://i.gkd.li/i/24381598",
            "https://i.gkd.li/i/24406932",
            "https://i.gkd.li/i/26997293",
            "https://i.gkd.li/i/28888643",
            "https://i.gkd.li/i/28942736",
            "https://i.gkd.li/i/30876374",
            "https://i.gkd.li/i/33749584"
          ],
          "exampleUrls": [
            "https://e.gkd.li/62772b6a-f349-4701-8c1d-5bfa08a4f6c9",
            "https://e.gkd.li/4ff2b91f-7a3a-4514-9c23-0310c499ff9e",
            "https://e.gkd.li/c26339b2-8df9-4aed-a3ba-4ec77e519574"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity",
            "com.qzone.reborn.layer.part.QzoneFeedProGalleryActivity",
            "com.qzone.reborn.layer.part.QZoneFeedXGalleryActivity",
            ".guild.base.QPublicFragmentActivityForMainWebActivity",
            "com.qzone.reborn.base.QZoneShellActivity",
            ".activity.SplashActivity"
          ]
        },
        {
          "preKeys": 2,
          "name": "③点击[直接关闭]",
          "matches": "[text=\"直接关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26997174",
            "https://i.gkd.li/i/28942737",
            "https://i.gkd.li/i/30876376",
            "https://i.gkd.li/i/33749791"
          ],
          "exampleUrls": [
            "https://e.gkd.li/a5da537d-d1cc-4420-a9a4-3329cf4a8fad",
            "https://e.gkd.li/1fc58680-ecb3-4f8b-b204-b2d55fe20964"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity",
            "com.qzone.reborn.layer.part.QzoneFeedProGalleryActivity",
            "com.qzone.reborn.layer.part.QZoneFeedXGalleryActivity",
            ".guild.base.QPublicFragmentActivityForMainWebActivity",
            "com.qzone.reborn.base.QZoneShellActivity",
            ".activity.SplashActivity"
          ]
        }
      ]
    },
    {
      "key": 7,
      "name": "开屏广告-QQ小程序开屏广告",
      "desc": "点击右下角跳过",
      "order": -10,
      "actionMaximum": 1,
      "activityIds": [
        "com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI",
        "com.tencent.mobileqq.activity.miniaio.MiniChatActivity"
      ],
      "priorityTime": 10000,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".mini.appbrand.ui.AppBrandUI",
            ".activity.miniaio.MiniChatActivity"
          ],
          "matches": [
            "[text=\"广告\"][visibleToUser=true]",
            "[text=\"跳过\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12877215",
            "https://i.gkd.li/i/12919195",
            "https://i.gkd.li/i/15130235"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "priorityTime": 10000
        },
        {
          "matches": [
            "[text=\"广告\"][visibleToUser=true]",
            "[text=\"跳过\"][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12877215",
            "https://i.gkd.li/i/12919195",
            "https://i.gkd.li/i/15130235"
          ],
          "actionMaximum": 1,
          "priorityTime": 10000,
          "activityIds": [
            "com.tencent.mobileqq.mini.appbrand.ui.AppBrandUI",
            "com.tencent.mobileqq.activity.miniaio.MiniChatActivity"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 8,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "rules": [
        {
          "activityIds": [
            ".activity.SplashActivity",
            ".upgrade.ui.dialog.UpgradeActivity",
            ".upgrade.activity.UpgradeActivity"
          ],
          "matches": "@[desc=\"关闭\"] <2 * >2 Button[text^=\"立即\" || text=\"马上升级\"][text.length=4]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13386719",
            "https://i.gkd.li/i/13526551",
            "https://i.gkd.li/i/22455760",
            "https://i.gkd.li/i/23393647"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".upgrade.activity.UpgradeActivity",
          "matches": [
            "[text=\"立即升级\"]",
            "[text=\"稍后处理\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14724108",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": "@[desc=\"关闭\"] <2 * >2 Button[text^=\"立即\"][text.length=4]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13386719",
            "https://i.gkd.li/i/13526551"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": [
            "[text=\"立即升级\"]",
            "[text=\"稍后处理\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14724108",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2
        },
        {
          "matches": "@[desc=\"关闭\"] - * > [text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13386719",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": "@[text=\"稍后处理\"] +2 [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/14724108",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 4
        }
      ]
    },
    {
      "key": 9,
      "name": "更新提示-消息页面-顶部",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "@[clickable=true][text=null][visibleToUser=true] - [text*=\"版本更新\" || text=\"点击下载\" || text=\"立即安装\" || text=\"点击更新\"][text.length<15]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255493",
            "https://i.gkd.li/i/13843140",
            "https://i.gkd.li/i/14138340",
            "https://i.gkd.li/i/13931212",
            "https://i.gkd.li/i/16323755",
            "https://i.gkd.li/i/17529150",
            "https://i.gkd.li/i/26159150"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/17920550",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "matches": "@ImageView[clickable=true][text=null] <n * > [text*=\"版本更新\" || text*=\"新版本\"][text.length<15]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255493",
            "https://i.gkd.li/i/13843140",
            "https://i.gkd.li/i/14138340",
            "https://i.gkd.li/i/13931212",
            "https://i.gkd.li/i/16323755",
            "https://i.gkd.li/i/17529150"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "matches": "@ImageView[clickable=true] <n * > [text*=\"版本更新\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13255493",
            "https://i.gkd.li/i/13843140",
            "https://i.gkd.li/i/14138340",
            "https://i.gkd.li/i/13931212"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 10,
      "name": "局部广告-聊天页面广告",
      "rules": [
        {
          "name": "关键词广告",
          "fastQuery": true,
          "activityIds": [
            ".profilecard.activity.FriendProfileCardActivity",
            ".activity.ChatActivity",
            ".activity.SplashActivity"
          ],
          "matches": "FrameLayout[childCount=2] >2 FrameLayout[childCount=2] >3 FrameLayout[childCount=2] > [text=\"跳过\" || text=\"关闭\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/4cf5bc02-d2c3-4ca4-833e-522a194e3131",
          "snapshotUrls": [
            "https://i.gkd.li/i/14183188",
            "https://i.gkd.li/i/16549500",
            "https://i.gkd.li/i/16555184"
          ]
        },
        {
          "name": "集福卡活动卡片",
          "fastQuery": true,
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "matches": "@ImageView[clickable=true] -2 [text$=\"会员月卡\"]",
          "exampleUrls": "https://m.gkd.li/57941037/3bf709fc-eefc-4d66-9a00-475738934cd7",
          "snapshotUrls": [
            "https://i.gkd.li/i/14178667",
            "https://i.gkd.li/i/14193973",
            "https://i.gkd.li/i/14235146"
          ]
        },
        {
          "name": "关键词广告 (2)",
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity",
            "com.tencent.mobileqq.activity.ChatActivity",
            "com.tencent.mobileqq.activity.SplashActivity"
          ],
          "matches": "FrameLayout[childCount=2] >2 FrameLayout[childCount=2] >3 FrameLayout[childCount=2] > [text=\"跳过\" || text=\"关闭\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/4cf5bc02-d2c3-4ca4-833e-522a194e3131",
          "snapshotUrls": [
            "https://i.gkd.li/i/14183188",
            "https://i.gkd.li/i/16549500",
            "https://i.gkd.li/i/16555184"
          ]
        }
      ]
    },
    {
      "key": 14,
      "name": "其他-联系人页面-顶部可能认识的人推荐",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.SplashActivity",
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] -2 [text=\"开启推荐，发现可能认识的人。\"]",
          "exampleUrls": "https://e.gkd.li/7922ab73-cc99-4559-b18c-5ab54dd9633a",
          "snapshotUrls": "https://i.gkd.li/i/18237415"
        }
      ]
    },
    {
      "key": 19,
      "name": "分段广告-QQ空间空友爱看",
      "desc": "①点击右侧折叠 ②[不感兴趣/关闭推荐] ③选择原因 ④点击[提交]",
      "fastQuery": true,
      "activityIds": "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity",
      "rules": [
        {
          "name": "①点击右侧折叠",
          "matches": "@[clickable=true][index=parent.childCount.minus(1)] -2 [text=\"空友爱看\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/32656065",
            "https://i.gkd.li/i/33508601",
            "https://i.gkd.li/i/33665642"
          ],
          "fastQuery": true,
          "activityIds": "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity"
        },
        {
          "preKeys": 0,
          "name": "②不感兴趣/关闭推荐",
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\" || text=\"关闭推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/32656067",
            "https://i.gkd.li/i/33508604",
            "https://i.gkd.li/i/33665763"
          ],
          "fastQuery": true,
          "activityIds": "com.qzone.reborn.feedpro.activity.QzoneFriendFeedProActivity"
        },
        {
          "preKeys": 1,
          "name": "③选择原因",
          "activityIds": ".activity.QPublicTransFragmentActivity",
          "matches": "[desc=\"没有我想看的类型 未选中\"]",
          "snapshotUrls": "https://i.gkd.li/i/32656073",
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "name": "④提交",
          "activityIds": ".activity.QPublicTransFragmentActivity",
          "matches": "[desc$=\"已选中\"] +n * > [desc=\"提交\"]",
          "snapshotUrls": "https://i.gkd.li/i/32656070",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 20,
      "name": "局部广告-空间相册内广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.qzone.reborn.base.QZoneShellActivity",
          "matches": "@ImageView[clickable=true][width<87] <2 [visibleToUser=true] - [childCount=3] >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/30869035"
        }
      ]
    },
    {
      "key": 22,
      "name": "局部广告-消息页面顶部横幅广告",
      "desc": "点击关闭",
      "enable": false,
      "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
      "rules": [
        {
          "matches": "TextView[text!=null] < LinearLayout + ImageView[desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12892726",
            "https://i.gkd.li/i/12774870",
            "https://i.gkd.li/i/13207766",
            "https://i.gkd.li/i/13386518"
          ],
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity"
        },
        {
          "name": "消息页面-顶部惊喜礼包",
          "fastQuery": true,
          "matches": "@ImageView[childCount=0][visibleToUser=true] - FrameLayout - [text*=\"惊喜礼包\"]",
          "snapshotUrls": "https://i.gkd.li/i/13426912",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity"
        },
        {
          "matches": "ImageView + RelativeLayout[childCount=2] > TextView[text!=null] + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13476400",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity"
        },
        {
          "name": "稀有龙鹅卡掉落/瓜分现金",
          "matches": "RelativeLayout[childCount=2] > ImageView + RelativeLayout[childCount=2] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/14155603",
            "https://i.gkd.li/i/14217033"
          ],
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 23,
      "name": "分段广告-好友动态-卡片广告",
      "enable": false,
      "rules": [
        {
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "matches": "View[desc=\"广告\"] + ImageView[clickable=true]",
          "exampleUrls": "https://e.gkd.li/21ede3d4-b1b7-4e85-b4d3-2c4876420a71",
          "snapshotUrls": [
            "https://i.gkd.li/i/12847842",
            "https://i.gkd.li/i/13787345"
          ]
        },
        {
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "matches": "[desc=\"广告 展开 按钮\"] > [desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/14138572"
        },
        {
          "preKeys": 0,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "fastQuery": true,
          "matches": "@[clickable=true] > * > ImageView + [text=\"隐藏此条动态\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13761147",
            "https://i.gkd.li/i/13849730"
          ]
        },
        {
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
            "com.tencent.mobileqq.activity.SplashActivity"
          ],
          "fastQuery": true,
          "matches": "@[clickable=true] >(1,2) ImageView + [text=\"关闭此条广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12840889",
            "https://i.gkd.li/i/13831867",
            "https://i.gkd.li/i/14138571"
          ]
        }
      ]
    },
    {
      "key": 24,
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.qqlive.module.videoreport.inject.dialog.ReportDialog"
          ],
          "matches": "ImageView[id=\"com.tencent.mobileqq:id/close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206663",
            "https://i.gkd.li/i/12642081"
          ]
        },
        {
          "name": "钱包页面弹窗广告",
          "activityIds": "cooperation.qwallet.plugin.QWalletToolFragmentActivity",
          "matches": "[desc=\"弹窗推荐活动\"] + [desc=\"关闭\"]",
          "exampleUrls": "https://m.gkd.li/57941037/11e8f456-4c88-431a-ad58-f626bee61df9",
          "snapshotUrls": "https://i.gkd.li/i/14822290"
        },
        {
          "name": "黄钻页面弹窗广告",
          "activityIds": "com.tencent.mobileqq.activity.QQBrowserActivity",
          "matches": "TextView[text.length=0&&clickable=true&&visibleToUser=true] + View > Button[text.length=0&&focusable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12914978",
            "https://i.gkd.li/i/12914886"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mobileqq.activity.QPublicTransFragmentActivity",
          "matches": "ViewGroup[childCount=6] > @ViewGroup[index=2][clickable=true][visibleToUser=true] <<n [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/15136939"
        },
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.tencent.mobileqq.activity.QPublicTransFragmentActivity",
          "matches": "RelativeLayout >3 ViewGroup[childCount=2] > ViewGroup[childCount=3] > ViewGroup[clickable=true][childCount=0][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/15981784"
        }
      ]
    },
    {
      "key": 25,
      "name": "局部广告-顶部SVIP广告",
      "desc": "消息界面-搜索框和消息记录之间的卡片广告,点击关闭右侧x",
      "enable": false,
      "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12706907",
        "https://i.gkd.li/i/13107298",
        "https://i.gkd.li/i/12793359",
        "https://i.gkd.li/i/12855048",
        "https://i.gkd.li/i/13228108"
      ],
      "rules": [
        {
          "matches": "LinearLayout > TextView[text*=\"SVIP\"||text*=\"超级会员\"] + FrameLayout[childCount<=2] + [name$=\"ImageView\"||name$=\"Button\"][id!=null][clickable=true]",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 26,
      "name": "分段广告-动态页好友热播",
      "desc": "好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
        "com.tencent.mobileqq.activity.SplashActivity"
      ],
      "rules": [
        {
          "name": "点击[好友热播]卡片右上角菜单按钮",
          "matches": "@Button[clickable=true] - [text=\"好友热播\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12721427",
            "https://i.gkd.li/i/14822579"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
            "com.tencent.mobileqq.activity.SplashActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击[减少好友热播]",
          "matches": "@[clickable=true] >2 [text=\"减少好友热播\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12721433",
            "https://i.gkd.li/i/14822576"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
            "com.tencent.mobileqq.activity.SplashActivity"
          ]
        }
      ]
    },
    {
      "key": 29,
      "name": "局部广告-浮窗广告",
      "enable": false,
      "activityIds": "com.tencent.mobileqq.activity.QQBrowserActivity",
      "rules": [
        {
          "matches": "TextView[text=\"QQ等级规则\"] + View > TextView[id=null&&text.length=0]",
          "snapshotUrls": "https://i.gkd.li/i/12914734",
          "activityIds": "com.tencent.mobileqq.activity.QQBrowserActivity"
        },
        {
          "name": "右侧悬浮广告",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "matches": "FrameLayout[desc=\"发表帖子\"] - LinearLayout[id!=null] >3 ImageView[id!=null][clickable=false] - View[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12708844"
        }
      ]
    },
    {
      "key": 32,
      "name": "分段广告-QQ小世界评论区广告",
      "desc": "点击广告-弹出原因框-关闭此条广告",
      "enable": false,
      "activityIds": [
        "com.tencent.mobileqq.activity.SplashActivity",
        "com.tencent.biz.qqcircle.activity.QCircleFolderActivity"
      ],
      "rules": [
        {
          "matches": "RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text=\"广告\"][id!=null]",
          "snapshotUrls": "https://i.gkd.li/i/12847819",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.biz.qqcircle.activity.QCircleFolderActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout[clickable=true] > TextView[text=\"关闭此条广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12847821",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.biz.qqcircle.activity.QCircleFolderActivity"
          ]
        }
      ]
    },
    {
      "key": 33,
      "name": "分段广告-好友动态页面\"为你推荐\"",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.tencent.mobileqq.activity.SplashActivity",
        "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
      ],
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - [text=\"为你推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12929620",
            "https://i.gkd.li/i/13387606"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout[id!=null][clickable=true] > LinearLayout > [text=\"减少此类推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12929619",
            "https://i.gkd.li/i/13387605"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ]
        }
      ]
    },
    {
      "key": 34,
      "name": "分段广告-钱包页卡片广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.tencent.mobileqq.activity.SplashActivity",
        "cooperation.qwallet.plugin.QWalletToolFragmentActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "cooperation.qwallet.plugin.QWalletToolFragmentActivity"
          ],
          "matches": "ViewGroup[childCount=6] > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13695087",
            "https://i.gkd.li/i/16685300"
          ]
        },
        {
          "activityIds": "cooperation.qwallet.plugin.QWalletToolFragmentActivity",
          "matches": "@View[visibleToUser=true] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14231489",
          "fastQuery": true
        },
        {
          "preKeys": [
            0,
            1
          ],
          "fastQuery": true,
          "activityIds": "cooperation.qwallet.plugin.QWalletToolFragmentActivity",
          "matches": "@LinearLayout > [text=\"关闭此条广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13699701"
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout > [text=\"关闭此条广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13699701"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "cooperation.qwallet.plugin.QWalletToolFragmentActivity"
          ]
        }
      ]
    },
    {
      "key": 35,
      "name": "全屏广告-首页弹窗广告",
      "enable": false,
      "activityIds": "com.tencent.mobileqq.activity.QPublicTransFragmentActivity",
      "rules": [
        {
          "name": "元梦之星弹窗广告",
          "matches": "ViewGroup[childCount=2] > ViewGroup[childCount=3][index=1] > ViewGroup[clickable=true][visibleToUser=true][index=1][childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/13797876",
          "activityIds": "com.tencent.mobileqq.activity.QPublicTransFragmentActivity"
        },
        {
          "name": "现金瓜分弹窗",
          "matches": "RelativeLayout >5 ViewGroup[childCount=6] > ViewGroup[index=2][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/a9fe74db-07b4-47e6-beed-80983f61d2e3",
          "snapshotUrls": "https://i.gkd.li/i/14207286",
          "activityIds": "com.tencent.mobileqq.activity.QPublicTransFragmentActivity"
        }
      ]
    },
    {
      "key": 36,
      "name": "分段广告-天气页卡片广告",
      "desc": "点击关闭-点击关闭此条广告",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mobileqq.activity.QPublicFragmentActivity",
          "matches": "[id=\"com.tencent.mobileqq:id/nca\"]",
          "snapshotUrls": "https://i.gkd.li/i/14019384"
        },
        {
          "preKeys": 0,
          "fastQuery": true,
          "activityIds": "com.tencent.mobileqq.activity.QPublicFragmentActivity",
          "matches": "@LinearLayout[childCount=3] > [text=\"关闭此条广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14019401"
        },
        {
          "activityIds": "com.tencent.mobileqq.activity.QQBrowserActivity",
          "matches": [
            "ViewGroup[desc=\"返回\"]",
            "ViewGroup[desc=\"首页\"]",
            "ViewGroup[desc=\"分享\"]",
            "ViewGroup[childCount=6] > ViewGroup[childCount=2][clickable=true][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14549503"
        },
        {
          "preKeys": 2,
          "activityIds": "com.tencent.mobileqq.activity.QPublicFragmentActivity",
          "matches": "View < @ViewGroup[clickable=true][visibleToUser=true] - ViewGroup > ViewGroup[childCount=6] > ViewGroup[childCount=2]",
          "snapshotUrls": "https://i.gkd.li/i/14549504"
        }
      ]
    },
    {
      "key": 37,
      "name": "全屏广告-新春回馈礼弹窗",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "action": "clickCenter",
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "matches": "RelativeLayout[childCount=4] > View + RelativeLayout[childCount=2] + ImageView + ImageView",
          "exampleUrls": "https://m.gkd.li/57941037/b09d6db6-0e67-421a-aa7d-35453bf9a0bc",
          "snapshotUrls": [
            "https://i.gkd.li/i/14134934",
            "https://i.gkd.li/i/14151820"
          ]
        }
      ]
    },
    {
      "key": 38,
      "name": "全屏广告-个人主页广告",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "name": "迷你窝弹窗",
          "fastQuery": true,
          "action": "back",
          "activityIds": "com.tencent.mobileqq.profilecard.activity.FriendProfileCardActivity",
          "matches": "[text=\"开启迷你窝\"]",
          "exampleUrls": "https://m.gkd.li/57941037/882ab889-a145-4951-9a44-1dc192490c79",
          "snapshotUrls": "https://i.gkd.li/i/14188980"
        },
        {
          "name": "个性装扮弹窗",
          "activityIds": "cooperation.vip.ad.UserLeadingActivity",
          "matches": "[desc=\"关闭\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15137056"
        }
      ]
    },
    {
      "key": 39,
      "name": "全屏广告-腾讯文档页面-\"使用App\"弹窗",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mobileqq.activity.TeamWorkDocEditBrowserActivity",
          "matches": "@TextView[clickable=true] + * > [visibleToUser=true][text^=\"使用 APP\"] <<n [vid=\"webview\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6efc2dfd-79f3-43b5-bf20-f59a88295ddb",
          "snapshotUrls": "https://i.gkd.li/i/14188983"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.mobileqq.activity.TeamWorkDocEditBrowserActivity",
          "matches": "@TextView[clickable=true] + * > [text^=\"使用 APP\"] <<n [vid=\"webview\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6efc2dfd-79f3-43b5-bf20-f59a88295ddb",
          "snapshotUrls": "https://i.gkd.li/i/14188983"
        }
      ]
    },
    {
      "key": 41,
      "name": "全屏广告-账号信息页面-新人SVIP领取弹窗",
      "enable": false,
      "activityIds": "com.tencent.mobileqq.activity.QPublicFragmentActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/14217758",
        "https://i.gkd.li/i/14217783"
      ],
      "rules": [
        {
          "matches": "[childCount=3] > [desc*=\"活动\"] + [desc^=\"关闭\"][clickable=true]",
          "activityIds": "com.tencent.mobileqq.activity.QPublicFragmentActivity"
        }
      ]
    },
    {
      "key": 42,
      "name": "局部广告-动态页-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.9534",
            "top": "width * 0.0805"
          },
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "matches": "LinearLayout[childCount=1] > FrameLayout[childCount=1] > FrameLayout[childCount=1] > @View[visibleToUser=true][childCount=0] <<n [vid=\"root\"]",
          "exampleUrls": "https://e.gkd.li/438add53-c7cb-41e5-ab98-910f4570ea72",
          "snapshotUrls": [
            "https://i.gkd.li/i/14732983",
            "https://i.gkd.li/i/16834757"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12749584",
            "https://i.gkd.li/i/13627967"
          ]
        },
        {
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "matches": "FrameLayout[childCount=7] > FrameLayout[childCount=2] > @ImageView[childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15388608",
            "https://i.gkd.li/i/16154341"
          ]
        },
        {
          "name": "好友动态详情页广告",
          "activityIds": "com.qzone.reborn.base.QZoneTransparentShellActivity",
          "fastQuery": true,
          "matches": "@[desc=\"关闭广告\"][visibleToUser=true] -3 [text^=\"活动\"]",
          "exampleUrls": "https://e.gkd.li/b78a3e44-3bd9-445d-9199-e989269c2be3",
          "snapshotUrls": "https://i.gkd.li/i/17009847"
        }
      ]
    },
    {
      "key": 43,
      "name": "综合广告-好友动态-广告卡片",
      "enable": false,
      "rules": [
        {
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "matches": "View[desc=\"广告\"] + ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12847842",
            "https://i.gkd.li/i/13787345"
          ]
        },
        {
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "fastQuery": true,
          "matches": "ImageView[clickable=true] < * -2 * >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14138557"
        },
        {
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
            "com.tencent.mobileqq.activity.SplashActivity"
          ],
          "fastQuery": true,
          "matches": "@* > ImageView + [text=\"关闭此条广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12840889",
            "https://i.gkd.li/i/13831867",
            "https://i.gkd.li/i/14138556"
          ]
        },
        {
          "preKeys": 0,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ],
          "fastQuery": true,
          "matches": "@[clickable=true] > * > ImageView + [text=\"隐藏此条动态\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13761147",
            "https://i.gkd.li/i/13849730"
          ]
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.9534",
            "top": "width * 0.0805"
          },
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
          "matches": "LinearLayout[childCount=4] > LinearLayout > FrameLayout > FrameLayout > @View[visibleToUser=true] <<n [vid=\"root\"]",
          "exampleUrls": "https://m.gkd.li/57941037/940f4965-0058-4101-ab62-20d131e9c1d1",
          "snapshotUrls": "https://i.gkd.li/i/14732983"
        }
      ]
    },
    {
      "key": 44,
      "name": "分段广告-动态页-好友热播",
      "desc": "好友动态中的好友热播，自动选择“减少好友热播” - 默认关闭",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
        "com.tencent.mobileqq.activity.SplashActivity"
      ],
      "rules": [
        {
          "name": "点击 [好友热播] 卡片右上角菜单按钮",
          "matches": "@Button[clickable=true] - [text=\"好友热播\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12721427",
            "https://i.gkd.li/i/14822579"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
            "com.tencent.mobileqq.activity.SplashActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击[减少好友热播]",
          "matches": "@[clickable=true] >2 [text=\"减少好友热播\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12721433",
            "https://i.gkd.li/i/14822576"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity",
            "com.tencent.mobileqq.activity.SplashActivity"
          ]
        }
      ]
    },
    {
      "key": 45,
      "name": "分段广告-小世界评论区广告",
      "desc": "点击广告-弹出原因框-关闭此条广告",
      "enable": false,
      "activityIds": [
        "com.tencent.mobileqq.activity.SplashActivity",
        "com.tencent.biz.qqcircle.activity.QCircleFolderActivity"
      ],
      "rules": [
        {
          "matches": "RelativeLayout[childCount=5] > @LinearLayout[clickable=true][childCount=2][id!=null] > TextView[text=\"广告\"][id!=null]",
          "snapshotUrls": "https://i.gkd.li/i/12847819",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.biz.qqcircle.activity.QCircleFolderActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout[clickable=true] > TextView[text=\"关闭此条广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12847821",
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.tencent.biz.qqcircle.activity.QCircleFolderActivity"
          ]
        }
      ]
    },
    {
      "key": 46,
      "name": "分段广告-好友动态-为你推荐",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.tencent.mobileqq.activity.SplashActivity",
        "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
      ],
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - [text=\"为你推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12929620",
            "https://i.gkd.li/i/13387606"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ]
        },
        {
          "preKeys": 0,
          "matches": "@LinearLayout[id!=null][clickable=true] > LinearLayout > [text=\"减少此类推荐\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12929619",
            "https://i.gkd.li/i/13387605"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.tencent.mobileqq.activity.SplashActivity",
            "com.qzone.reborn.feedx.activity.QZoneFriendFeedXActivity"
          ]
        }
      ]
    },
    {
      "key": 47,
      "name": "更新提示-内测邀请弹窗",
      "order": -9,
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] - * > [text=\"QQ测试版\"]",
          "snapshotUrls": "https://i.gkd.li/i/13526551",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 48,
      "name": "局部广告-聊天页-顶部活动浮窗",
      "enable": false,
      "activityIds": "com.tencent.mobileqq.activity.SplashActivity",
      "rules": [
        {
          "excludeMatches": [
            "[text*=\"正在语音通话\"]",
            "[text*=\"正在一起听歌\"]"
          ],
          "matches": "FrameLayout[childCount=2] >4 FrameLayout[childCount=2] > FrameLayout[index=1] > RelativeLayout[childCount=4] > TextView[index=1] +2 ImageView",
          "exampleUrls": "https://m.gkd.li/57941037/3bf709fc-eefc-4d66-9a00-475738934cd7",
          "snapshotUrls": [
            "https://i.gkd.li/i/14178667",
            "https://i.gkd.li/i/14193973",
            "https://i.gkd.li/i/14734790"
          ],
          "activityIds": "com.tencent.mobileqq.activity.SplashActivity"
        }
      ]
    }
  ]
});

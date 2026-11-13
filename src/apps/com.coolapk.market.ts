// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.coolapk.market",
  "name": "酷安",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionCdKey": 0,
      "actionMaximumKey": 0,
      "excludeActivityIds": [
        ".view.feed.",
        ".view.node.DynamicNodePageActivity"
      ],
      "priorityTime": 10000,
      "fastQuery": true,
      "rules": [
        {
          "actionMaximum": 1,
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\" || text*=\"Shake\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13247610",
            "https://i.gkd.li/i/13264779",
            "https://i.gkd.li/i/13826359",
            "https://i.gkd.li/i/13827095",
            "https://i.gkd.li/i/32639518"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "priorityTime": 10000,
          "excludeActivityIds": [
            ".view.feed.",
            ".view.node.DynamicNodePageActivity"
          ]
        },
        {
          "actionMaximum": 1,
          "matches": "TextView - @View[clickable=true][width<200] <(2,3) FrameLayout <2 FrameLayout < FrameLayout < [vid=\"ad_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/30529874",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "priorityTime": 10000,
          "excludeActivityIds": [
            ".view.feed.",
            ".view.node.DynamicNodePageActivity"
          ],
          "actionMaximumKey": 0,
          "actionCdKey": 0
        },
        {
          "actionCd": 300,
          "actionMaximum": 5,
          "excludeMatches": "[text*=\"搜索\"]",
          "matches": "[text*=\"跳过\" || text*=\"Skip\"][!(vid=\"text_view\" || vid=\"title_view\")][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12917990",
            "https://i.gkd.li/i/13211392",
            "https://i.gkd.li/i/23097140",
            "https://i.gkd.li/i/25498455",
            "https://i.gkd.li/i/26328668"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/13247733",
            "https://i.gkd.li/i/13296816",
            "https://i.gkd.li/i/18245546",
            "https://i.gkd.li/i/33674023"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "priorityTime": 10000,
          "excludeActivityIds": [
            ".view.feed.",
            ".view.node.DynamicNodePageActivity"
          ],
          "actionMaximumKey": 0,
          "actionCdKey": 0
        },
        {
          "actionMaximum": 1,
          "actionMaximumKey": 0,
          "matches": "@ImageView[childCount=0] < ViewGroup < ViewGroup +(2,3) ViewGroup >2 [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27078867",
            "https://i.gkd.li/i/27380329"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "priorityTime": 10000,
          "excludeActivityIds": [
            ".view.feed.",
            ".view.node.DynamicNodePageActivity"
          ],
          "actionCdKey": 0
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12503773",
            "https://i.gkd.li/i/13247610",
            "https://i.gkd.li/i/13264779",
            "https://i.gkd.li/i/13826359",
            "https://i.gkd.li/i/13827095"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "excludeActivityIds": [
            "com.coolapk.market.view.search.",
            "com.coolapk.market.view.feed."
          ],
          "actionMaximumKey": 0,
          "fastQuery": true,
          "actionCdKey": 0
        },
        {
          "fastQuery": true,
          "matches": [
            "[id=\"com.coolapk.market:id/ad_container\"][visibleToUser=true]",
            "[text*=\"跳过\"][text.length<10][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12917990",
            "https://i.gkd.li/i/13211392"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/13247733",
            "https://i.gkd.li/i/13296816"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 4,
          "priorityTime": 10000,
          "excludeActivityIds": [
            "com.coolapk.market.view.search.",
            "com.coolapk.market.view.feed."
          ],
          "actionCdKey": 0
        },
        {
          "fastQuery": true,
          "matches": "[id$=\"tt_splash_skip_btn\"] <<n [id=\"com.coolapk.market:id/ad_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12503773",
            "https://i.gkd.li/i/13247610",
            "https://i.gkd.li/i/13264779"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "excludeActivityIds": [
            "com.coolapk.market.view.search.",
            "com.coolapk.market.view.feed."
          ],
          "actionCdKey": 0,
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[text^=\"跳过\"][text.length<=4]",
          "excludeMatches": "[id=\"com.coolapk.market:id/item_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12917990",
            "https://i.gkd.li/i/13211392",
            "https://i.gkd.li/i/13247733",
            "https://i.gkd.li/i/13247782",
            "https://i.gkd.li/i/13296816"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionCdKey": 6,
          "actionMaximumKey": 6,
          "excludeActivityIds": [
            "com.coolapk.market.view.search.",
            "com.coolapk.market.view.feed."
          ],
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "@View[clickable=true] <(2,3) FrameLayout <2 FrameLayout <<n FrameLayout[id=\"com.coolapk.market:id/ad_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13826359",
            "https://i.gkd.li/i/13827095"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionCdKey": 6,
          "actionMaximumKey": 6,
          "excludeActivityIds": [
            "com.coolapk.market.view.search.",
            "com.coolapk.market.view.feed."
          ],
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-信息流广告",
      "desc": "点击卡片右上角按钮->免广告-点击关闭->选择关闭原因-点击不感兴趣",
      "fastQuery": true,
      "activityIds": [
        ".view.feed.FeedDetailActivityV8",
        ".view.main.MainActivity",
        ".view.node.DynamicNodePageActivity",
        ".view.base.SimpleAlphaActivity",
        ".view.search.SuperSearchResultActivity"
      ],
      "rules": [
        {
          "matches": "@[vid=\"close_view\"] <<n [vid=\"coolapk_card_view\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19004644",
            "https://i.gkd.li/i/19004652",
            "https://i.gkd.li/i/19004663",
            "https://i.gkd.li/i/19005176",
            "https://i.gkd.li/i/20776874",
            "https://i.gkd.li/i/21693917"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14996359",
            "https://i.gkd.li/i/15159886",
            "https://i.gkd.li/i/15587119",
            "https://i.gkd.li/i/20768037"
          ],
          "fastQuery": true,
          "activityIds": [
            ".view.feed.FeedDetailActivityV8",
            ".view.main.MainActivity",
            ".view.node.DynamicNodePageActivity",
            ".view.base.SimpleAlphaActivity",
            ".view.search.SuperSearchResultActivity"
          ]
        },
        {
          "preKeys": [
            0,
            2
          ],
          "anyMatches": [
            "@[clickable=true] >(1,2) [text=\"不感兴趣\"][visibleToUser=true]",
            "[text=\"不感兴趣\"][clickable=true][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/19004649",
            "https://i.gkd.li/i/19643258",
            "https://i.gkd.li/i/19643262",
            "https://i.gkd.li/i/19534649",
            "https://i.gkd.li/i/20776872",
            "https://i.gkd.li/i/21693916",
            "https://i.gkd.li/i/23046625"
          ],
          "fastQuery": true,
          "activityIds": [
            ".view.feed.FeedDetailActivityV8",
            ".view.main.MainActivity",
            ".view.node.DynamicNodePageActivity",
            ".view.base.SimpleAlphaActivity",
            ".view.search.SuperSearchResultActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1
          ],
          "matches": "[text=\"不感兴趣\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/21036817",
          "fastQuery": true,
          "activityIds": [
            ".view.feed.FeedDetailActivityV8",
            ".view.main.MainActivity",
            ".view.node.DynamicNodePageActivity",
            ".view.base.SimpleAlphaActivity",
            ".view.search.SuperSearchResultActivity"
          ]
        },
        {
          "name": "点击右上角x按钮",
          "excludeMatches": [
            "[text=\"回复\"] + [text=\"发布\"]",
            "[text=\"创建收藏单\"][visibleToUser=true]",
            "[vid=\"submit_view\"][text=\"发布\"]"
          ],
          "matches": [
            "[text*=\"广告\" || text=\"推广\"][visibleToUser=true]",
            "[vid=\"close_view\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12707506",
            "https://i.gkd.li/i/12642094",
            "https://i.gkd.li/i/12642148",
            "https://i.gkd.li/i/12774771",
            "https://i.gkd.li/i/13257987",
            "https://i.gkd.li/i/17450282"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14996359",
            "https://i.gkd.li/i/15159886",
            "https://i.gkd.li/i/15587119"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.coolapk.market.view.main.MainActivity",
            "com.coolapk.market.view.node.DynamicNodePageActivity",
            "com.coolapk.market.view.feed.FeedDetailActivityV8",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.f"
          ]
        },
        {
          "preKeys": 3,
          "name": "点击[不感兴趣]/[关闭]",
          "matches": "@[text=\"不感兴趣\" || text=\"关闭\"] <n * > [text*=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14959519",
            "https://i.gkd.li/i/14964859"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.coolapk.market.view.main.MainActivity",
            "com.coolapk.market.view.node.DynamicNodePageActivity",
            "com.coolapk.market.view.feed.FeedDetailActivityV8",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.f"
          ]
        },
        {
          "preKeys": [
            3,
            4
          ],
          "name": "选择关闭原因-点击不感兴趣",
          "matches": "@LinearLayout > TextView[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12472633",
            "https://i.gkd.li/i/12655713",
            "https://i.gkd.li/i/12660759",
            "https://i.gkd.li/i/12706437"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.coolapk.market.view.main.MainActivity",
            "com.coolapk.market.view.node.DynamicNodePageActivity",
            "com.coolapk.market.view.feed.FeedDetailActivityV8",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.f"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12503762",
      "actionMaximumKey": 0,
      "rules": [
        {
          "action": "back",
          "fastQuery": true,
          "activityIds": ".view.main.MainActivity",
          "matches": "[text=\"立即更新\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15511206",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        },
        {
          "matchTime": 10000,
          "activityIds": ".view.main.MainActivity",
          "matches": "[text=\"立即更新\"]",
          "exampleUrls": "https://e.gkd.li/19b5d743-3632-4c64-8e51-b55c85070512",
          "snapshotUrls": "https://i.gkd.li/i/23096630",
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "fastQuery": true
        },
        {
          "matches": "[text=\"立即更新\"] - [text=\"取消\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "actionMaximumKey": 0
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13296465",
      "rules": [
        {
          "activityIds": [
            ".view.main.MainActivity",
            ".view.splash.SplashActivity"
          ],
          "matches": "[text=\"去开启\"] - [text=\"以后再说\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13296465",
            "https://i.gkd.li/i/20708984"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"去开启\"] - [text=\"以后再说\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-[大家还下载了]应用推荐",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".view.search.SuperSearchResultActivity",
            ".view.node.DynamicNodePageActivity"
          ],
          "matches": "[text=\"大家还下载了\"] + [vid=\"close_view\"]",
          "exampleUrls": "https://e.gkd.li/0cfa8038-dc74-46c3-9e06-998965d73711",
          "snapshotUrls": [
            "https://i.gkd.li/i/16448265",
            "https://i.gkd.li/i/16448385"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".view.search.SuperSearchResultActivity",
          "matches": "@[desc=\"关闭\"] <<n [vid=\"item_view\"] <<n [vid=\"to_native_ad_view\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/efd366d9-1c66-4c35-b164-6f91a623e2f2",
          "snapshotUrls": "https://i.gkd.li/i/19643150"
        }
      ]
    },
    {
      "key": 6,
      "name": "功能类-自动保存原图",
      "desc": "长按图片->点击[保存原图]",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".view.photo.PhotoViewActivity",
            ".view.wallpaper.coolpic.CoolPicDetailActivity"
          ],
          "matches": "@[clickable=true] > [text=\"保存原图\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25621281",
            "https://i.gkd.li/i/25621360"
          ],
          "exampleUrls": "https://e.gkd.li/d62f40f9-51ca-4059-9217-6d93e080db8b",
          "fastQuery": true
        },
        {
          "activityIds": ".view.photo.PhotoViewV16Activity",
          "matches": "[text=\"保存原图\"] < @[clickable=true] <n View[childCount>2] < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/28377623",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 7,
      "name": "功能类-消息已读自动[确定]",
      "desc": "点击[确定]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".view.notification.v18.NotificationV18Activity",
          "matches": "[text=\"确定\"] < @[clickable=true] <6 View[getChild(0).text$=\"已读\"] < View < ComposeView < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/30532352",
          "exampleUrls": "https://e.gkd.li/dbf91283-a342-416e-a009-5b7e67301c77"
        }
      ]
    },
    {
      "key": 8,
      "name": "分段广告-卡片广告",
      "desc": "点击卡片右上角按钮->免广告-点击关闭->选择关闭原因-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.coolapk.market.view.main.MainActivity",
        "com.coolapk.market.view.base.SimpleAlphaActivity",
        "com.coolapk.market.view.node.DynamicNodePageActivity",
        "com.coolapk.market.view.feed.FeedDetailActivityV8"
      ],
      "rules": [
        {
          "name": "点击右上角x按钮",
          "excludeMatches": [
            "[text=\"回复\"] + [text=\"发布\"]",
            "[text=\"创建收藏单\"][visibleToUser=true]"
          ],
          "matches": "[id=\"com.coolapk.market:id/close_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12707506",
            "https://i.gkd.li/i/12642094",
            "https://i.gkd.li/i/12642148",
            "https://i.gkd.li/i/12774771",
            "https://i.gkd.li/i/13257987",
            "https://i.gkd.li/i/14996359",
            "https://i.gkd.li/i/15159886"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.coolapk.market.view.main.MainActivity",
            "com.coolapk.market.view.base.SimpleAlphaActivity",
            "com.coolapk.market.view.node.DynamicNodePageActivity",
            "com.coolapk.market.view.feed.FeedDetailActivityV8"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击[不感兴趣]/[关闭]",
          "matches": "@[text=\"不感兴趣\" || text=\"关闭\"] <n * > [text*=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14959519",
            "https://i.gkd.li/i/14964859"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.coolapk.market.view.main.MainActivity",
            "com.coolapk.market.view.base.SimpleAlphaActivity",
            "com.coolapk.market.view.node.DynamicNodePageActivity",
            "com.coolapk.market.view.feed.FeedDetailActivityV8"
          ]
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "选择关闭原因-点击不感兴趣",
          "matches": "@LinearLayout > TextView[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12472633",
            "https://i.gkd.li/i/12655713",
            "https://i.gkd.li/i/12660759",
            "https://i.gkd.li/i/12706437"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.coolapk.market.view.main.MainActivity",
            "com.coolapk.market.view.base.SimpleAlphaActivity",
            "com.coolapk.market.view.node.DynamicNodePageActivity",
            "com.coolapk.market.view.feed.FeedDetailActivityV8"
          ]
        }
      ]
    },
    {
      "key": 9,
      "name": "权限提示-通知提示",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.coolapk.market.view.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13296465",
      "rules": [
        {
          "matches": "[text=\"去开启\"] - [text=\"以后再说\"]",
          "fastQuery": true,
          "activityIds": "com.coolapk.market.view.main.MainActivity"
        }
      ]
    },
    {
      "key": 10,
      "name": "功能类-自动查看原图",
      "desc": "查看图片时自动点击原图",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.coolapk.market.view.photo.PhotoViewActivity",
      "snapshotUrls": "https://i.gkd.li/i/14913023",
      "rules": [
        {
          "matches": "[vid=\"load_source_button\"][checked=false]",
          "fastQuery": true,
          "activityIds": "com.coolapk.market.view.photo.PhotoViewActivity"
        }
      ]
    }
  ]
});

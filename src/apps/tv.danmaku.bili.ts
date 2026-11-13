// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "tv.danmaku.bili",
  "name": "哔哩哔哩",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "matchRoot": true,
      "priorityTime": 10000,
      "rules": [
        {
          "actionCd": 500,
          "matches": "[vid=\"count_down\" || vid=\"skip\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16187624",
            "https://i.gkd.li/i/16484445"
          ],
          "matchRoot": true,
          "fastQuery": true,
          "actionMaximum": 2,
          "resetMatch": "app",
          "priorityTime": 10000,
          "matchTime": 10000
        },
        {
          "matches": "[vid=\"count_down\" || vid=\"skip\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16187624",
            "https://i.gkd.li/i/16484445"
          ],
          "matchRoot": true,
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-评论区顶部公告横幅",
      "fastQuery": true,
      "excludeActivityIds": [
        "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
        "tv.danmaku.bili.MainActivityV2"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12785461",
        "https://i.gkd.li/i/12775156"
      ],
      "rules": [
        {
          "fastQuery": true,
          "excludeActivityIds": [
            "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
            ".MainActivityV2"
          ],
          "matches": "LinearLayout[vid=\"ad_tint_frame\"] > ImageView[vid=\"close\"][desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12785461",
            "https://i.gkd.li/i/12775156"
          ]
        },
        {
          "matches": "LinearLayout[id=\"tv.danmaku.bili:id/ad_tint_frame\"] > ImageView[id=\"tv.danmaku.bili:id/close\"][desc=\"关闭\"]",
          "fastQuery": true,
          "excludeActivityIds": [
            "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
            "tv.danmaku.bili.MainActivityV2"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-动态推荐卡片广告",
      "desc": "点击卡片右上角[广告]按钮-点击不感兴趣",
      "fastQuery": true,
      "activityIds": ".MainActivityV2",
      "rules": [
        {
          "matches": "[vid=\"ad_goods_mark_big\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700222",
          "fastQuery": true,
          "activityIds": ".MainActivityV2"
        },
        {
          "matches": "[text=\"不感兴趣\"][id^=\"tv.danmaku.bili:id/reason\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700243",
          "fastQuery": true,
          "activityIds": ".MainActivityV2"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-自动[展开]视频简介",
      "desc": "点击横版视频标题右侧",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "excludeMatches": "[vid=\"subscribe\"][text=\"收藏\"][visibleToUser=true]",
          "matches": "@[vid=\"arrow\"] <2 [childCount=2] + [visibleToUser=true] > [vid=\"desc\"][visibleToUser=false]",
          "snapshotUrls": "https://i.gkd.li/i/31691020",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/31691968",
            "https://i.gkd.li/i/31817499"
          ],
          "exampleUrls": "https://e.gkd.li/977a9ad8-63d6-4b7d-a5f8-78ba5632b91a"
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-自动[关闭]弹幕",
      "desc": "仅在视频详情页生效",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 3000,
          "actionDelay": 300,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matches": "@[desc=\"关闭弹幕\" || desc=\"Disable danmu\"] <2 View < View < [vid=\"danmaku_input_parent\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/33745857",
            "https://i.gkd.li/i/34027203"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/33745620",
          "exampleUrls": "https://e.gkd.li/abf8fe28-1d92-4603-9463-291f8ef66b92"
        }
      ]
    },
    {
      "key": 5,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "actionMaximum": 1,
      "matchDelay": 5000,
      "resetMatch": "app",
      "activityIds": [
        "com.bilibili.app.preferences.BiliPreferencesActivity",
        ".ui.splash.ad.page.HotSplashActivity",
        ".MainActivityV2"
      ],
      "rules": [
        {
          "matches": "[text=\"忽略此版本的更新\"][checked=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12649689",
            "https://i.gkd.li/i/13212209",
            "https://i.gkd.li/i/13228977"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.bilibili.app.preferences.BiliPreferencesActivity",
            ".ui.splash.ad.page.HotSplashActivity",
            ".MainActivityV2"
          ],
          "matchDelay": 5000
        },
        {
          "matches": "[vid=\"update_btn_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12649689",
            "https://i.gkd.li/i/13212209",
            "https://i.gkd.li/i/13228977"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.bilibili.app.preferences.BiliPreferencesActivity",
            ".ui.splash.ad.page.HotSplashActivity",
            ".MainActivityV2"
          ],
          "matchDelay": 5000
        },
        {
          "matches": "[id=\"tv.danmaku.bili:id/update_btn_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12649689",
            "https://i.gkd.li/i/13212209",
            "https://i.gkd.li/i/13228977",
            "https://i.gkd.li/i/13334963"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "matchDelay": 5000,
          "resetMatch": "app",
          "activityIds": [
            "com.bilibili.app.preferences.BiliPreferencesActivity",
            ".ui.splash.ad.page.HotSplashActivity",
            ".MainActivityV2"
          ]
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-视频页广告",
      "desc": "领取大会员月卡,B站免流星卡",
      "fastQuery": true,
      "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
      "rules": [
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.videodetail.VideoDetailsActivity"
          ],
          "matches": "[vid=\"toast_x\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12892611",
            "https://i.gkd.li/i/13308344",
            "https://i.gkd.li/i/13538048"
          ],
          "fastQuery": true
        },
        {
          "matches": "@[vid=\"close\"][visibleToUser=true] - [text$=\"免费领B站大会员\"]",
          "exampleUrls": "https://e.gkd.li/cd934dfc-666e-4562-8b77-aac95f73694e",
          "snapshotUrls": "https://i.gkd.li/i/18165189",
          "fastQuery": true,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
        },
        {
          "matches": "[desc=\"close\"] < @[clickable=true] <3 View <2 [childCount=4] < View <2 View < ComposeView < FrameLayout < [vid=\"fl_tab_pager_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/31067294",
          "exampleUrls": "https://e.gkd.li/696de68a-489f-4d42-b652-afbdf7351145",
          "fastQuery": true,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-直播间悬浮窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
      "rules": [
        {
          "matches": "[vid=\"shopping_close\" || vid=\"live_game_card_close\" || vid=\"match_close\" || vid=\"iv_pop_rank_guide_card_close\" || vid=\"card_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13200549",
            "https://i.gkd.li/i/22990081",
            "https://i.gkd.li/i/23098023",
            "https://i.gkd.li/i/25238734",
            "https://i.gkd.li/i/25569011"
          ],
          "fastQuery": true,
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3"
        },
        {
          "forcedTime": 120000,
          "matches": "@[vid=\"close\" || vid=\"iv_close\"] - [vid=\"up_avatar\" || vid=\"gift_icon\" || vid=\"follow_container\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/32246446",
            "https://i.gkd.li/i/18046573",
            "https://i.gkd.li/i/22990105"
          ],
          "fastQuery": true,
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3"
        },
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "matches": "@[clickable=true][visibleToUser=true] < [vid=\"pager\"] < FrameLayout[index=parent.childCount.minus(1)] <(2,3,4) [vid=\"vertical_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24985920",
            "https://i.gkd.li/i/25240029",
            "https://i.gkd.li/i/25369451",
            "https://i.gkd.li/i/25569011"
          ],
          "fastQuery": true,
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3"
        }
      ]
    },
    {
      "key": 8,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13229159",
        "https://i.gkd.li/i/13614090"
      ],
      "rules": [
        {
          "activityIds": [
            ".MainActivityV2",
            "com.bilibili.video.story.StoryTransparentActivity",
            "com.bilibili.teenagersmode.ui.TeenagersModeDialogActivity"
          ],
          "matches": "[text$=\"通知\"] +2 * > [vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13229159",
            "https://i.gkd.li/i/13614090",
            "https://i.gkd.li/i/21578494"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text$=\"通知\"] +2 * > [id=\"tv.danmaku.bili:id/close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 9,
      "name": "分段广告-首页推荐视频卡片广告",
      "desc": "广告/创作推广/直播/会员购 等",
      "activityIds": ".MainActivityV2",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id$=\"ad_tint_frame\" || id$=\"root_container\" || id$=\"constraintLayout\"][visibleToUser=true] >(1,2,3) [vid=\"more\" || id=\"tv.danmaku.bili.adbiz:id/more\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14083540",
            "https://i.gkd.li/i/14588315",
            "https://i.gkd.li/i/18274379",
            "https://i.gkd.li/i/18306851",
            "https://i.gkd.li/i/19537979",
            "https://i.gkd.li/i/23012670",
            "https://i.gkd.li/i/23123800",
            "https://i.gkd.li/i/23687196",
            "https://i.gkd.li/i/27153803",
            "https://i.gkd.li/i/27686976"
          ],
          "fastQuery": true,
          "activityIds": ".MainActivityV2"
        },
        {
          "matches": "[vid=\"card_content\"][getChild(1).getChild(1).vid=\"corner_hint_container\"][visibleToUser=true] >n [vid=\"inline_more\"]",
          "exampleUrls": "https://e.gkd.li/d3d37b4e-cda3-4ba6-8af3-7b45ac8efc10",
          "snapshotUrls": "https://i.gkd.li/i/17428126",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17848536",
          "fastQuery": true,
          "activityIds": ".MainActivityV2"
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "点击[不感兴趣]/[相似内容过多]",
          "matches": "@[clickable=true] > [text=\"此类内容过多\" || text=\"相似内容过多\" || text=\"不感兴趣\" || text=\"up主不感兴趣\" || text=\"对该up的直播不感兴趣\" || text=\"我不想看\" || text=\"引人不适\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625309",
            "https://i.gkd.li/i/13742257",
            "https://i.gkd.li/i/14155801",
            "https://i.gkd.li/i/14155272",
            "https://i.gkd.li/i/17428471",
            "https://i.gkd.li/i/18274380",
            "https://i.gkd.li/i/18292926",
            "https://i.gkd.li/i/20710223",
            "https://i.gkd.li/i/23687208",
            "https://i.gkd.li/i/24836772"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/18292929",
            "https://i.gkd.li/i/18306849"
          ],
          "fastQuery": true,
          "activityIds": ".MainActivityV2"
        },
        {
          "preKeys": 2,
          "matches": "@FrameLayout[clickable=true] > [text=\"此类内容过多\" || text=\"相似内容过多\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/2aba6082-1047-464e-959c-82ee62e492aa",
          "snapshotUrls": [
            "https://i.gkd.li/i/20718890",
            "https://i.gkd.li/i/20720187"
          ],
          "fastQuery": true,
          "activityIds": ".MainActivityV2"
        },
        {
          "name": "点击卡片广告右下角菜单按钮",
          "actionMaximum": 1,
          "matches": "[vid=\"ad_tint_frame\"] >2 [vid=\"more\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14083540",
            "https://i.gkd.li/i/14588315",
            "https://i.gkd.li/i/14729855"
          ],
          "fastQuery": true,
          "activityIds": "tv.danmaku.bili.MainActivityV2"
        },
        {
          "actionMaximum": 1,
          "matches": "[vid=\"inline_more\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/d3d37b4e-cda3-4ba6-8af3-7b45ac8efc10",
          "snapshotUrls": "https://i.gkd.li/i/17428126",
          "fastQuery": true,
          "activityIds": "tv.danmaku.bili.MainActivityV2"
        },
        {
          "preKeys": [
            4,
            5
          ],
          "name": "点击[不感兴趣]/[相似内容过多] (2)",
          "matches": "@[clickable=true] > [text=\"相似内容过多\" || text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13742257",
            "https://i.gkd.li/i/14155801",
            "https://i.gkd.li/i/14155272",
            "https://i.gkd.li/i/17428471"
          ],
          "fastQuery": true,
          "activityIds": "tv.danmaku.bili.MainActivityV2"
        },
        {
          "preKeys": 4,
          "name": "点击[up主不感兴趣]",
          "matches": "@[clickable=true] > [text=\"up主不感兴趣\"]",
          "exampleUrls": "https://m.gkd.li/57941037/9c2f42d7-c262-4e06-b3c6-40f0908e7a94",
          "snapshotUrls": "https://i.gkd.li/i/13625309",
          "fastQuery": true,
          "activityIds": "tv.danmaku.bili.MainActivityV2"
        },
        {
          "preKeys": 4,
          "fastQuery": true,
          "name": "点击[不感兴趣]",
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13742257",
            "https://i.gkd.li/i/13256605",
            "https://i.gkd.li/i/14155801",
            "https://i.gkd.li/i/13742257"
          ],
          "activityIds": "tv.danmaku.bili.MainActivityV2"
        },
        {
          "preKeys": 4,
          "name": "点击[相似内容过多]",
          "fastQuery": true,
          "matches": "@[clickable=true] > [text=\"相似内容过多\"]",
          "exampleUrls": "https://m.gkd.li/57941037/acd89b46-45fc-459f-8d17-3913d98dcbad",
          "snapshotUrls": [
            "https://i.gkd.li/i/13945597",
            "https://i.gkd.li/i/14155272",
            "https://i.gkd.li/i/14059882"
          ],
          "activityIds": "tv.danmaku.bili.MainActivityV2"
        }
      ]
    },
    {
      "key": 10,
      "name": "局部广告-个性化内容推荐弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "tv.danmaku.bili.MainActivityV2",
      "snapshotUrls": "https://i.gkd.li/i/13448905",
      "rules": [
        {
          "activityIds": ".MainActivityV2",
          "matches": "[text=\"开启个性化内容推荐\"] +3 [vid=\"close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13448905",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启个性化内容推荐\"] +3 [id=\"tv.danmaku.bili:id/close_button\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "tv.danmaku.bili.MainActivityV2"
        }
      ]
    },
    {
      "key": 11,
      "name": "全屏广告-会员弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "forcedTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": [
            ".MainActivityV2",
            "com.bilibili.vip.web.VipWebActivity",
            "com.bilibili.module.vip.web.VipWebActivity"
          ],
          "matches": "@[index=parent.childCount.minus(1)][height<150][visibleToUser=true] <(1,2) View <(1,2) View <(4,5) View < View < View < WebView[text=\"会员中心\" || text=\"大会员\"] < WebView < [vid=\"webview\"]",
          "exampleUrls": "https://e.gkd.li/ac6dd8ae-f18e-4f48-9184-39e4dbd832ba",
          "snapshotUrls": [
            "https://i.gkd.li/i/15219142",
            "https://i.gkd.li/i/15220560",
            "https://i.gkd.li/i/15289942",
            "https://i.gkd.li/i/15328394",
            "https://i.gkd.li/i/18236032",
            "https://i.gkd.li/i/22310507"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "forcedTime": 10000
        },
        {
          "activityIds": [
            ".MainActivityV2",
            "com.bilibili.vip.web.VipWebActivity"
          ],
          "matches": "ComposeView > View[childCount=7] > @View[clickable=true][childCount=0] <<n [vid=\"vip_panel\"]",
          "exampleUrls": "https://m.gkd.li/57941037/a78a7719-b148-4df2-a225-f7a24be0c413",
          "snapshotUrls": [
            "https://i.gkd.li/i/15523975",
            "https://i.gkd.li/i/15814146"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "forcedTime": 10000
        },
        {
          "fastQuery": true,
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "matches": "@TextView[width<130 && height<130] - TextView[childCount=0][id=\"dialog-canvas\"] <<n [vid=\"webview\"]",
          "snapshotUrls": "https://i.gkd.li/i/23385023",
          "actionMaximum": 1,
          "forcedTime": 10000
        },
        {
          "activityIds": [
            "tv.danmaku.bili.MainActivityV2",
            "com.bilibili.vip.web.VipWebActivity"
          ],
          "matches": "WebView[text=\"会员中心\"] >4 [text=\"大会员服务协议\"] +2 * >2 @TextView[visibleToUser=true][index=parent.childCount.minus(1)] <<n [vid=\"webview\"]",
          "exampleUrls": "https://m.gkd.li/57941037/60eee9aa-8799-4097-8ddf-2783afd49586",
          "snapshotUrls": [
            "https://i.gkd.li/i/15219142",
            "https://i.gkd.li/i/15220560",
            "https://i.gkd.li/i/15289942"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "actionMaximum": 1
        },
        {
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "matches": "WebView[text=\"大会员\"] >3 View[childCount=4] >3 View[childCount=1] > View[childCount=1] > @Image[visibleToUser=true][childCount=0][text=\"\"] <<n [vid=\"webview\"]",
          "exampleUrls": "https://m.gkd.li/57941037/f56c6392-c473-4988-af41-00adedbf3905",
          "snapshotUrls": "https://i.gkd.li/i/15328394",
          "fastQuery": true,
          "forcedTime": 10000,
          "actionMaximum": 1
        },
        {
          "activityIds": "tv.danmaku.bili.MainActivityV2",
          "matches": "[text=\"会员中心\"] >3 View > View[childCount=2] > View[childCount=1] > @TextView[clickable=true] <<n [vid=\"webview\"]",
          "exampleUrls": "https://m.gkd.li/57941037/4384e301-8a79-427e-88d6-7fb8e422c6e8",
          "snapshotUrls": "https://i.gkd.li/i/15523824",
          "fastQuery": true,
          "forcedTime": 10000,
          "actionMaximum": 1
        },
        {
          "activityIds": [
            "tv.danmaku.bili.MainActivityV2",
            "com.bilibili.vip.web.VipWebActivity"
          ],
          "matches": "ComposeView > View[childCount=7] > @View[clickable=true][childCount=0] <<n [vid=\"vip_panel\"]",
          "exampleUrls": "https://m.gkd.li/57941037/a78a7719-b148-4df2-a225-f7a24be0c413",
          "snapshotUrls": [
            "https://i.gkd.li/i/15523975",
            "https://i.gkd.li/i/15814146"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 12,
      "name": "全屏广告-分享稿件弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.splash.ad.page.HotSplashActivity",
          "matches": "[vid=\"poster_share_cancel\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/80e5730d-6634-4a0a-9c58-c57f7ad5e58c",
          "snapshotUrls": "https://i.gkd.li/i/15858057",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity",
          "matches": "[vid=\"poster_share_cancel\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/80e5730d-6634-4a0a-9c58-c57f7ad5e58c",
          "snapshotUrls": "https://i.gkd.li/i/15858057",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 13,
      "name": "分段广告-搜索结果广告",
      "desc": "①点击右下角[菜单] ②点击[不感兴趣]",
      "fastQuery": true,
      "activityIds": "com.bilibili.search2.main.BiliMainSearchActivity",
      "rules": [
        {
          "name": "①点击右下角[菜单]",
          "matches": "[vid=\"ad_tint_frame\"] > [vid=\"more\"][clickable=true]",
          "exampleUrls": "https://e.gkd.li/e5dd30e7-e8dd-42bc-8953-23368e65cca4",
          "snapshotUrls": [
            "https://i.gkd.li/i/17269053",
            "https://i.gkd.li/i/17964354",
            "https://i.gkd.li/i/28495212"
          ],
          "fastQuery": true,
          "activityIds": "com.bilibili.search2.main.BiliMainSearchActivity"
        },
        {
          "name": "②点击[不感兴趣]",
          "matches": "@[clickable=true] > [text$=\"不感兴趣\" || text*=\"不想看\" || text$=\"质量差\"]",
          "exampleUrls": "https://e.gkd.li/5e6e4b69-ba97-473d-9f62-631c296da589",
          "snapshotUrls": [
            "https://i.gkd.li/i/17269055",
            "https://i.gkd.li/i/17964356",
            "https://i.gkd.li/i/22657666"
          ],
          "fastQuery": true,
          "activityIds": "com.bilibili.search2.main.BiliMainSearchActivity"
        },
        {
          "matches": "@[vid=\"more\"][clickable=true][visibleToUser=true] -3 [vid=\"tag_layout\"] > [vid=\"ad_tag_with_dot\"]",
          "exampleUrls": "https://e.gkd.li/e5dd30e7-e8dd-42bc-8953-23368e65cca4",
          "snapshotUrls": "https://i.gkd.li/i/17269053",
          "fastQuery": true,
          "activityIds": "com.bilibili.search2.main.BiliMainSearchActivity"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "exampleUrls": "https://e.gkd.li/5e6e4b69-ba97-473d-9f62-631c296da589",
          "snapshotUrls": "https://i.gkd.li/i/17269055",
          "fastQuery": true,
          "activityIds": "com.bilibili.search2.main.BiliMainSearchActivity"
        }
      ]
    },
    {
      "key": 14,
      "name": "分段广告-视频详情页下方推广",
      "desc": "关闭[广告/推广/直播/纪录片/课堂/游戏], 含暂停时出现的广告",
      "fastQuery": true,
      "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
      "rules": [
        {
          "name": "广告/推广",
          "matches": "[id$=\"ad_tint_frame\"][visibleToUser=true] >(1,2) [vid=\"more\" || vid=\"more_layout\" || id=\"tv.danmaku.bili.adbiz:id/more\" || id=\"tv.danmaku.bili.adbiz:id/more_layout\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17675629",
            "https://i.gkd.li/i/21552836",
            "https://i.gkd.li/i/21705345",
            "https://i.gkd.li/i/20739380",
            "https://i.gkd.li/i/20744764",
            "https://i.gkd.li/i/20794380",
            "https://i.gkd.li/i/21947622",
            "https://i.gkd.li/i/28908101"
          ],
          "fastQuery": true,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
        },
        {
          "name": "课堂/纪录片/游戏/直播",
          "matches": "[text=\"课堂\" || text=\"纪录片\" || text=\"游戏\" || vid=\"bottom_container\" || vid=\"live_lottie_layout\"][index=2] +n [vid=\"more\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23934632",
            "https://i.gkd.li/i/23933866",
            "https://i.gkd.li/i/24015674",
            "https://i.gkd.li/i/23933925",
            "https://i.gkd.li/i/17675894",
            "https://i.gkd.li/i/18306858",
            "https://i.gkd.li/i/34722511"
          ],
          "exampleUrls": "https://e.gkd.li/f7a90a07-6c8e-4986-8306-f64db4412e36",
          "fastQuery": true,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "②点击[不感兴趣]",
          "matches": "@[clickable=true] > [text*=\"不感兴趣\" || text=\"相似内容过多\" || text*=\"不想看\" || text$=\"质量差\" || text=\"减少直播推荐\" || text=\"和当前视频无关\"]",
          "exampleUrls": "https://e.gkd.li/23937c2d-379c-4fb5-aaee-7295bcf0afca",
          "snapshotUrls": [
            "https://i.gkd.li/i/17676025",
            "https://i.gkd.li/i/17676149",
            "https://i.gkd.li/i/17677147",
            "https://i.gkd.li/i/18296940",
            "https://i.gkd.li/i/18306839",
            "https://i.gkd.li/i/20739391",
            "https://i.gkd.li/i/24015691",
            "https://i.gkd.li/i/24336415",
            "https://i.gkd.li/i/28659010",
            "https://i.gkd.li/i/30885647"
          ],
          "fastQuery": true,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "②点击[不感兴趣]2",
          "actionCdKey": 2,
          "actionMaximumKey": 2,
          "matches": "@[clickable=true] > [visibleToUser=true][text*=\"不感兴趣\" || text=\"相似内容过多\" || text*=\"不想看\" || text$=\"质量差\" || text=\"减少直播推荐\" || text=\"和当前视频无关\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/34722513"
          ],
          "fastQuery": true,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
        },
        {
          "preKeys": [
            2,
            3
          ],
          "name": "③点击[关闭]",
          "anyMatches": [
            "[vid=\"close_dislike\"][visibleToUser=true]",
            "@[text=\"关闭\"][clickable=true] -n * <<(2,4) [name$=\"ComposeView\" || name$=\"FrameLayout\"] <n [vid=\"recycler\"]"
          ],
          "exampleUrls": "https://e.gkd.li/80514576-3656-4dcc-89f5-5992803c8e77",
          "snapshotUrls": [
            "https://i.gkd.li/i/18587456",
            "https://i.gkd.li/i/25739074"
          ],
          "fastQuery": true,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
        }
      ]
    },
    {
      "key": 15,
      "name": "功能类-自动关闭故事模式",
      "desc": "播放视频时退出竖屏模式",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.bilibili.video.story.StoryVideoActivity",
            "com.bilibili.video.story.StoryTransparentActivity"
          ],
          "matches": "[vid=\"story_ctrl_router\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/4bfd6131-d4be-46be-affb-73338b01f49c",
          "snapshotUrls": [
            "https://i.gkd.li/i/18164075",
            "https://i.gkd.li/i/23325994"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 16,
      "name": "功能类-自动点击评论区的[展开更多评论]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.bilibili.video.story.StoryVideoActivity",
            "com.bilibili.video.story.StoryTransparentActivity",
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity"
          ],
          "matches": "@LinearLayout[clickable=true] > [text=\"展开更多评论\"]",
          "exampleUrls": "https://e.gkd.li/e7b7167e-7623-4079-9f16-fd253f303074",
          "snapshotUrls": [
            "https://i.gkd.li/i/22572375",
            "https://i.gkd.li/i/23325508",
            "https://i.gkd.li/i/22573433",
            "https://i.gkd.li/i/23786106"
          ]
        }
      ]
    },
    {
      "key": 17,
      "name": "功能类-自动领取会员经验",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "matches": "@TextView[index=parent.childCount.minus(1)][text=\"领取\"] -n [text=\"领经验\"] < View <(2,3) View <3 View < [id=\"app\"][getChild(childCount.minus(1)).text$=\"隐私政策\"] <<(5,6) [vid=\"webview\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22886723",
            "https://i.gkd.li/i/22886739"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/23385023"
        }
      ]
    },
    {
      "key": 18,
      "name": "功能类-自动点击查看原图",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.bilibili.video.story.StoryVideoActivity",
            "com.bilibili.video.story.StoryTransparentActivity",
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity",
            "com.bilibili.bplus.followinglist.page.browser.ui.LightBrowserActivityV2",
            "com.bilibili.lib.ui.ComposeActivity",
            "com.bilibili.column.ui.detail.image.ColumnImageViewerActivity"
          ],
          "matches": "[text^=\"查看原图\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/c0ffc9cb-fac0-4b5c-9645-3674942b5c7d",
          "snapshotUrls": [
            "https://i.gkd.li/i/23325552",
            "https://i.gkd.li/i/23304237",
            "https://i.gkd.li/i/23304245",
            "https://i.gkd.li/i/23786065",
            "https://i.gkd.li/i/23305280",
            "https://i.gkd.li/i/23305281",
            "https://i.gkd.li/i/23305275"
          ]
        }
      ]
    },
    {
      "key": 19,
      "name": "评价提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.bilibili.search2.main.BiliMainSearchActivity",
            ".MainActivityV2"
          ],
          "matches": "[vid=\"rating_dialog_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23440560",
            "https://i.gkd.li/i/28225187"
          ]
        }
      ]
    },
    {
      "key": 20,
      "name": "功能类-直播自动点赞",
      "desc": "左下角提示-点击",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
          "matches": "@[vid=\"live_combo_action_button\"] > [text=\"点赞\"]",
          "snapshotUrls": "https://i.gkd.li/i/25238947"
        }
      ]
    },
    {
      "key": 21,
      "name": "功能类-直播自动投喂粉丝团",
      "desc": "左下角提示-点击投喂_需要0.1米谨慎开启(虽然只有一次)",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
          "matches": "@[vid=\"live_combo_action_button\"] > [text=\"投喂\"]",
          "snapshotUrls": "https://i.gkd.li/i/25238945",
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 22,
      "name": "功能类-视频自动x1.25倍速(⚠️三选一)",
      "desc": "依次点击 ①视频 ②更多 ③1.25倍速",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "match",
      "actionCd": 3000,
      "rules": [
        {
          "name": "①点击视频",
          "actionDelay": 1000,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matches": "[vid=\"video_container\"] >2 [vid=\"control_container\"][visibleToUser=true][childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25314184",
            "https://i.gkd.li/i/30978841"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/30980761",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        },
        {
          "preKeys": 0,
          "name": "②点击[更多]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matches": "[vid=\"toolbar_action_overflow\"][desc^=\"更多\"]",
          "snapshotUrls": "https://i.gkd.li/i/25314223",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        },
        {
          "name": "②直接点击[更多]",
          "activityIds": "com.bilibili.video.story.StoryVideoActivity",
          "matches": "[vid=\"container_top_more\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/30979293",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        },
        {
          "preKeys": [
            1,
            2
          ],
          "name": "③选择[1.25]倍速",
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.story.StoryVideoActivity"
          ],
          "matches": "[text=\"倍速\"] + * >2 @[clickable=true] > [vid=\"title\"][text=\"1.25\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25314490",
            "https://i.gkd.li/i/30979294"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        }
      ]
    },
    {
      "key": 23,
      "name": "功能类-视频自动x1.5倍速(⚠️三选一)",
      "desc": "依次点击 ①视频 ②更多 ③1.5倍速",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "match",
      "actionCd": 3000,
      "rules": [
        {
          "name": "①点击视频",
          "actionDelay": 1000,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matches": "[vid=\"video_container\"] >2 [vid=\"control_container\"][visibleToUser=true][childCount=0]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        },
        {
          "preKeys": 0,
          "name": "②点击[更多]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matches": "[vid=\"toolbar_action_overflow\"][desc^=\"更多\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        },
        {
          "name": "②直接点击[更多]",
          "activityIds": "com.bilibili.video.story.StoryVideoActivity",
          "matches": "[vid=\"container_top_more\"][visibleToUser=true]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        },
        {
          "preKeys": [
            1,
            2
          ],
          "name": "③选择[1.5]倍速",
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.story.StoryVideoActivity"
          ],
          "matches": "[text=\"倍速\"] + * >2 @[clickable=true] > [vid=\"title\"][text=\"1.5\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25314490",
            "https://i.gkd.li/i/30979294"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        }
      ]
    },
    {
      "key": 24,
      "name": "功能类-视频自动x2.0倍速(⚠️三选一)",
      "desc": "依次点击 ①视频 ②更多 ③1.25倍速",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "match",
      "actionCd": 3000,
      "rules": [
        {
          "name": "①点击视频",
          "actionDelay": 1000,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matches": "[vid=\"video_container\"] >2 [vid=\"control_container\"][visibleToUser=true][childCount=0]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        },
        {
          "preKeys": 0,
          "name": "②点击[更多]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matches": "[vid=\"toolbar_action_overflow\"][desc^=\"更多\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        },
        {
          "name": "②直接点击[更多]",
          "activityIds": "com.bilibili.video.story.StoryVideoActivity",
          "matches": "[vid=\"container_top_more\"][visibleToUser=true]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        },
        {
          "preKeys": [
            1,
            2
          ],
          "name": "③选择[2.0]倍速",
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.story.StoryVideoActivity"
          ],
          "matches": "[text=\"倍速\"] + * >2 @[clickable=true] > [vid=\"title\"][text=\"2.0\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25314490",
            "https://i.gkd.li/i/30979294"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match",
          "actionCd": 3000
        }
      ]
    },
    {
      "key": 25,
      "name": "功能类-折叠评论自动展开",
      "desc": "字数太多的评论自动点击展开",
      "rules": [
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.1",
            "bottom": "height * 0.1"
          },
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matches": "[vid=\"comment_message\"][text$=\"展开\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25314489"
        }
      ]
    },
    {
      "key": 26,
      "name": "局部广告-首页浮标广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivityV2",
          "matches": "[vid=\"animation_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/25357810"
        }
      ]
    },
    {
      "key": 27,
      "name": "权限提示-悬浮窗权限",
      "desc": "点击[暂不开启]小窗模式",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.story.StoryVideoActivity"
          ],
          "matches": [
            "[text^=\"开启悬浮窗\"]",
            "[text=\"暂不开启\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/25470098",
            "https://i.gkd.li/i/27551046"
          ]
        }
      ]
    },
    {
      "key": 28,
      "name": "局部广告-顶部黄色横幅提示",
      "desc": "点击横幅右边x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.webview.MWebActivity",
          "matches": "@Image[text^=\"yellow-tip-close\"] <3 [childCount=3] <2 [id=\"app\"] < WebView < WebView < [vid=\"webview\"]",
          "snapshotUrls": "https://i.gkd.li/i/25563755"
        }
      ]
    },
    {
      "key": 29,
      "name": "功能类-创作中心自动展开更多",
      "desc": "点击[展开更多]",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.bilibili.upper.module.uppercenter.activity.UpperCenterMainActivity",
          "matches": "[vid=\"tv_expand\"][text*=\"展开\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25563935",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25563937",
          "fastQuery": true
        },
        {
          "activityIds": ".ui.webview.MWebActivity",
          "matches": "Image - @TextView[text=\"展开更多\"] < View[childCount=2][visibleToUser=true] <n [id=\"app\"] < WebView < WebView < [vid=\"webview\"]",
          "snapshotUrls": "https://i.gkd.li/i/25564200",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 30,
      "name": "局部广告-会员购",
      "desc": "底部横幅Ad",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivityV2",
          "matches": "[vid=\"mall_home_newuser_coupon_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26240948",
          "exampleUrls": "https://e.gkd.li/027bbea9-3479-4c8c-a0b2-88fee8f03a85"
        }
      ]
    },
    {
      "key": 31,
      "name": "局部广告-视频页-即将展示Ad",
      "desc": "视频途中[x秒后展示广告] -> 取消",
      "rules": [
        {
          "fastQuery": true,
          "matchRoot": true,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matches": "@[text=\"取消\"] - [visibleToUser=true][text=\"后将展示广告\"] <<n [vid=\"video_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29379312",
            "https://i.gkd.li/i/32741484",
            "https://i.gkd.li/i/32783449"
          ],
          "exampleUrls": "https://e.gkd.li/2fed6260-9cd4-4546-a8ea-de89fce88b5d"
        }
      ]
    },
    {
      "key": 32,
      "name": "其他-完善信息弹窗",
      "desc": "按[返回键]",
      "rules": [
        {
          "fastQuery": true,
          "action": "back",
          "activityIds": ".MainActivityV2",
          "matches": "[vid=\"design_bottom_sheet\"] >2 [vid=\"title\"][text=\"完善信息，获取精准推荐\"]",
          "snapshotUrls": "https://i.gkd.li/i/31165755",
          "exampleUrls": "https://e.gkd.li/d7565e98-d424-49e1-a137-6b7b46c48cc7"
        }
      ]
    },
    {
      "key": 33,
      "name": "功能类-直播间抽奖弹窗",
      "desc": "自动关闭直播间抽奖(福袋)结果",
      "rules": [
        {
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
          "fastQuery": true,
          "matches": "[text^=\"中奖名单\"][visibleToUser=true] <(6-n) * <3 * - * -> @Image[desc=null][vid=null][text!=null][width<105 && height<104] <2 View[childCount=2] <<(1n-4) [id=\"app\"] < WebView <<(1n-4) [vid=\"browser\"]",
          "snapshotUrls": "https://i.gkd.li/i/34363614",
          "exampleUrls": "https://e.gkd.li/6559f724-c2e9-4f29-b13e-474ff78ead5d"
        }
      ]
    },
    {
      "key": 34,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13746766",
      "rules": [
        {
          "matches": "TextView[text*=\"青少年模式\"] +n TextView[text=\"我知道了\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 35,
      "name": "局部广告-动态推荐卡片广告",
      "desc": "点击卡片右上角[广告]按钮-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "matchDelay": 5000,
      "activityIds": "tv.danmaku.bili.MainActivityV2",
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/ad_goods_mark_big\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700222",
          "fastQuery": true,
          "matchDelay": 5000,
          "activityIds": "tv.danmaku.bili.MainActivityV2"
        },
        {
          "matches": "[text=\"不感兴趣\"][id^=\"tv.danmaku.bili:id/reason\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700243",
          "fastQuery": true,
          "matchDelay": 5000,
          "activityIds": "tv.danmaku.bili.MainActivityV2"
        }
      ]
    },
    {
      "key": 36,
      "name": "分段广告-视频底部与评论区中间卡片广告",
      "desc": "需点击二次弹窗 屏蔽原因",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.bilibili.video.videodetail.VideoDetailsActivity",
        "com.bilibili.ship.theseus.all.UnitedBizDetailsActivity",
        "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
      ],
      "rules": [
        {
          "name": "点击卡片广告右侧菜单图标",
          "matches": "FrameLayout[id=\"tv.danmaku.bili:id/ad_tint_frame\"] >n [id^=\"tv.danmaku.bili:id/more\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642260",
            "https://i.gkd.li/i/12705266",
            "https://i.gkd.li/i/12776568",
            "https://i.gkd.li/i/12707070"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.bilibili.video.videodetail.VideoDetailsActivity",
            "com.bilibili.ship.theseus.all.UnitedBizDetailsActivity",
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击屏蔽广告",
          "matches": "[id=\"tv.danmaku.bili:id/dislike_reasons\"] @RelativeLayout > [text*=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642261",
            "https://i.gkd.li/i/13495649"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.bilibili.video.videodetail.VideoDetailsActivity",
            "com.bilibili.ship.theseus.all.UnitedBizDetailsActivity",
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
          ]
        }
      ]
    },
    {
      "key": 37,
      "name": "局部广告-视频悬浮广告",
      "desc": "领取大会员月卡,B站免流星卡",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "activityIds": [
        "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
        "com.bilibili.video.videodetail.VideoDetailsActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12892611",
        "https://i.gkd.li/i/13308344",
        "https://i.gkd.li/i/13538048"
      ],
      "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/110db806-3f8b-4cd2-a445-06c5f5eb21eb",
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/toast_x\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.videodetail.VideoDetailsActivity"
          ]
        }
      ]
    },
    {
      "key": 38,
      "name": "局部广告-直播间卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
      "rules": [
        {
          "name": "直播间底部售卖卡片",
          "matches": "[id=\"tv.danmaku.bili:id/shopping_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13200549",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3"
        },
        {
          "name": "[关注]弹窗",
          "fastQuery": true,
          "matches": "@[vid=\"close\"] -2 * >2 [text=\"关注\"]",
          "snapshotUrls": "https://i.gkd.li/i/14782965",
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3"
        }
      ]
    }
  ]
});

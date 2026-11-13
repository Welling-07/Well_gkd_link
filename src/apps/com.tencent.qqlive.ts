// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.qqlive",
  "name": "腾讯视频",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "action": "clickCenter",
          "matches": "TextView[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/14049316",
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
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12700486",
        "https://i.gkd.li/i/13799951"
      ],
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".ona.update.trunk.client.TrunkUpdateActivity",
          "matches": "[text=\"暂不升级\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/19666787",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"有新版本\"] + FrameLayout + LinearLayout + [text=\"暂不升级\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "activityIds": [
        ".ona.activity.SplashHomeActivity",
        ".ona.activity.VideoDetailActivity",
        ".ona.activity.origin.OriginIconHomeActivity",
        ".kmm.VideoDetailKmmActivityBk",
        ".ona.activity.HomeActivity"
      ],
      "rules": [
        {
          "matches": "@ImageView[height<74][clickable=true][visibleToUser=true] - FrameLayout >5 [vid=\"player_sub_title_view\"]",
          "exampleUrls": "https://e.gkd.li/d0fb9740-defa-437a-882e-b3c5d6a2d231",
          "snapshotUrls": "https://i.gkd.li/i/19666783",
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "matches": "[desc=\"the ad tag\"] < @FrameLayout[clickable=true] < RelativeLayout < RelativeLayout +(1,2) * >(4,5) [text*=\"应用\" || text*=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\" || text=\"去微信看看\"][text.length<6][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19667010",
            "https://i.gkd.li/i/19667126",
            "https://i.gkd.li/i/19667028",
            "https://i.gkd.li/i/19667404",
            "https://i.gkd.li/i/19667413",
            "https://i.gkd.li/i/19667496",
            "https://i.gkd.li/i/19667620",
            "https://i.gkd.li/i/19667647"
          ],
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "matches": "@ImageView[text=null][desc=null][clickable=true][width<250 && height<150] - * >(1,2) [text*=\"应用\" || text*=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\" || text=\"去微信看看\"][text.length<6][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19666328",
            "https://i.gkd.li/i/19693394",
            "https://i.gkd.li/i/21139117"
          ],
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "matchRoot": true,
          "activityIds": ".kmm.VideoDetailKmmActivityBk",
          "matches": "[text*=\"广告\"] -2 @View[clickable=true][getChild(0).height<90] < View[childCount>2] < * < * < * < ViewFactoryHolder <n View < View[index=parent.childCount.minus(1)] <n [childCount>6] < DetachableComposeView <2 FrameLayout <2 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/21152960",
          "fastQuery": true
        },
        {
          "matchRoot": true,
          "matches": "@View[clickable=true][visibleToUser=true][width<174 && height<174] <(1,2,3) View[checkable=true] <<4 [name*=\"KMMChannelNormalFragment\"] < FrameLayout <(2,3,4) ViewPager <<4 FrameLayout <(1,2) FrameLayout <(2,3,5) [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23431044",
            "https://i.gkd.li/i/24339351",
            "https://i.gkd.li/i/24588850",
            "https://i.gkd.li/i/24693451",
            "https://i.gkd.li/i/24693465"
          ],
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "matchRoot": true,
          "matches": "@ImageView[clickable=true][visibleToUser=true][width<250 && height<150] <n RelativeLayout <<6 RecyclerView <(1,2) ViewGroup <2 FrameLayout <2 ScrollView <(2,3) [desc*=\"page_home_channel\"] <<(6,7) FrameLayout <(2,4) [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23625987",
            "https://i.gkd.li/i/23625990",
            "https://i.gkd.li/i/24077457",
            "https://i.gkd.li/i/21139064"
          ],
          "exampleUrls": "https://e.gkd.li/18c89ee9-fcd5-43eb-805a-ac9e223e3cdc",
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "matches": "@View[clickable=true] <4 View[childCount>4] + [visibleToUser=true][text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24715171",
            "https://i.gkd.li/i/26660624"
          ],
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "matchRoot": true,
          "matches": "@View[clickable=true][width<174][height<174] -2 TextView[text.length>5] + [childCount=1] > [text.length<7][text^=\"去浏览\" || text^=\"去微信\" || text^=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\"]",
          "exampleUrls": "https://e.gkd.li/1d81db1b-a722-4800-b6b7-4e5edb470984",
          "snapshotUrls": [
            "https://i.gkd.li/i/21139431",
            "https://i.gkd.li/i/23625826",
            "https://i.gkd.li/i/21410460",
            "https://i.gkd.li/i/21410716",
            "https://i.gkd.li/i/33306617"
          ],
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          "matches": "[text=\"直接关闭\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19667198",
            "https://i.gkd.li/i/19667244",
            "https://i.gkd.li/i/21139034"
          ],
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
          ],
          "matchRoot": true,
          "matches": "[text=\"直接关闭\"] < @View[clickable=true] <n View < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/24715184",
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "preKeys": [
            8,
            9
          ],
          "matches": "[text=\"确认\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/19667102",
            "https://i.gkd.li/i/19666759",
            "https://i.gkd.li/i/21152903"
          ],
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "preKeys": [
            8,
            9
          ],
          "matchRoot": true,
          "matches": "[text=\"确认\"] < @View[clickable=true] <n View < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/24715184",
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "name": "首页顶部卡片广告",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "matches": "FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true][childCount=0][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700299",
            "https://i.gkd.li/i/12700302",
            "https://i.gkd.li/i/13685929"
          ],
          "fastQuery": true
        },
        {
          "name": "首页顶部背景广告",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "matches": "[text=\"关闭广告\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12700518",
          "fastQuery": true
        },
        {
          "name": "个人中心页卡片广告",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "matches": "ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700175",
            "https://i.gkd.li/i/13759380"
          ],
          "fastQuery": true
        },
        {
          "name": "个人中心页顶部背景广告",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "matches": "RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12777344",
          "fastQuery": true
        },
        {
          "name": "点击右上角[广告]",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity"
          ],
          "matches": "RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc=\"the ad tag\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12737313",
            "https://i.gkd.li/i/13685842"
          ],
          "fastQuery": true
        },
        {
          "name": "点击右下角关闭",
          "matches": "ImageView[childCount=0] < * < RelativeLayout + FrameLayout + RelativeLayout > RelativeLayout > RelativeLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13426421",
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.tencent.qqlive:id/feed_icon\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/42013a93-fb12-4747-92e0-95f5028eb8e5",
          "snapshotUrls": "https://i.gkd.li/i/14318802",
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "preKeys": 18,
          "fastQuery": true,
          "matches": "[id=\"com.tencent.qqlive:id/ad_feed_back_dislike\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/8746fdc8-828e-42bb-9160-8e67b7af2dc7",
          "snapshotUrls": "https://i.gkd.li/i/14318811",
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity",
            ".ona.activity.origin.OriginIconHomeActivity",
            ".kmm.VideoDetailKmmActivityBk",
            ".ona.activity.HomeActivity"
          ]
        },
        {
          "name": "广告反馈卡片-点击不感兴趣",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "matches": "@FrameLayout[clickable=true] >3 [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13695084",
          "fastQuery": true
        },
        {
          "name": "广告反馈卡片-选择原因",
          "fastQuery": true,
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "matches": "[text=\"关闭这条广告的原因\"] +(2) RecyclerView > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700303",
            "https://i.gkd.li/i/12829866",
            "https://i.gkd.li/i/13685871",
            "https://i.gkd.li/i/13703219"
          ]
        },
        {
          "preKeys": 21,
          "name": "广告反馈卡片-确认原因",
          "fastQuery": true,
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "matches": "[text=\"关闭这条广告的原因\"] + [text=\"确认\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700210",
            "https://i.gkd.li/i/13685877",
            "https://i.gkd.li/i/13703298"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-视频播放时的广告",
      "desc": "自动点击 跳过/关闭广告",
      "activityIds": [
        ".ona.activity.VideoDetailActivity",
        ".kmm.VideoDetailKmmActivityBk"
      ],
      "rules": [
        {
          "name": "全屏广告2",
          "fastQuery": true,
          "matches": "[text$=\"关闭广告\" || text=\"关闭VIP热剧推荐\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13526547",
            "https://i.gkd.li/i/20691266",
            "https://i.gkd.li/i/21152927"
          ],
          "activityIds": [
            ".ona.activity.VideoDetailActivity",
            ".kmm.VideoDetailKmmActivityBk"
          ]
        },
        {
          "name": "居中广告-1",
          "fastQuery": true,
          "matches": "@ImageView[clickable=true][childCount=0][width<150&&height<150] - * >(3,4) [text^=\"摇动或点击\" || text*=\"应用\" || text*=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\" || text=\"去微信看看\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18476380",
            "https://i.gkd.li/i/18476384",
            "https://i.gkd.li/i/19667827"
          ],
          "activityIds": [
            ".ona.activity.VideoDetailActivity",
            ".kmm.VideoDetailKmmActivityBk"
          ]
        },
        {
          "name": "居中广告-2",
          "fastQuery": true,
          "matches": "@ImageView[clickable=true][childCount=0] +2 [text^=\"摇动或点击\" || text*=\"应用\" || text*=\"立即\" || text*=\"下载\" || text*=\"了解\" || text*=\"查看\" || text*=\"详情\" || text=\"去微信看看\" || text*=\"小程序\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/4bf0ff94-239d-4b43-900f-a375b44922e0",
          "snapshotUrls": [
            "https://i.gkd.li/i/13946107",
            "https://i.gkd.li/i/14318385",
            "https://i.gkd.li/i/18476383",
            "https://i.gkd.li/i/20038310",
            "https://i.gkd.li/i/24689566"
          ],
          "activityIds": [
            ".ona.activity.VideoDetailActivity",
            ".kmm.VideoDetailKmmActivityBk"
          ]
        },
        {
          "fastQuery": true,
          "matches": "@View[clickable=true][childCount=0][width<100 && height<100] <8 View < DetachableComposeView < FrameLayout <2 [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/b0f4982a-ac12-481c-bccb-f8b7a8b14c46",
          "snapshotUrls": "https://i.gkd.li/i/21175698",
          "activityIds": [
            ".ona.activity.VideoDetailActivity",
            ".kmm.VideoDetailKmmActivityBk"
          ]
        },
        {
          "name": "全屏广告",
          "fastQuery": true,
          "matches": "@[text$=\"跳过广告\"][clickable=true] < LinearLayout > [text=\"VIP可关闭该广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700407",
            "https://i.gkd.li/i/12700433"
          ],
          "activityIds": "com.tencent.qqlive.ona.activity.VideoDetailActivity"
        },
        {
          "name": "左下角悬浮广告",
          "matches": "FrameLayout[childCount=2] > FrameLayout > RelativeLayout > View[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13043079",
          "activityIds": "com.tencent.qqlive.ona.activity.VideoDetailActivity"
        },
        {
          "name": "全屏广告2 (2)",
          "fastQuery": true,
          "matches": "@[text$=\"关闭广告\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13526547",
          "activityIds": "com.tencent.qqlive.ona.activity.VideoDetailActivity"
        },
        {
          "name": "居中广告-1 (2)",
          "matches": "ViewGroup[childCount>10] > FrameLayout[index=10] >4 ImageView[clickable=true][visibleToUser=true][index=1 || index=3]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13695067",
            "https://i.gkd.li/i/13946107",
            "https://i.gkd.li/i/14001277"
          ],
          "activityIds": "com.tencent.qqlive.ona.activity.VideoDetailActivity"
        },
        {
          "name": "居中广告-2 (2)",
          "fastQuery": true,
          "matches": "[id=\"com.tencent.qqlive:id/pause_ad_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c8f55e94-30ad-440d-b4d8-06fb19f0c17e",
          "snapshotUrls": "https://i.gkd.li/i/14318385",
          "activityIds": "com.tencent.qqlive.ona.activity.VideoDetailActivity"
        },
        {
          "name": "居中广告",
          "matches": "FrameLayout[childCount=4] > ImageView + FrameLayout + FrameLayout + ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13695067",
          "activityIds": "com.tencent.qqlive.ona.activity.VideoDetailActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".redpacket.rain.OpenRedPacketActivity",
          "matches": "@ImageView[clickable=true] < ViewGroup[childCount=5] < [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d",
          "snapshotUrls": "https://i.gkd.li/i/13842643",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": ".ona.activity.SplashHomeActivity",
          "matches": "@RelativeLayout[clickable=true] + * >3 [text=\"立即预约\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334",
          "snapshotUrls": "https://i.gkd.li/i/14567294",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": ".ona.activity.SplashHomeActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] -3 LinearLayout >2 [text=\"立即免费领取\"]",
          "exampleUrls": "https://e.gkd.li/8b128ebc-ce9c-4345-8094-769f9afa8cd6",
          "snapshotUrls": "https://i.gkd.li/i/17088095",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": ".ona.activity.SplashHomeActivity",
          "matches": "[text=\"暂不需要，稍后领取\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/3256ed8e-752c-426d-9d64-26c9fdea9b09",
          "snapshotUrls": "https://i.gkd.li/i/17542869",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": ".ona.activity.VideoDetailActivity",
          "matches": "[text=\"放弃权益\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/37d3d077-1d3b-4b4d-87c2-4e0fa00d423e",
          "snapshotUrls": "https://i.gkd.li/i/19666924",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": ".ona.activity.SplashHomeActivity",
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] <2 RelativeLayout < RelativeLayout < RelativeLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/afb17212-1dcb-4d07-a9ce-b4f775ccd6fc",
          "snapshotUrls": "https://i.gkd.li/i/19666714",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": ".ona.activity.SplashHomeActivity",
          "matches": "TextView[text^=\"暂不需要\"] < @View[clickable=true] <6 View < ComposeView < FrameLayout <2 FrameLayout < FrameLayout <2 FrameLayout <2 [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/4f48767f-9cfa-4507-89ab-eb24f483d05e",
          "snapshotUrls": "https://i.gkd.li/i/20148077",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "activityIds": ".ona.activity.origin.OriginIconHomeActivity",
          "matches": "@TextView[text=\"x\"][clickable=true][childCount=0] + View >2 [text^=\"下载并领取\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/3a524370-1dbc-4017-a357-6728f809bd9c",
          "snapshotUrls": "https://i.gkd.li/i/23763930",
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 5,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ona.activity.SplashHomeActivity",
          "matches": "@[clickable=true] - [text*=\"开启通知\"]",
          "exampleUrls": "https://e.gkd.li/d16d04cb-8838-455c-9bc5-acebc936637b",
          "snapshotUrls": "https://i.gkd.li/i/20368590",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "matches": "LinearLayout > @[text=\"以后再说\"] + [text=\"好的\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700139",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": "@ImageView + * > [text^=\"开启通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670465",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 1
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "name": "投屏页面广告",
          "fastQuery": true,
          "activityIds": ".ona.activity.VideoDetailActivity",
          "matches": "@[clickable=true] - [text=\"广告\"]",
          "exampleUrls": "https://m.gkd.li/57941037/1b7518c9-4ca7-4905-8929-6f0130abf19f",
          "snapshotUrls": "https://i.gkd.li/i/14358913"
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.origin.OriginIconHomeActivity"
          ],
          "matches": "@[name$=\"ImageView\" || name$=\"FrameLayout\" ][childCount<2][clickable=true][visibleToUser=true][width<250 && height<150] <3 RelativeLayout < FrameLayout <2 FrameLayout < FrameLayout <2 ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <n [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/0ea465ad-e4e4-4af5-92a4-2d71e44845f4",
          "snapshotUrls": [
            "https://i.gkd.li/i/19667104",
            "https://i.gkd.li/i/21327634",
            "https://i.gkd.li/i/23121852",
            "https://i.gkd.li/i/23764004"
          ]
        },
        {
          "activityIds": [
            ".ona.activity.VideoDetailActivity",
            ".kmm.VideoDetailKmmActivityBk"
          ],
          "matches": "RelativeLayout > ComposeView > View > View[clickable=true][childCount=0][visibleToUser=true][index=parent.childCount.minus(1)]",
          "exampleUrls": "https://e.gkd.li/23606b5d-a8e9-4848-9b5a-059e7ecb08af",
          "snapshotUrls": [
            "https://i.gkd.li/i/22870972",
            "https://i.gkd.li/i/22894605"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".ona.activity.origin.OriginIconHomeActivity",
          "matches": "[text=\"关闭广告\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/17ea1473-f4b9-4622-b6ed-60486d6208f1",
          "snapshotUrls": "https://i.gkd.li/i/23619869"
        },
        {
          "name": "投屏页面广告 (2)",
          "fastQuery": true,
          "activityIds": "com.tencent.qqlive.ona.activity.VideoDetailActivity",
          "matches": "@[clickable=true] - [text=\"广告\"]",
          "exampleUrls": "https://m.gkd.li/57941037/1b7518c9-4ca7-4905-8929-6f0130abf19f",
          "snapshotUrls": "https://i.gkd.li/i/14358913"
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".ona.activity.SplashHomeActivity",
            ".ona.activity.VideoDetailActivity"
          ],
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] + [text^=\"免费看\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/5f6447c1-39f6-4711-a907-fdf36f502ec6",
          "snapshotUrls": [
            "https://i.gkd.li/i/17542913",
            "https://i.gkd.li/i/19667010"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": ".ona.activity.VideoDetailActivity",
          "matches": "@ImageView[id=null][text=null][desc=null][clickable=true][visibleToUser=true][width<150&&height<150] <2 FrameLayout[desc=\"float_widget_activity\"] < FrameLayout <3 FrameLayout <3 [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/8cac3233-7ead-4f5e-9126-51a195788276",
          "snapshotUrls": "https://i.gkd.li/i/19667028",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "activityIds": ".ona.activity.origin.OriginIconHomeActivity",
          "matches": "@RelativeLayout[clickable=true][childCount=2] < [desc=\"float_attent_banner_float_view_id\"]",
          "exampleUrls": "https://e.gkd.li/ad4ea4f1-22e7-4e9b-b194-8cdddda5c069",
          "snapshotUrls": "https://i.gkd.li/i/21139028",
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 8,
      "name": "评价提示-视频播放界面的评价悬浮窗",
      "desc": "点击关闭",
      "rules": [
        {
          "actionDelay": 1000,
          "fastQuery": true,
          "activityIds": ".ona.activity.VideoDetailActivity",
          "matches": "@View[clickable=true] + RecyclerView[childCount=5] > ViewGroup[childCount=2] > TextView[text=\"不推荐\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/b10125fa-5b1f-4a64-b258-392c57f4a1d8",
          "snapshotUrls": "https://i.gkd.li/i/20271517"
        },
        {
          "activityIds": ".kmm.VideoDetailKmmActivityBk",
          "matches": "@View[clickable=true][width<80 && height<80] + [text^=\"我认为\"]",
          "snapshotUrls": "https://i.gkd.li/i/26016085"
        }
      ]
    },
    {
      "key": 9,
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12700145",
      "rules": [
        {
          "matches": "TextView[text*=\"青少年模式\"] +n TextView[text=\"我知道了\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 10,
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.tencent.qqlive.redpacket.rain.OpenRedPacketActivity",
          "matches": "@ImageView[clickable=true] < ViewGroup[childCount=5] < [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d",
          "snapshotUrls": "https://i.gkd.li/i/13842643",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "matches": "@RelativeLayout[clickable=true] + * >3 [text=\"立即预约\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334",
          "snapshotUrls": "https://i.gkd.li/i/14567294",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".ona.activity.SplashHomeActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] -3 LinearLayout >2 [text=\"立即免费领取\"]",
          "exampleUrls": "https://e.gkd.li/8b128ebc-ce9c-4345-8094-769f9afa8cd6",
          "snapshotUrls": "https://i.gkd.li/i/17088095",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 11,
      "name": "分段广告",
      "enable": false,
      "rules": [
        {
          "name": "首页顶部卡片广告",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "matches": "FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true][childCount=0][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700299",
            "https://i.gkd.li/i/12700302",
            "https://i.gkd.li/i/13685929"
          ]
        },
        {
          "name": "首页顶部背景广告",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "matches": "[text=\"关闭广告\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12700518"
        },
        {
          "name": "个人中心页卡片广告",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "matches": "ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700175",
            "https://i.gkd.li/i/13759380"
          ]
        },
        {
          "name": "个人中心页顶部背景广告",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "matches": "RelativeLayout > FrameLayout + @ImageView[clickable=true] + ImageView + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/12777344"
        },
        {
          "name": "点击右上角[广告]",
          "activityIds": [
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity"
          ],
          "matches": "RelativeLayout[id=null] > @FrameLayout[clickable=true][id!=null] > ImageView[desc=\"the ad tag\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12737313",
            "https://i.gkd.li/i/13685842"
          ]
        },
        {
          "name": "点击右下角关闭",
          "matches": "ImageView[childCount=0] <<2 RelativeLayout + FrameLayout + RelativeLayout > RelativeLayout > RelativeLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13426421"
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.tencent.qqlive:id/feed_icon\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/42013a93-fb12-4747-92e0-95f5028eb8e5",
          "snapshotUrls": "https://i.gkd.li/i/14318802"
        },
        {
          "preKeys": 6,
          "fastQuery": true,
          "matches": "[id=\"com.tencent.qqlive:id/ad_feed_back_dislike\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/8746fdc8-828e-42bb-9160-8e67b7af2dc7",
          "snapshotUrls": "https://i.gkd.li/i/14318811"
        },
        {
          "name": "广告反馈卡片-点击不感兴趣",
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "matches": "@FrameLayout[clickable=true] >3 [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13695084"
        },
        {
          "name": "广告反馈卡片-选择原因",
          "fastQuery": true,
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "matches": "[text=\"关闭这条广告的原因\"] +(2) RecyclerView > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700303",
            "https://i.gkd.li/i/12829866",
            "https://i.gkd.li/i/13685871",
            "https://i.gkd.li/i/13703219"
          ]
        },
        {
          "preKeys": 9,
          "name": "广告反馈卡片-确认原因",
          "fastQuery": true,
          "activityIds": [
            "com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog",
            "com.tencent.qqlive.ona.activity.SplashHomeActivity",
            "com.tencent.qqlive.ona.activity.VideoDetailActivity",
            "com.tencent.qqlive.ona.offline.client.group.DownloadGroupActivity"
          ],
          "matches": "[text=\"关闭这条广告的原因\"] + [text=\"确认\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700210",
            "https://i.gkd.li/i/13685877",
            "https://i.gkd.li/i/13703298"
          ]
        }
      ]
    },
    {
      "key": 12,
      "name": "全屏广告-首页-广告弹窗",
      "enable": false,
      "resetMatch": "app",
      "actionMaximum": 1,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.tencent.qqlive.redpacket.rain.OpenRedPacketActivity",
          "matches": "@ImageView[clickable=true] < ViewGroup[childCount=5] < [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/05606ba5-1a89-470c-bcca-bd52561a634d",
          "snapshotUrls": "https://i.gkd.li/i/13842643",
          "resetMatch": "app",
          "actionMaximum": 1,
          "fastQuery": true
        },
        {
          "activityIds": "com.tencent.qqlive.ona.activity.SplashHomeActivity",
          "matches": "@RelativeLayout[clickable=true] + * >3 [text=\"立即预约\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c8131a06-837a-4c42-9a70-9e8a7fe21334",
          "snapshotUrls": "https://i.gkd.li/i/14567294",
          "resetMatch": "app",
          "actionMaximum": 1,
          "fastQuery": true
        }
      ]
    },
    {
      "key": 13,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "resetMatch": "app",
      "rules": [
        {
          "actionMaximum": 1,
          "fastQuery": true,
          "matches": "LinearLayout > @[text=\"以后再说\"] + [text=\"好的\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700139",
          "resetMatch": "app"
        },
        {
          "actionMaximumKey": 0,
          "matches": "@ImageView + * > [text^=\"开启通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13670465",
          "resetMatch": "app"
        }
      ]
    }
  ]
});

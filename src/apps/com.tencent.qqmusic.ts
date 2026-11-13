// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.qqmusic",
  "name": "QQ音乐",
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
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/bde5c1a5-3259-45d3-a6b8-8482f7818c6f",
          "snapshotUrls": "https://i.gkd.li/i/17056504",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6537da92-f5f6-4ee8-9219-5f39f7c5e8a2",
          "snapshotUrls": "https://i.gkd.li/i/17068758",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/bde5c1a5-3259-45d3-a6b8-8482f7818c6f",
          "snapshotUrls": "https://i.gkd.li/i/17056504",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6537da92-f5f6-4ee8-9219-5f39f7c5e8a2",
          "snapshotUrls": "https://i.gkd.li/i/17068758",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "activityIds": ".activity.AppStarterActivity",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".business.playernew.view.NewPlayerActivity",
          "matches": "[text^=\"广告\"] + [text=\"跳过\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13985169"
        },
        {
          "fastQuery": true,
          "matches": "@[desc=\"关闭\"][clickable=true] -(1,2) [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206534",
            "https://i.gkd.li/i/13797001"
          ],
          "activityIds": ".activity.AppStarterActivity"
        },
        {
          "fastQuery": true,
          "matches": "@ImageView - ImageView - RelativeLayout >3 [text=\"听歌入会赢绿钻\" || text=\"摇动点击广告跳转\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206982",
            "https://i.gkd.li/i/13218134"
          ],
          "activityIds": ".activity.AppStarterActivity"
        },
        {
          "fastQuery": true,
          "matches": "@[clickable=true] > [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15041019",
            "https://i.gkd.li/i/18227243"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18219557",
          "activityIds": ".activity.AppStarterActivity"
        },
        {
          "fastQuery": true,
          "matches": "@ImageView[clickable=true][height<87] <2 RelativeLayout - * > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/26806364",
          "activityIds": ".activity.AppStarterActivity"
        },
        {
          "fastQuery": true,
          "matches": "@ImageView[clickable=true] - [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/17450309",
          "activityIds": ".activity.AppStarterActivity"
        },
        {
          "fastQuery": true,
          "matches": "[text=\"广告 | 关闭\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/18227204",
          "activityIds": ".activity.AppStarterActivity"
        },
        {
          "matchTime": 10000,
          "matches": "RecyclerView > FrameLayout[desc!=null] >3 LinearLayout[id!=null] > ViewPager > FrameLayout[visibleToUser=true] > ImageView[childCount=0][clickable=true][width<150 && height<100][index=parent.childCount.minus(1)]",
          "exampleUrls": "https://e.gkd.li/c7b25408-26ed-4010-8506-88f614dccd26",
          "snapshotUrls": [
            "https://i.gkd.li/i/23623581",
            "https://i.gkd.li/i/23623677"
          ],
          "activityIds": ".activity.AppStarterActivity"
        },
        {
          "matches": "ImageView[width<80 && height<80] <<2 @ViewGroup[clickable=true] - [text^=\"hi~\"]",
          "snapshotUrls": "https://i.gkd.li/i/23930716",
          "activityIds": ".activity.AppStarterActivity"
        },
        {
          "matches": "RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15756931",
          "activityIds": ".activity.AppStarterActivity"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusic.business.playernew.view.NewPlayerActivity",
          "matches": "[text^=\"广告\"] + [text=\"跳过\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13985169"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "matches": "@[desc=\"关闭\"][clickable=true] -(1,2) [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206534",
            "https://i.gkd.li/i/13797001"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "matches": "@ImageView - ImageView - RelativeLayout >n [text=\"听歌入会赢绿钻\"||text=\"摇动点击广告跳转\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206982",
            "https://i.gkd.li/i/13218134"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "matches": "@[clickable=true] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/15041019"
        },
        {
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "matches": "RecyclerView > LinearLayout[childCount=3] >5 ViewGroup[childCount=3] > @ViewGroup[clickable=true] >2 ImageView[text=null][desc=null]",
          "snapshotUrls": "https://i.gkd.li/i/15756931"
        },
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.AppStarterActivity",
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/17450309"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.tencent.qqmusic.activity.TranslucentWebViewActivity",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".activity.TranslucentWebViewActivity",
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity",
            "com.tencent.qqmusiccommon.hybrid.HybridViewActivity"
          ],
          "matches": "@[desc^=\"关闭\"][desc.length<10][visibleToUser=true][width>50 && width<177] <<(25-n) [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13115121",
            "https://i.gkd.li/i/14549936",
            "https://i.gkd.li/i/14798904",
            "https://i.gkd.li/i/15209764",
            "https://i.gkd.li/i/15261116",
            "https://i.gkd.li/i/17459008",
            "https://i.gkd.li/i/23930628",
            "https://i.gkd.li/i/23930853",
            "https://i.gkd.li/i/17057551",
            "https://i.gkd.li/i/23495699",
            "https://i.gkd.li/i/13806773"
          ],
          "exampleUrls": "https://e.gkd.li/47107dd3-b19a-4486-a0d1-6d9aa62ee722",
          "fastQuery": true
        },
        {
          "activityIds": [
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity"
          ],
          "matches": "@ImageView[id=null][text=null][desc=null][childCount=0][visibleToUser=true][width<130 && height<130] <<(7,8,9) [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18439138",
            "https://i.gkd.li/i/22924866",
            "https://i.gkd.li/i/20745872",
            "https://i.gkd.li/i/22699223",
            "https://i.gkd.li/i/30530361"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/34188274",
            "https://i.gkd.li/i/34188273"
          ],
          "exampleUrls": "https://e.gkd.li/881cddd2-e4ec-472e-8bf8-00f26f61cbc4",
          "fastQuery": true
        },
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.AppStarterActivity",
          "matches": "@ViewGroup[childCount=0][clickable=true][visibleToUser=true][width<150 && height<150] < ViewGroup[childCount=1] < ViewGroup < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/f1c596e5-36b6-485b-aa55-a235d57bddf9",
          "snapshotUrls": "https://i.gkd.li/i/22699207",
          "fastQuery": true
        },
        {
          "name": "免流弹窗",
          "activityIds": [
            ".activity.AppStarterActivity",
            ".business.playernew.view.NewPlayerActivity"
          ],
          "matches": "[text=\"流量够用\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13197868",
            "https://i.gkd.li/i/15285647"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".activity.AppStarterActivity",
          "matches": "@ViewGroup[childCount=0][clickable=true] <2 ViewGroup[childCount=2] < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806782",
          "fastQuery": true
        },
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.AppStarterActivity",
          "matches": "[visibleToUser=true][desc$=\"不再提示\"]",
          "exampleUrls": "https://e.gkd.li/e3d904e1-dfe5-4d12-b8c8-b1eead8459c9",
          "snapshotUrls": "https://i.gkd.li/i/18428240",
          "fastQuery": true
        },
        {
          "matchTime": 10000,
          "activityIds": "com.tencent.qqmusic.activity.TranslucentWebViewActivity",
          "matches": "@View[clickable=true][visibleToUser=true][desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13115121",
            "https://i.gkd.li/i/14549936",
            "https://i.gkd.li/i/14798904",
            "https://i.gkd.li/i/15209764",
            "https://i.gkd.li/i/15261116",
            "https://i.gkd.li/i/17459008"
          ],
          "fastQuery": true
        },
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.AppStarterActivity",
          "matches": "[desc=\"关闭弹窗\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/47107dd3-b19a-4486-a0d1-6d9aa62ee722",
          "snapshotUrls": "https://i.gkd.li/i/17057551",
          "fastQuery": true
        },
        {
          "forcedTime": 5000,
          "matches": "View[id=\"js_close_btn\"][desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13115121",
            "https://i.gkd.li/i/14798904"
          ],
          "activityIds": "com.tencent.qqmusic.activity.TranslucentWebViewActivity",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示-内测体验弹窗",
      "desc": "点击[不再提醒]",
      "order": -9,
      "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13178485",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.AppStarterActivity",
          "matches": "[text=\"抢先体验\"] -2 [text=\"不再提醒\"]",
          "snapshotUrls": "https://i.gkd.li/i/13178485",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[text=\"抢先体验\"] -2 [text=\"不再提醒\"]",
          "snapshotUrls": "https://i.gkd.li/i/13178485",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "评价提示-好评弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.AppStarterActivity",
          "matches": "@[vid=\"close_btn\"] - * > [text*=\"好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/14881903",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[vid=\"close_btn\"] - * > [text*=\"好评\"]",
          "snapshotUrls": "https://i.gkd.li/i/14881903",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "分段广告-评论区广告",
      "desc": "点击右下角展开-点击[不感兴趣]",
      "activityIds": ".activity.base.FragmentActivityWithMinibar",
      "rules": [
        {
          "matches": "RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View",
          "snapshotUrls": "https://i.gkd.li/i/15010210",
          "activityIds": ".activity.base.FragmentActivityWithMinibar"
        },
        {
          "preKeys": 0,
          "fastQuery": true,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/15010226",
          "activityIds": ".activity.base.FragmentActivityWithMinibar"
        },
        {
          "matches": "RecyclerView > ViewGroup > ViewGroup[childCount=6] > @ViewGroup[clickable=true][childCount=1] > ViewGroup > View",
          "snapshotUrls": "https://i.gkd.li/i/15010210",
          "activityIds": "com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar"
        },
        {
          "preKeys": 2,
          "fastQuery": true,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/15010226",
          "activityIds": "com.tencent.qqmusic.activity.base.FragmentActivityWithMinibar"
        }
      ]
    },
    {
      "key": 6,
      "name": "其他-播放页[猜你也会喜欢]推荐",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".business.playernew.view.NewPlayerActivity",
          "matches": "@ImageView[childCount=0][clickable=true] -2 [text=\"猜你也会喜欢\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/40846baf-4638-4740-970a-30924cbd9414",
          "snapshotUrls": "https://i.gkd.li/i/18410610"
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-免流弹窗",
      "desc": "点击[流量够用]",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.tencent.qqmusic.activity.AppStarterActivity",
            "com.tencent.qqmusic.business.playernew.view.NewPlayerActivity"
          ],
          "matches": "[text=\"流量够用\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13197868",
            "https://i.gkd.li/i/15285647"
          ]
        }
      ]
    },
    {
      "key": 8,
      "name": "全屏广告-看广告免费听歌弹窗",
      "desc": "点击X",
      "enable": false,
      "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity",
      "snapshotUrls": "https://i.gkd.li/i/13806773",
      "rules": [
        {
          "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity",
          "matches": "@[desc=\"关闭按钮\"] <n * > [desc^=\"看广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806773"
        }
      ]
    },
    {
      "key": 9,
      "name": "全屏广告-VIP弹窗",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "matches": "[id=\"android:id/content\"] >4 ViewGroup[childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/13806782"
        },
        {
          "activityIds": "com.tencent.qqmusic.activity.TranslucentWebViewActivity",
          "matches": "@View[clickable=true][desc=\"关闭\"] +2 * >2 [desc$=\"确认协议并开通\" || desc=\"立即开通会员\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15209764",
            "https://i.gkd.li/i/15261116"
          ]
        }
      ]
    },
    {
      "key": 10,
      "name": "全屏广告-高品质音质弹窗",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.tencent.qqmusic.business.playernew.view.NewPlayerActivity",
          "matches": "[id=\"android:id/content\"] >4 FrameLayout[childCount=6] > FrameLayout[childCount=1][text=null][index=1] > ImageView[visibleToUser=true][childCount=0]",
          "exampleUrls": "https://e.gkd.li/bde2d326-6b44-4d4d-b8f6-8bfeb97d7e29",
          "snapshotUrls": "https://i.gkd.li/i/16914135"
        }
      ]
    },
    {
      "key": 11,
      "name": "全屏广告-签到弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "matches": "[id=\"android:id/content\"] > FrameLayout > FrameLayout > ViewGroup[childCount=2] > ViewGroup > ViewGroup[clickable=true][childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/15443191",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 12,
      "name": "局部广告-广告卡片",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "matches": "@[desc=\"关闭\"] -(1,2) [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206534",
            "https://i.gkd.li/i/13797001"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
          "matches": "@ImageView - ImageView - RelativeLayout >3 [text=\"听歌入会赢绿钻\"||text=\"摇动点击广告跳转\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206982",
            "https://i.gkd.li/i/13218134"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 13,
      "name": "全屏广告-播放页-推荐开启高音质弹窗",
      "enable": false,
      "activityIds": "com.tencent.qqmusic.activity.TranslucentWebViewActivity",
      "rules": [
        {
          "matches": "[text^=\"推荐您开启\"] -3 [desc=\"关闭\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14550144",
          "activityIds": "com.tencent.qqmusic.activity.TranslucentWebViewActivity"
        }
      ]
    },
    {
      "key": 14,
      "name": "评价提示",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity",
      "snapshotUrls": "https://i.gkd.li/i/14881903",
      "rules": [
        {
          "matches": "[text*=\"好评\"] <4 ViewGroup + [vid=\"close_btn\"]",
          "fastQuery": true,
          "activityIds": "com.tencent.qqmusic.activity.AppStarterActivity"
        }
      ]
    }
  ]
});

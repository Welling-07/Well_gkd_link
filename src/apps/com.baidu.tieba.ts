// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.tieba",
  "name": "百度贴吧",
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
          "matches": "TextView[text^=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775906",
            "https://i.gkd.li/i/12566191",
            "https://i.gkd.li/i/12870916",
            "https://i.gkd.li/i/13233500"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13322227",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "TextView[text=\"广告\"] - @LinearLayout[clickable=true] > [text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13168386",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/13322227",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "name": "【圆圈跳过】型-来自穿山甲SDK",
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13322227",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "name": "【x+关闭】型",
          "matches": "TextView[text=\"广告\"] - @LinearLayout[clickable=true] > [text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13168386",
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
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".tblauncher.MainTabActivity",
          "matches": "@View[clickable=true] < [childCount=2] -2 [text=\"开启互动消息通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/34249649",
          "exampleUrls": "https://e.gkd.li/7fa4aebb-42a7-47f7-bb23-e43fbac7e03b",
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app"
        },
        {
          "activityIds": ".pb.pb.main.PbActivity",
          "matches": "@ImageView[clickable=true] -2 LinearLayout > [visibleToUser=true][text^=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13536170",
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app"
        },
        {
          "activityIds": ".immessagecenter.mention.reply.ReplyMeActivity",
          "matches": "TextView[text=\"开启消息推送\"] +2 TextView[text=\"不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13675694",
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "matches": "[text=\"开启通知\"] <n * > [clickable=true][text=\"暂不开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13804455",
            "https://i.gkd.li/i/20918198"
          ],
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[clickable=true] -2 LinearLayout > [text^=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13536170",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[text=\"开启消息推送\"] +2 TextView[text=\"不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13675694",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启通知\"] - [text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13804455",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-信息流广告",
      "desc": "关闭广告、直播推广",
      "fastQuery": true,
      "forcedTime": 10000,
      "activityIds": [
        ".tblauncher.MainTabActivity",
        ".pb.pb.main.PbActivity",
        ".forum.ForumActivity"
      ],
      "rules": [
        {
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".forum.ForumActivity"
          ],
          "matches": "@ImageView[clickable=true][visibleToUser=true] <(1,2) LinearLayout <4 RelativeLayout +2 RelativeLayout >2 [text=\"直播中\"]",
          "exampleUrls": "https://e.gkd.li/94be671a-4709-4aa5-b114-d4cfabe0ed9c",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595137",
            "https://i.gkd.li/i/16596473"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < RelativeLayout <3 LinearLayout < RelativeLayout + LinearLayout >2 [text$=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/3b2f0906-f620-4fda-a59f-334a9548836e",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595127",
            "https://i.gkd.li/i/16595515",
            "https://i.gkd.li/i/16596130"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".pb.pb.main.PbActivity",
            ".forum.ForumActivity"
          ]
        },
        {
          "activityIds": ".pb.pb.main.PbActivity",
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < FrameLayout -(1,2) [text$=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/683d8e48-909e-4c06-9686-9a9778456e78",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595120",
            "https://i.gkd.li/i/16595133"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "activityIds": ".pb.pb.main.PbActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] -3 [text=\"直播中\"]",
          "exampleUrls": "https://e.gkd.li/ad2f214b-0e2a-400e-9511-d35d7f14c004",
          "snapshotUrls": "https://i.gkd.li/i/16596210",
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "matches": "ImageView < @[vid=\"obfuscated\"][clickable=true][childCount=1] -n * < RelativeLayout + FrameLayout >n [text=\"广告\"]",
          "exampleUrls": [
            "https://e.gkd.li/0ac82700-02f3-40c6-bf45-b21e365ac84c",
            "https://e.gkd.li/511c57bc-e11a-43b3-b4a3-9b49cf79d509"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16595301",
            "https://i.gkd.li/i/16596195",
            "https://i.gkd.li/i/16596775",
            "https://i.gkd.li/i/21524232",
            "https://i.gkd.li/i/21529443",
            "https://i.gkd.li/i/21556758",
            "https://i.gkd.li/i/24520138",
            "https://i.gkd.li/i/25710401",
            "https://i.gkd.li/i/29640762"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".pb.pb.main.PbActivity",
            ".forum.ForumActivity"
          ]
        },
        {
          "activityIds": ".pb.pb.main.PbActivity",
          "matches": "@[clickable=true][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/0d5fea40-44ac-4b47-8b3c-e8388640e37d",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595124",
            "https://i.gkd.li/i/16596297",
            "https://i.gkd.li/i/24541094"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16632851",
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "activityIds": ".tblauncher.MainTabActivity",
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] < LinearLayout[childCount=1] <4 RelativeLayout +3 LinearLayout >4 [text=\"小游戏\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17943902",
            "https://i.gkd.li/i/18217417"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "activityIds": ".tblauncher.MainTabActivity",
          "matches": "ImageView < @[clickable=true] <2 FrameLayout[childCount=2] -n ViewGroup > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28345921",
            "https://i.gkd.li/i/28432320"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "activityIds": ".pb.pb.main.PbActivity",
          "matches": "ImageView < @[clickable=true][width<82 && height<82] <5 [childCount=5] + [childCount=1] >4 [text=\"权限\" || text=\"隐私\" || text=\"功能\"] -(1,2,3) [text$=\"有限公司\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28389197",
            "https://i.gkd.li/i/29578950"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "activityIds": ".tblauncher.MainTabActivity",
          "matches": "@ImageView[clickable=true][width<78] <2 [childCount=2] >4 [text=\"语音中\"]",
          "snapshotUrls": "https://i.gkd.li/i/28432229",
          "fastQuery": true,
          "forcedTime": 10000
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
            7,
            8,
            9
          ],
          "name": "②点击[不感兴趣]",
          "matches": "@View[clickable=true][visibleToUser=true] - [text^=\"选择不喜欢\"]",
          "exampleUrls": [
            "https://e.gkd.li/67a159e7-59ea-45f6-909c-7a681c4d3838",
            "https://e.gkd.li/5f9ebe98-dfd1-41a4-bb93-b1a45aa00549"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16595134",
            "https://i.gkd.li/i/16595511",
            "https://i.gkd.li/i/16595113"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".pb.pb.main.PbActivity",
            ".forum.ForumActivity"
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
            7,
            8,
            9
          ],
          "name": "②选一个[理由]",
          "matches": "[text=\"已经看过\" || text=\"内容质量差\" || text=\"不感兴趣\" || text=\"广告重复\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26634661",
            "https://i.gkd.li/i/28432358"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".pb.pb.main.PbActivity",
            ".forum.ForumActivity"
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
            7,
            8,
            9
          ],
          "name": "②选[不喜欢]该直播",
          "matches": "@[clickable=true] >3 [text=\"不喜欢\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27052244",
            "https://i.gkd.li/i/28432247"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".pb.pb.main.PbActivity",
            ".forum.ForumActivity"
          ]
        },
        {
          "preKeys": [
            11,
            12
          ],
          "name": "③点击[确定]",
          "matches": "@[clickable=true] - [text^=\"已选\"][text$=\"理由\"]",
          "snapshotUrls": "https://i.gkd.li/i/26934788",
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".pb.pb.main.PbActivity",
            ".forum.ForumActivity"
          ]
        },
        {
          "activityIds": [
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tieba.forum.ForumActivity"
          ],
          "matches": "@ImageView[clickable=true][visibleToUser=true] <(1,2) LinearLayout <4 RelativeLayout +2 RelativeLayout >2 [text=\"直播中\"]",
          "exampleUrls": "https://e.gkd.li/94be671a-4709-4aa5-b114-d4cfabe0ed9c",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595137",
            "https://i.gkd.li/i/16596473"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "activityIds": [
            "com.baidu.tieba.forum.ForumActivity",
            "com.baidu.tieba.pb.pb.main.PbActivity",
            "com.baidu.tieba.tblauncher.MainTabActivity"
          ],
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < RelativeLayout <3 LinearLayout < RelativeLayout + LinearLayout >2 [text$=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/3b2f0906-f620-4fda-a59f-334a9548836e",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595127",
            "https://i.gkd.li/i/16595515",
            "https://i.gkd.li/i/16596130"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < FrameLayout -(1,2) [text$=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/683d8e48-909e-4c06-9686-9a9778456e78",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595120",
            "https://i.gkd.li/i/16595133"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] -3 [text=\"直播中\"]",
          "exampleUrls": "https://e.gkd.li/ad2f214b-0e2a-400e-9511-d35d7f14c004",
          "snapshotUrls": "https://i.gkd.li/i/16596210",
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "preKeys": [
            14,
            15,
            16,
            17
          ],
          "activityIds": [
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tieba.pb.pb.main.PbActivity",
            "com.baidu.tieba.forum.ForumActivity"
          ],
          "matches": "@View[clickable=true][visibleToUser=true] - [text^=\"选择不喜欢\"]",
          "exampleUrls": "https://e.gkd.li/67a159e7-59ea-45f6-909c-7a681c4d3838",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595134",
            "https://i.gkd.li/i/16595511",
            "https://i.gkd.li/i/16595113"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-首页、推荐列表顶部卡片广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "activityIds": [
        ".tblauncher.MainTabActivity",
        ".frs.FrsActivity"
      ],
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13060892",
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".frs.FrsActivity"
          ]
        },
        {
          "matches": "RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13060892",
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": [
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tieba.frs.FrsActivity"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-游戏类推广",
      "desc": "首页,游戏公测/上线等推广,点击x掉",
      "fastQuery": true,
      "activityIds": ".tblauncher.MainTabActivity",
      "rules": [
        {
          "matches": "@ImageView <2 [childCount=2] <4 [index=0][childCount=4] +(1,2) FrameLayout > [text*=\"定档\" || text*=\"预约\" || text*=\"测试\"][text*=\"《\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30164473",
            "https://i.gkd.li/i/30164474",
            "https://i.gkd.li/i/30164475",
            "https://i.gkd.li/i/30165036",
            "https://i.gkd.li/i/30346796"
          ],
          "exampleUrls": "https://e.gkd.li/45efc73b-e2e4-4c61-af95-607d500b8ac7",
          "fastQuery": true,
          "activityIds": ".tblauncher.MainTabActivity"
        },
        {
          "matches": "@ImageView <2 [childCount=2] <4 [index=0][childCount=4] +n [childCount>3] > [text=\"权限\" || text=\"隐私\" || text=\"功能\"] -(1,2,3) [text*=\"有限公司\"]",
          "snapshotUrls": "https://i.gkd.li/i/30164269",
          "exampleUrls": "https://e.gkd.li/602291ca-dd06-4116-8252-65fe8d4e610d",
          "fastQuery": true,
          "activityIds": ".tblauncher.MainTabActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12496934",
      "fastQuery": true,
      "priorityTime": 10000,
      "rules": [
        {
          "activityIds": ".UpdateDialog",
          "matches": "[text=\"稍后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/16908501",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "matchTime": 10000
        },
        {
          "matches": "[text=\"稍后再说\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".tblauncher.MainTabActivity",
          "matches": "TextView[index=1][width<141 && height<141][visibleToUser=true] - [getChild(0).name$=\"Image\"] < View < View < View < WebView < WebView < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/33748842",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "点击正下方x关闭",
          "activityIds": [
            ".frs.FrsActivity",
            ".tblauncher.MainTabActivity",
            ".LogoActivity"
          ],
          "matches": "@TextView[vid=\"obfuscated\"][clickable=true][childCount=0][visibleToUser=true] - FrameLayout[childCount=2][getChild(1).text=\"广告\"] < RelativeLayout[childCount=2] < [parent=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13168383",
            "https://i.gkd.li/i/13322120",
            "https://i.gkd.li/i/13328246"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "activityIds": [
            ".tblauncher.MainTabActivity",
            "com.baidu.tbadk.browser.TBWebContainerActivity",
            ".forum.ForumActivity"
          ],
          "matches": "WebView[text!=null] > View[childCount=1] > View[childCount=3] > @[visibleToUser=true][index=2][width<150]",
          "exampleUrls": "https://e.gkd.li/ac3d88b7-31a2-441f-a4c8-8a73eaec24b9",
          "snapshotUrls": [
            "https://i.gkd.li/i/13060891",
            "https://i.gkd.li/i/16703244",
            "https://i.gkd.li/i/34382812"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/29640529",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "点击右上角x关闭",
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "matches": "View[childCount=3] > @View[clickable=true][childCount=1] > Image",
          "snapshotUrls": [
            "https://i.gkd.li/i/13060891",
            "https://i.gkd.li/i/13222361"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "点击正下方x关闭 (2)",
          "activityIds": [
            "com.baidu.tieba.frs.FrsActivity",
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tieba.LogoActivity"
          ],
          "matches": "@TextView[clickable=true && text=null] - FrameLayout TextView[text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13168383",
            "https://i.gkd.li/i/13322120",
            "https://i.gkd.li/i/13328246"
          ],
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "activityIds": "com.baidu.tieba.tblauncher.MainTabActivity",
          "matches": "@TextView[visibleToUser=true][text=\"\"] -2 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/ac3d88b7-31a2-441f-a4c8-8a73eaec24b9",
          "snapshotUrls": "https://i.gkd.li/i/16703244",
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-悬浮小广告",
      "matchDelay": 500,
      "matchTime": 10000,
      "actionMaximum": 1,
      "activityIds": [
        ".pb.pb.main.PbActivity",
        ".tblauncher.MainTabActivity",
        ".forum.ForumActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "name": "悬浮广告1",
          "matches": "@[clickable=true][width<108] <2 [width<350][childCount=2] > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16622395",
            "https://i.gkd.li/i/16632851",
            "https://i.gkd.li/i/34523272"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/13327933",
          "matchDelay": 500,
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": [
            ".pb.pb.main.PbActivity",
            ".tblauncher.MainTabActivity",
            ".forum.ForumActivity"
          ]
        },
        {
          "name": "悬浮广告2",
          "matches": "RelativeLayout[childCount=2] >2 ImageView[clickable=true][visibleToUser=true][width<77]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14291964",
            "https://i.gkd.li/i/13625336",
            "https://i.gkd.li/i/13627881"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/28344945",
          "matchDelay": 500,
          "matchTime": 10000,
          "actionMaximum": 1,
          "activityIds": [
            ".pb.pb.main.PbActivity",
            ".tblauncher.MainTabActivity",
            ".forum.ForumActivity"
          ]
        },
        {
          "name": "评论区左侧悬浮广告",
          "activityIds": ".pb.pb.main.PbActivity",
          "matches": "FrameLayout[getChild(1).getChild(1).text!=null] + @FrameLayout[clickable=true] > LinearLayout[childCount=2] > ImageView + [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13296280",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20361318",
          "matchDelay": 500,
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "首页右侧悬浮广告-1",
          "activityIds": "com.baidu.tieba.tblauncher.MainTabActivity",
          "matches": "@ImageView[clickable=true] - TextView[text=\"广告\"] < RelativeLayout + ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/13115167",
            "https://i.gkd.li/i/13327933"
          ],
          "matchDelay": 500,
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "首页右侧悬浮广告-2",
          "activityIds": "com.baidu.tieba.tblauncher.MainTabActivity",
          "matches": "RelativeLayout >2 RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14291964",
          "matchDelay": 500,
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "评论区左侧悬浮广告 (2)",
          "fastQuery": true,
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "matches": "LinearLayout[childCount=2] > @ImageView + [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13296280",
          "matchDelay": 500,
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "activityIds": [
            "com.baidu.tieba.pb.pb.main.PbActivity",
            "com.baidu.tieba.tblauncher.MainTabActivity"
          ],
          "matches": "RelativeLayout[childCount=2] > RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625336",
            "https://i.gkd.li/i/13627881"
          ],
          "matchDelay": 500,
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 8,
      "name": "局部广告-[帖子内/吧内]底部悬浮窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": ".pb.pb.main.PbActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text$=\"热议中\" || text^=\"猜你喜欢\" || text*=\"进吧逛逛\"]",
          "exampleUrls": "https://e.gkd.li/047ab857-f690-473b-9b18-43369319c5ce",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595234",
            "https://i.gkd.li/i/16619736",
            "https://i.gkd.li/i/16647874"
          ],
          "fastQuery": true,
          "actionMaximum": 1
        },
        {
          "activityIds": ".forum.ForumActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text^=\"关注本吧\"]",
          "exampleUrls": "https://e.gkd.li/756c02b5-a72c-4ca4-a05c-a33202e8ecd6",
          "snapshotUrls": "https://i.gkd.li/i/17992981",
          "fastQuery": true,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 10,
      "name": "局部广告-帖子底部话题卡片",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".pb.pb.main.PbActivity",
          "matches": "@ImageView[clickable=true] -2 [text=\"进入话题查看更多\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2fa193f8-5e0e-4f85-b828-eb3e22cb60a3",
          "snapshotUrls": "https://i.gkd.li/i/14586847",
          "actionMaximum": 1
        },
        {
          "fastQuery": true,
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "matches": "@ImageView[clickable=true] -2 [text=\"进入话题查看更多\"]",
          "exampleUrls": "https://m.gkd.li/57941037/2fa193f8-5e0e-4f85-b828-eb3e22cb60a3",
          "snapshotUrls": "https://i.gkd.li/i/14586847",
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 11,
      "name": "全屏广告-会员弹窗",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "forcedTime": 10000,
          "activityIds": [
            ".tblauncher.MainTabActivity",
            "com.baidu.tbadk.browser.TBWebContainerActivity"
          ],
          "matches": "WebView[text=\"会员弹窗\" || text=\"一键签到\"] >(3,4) TextView + Image[text!=null][childCount=0][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/dd2f2a00-e9d3-47fa-986d-09ae6180d932",
          "snapshotUrls": [
            "https://i.gkd.li/i/14630806",
            "https://i.gkd.li/i/15119439",
            "https://i.gkd.li/i/15119451",
            "https://i.gkd.li/i/16426630"
          ],
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "forcedTime": 10000,
          "activityIds": [
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tbadk.browser.TBWebContainerActivity"
          ],
          "matches": "WebView[text=\"会员弹窗\" || text=\"一键签到\"] >(3,4) TextView + Image[text!=null][childCount=0][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/dd2f2a00-e9d3-47fa-986d-09ae6180d932",
          "snapshotUrls": [
            "https://i.gkd.li/i/14630806",
            "https://i.gkd.li/i/15119439",
            "https://i.gkd.li/i/15119451",
            "https://i.gkd.li/i/16426630"
          ],
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "forcedTime": 5000,
          "activityIds": [
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tbadk.browser.TBWebContainerActivity"
          ],
          "matches": "WebView[text=\"会员弹窗\" || text=\"一键签到\"] >3 TextView + Image[text!=null][childCount=0][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/dd2f2a00-e9d3-47fa-986d-09ae6180d932",
          "snapshotUrls": [
            "https://i.gkd.li/i/14630806",
            "https://i.gkd.li/i/15119439",
            "https://i.gkd.li/i/15119451"
          ],
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 12,
      "name": "局部广告-感兴趣的吧推广",
      "desc": "关闭首页、吧内其他贴吧的推广",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".tblauncher.MainTabActivity",
            ".forum.ForumActivity"
          ],
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true] - [text=\"你可能感兴趣的吧\" || text^=\"本吧的人都在逛\"]",
          "exampleUrls": "https://e.gkd.li/bfc13aa1-579f-46f4-beff-64b3f8ec693a",
          "snapshotUrls": [
            "https://i.gkd.li/i/16914357",
            "https://i.gkd.li/i/17944680",
            "https://i.gkd.li/i/18218517"
          ]
        }
      ]
    },
    {
      "key": 13,
      "name": "局部广告-帖子内[进吧逛逛]悬浮窗",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text$=\"热议中\" || text^=\"猜你喜欢\" || text*=\"进吧逛逛\"]",
          "exampleUrls": "https://e.gkd.li/047ab857-f690-473b-9b18-43369319c5ce",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595234",
            "https://i.gkd.li/i/16619736",
            "https://i.gkd.li/i/16647874"
          ],
          "fastQuery": true,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 14,
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "forcedTime": 10000,
      "rules": [
        {
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "matches": "@[clickable=true][vid=\"obfuscated\"][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/337a7e8b-500f-4a0b-ae08-018c5222d4da",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595124",
            "https://i.gkd.li/i/16596297",
            "https://i.gkd.li/i/16632851"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "activityIds": [
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tieba.pb.pb.main.PbActivity",
            "com.baidu.tieba.forum.ForumActivity"
          ],
          "matches": "@FrameLayout[clickable=true][visibleToUser=true] <4 RelativeLayout + FrameLayout >7 [text=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/5b53c3be-4972-44aa-a62e-3ca780ae7098",
          "snapshotUrls": [
            "https://i.gkd.li/i/16595301",
            "https://i.gkd.li/i/16596195",
            "https://i.gkd.li/i/16596775"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        }
      ]
    },
    {
      "key": 15,
      "name": "局部广告-帖子推广",
      "desc": "关闭首页、吧内游戏推广帖子",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.baidu.tieba.forum.ForumActivity",
            "com.baidu.tieba.tblauncher.MainTabActivity"
          ],
          "excludeMatches": "RelativeLayout[childCount=2] > [text=\"热门\"]",
          "matches": "@ImageView[clickable=true][visibleToUser=true] < LinearLayout <4 RelativeLayout + FrameLayout > [text^=\"游戏\"]",
          "exampleUrls": "https://e.gkd.li/e47bb03c-a7ac-4fdf-a5c5-dac1f8606d95",
          "snapshotUrls": [
            "https://i.gkd.li/i/16828309",
            "https://i.gkd.li/i/16828230",
            "https://i.gkd.li/i/16828318",
            "https://i.gkd.li/i/16828401",
            "https://i.gkd.li/i/16828436"
          ]
        }
      ]
    },
    {
      "key": 16,
      "name": "未分类-申请消息提醒弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "matches": "@ImageView[clickable=true] -2 LinearLayout > [text^=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13536170",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.baidu.tieba.immessagecenter.mention.reply.ReplyMeActivity",
          "matches": "TextView[text=\"开启消息推送\"] +2 TextView[text=\"不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13675694",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.baidu.tbadk.browser.TBWebContainerActivity",
          "matches": "[text=\"开启通知\"] - [text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13804455",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 17,
      "name": "未分类-信息流广告",
      "desc": "推荐帖子列表,评论区列表:像正常内容的广告,关闭时弹窗选原因",
      "enable": false,
      "activityIds": [
        "com.baidu.tieba.pb.pb.main.PbActivity",
        "com.baidu.tieba.frs.FrsActivity",
        "com.baidu.tieba.tblauncher.MainTabActivity",
        "com.baidu.tieba.forum.ForumActivity"
      ],
      "rules": [
        {
          "name": "点击广告【x】",
          "matches": [
            "RelativeLayout > TextView[text$=\"广告\"][clickable=true]",
            "LinearLayout[clickable=true][childCount=1] > @FrameLayout[clickable=true][childCount=1][desc=null] > ImageView"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12775913",
            "https://i.gkd.li/i/13043133",
            "https://i.gkd.li/i/13054256",
            "https://i.gkd.li/i/12775930",
            "https://i.gkd.li/i/12840951",
            "https://i.gkd.li/i/12775916",
            "https://i.gkd.li/i/12775892",
            "https://i.gkd.li/i/13328300",
            "https://i.gkd.li/i/13402610",
            "https://i.gkd.li/i/13459289"
          ],
          "activityIds": [
            "com.baidu.tieba.pb.pb.main.PbActivity",
            "com.baidu.tieba.frs.FrsActivity",
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tieba.forum.ForumActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "关闭原因-【不感兴趣】",
          "matches": "@View[text=null] - TextView[text=\"选择不喜欢理由\"][index=0]",
          "snapshotUrls": "https://i.gkd.li/i/12775914",
          "activityIds": [
            "com.baidu.tieba.pb.pb.main.PbActivity",
            "com.baidu.tieba.frs.FrsActivity",
            "com.baidu.tieba.tblauncher.MainTabActivity",
            "com.baidu.tieba.forum.ForumActivity"
          ]
        }
      ]
    },
    {
      "key": 18,
      "name": "未分类-帖子底部内容推荐卡片",
      "desc": "关闭时弹窗选原因",
      "enable": false,
      "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
      "rules": [
        {
          "matches": "LinearLayout > RelativeLayout[id!=null][clickable=false] > ImageView[id=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12775882",
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity"
        },
        {
          "preKeys": 0,
          "name": "关闭原因-不感兴趣",
          "matches": "@View[text=null] - TextView[text=\"选择不喜欢理由\"][index=0]",
          "snapshotUrls": "https://i.gkd.li/i/12775914",
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity"
        }
      ]
    },
    {
      "key": 19,
      "name": "局部广告-帖子内 \"进吧逛逛\" 弹窗",
      "enable": false,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.baidu.tieba.pb.pb.main.PbActivity",
          "matches": "[vid=\"tip_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/e45542c9-cee7-4fa6-874d-0682c53f629b",
          "snapshotUrls": "https://i.gkd.li/i/14571741",
          "actionMaximum": 1
        }
      ]
    }
  ]
});

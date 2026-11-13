// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.ugc.aweme",
  "name": "抖音",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "excludeActivityIds": ".search.activity.SearchResultActivity",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/202942ce-259c-4b9d-b3b3-06afbac8145f",
          "snapshotUrls": "https://i.gkd.li/i/13216121",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17811608",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告",
      "desc": "点击x掉",
      "fastQuery": true,
      "activityIds": [
        ".live.LivePlayActivity",
        ".detail.ui.DetailActivity"
      ],
      "rules": [
        {
          "name": "①直播间右下角浮窗",
          "matches": "@[width<114 && height<114][top=parent.top] <3 [childCount>4] >5 [text=\"打开游戏\" || text=\"下载\" || text=\"立即查看\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22743677",
            "https://i.gkd.li/i/30297510",
            "https://i.gkd.li/i/33388572"
          ],
          "fastQuery": true,
          "activityIds": [
            ".live.LivePlayActivity",
            ".detail.ui.DetailActivity"
          ]
        },
        {
          "name": "②直播间右下角浮窗",
          "matches": "[desc=\"购买\"][visibleToUser=true] <n * < * -2 FrameLayout > [vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/26754062",
            "https://i.gkd.li/i/29388290",
            "https://i.gkd.li/i/30374168"
          ],
          "exampleUrls": "https://e.gkd.li/8c5e6526-83e5-4ec6-b532-367ff6045bfc",
          "fastQuery": true,
          "activityIds": [
            ".live.LivePlayActivity",
            ".detail.ui.DetailActivity"
          ]
        },
        {
          "name": "③直播间右下角浮窗",
          "matches": "@ViewGroup[vid=null][text=null][desc=null][width<110 && height<110][visibleToUser=true] <2 ViewGroup[childCount<8] <<5 FrameLayout[index=parent.childCount.minus(2)] <n ViewGroup[childCount>4][left=0 && top=0] +n ViewGroup >5 EditText[text=\"说点什么...\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30374542",
            "https://i.gkd.li/i/30374544"
          ],
          "fastQuery": true,
          "activityIds": [
            ".live.LivePlayActivity",
            ".detail.ui.DetailActivity"
          ]
        },
        {
          "name": "④视频页左下角卡片",
          "activityIds": ".main.MainActivity",
          "matches": "@UIView[clickable=true][id=null][text=\"\"][desc=\"\"][childCount=0] + UIText[text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29403677",
            "https://i.gkd.li/i/29403704"
          ],
          "exampleUrls": "https://e.gkd.li/ef72c43c-5fab-4b09-bbd0-bb0d754d2c12",
          "fastQuery": true
        },
        {
          "name": "⑤视频页下载app",
          "activityIds": ".main.MainActivity",
          "matches": "[text=\"立即下载\"] <2 LinearLayout + @[clickable=true] > [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/33473832",
          "exampleUrls": "https://e.gkd.li/689d03bf-5bb2-4b30-bef5-35bef5bed112",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示-关闭更新弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.MainActivity",
          "matches": [
            "[text*=\"立即升级\"]",
            "[text=\"以后再说\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12534016",
            "https://i.gkd.li/i/13328599",
            "https://i.gkd.li/i/15359995",
            "https://i.gkd.li/i/20139600"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"立即升级\"]",
            "[text=\"以后再说\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12534016",
            "https://i.gkd.li/i/13328599",
            "https://i.gkd.li/i/15359995"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-自动[查看原图]",
      "desc": "聊天查看图片时,点击[查看原图]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".detail.ui.DetailActivity",
          "matches": "[text^=\"查看原图\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/31837818"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "desc": "点击[暂不]/[以后再说]/[禁止]/[保持现状]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".main.MainActivity",
            ".profile.ui.UserProfileActivity",
            ".detail.ui.DetailActivity",
            ".setting.serverpush.ui.PushSettingManagerActivity"
          ],
          "matches": [
            "TextView[text$=\"提醒\" || text$=\"通知\"][text.length>5][visibleToUser=true]",
            "[text=\"以后再说\" || text=\"暂不开启\" || text=\"禁止\" || text=\"取消\" || text=\"保持现状\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13669790",
            "https://i.gkd.li/i/25024525",
            "https://i.gkd.li/i/25063241",
            "https://i.gkd.li/i/26240394",
            "https://i.gkd.li/i/29402255",
            "https://i.gkd.li/i/18419574",
            "https://i.gkd.li/i/18417891",
            "https://i.gkd.li/i/29828761"
          ]
        },
        {
          "matches": "@[text=\"暂不\"][focusable=true] < LinearLayout - LinearLayout >(2) [text=\"开启朋友通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/12675129",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        },
        {
          "matches": "[text=\"及时获得消息提醒\"] +2 [text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13669790",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-自动勾选原图",
      "desc": "聊天发送图片时自动勾选原图",
      "fastQuery": true,
      "activityIds": "com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12846036",
        "https://i.gkd.li/i/12846040"
      ],
      "actionMaximum": 1,
      "resetMatch": "match",
      "rules": [
        {
          "activityIds": ".ecommerce.im.choosemedia.ECommerceIMMediaChooseActivity",
          "matches": "@ImageView[clickable=true] + [text=\"原图\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18637952",
            "https://i.gkd.li/i/18637948"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match"
        },
        {
          "activityIds": [
            ".im.business.mediaselectpage.edit.IMEditPreviewActivity",
            ".im.business.mediaselectpage.choose.MediaChooseActivity",
            ".main.MainActivity"
          ],
          "matches": "@[clickable=true] > [text=\"原图\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25401995",
            "https://i.gkd.li/i/25401998",
            "https://i.gkd.li/i/25402432",
            "https://i.gkd.li/i/31837568"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "match"
        },
        {
          "matches": "[text=\"原图\"][desc=\"未选中/复选框 原图\"]",
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.im.sdk.media.choose.MediaChooseActivity",
          "actionMaximum": 1,
          "resetMatch": "match"
        }
      ]
    },
    {
      "key": 6,
      "name": "其他-休息提醒",
      "fastQuery": true,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text*=\"提醒我\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13241564",
            "https://i.gkd.li/i/14160675"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-小组件弹窗",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".main.MainActivity",
            ".live.LiveDummyActivity",
            ".search.activity.SearchResultActivity"
          ],
          "matches": "@ImageView[clickable=true][width<173] <2 [childCount>3] > [text^=\"添加\" || text^=\"开启\"][text*=\"桌面\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13669682",
            "https://i.gkd.li/i/14740312",
            "https://i.gkd.li/i/14325749",
            "https://i.gkd.li/i/18009276"
          ],
          "exampleUrls": "https://e.gkd.li/c3980f6b-5459-45fe-b317-5bdc561319dc"
        }
      ]
    },
    {
      "key": 8,
      "name": "全屏广告",
      "desc": "点击[不感兴趣/知道了]",
      "fastQuery": true,
      "activityIds": ".main.MainActivity",
      "rules": [
        {
          "matches": "@[clickable=true][text=\"不感兴趣\"] +(1,2) FlattenUIText[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13800207",
            "https://i.gkd.li/i/13996724",
            "https://i.gkd.li/i/20035670"
          ],
          "fastQuery": true,
          "activityIds": ".main.MainActivity"
        },
        {
          "matches": "[name!$=\"ImageView\"] + [text=\"不感兴趣\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14661956",
          "excludeSnapshotUrls": "https://i.gkd.li/i/23833191",
          "fastQuery": true,
          "activityIds": ".main.MainActivity"
        },
        {
          "activityIds": [
            ".live.LiveDummyActivity",
            ".commerce.sdk.MallContainerActivity",
            "com.bytedance.android.shopping.store.tabkit.container.TabKitActivity"
          ],
          "matches": "[text*=\"首页商城\"] +n FlattenUIText[text=\"知道了\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14533732",
            "https://i.gkd.li/i/14969825",
            "https://i.gkd.li/i/14969835"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 9,
      "name": "权限提示-录音权限",
      "desc": "点击[以后再说]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".shortvideo.ui.VideoRecordNewActivity",
          "matches": [
            "[text*=\"录音权限\"]",
            "[text=\"以后再说\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/33711183",
          "exampleUrls": "https://e.gkd.li/93eb4fd6-01d4-42d8-b179-e2af6430be5f",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 10,
      "name": "权限提示-通讯录权限",
      "desc": "点击[拒绝]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14735284",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": [
            "[text*=\"通讯录\"]",
            "[text=\"拒绝\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/8f70418d-92f0-4264-83fd-a680350c478e",
          "snapshotUrls": [
            "https://i.gkd.li/i/14735280",
            "https://i.gkd.li/i/16171391"
          ],
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text$=\"通讯录\"] +2 FrameLayout >2 [text=\"拒绝\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        }
      ]
    },
    {
      "key": 11,
      "name": "青少年模式",
      "desc": "点击[关闭/不再提醒/我知道了]",
      "order": -8,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "excludeActivityIds": ".setting.ui.SettingCommonProtocolActivity",
          "matches": [
            "[text*=\"青少年\" || text*=\"未成年\"][text*=\"模式\"]",
            "[text=\"关闭\" || text=\"不再提醒\" || text=\"我知道了\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14321107",
            "https://i.gkd.li/i/14473006",
            "https://i.gkd.li/i/17726070",
            "https://i.gkd.li/i/18638030",
            "https://i.gkd.li/i/34110566"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14917848",
            "https://i.gkd.li/i/17610958"
          ],
          "exampleUrls": "https://e.gkd.li/a105f102-a653-46bb-b710-a36aa8a2e679"
        },
        {
          "matches": [
            "[text*=\"青少年模式\"]",
            "[text=\"关闭\" || desc=\"关闭\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14321107",
            "https://i.gkd.li/i/14473006",
            "https://i.gkd.li/i/14567078",
            "https://i.gkd.li/i/14917848"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 12,
      "name": "权限提示-定位权限",
      "desc": "直接关闭所有类似形状窗口",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".search.activity.SearchResultActivity",
      "matchTime": 10000,
      "rules": [
        {
          "name": "弹窗",
          "action": "back",
          "matches": "[vid=\"rootview\"]",
          "snapshotUrls": "https://i.gkd.li/i/13755373",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".search.activity.SearchResultActivity"
        },
        {
          "name": "顶部横条",
          "activityIds": ".search.activity.SearchResultActivity",
          "matches": "@ImageView[clickable=true] - [text^=\"开启定位\"]",
          "snapshotUrls": "https://i.gkd.li/i/13755718",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "弹窗 (2)",
          "action": "back",
          "matches": "[id=\"com.ss.android.ugc.aweme:id/rootview\"]",
          "snapshotUrls": "https://i.gkd.li/i/13755373",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".search.activity.SearchResultActivity"
        },
        {
          "name": "顶部横条 (2)",
          "activityIds": "com.ss.android.ugc.aweme.search.activity.SearchResultActivity",
          "matches": "@ImageView[clickable=true] - [text^=\"开启定位\"]",
          "snapshotUrls": "https://i.gkd.li/i/13755718",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "弹窗 (3)",
          "matches": "[text^=\"开启定位\"] +3 LinearLayout > [text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/13974006",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ss.android.ugc.aweme.search.activity.SearchResultActivity",
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 13,
      "name": "全屏广告-汽水音乐VIP",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".dsp.MusicLunaActivity",
            ".dsp.playpage.singlepage.subpage.MusicDspSubPlayerActivity"
          ],
          "matches": "ScrollView - @ImageView[index=1][childCount=0][visibleToUser=true][width<100][height<100] <2 View < View < ViewGroup < ViewGroup < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/4c57ee77-2189-4b3b-be0b-430fac8853c2",
          "snapshotUrls": [
            "https://i.gkd.li/i/18100285",
            "https://i.gkd.li/i/18100454",
            "https://i.gkd.li/i/18100477"
          ]
        }
      ]
    },
    {
      "key": 14,
      "name": "其他-个性化推荐弹窗",
      "desc": "点击[稍后再说]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": [
            "[text*=\"个性化推荐\"][visibleToUser=true]",
            "[text=\"稍后再说\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/987234ad-de0f-40d8-b7dd-d3c600609949",
          "snapshotUrls": "https://i.gkd.li/i/18633134"
        }
      ]
    },
    {
      "key": 15,
      "name": "功能类-刷到推广视频时[上滑]",
      "desc": "广告/应用/购物/咨询/服务/预约/子薇剧场 等推广视频",
      "rules": [
        {
          "fastQuery": true,
          "actionCd": 1200,
          "actionDelay": 200,
          "swipeArg": {
            "start": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.6"
            },
            "end": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.3"
            },
            "duration": 200
          },
          "activityIds": ".main.MainActivity",
          "matches": "([visibleToUser=true] > [text$=\"广告\" || text$=\"（推广）\"][vid=\"desc\" || desc=\"广告\"]) || ([text=\"应用\" || text=\"购物\" || text=\"咨询\" || text=\"服务\" || text=\"预约\" || text=\"子薇剧场\"][text.length<6][index=1][visibleToUser=true]) || (ViewGroup[childCount=5] > ImageView +3 [text^=\"已售\" || text^=\" 已售\"] - TextView - [text=\"讲解中 丨 \"][index=1][visibleToUser=true])",
          "snapshotUrls": [
            "https://i.gkd.li/i/21142063",
            "https://i.gkd.li/i/29403811",
            "https://i.gkd.li/i/29403704",
            "https://i.gkd.li/i/29403301",
            "https://i.gkd.li/i/21142589",
            "https://i.gkd.li/i/21142249",
            "https://i.gkd.li/i/25355868",
            "https://i.gkd.li/i/29403479",
            "https://i.gkd.li/i/21765934",
            "https://i.gkd.li/i/21523849",
            "https://i.gkd.li/i/29605884",
            "https://i.gkd.li/i/29605791",
            "https://i.gkd.li/i/29605901",
            "https://i.gkd.li/i/29707532"
          ]
        }
      ]
    },
    {
      "key": 16,
      "name": "功能类-刷到游戏视频时[上滑]",
      "desc": "游戏类推广视频",
      "rules": [
        {
          "fastQuery": true,
          "actionDelay": 200,
          "swipeArg": {
            "start": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.6"
            },
            "end": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.3"
            },
            "duration": 200
          },
          "activityIds": ".main.MainActivity",
          "matches": "[text$=\"游戏\"][text.length<6][index=1][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/21142871",
            "https://i.gkd.li/i/21725628"
          ]
        }
      ]
    },
    {
      "key": 17,
      "name": "功能类-刷到直播时[上滑]",
      "desc": "不想看直播,划掉",
      "rules": [
        {
          "fastQuery": true,
          "actionDelay": 200,
          "swipeArg": {
            "start": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.6"
            },
            "end": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.3"
            },
            "duration": 200
          },
          "activityIds": ".main.MainActivity",
          "matches": "[desc*=\"点击进入直播间\"] < [childCount>1] < FrameLayout < [childCount=1] < [visibleToUser=true] < [vid=\"root_view\"] <2 [vid=\"viewpager\"]",
          "snapshotUrls": "https://i.gkd.li/i/32612015",
          "exampleUrls": "https://e.gkd.li/9f3f9eb2-4e56-4744-874c-223e28f5ddfe"
        }
      ]
    },
    {
      "key": 18,
      "name": "功能类-自动领取别人发的红包",
      "desc": "点击 ①抖音红包 ②弹窗-开红包 ③返回 ④x掉已领完弹窗",
      "fastQuery": true,
      "activityIds": ".fund.redpacket.RedPacketReceiveActivity",
      "rules": [
        {
          "name": "①点击[抖音红包]",
          "activityIds": ".main.MainActivity",
          "matches": "FrameLayout[width>10] -2 @LinearLayout >3 [text=\"抖音红包\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6c963e99-1a74-40a5-bf84-a9353c27acdb",
          "snapshotUrls": [
            "https://i.gkd.li/i/22761277",
            "https://i.gkd.li/i/25190308"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/22849224",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "name": "②红包弹窗-点击[开]",
          "matches": "@FrameLayout[clickable=true][width=height] -2 [text=\"大吉大利\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/e8b822c1-c289-4802-85a4-994093024b24",
          "snapshotUrls": "https://i.gkd.li/i/22761510",
          "fastQuery": true,
          "activityIds": ".fund.redpacket.RedPacketReceiveActivity"
        },
        {
          "preKeys": 1,
          "name": "③已领-点击[返回]",
          "matches": "[vid=\"iv_back\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/f92c1412-8111-40bc-8188-24f2c004c55c",
          "snapshotUrls": "https://i.gkd.li/i/22761554",
          "fastQuery": true,
          "activityIds": ".fund.redpacket.RedPacketReceiveActivity"
        },
        {
          "preKeys": [
            0,
            1,
            2
          ],
          "name": "④已领完弹窗-x掉",
          "matches": "@ImageView[clickable=true] - * > [text=\"红包已领完\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25190699",
          "fastQuery": true,
          "activityIds": ".fund.redpacket.RedPacketReceiveActivity"
        }
      ]
    },
    {
      "key": 19,
      "name": "功能类-自动抢口令红包",
      "desc": "点击 ①口令红包 ②弹窗 ③一键发口令",
      "fastQuery": true,
      "rules": [
        {
          "name": "①点进口令红包",
          "activityIds": [
            ".main.MainActivity",
            ".fund.redpacket.RedPacketReceiveActivity"
          ],
          "matches": "@ImageView + [text=\"抖音红包「口令」\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25121991",
          "fastQuery": true
        },
        {
          "name": "②弹窗-点击红包",
          "activityIds": ".fund.redpacket.RedPacketReceiveActivity",
          "matches": "ImageView < @[clickable=true] -2 [text=\"发口令开红包\"]",
          "snapshotUrls": "https://i.gkd.li/i/25122030",
          "fastQuery": true
        },
        {
          "name": "③一键发口令",
          "activityIds": ".fund.redpacket.RedPacketReceiveActivity",
          "matches": "[text=\"发口令开红包\"] + LinearLayout >2 [text=\"一键发送到聊天\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25122077",
            "https://i.gkd.li/i/25122095"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 20,
      "name": "权限提示-相机权限",
      "desc": "点击[以后再说]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".shortvideo.ui.scan.ScanNewActivity",
            ".shortvideo.ui.VideoRecordNewActivity"
          ],
          "matches": [
            "[text*=\"相机权限\"]",
            "[text=\"以后再说\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/25183382",
            "https://i.gkd.li/i/33711202"
          ],
          "exampleUrls": "https://e.gkd.li/d96ef7c1-1f24-43fd-9190-76764dae2bc3",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 21,
      "name": "功能类-评论区-自动展开评论",
      "desc": "只展开一级评论，不点击展示更多",
      "fastQuery": true,
      "activityIds": [
        ".detail.ui.DetailActivity",
        ".main.MainActivity",
        "com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
        ".searcharticle.detail.ArticleDetailActivity",
        ".search.activity.SearchResultActivity",
        ".detail.ultra.ui.UltraDetailActivity",
        ".playlet.videodetail.PlayletVideoPlayActivity"
      ],
      "rules": [
        {
          "matches": "@[clickable=true] > [text^=\"展开\"][text$=\"回复\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25356027",
            "https://i.gkd.li/i/26240597",
            "https://i.gkd.li/i/26240834",
            "https://i.gkd.li/i/32637248"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/25356355",
          "exampleUrls": [
            "https://e.gkd.li/e9ca5fe1-a60c-4ed8-9974-9d79e32c71d7",
            "https://e.gkd.li/c58e3455-2d7e-4ce2-8c0f-a971386f5ef4"
          ],
          "fastQuery": true,
          "activityIds": [
            ".detail.ui.DetailActivity",
            ".main.MainActivity",
            "com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
            ".searcharticle.detail.ArticleDetailActivity",
            ".search.activity.SearchResultActivity",
            ".detail.ultra.ui.UltraDetailActivity",
            ".playlet.videodetail.PlayletVideoPlayActivity"
          ]
        },
        {
          "matches": "[text^=\"展开\"][text$=\"回复\"] <2 @[clickable=true][childCount=3] <<n ViewPager <(3,4) LinearLayout + [childCount=2] > [desc$=\"评论区\"] + [vid=\"back_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29811099",
            "https://i.gkd.li/i/29811533",
            "https://i.gkd.li/i/31308121"
          ],
          "fastQuery": true,
          "activityIds": [
            ".detail.ui.DetailActivity",
            ".main.MainActivity",
            "com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
            ".searcharticle.detail.ArticleDetailActivity",
            ".search.activity.SearchResultActivity",
            ".detail.ultra.ui.UltraDetailActivity",
            ".playlet.videodetail.PlayletVideoPlayActivity"
          ]
        }
      ]
    },
    {
      "key": 22,
      "name": "功能类-评论区-自动展开评论_全部",
      "desc": "基于上面追加点击展开更多",
      "fastQuery": true,
      "activityIds": [
        ".detail.ui.DetailActivity",
        ".main.MainActivity",
        "com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
        ".searcharticle.detail.ArticleDetailActivity",
        ".search.activity.SearchResultActivity",
        ".detail.ultra.ui.UltraDetailActivity",
        ".playlet.videodetail.PlayletVideoPlayActivity"
      ],
      "rules": [
        {
          "matches": "@[clickable=true] > [text^=\"展开更多\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25619324",
            "https://i.gkd.li/i/25619463"
          ],
          "exampleUrls": [
            "https://e.gkd.li/c9f1e163-4fa9-42bb-b5a5-4c9de6f286c2",
            "https://e.gkd.li/afea1f82-e50c-4ef0-9f0a-a2ceec00c03b"
          ],
          "fastQuery": true,
          "activityIds": [
            ".detail.ui.DetailActivity",
            ".main.MainActivity",
            "com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
            ".searcharticle.detail.ArticleDetailActivity",
            ".search.activity.SearchResultActivity",
            ".detail.ultra.ui.UltraDetailActivity",
            ".playlet.videodetail.PlayletVideoPlayActivity"
          ]
        },
        {
          "matches": "[text^=\"展开更多\"] <2 @[clickable=true][childCount=3] <<n ViewPager <(3,4) LinearLayout + [childCount=2] > [desc$=\"评论区\"] + [vid=\"back_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/31308553",
          "fastQuery": true,
          "activityIds": [
            ".detail.ui.DetailActivity",
            ".main.MainActivity",
            "com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
            ".searcharticle.detail.ArticleDetailActivity",
            ".search.activity.SearchResultActivity",
            ".detail.ultra.ui.UltraDetailActivity",
            ".playlet.videodetail.PlayletVideoPlayActivity"
          ]
        }
      ]
    },
    {
      "key": 23,
      "name": "局部广告-直播-关闭推荐直播间",
      "desc": "刷到直播-> 可能喜欢这些直播 -> x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "ImageView + [text=\"你可能喜欢这些直播\"][visibleToUser=true] + [vid=\"close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/29387031",
          "exampleUrls": "https://e.gkd.li/1ee3aa97-345d-42a3-af64-262230b650be"
        }
      ]
    },
    {
      "key": 24,
      "name": "局部广告-评论区-评论氛围满意度",
      "desc": "评论氛围满意度卡片-> x掉",
      "fastQuery": true,
      "activityIds": [
        ".detail.ui.DetailActivity",
        ".main.MainActivity",
        "com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
        ".searcharticle.detail.ArticleDetailActivity",
        ".search.activity.SearchResultActivity",
        ".detail.ultra.ui.UltraDetailActivity",
        ".playlet.videodetail.PlayletVideoPlayActivity"
      ],
      "rules": [
        {
          "anyMatches": [
            "@[text=\"关闭,按钮\"][clickable=true] - [text$=\"？,匿名\"][text*=\"评论\"][visibleToUser=true]",
            "@UIImage[clickable=true] - [text$=\"评论氛围是否满意？,匿名\"][visibleToUser=true] < FrameLayout[childCount=7] <<4 FrameLayout[childCount=1][id=null][desc=null][text=null][clickable=false][visibleToUser=true][left=0][top!=0] + * > ViewGroup > [vid=\"avatar\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/25571238",
            "https://i.gkd.li/i/29388014",
            "https://i.gkd.li/i/29387403",
            "https://i.gkd.li/i/29388032",
            "https://i.gkd.li/i/29606115"
          ],
          "exampleUrls": "https://e.gkd.li/f4c54b34-7d3c-499d-9ea0-f865f4cf9375",
          "fastQuery": true,
          "activityIds": [
            ".detail.ui.DetailActivity",
            ".main.MainActivity",
            "com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
            ".searcharticle.detail.ArticleDetailActivity",
            ".search.activity.SearchResultActivity",
            ".detail.ultra.ui.UltraDetailActivity",
            ".playlet.videodetail.PlayletVideoPlayActivity"
          ]
        }
      ]
    },
    {
      "key": 25,
      "name": "功能类-评论区-展开部分折叠评论",
      "desc": "最底部已折叠部分评论-> 点击[展开]",
      "fastQuery": true,
      "activityIds": [
        ".detail.ui.DetailActivity",
        ".main.MainActivity",
        "com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
        ".searcharticle.detail.ArticleDetailActivity",
        ".search.activity.SearchResultActivity",
        ".detail.ultra.ui.UltraDetailActivity",
        ".playlet.videodetail.PlayletVideoPlayActivity"
      ],
      "rules": [
        {
          "matches": "@[text=\"展开\"][clickable=true] - [text=\"已折叠部分评论\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/29389970",
          "exampleUrls": "https://e.gkd.li/020fc4d1-784a-49bd-9a50-6504e0b040ae",
          "fastQuery": true,
          "activityIds": [
            ".detail.ui.DetailActivity",
            ".main.MainActivity",
            "com.bytedance.ies.ugc.aweme.photos.detail.flow.page.FlowPageActivity",
            ".searcharticle.detail.ArticleDetailActivity",
            ".search.activity.SearchResultActivity",
            ".detail.ultra.ui.UltraDetailActivity",
            ".playlet.videodetail.PlayletVideoPlayActivity"
          ]
        }
      ]
    },
    {
      "key": 26,
      "name": "全屏广告-视频流-是广告认可不?[上滑]",
      "desc": "问你刚才是不是广告?-> 划掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".detail.ui.DetailActivity",
          "matches": "UIText[text=\"你认为这个内容是【广告】吗？\"][visibleToUser=true]",
          "swipeArg": {
            "start": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.6"
            },
            "end": {
              "x": "screenWidth/2",
              "y": "screenHeight * 0.3"
            },
            "duration": 200
          },
          "snapshotUrls": "https://i.gkd.li/i/29401376",
          "exampleUrls": "https://e.gkd.li/bd652ced-a3a8-4cbc-aae7-e309dcbfeb8e"
        }
      ]
    },
    {
      "key": 27,
      "name": "局部广告-视频流-当前直播满意?",
      "desc": "刷到直播看一段出现[你对直播满意吗]-> x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "FlattenUIText[text$=\"当前直播满意吗?\"][visibleToUser=true] +3 LynxFlattenUI[text=\"关闭\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/29402787",
          "exampleUrls": "https://e.gkd.li/7eff5d8e-60ca-4a49-838c-5d5fb1d0a54d"
        }
      ]
    },
    {
      "key": 28,
      "name": "其他-账号详情-商品页",
      "desc": "进入账号详情弹出的商品-> x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": [
            "LinearLayout[childCount=3] > ImageView[vid!=null][text=null][desc=null][clickable=false][visibleToUser=true] + * -> [text=\"推荐\"] <3 LinearLayout[childCount=3] + LinearLayout[childCount=3] > [text=\"直播中\"]",
            "@ImageView[clickable=true][id=null][text=null][desc=null] - FrameLayout >5 LinearLayout > TextView[text^=\"图集\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/29403171",
          "exampleUrls": "https://e.gkd.li/cbf081a4-4a57-4173-af3a-27334d7a2be6"
        }
      ]
    },
    {
      "key": 29,
      "name": "功能类-横屏直播时自动[关闭]弹幕",
      "desc": "点击1次[关闭弹幕]图标",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "activityIds": [
            ".live.LivePlayActivity",
            ".detail.ui.DetailActivity"
          ],
          "matches": "@[desc=\"关闭弹幕\"] < [childCount=2] + * > [text=\"发弹幕说点什么…\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/33672005",
            "https://i.gkd.li/i/33672759"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/33672707",
          "exampleUrls": "https://e.gkd.li/27cd54c6-0398-4e01-8b42-9fd9b963c514"
        }
      ]
    },
    {
      "key": 30,
      "name": "功能类-自动开启[自动连播]",
      "desc": "仅在刚进抖音时第1个视频生效, ①[长按]视频 ②开启[自动联播]",
      "fastQuery": true,
      "matchRoot": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".main.MainActivity",
      "rules": [
        {
          "name": "①[长按]视频",
          "action": "longClickCenter",
          "matches": "[vid=\"viewpager\"][desc=\"视频\"][childCount=2][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/34400931",
          "excludeSnapshotUrls": "https://i.gkd.li/i/34424096",
          "fastQuery": true,
          "matchRoot": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".main.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "②开启[自动联播]",
          "matches": "@Switch[clickable=true][checked=false] - [text=\"自动连播\"]",
          "snapshotUrls": "https://i.gkd.li/i/34400219",
          "fastQuery": true,
          "matchRoot": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".main.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "③已开-按[返回键]",
          "action": "back",
          "actionMaximumKey": 1,
          "matches": "@Switch[clickable=true][checked=true] - [text=\"自动连播\"]",
          "snapshotUrls": "https://i.gkd.li/i/34400216",
          "fastQuery": true,
          "matchRoot": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".main.MainActivity"
        }
      ]
    },
    {
      "key": 31,
      "name": "局部广告-关闭用户推荐",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "[text=\"换一个\"] - FrameLayout[clickable=true] > ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12520943"
        },
        {
          "preKeys": 0,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "[id=\"com.ss.android.ugc.aweme:id/desc\"][text=\"减少此类推荐\"]",
          "snapshotUrls": "https://i.gkd.li/i/12520962"
        },
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "[text=\"你可能感兴趣\"] < LinearLayout + [text=\"隐藏\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12675396"
        },
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "[text=\"朋友推荐\"] +(2) @FrameLayout > [desc=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12675129"
        },
        {
          "activityIds": "com.ss.android.ugc.aweme.friends.ui.RawAddFriendsActivity",
          "matches": "[text=\"朋友推荐\"] < LinearLayout + FrameLayout > [desc=\"关闭\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12675245"
        },
        {
          "activityIds": [
            "com.ss.android.ugc.aweme.main.MainActivity",
            "com.miui.home.launcher.Launcher"
          ],
          "matches": "[text=\"朋友推荐\"] +2 [id=\"com.ss.android.ugc.aweme:id/close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12525387",
            "https://i.gkd.li/i/12525389"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@[text=\"不感兴趣\"] - * [text*=\"也关注了\"]",
          "snapshotUrls": "https://i.gkd.li/i/14661956"
        }
      ]
    },
    {
      "key": 32,
      "name": "局部广告-首页左上角广告",
      "enable": false,
      "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12749276",
      "rules": [
        {
          "matches": "ViewGroup + FrameLayout[id=null] > FrameLayout[childCount=2][id!=null] > ImageView[desc=\"关闭\"][clickable=true][id!=null]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        }
      ]
    },
    {
      "key": 33,
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "activityIds": "com.android.launcher.Launcher",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12769137",
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >2 RelativeLayout[childCount<=5] > @ImageView[clickable=true][id!=null] - TextView[text=\"广告\"][id!=null]",
          "activityIds": "com.android.launcher.Launcher",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 34,
      "name": "评价提示-去商店评分",
      "desc": "点击[取消]",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13053628",
      "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/4554c785-39e0-4eac-9cfb-f1b1c2976008",
      "rules": [
        {
          "matches": "@[text=\"取消\"] +2 [text=\"五星好评\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 35,
      "name": "功能类-设置无声进入抖音弹窗",
      "desc": "点击[拒绝]",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13256087",
      "rules": [
        {
          "matches": "@[text=\"拒绝\"] + [text=\"去设置\"]",
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        }
      ]
    },
    {
      "key": 36,
      "name": "全屏广告-休息提醒",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text=\"管理使用时间\"] + Button[text=\"忽略提醒\"]",
          "snapshotUrls": "https://i.gkd.li/i/13372725",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 37,
      "name": "功能类-[添加快捷方式到桌面]弹窗",
      "desc": "关闭弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "搜索快捷方式",
          "activityIds": "com.ss.android.ugc.aweme.search.activity.SearchResultActivity",
          "action": "back",
          "matches": "ViewGroup[desc=\"添加搜索到桌面\"]",
          "snapshotUrls": "https://i.gkd.li/i/13338556",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "商城快捷方式",
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.ugc.aweme.main.MainActivity",
            "com.ss.android.ugc.aweme.live.LiveDummyActivity"
          ],
          "matches": "[text=\"添加抖音商城到桌面\"] +2 LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13669682",
            "https://i.gkd.li/i/14740312"
          ],
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "搜索组件",
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.search.activity.SearchResultActivity",
          "matches": "[text=\"暂不开启\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14325749",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 38,
      "name": "全屏广告-视频播放中途插入的打招呼界面",
      "enable": false,
      "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13379307",
      "rules": [
        {
          "matches": "FrameLayout > @[desc=\"关闭\"] + ViewGroup > [text$=\"打个招呼\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        }
      ]
    },
    {
      "key": 39,
      "name": "全屏广告-关闭商城推荐",
      "desc": "点击\"不感兴趣\"",
      "enable": false,
      "snapshotUrls": "https://i.gkd.li/i/13800207",
      "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
      "rules": [
        {
          "matches": "@[text=\"不感兴趣\"][clickable=true] + [text=\"去商城搜索更多\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        }
      ]
    },
    {
      "key": 40,
      "name": "局部广告-拍同款弹窗",
      "desc": "点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "@LynxFlattenUI[text=\"不感兴趣\"] +4 [text=\"拍同款\"]",
          "snapshotUrls": "https://i.gkd.li/i/13996724",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 41,
      "name": "全屏广告-[去首页商城]弹窗",
      "desc": "点击[知道了]",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.ugc.aweme.live.LiveDummyActivity",
            "com.ss.android.ugc.aweme.commerce.sdk.MallContainerActivity",
            "com.bytedance.android.shopping.store.tabkit.container.TabKitActivity"
          ],
          "matches": [
            "FlattenUIText[text*=\"首页商城\"]",
            "FlattenUIText[text=\"去看看\"]",
            "FlattenUIText[text=\"知道了\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14533732",
            "https://i.gkd.li/i/14969825",
            "https://i.gkd.li/i/14969835"
          ]
        }
      ]
    },
    {
      "key": 42,
      "name": "全屏广告-低价秒杀券弹窗",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.5051",
            "top": "width * 2.0649"
          },
          "activityIds": "com.ss.android.ugc.aweme.live.LiveDummyActivity",
          "matches": "[text=\"恭喜获得低价秒杀券\"]",
          "exampleUrls": "https://m.gkd.li/57941037/ef703cd7-99af-4e10-8345-9860ed160b8b",
          "snapshotUrls": "https://i.gkd.li/i/14585377"
        }
      ]
    },
    {
      "key": 43,
      "name": "权限提示-请求访问通讯录弹窗",
      "desc": "点击[拒绝]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[text*=\"通讯录\"]",
            "[text=\"拒绝\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/8f70418d-92f0-4264-83fd-a680350c478e",
          "snapshotUrls": [
            "https://i.gkd.li/i/14735280",
            "https://i.gkd.li/i/16171391"
          ],
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 44,
      "name": "功能类-关闭用户推荐",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "[text=\"换一个\"] - FrameLayout[clickable=true] > ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12520943"
        },
        {
          "preKeys": 0,
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "matches": "[id=\"com.ss.android.ugc.aweme:id/desc\"][text=\"减少此类推荐\"]",
          "snapshotUrls": "https://i.gkd.li/i/12520962"
        }
      ]
    },
    {
      "key": 45,
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12769137",
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >2 RelativeLayout[childCount<=5] > @ImageView[clickable=true][id!=null] - TextView[text=\"广告\"][id!=null]",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 46,
      "name": "评价提示",
      "desc": "点击[取消]",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13053628",
      "exampleUrls": "https://m.gkd.li/101449500/8225f12c-adcf-4385-a1ca-670e62906cd2",
      "rules": [
        {
          "matches": "@[text=\"取消\"] +2 [text=\"五星好评\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        }
      ]
    },
    {
      "key": 47,
      "name": "功能类-休息提醒",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text=\"可进入使用管理助手更改设置\"] -2 Button[text=\"取消\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13241564",
            "https://i.gkd.li/i/13372604"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 48,
      "name": "功能类-申请开启小组件弹窗",
      "desc": "点击【暂不开启】",
      "enable": false,
      "rules": [
        {
          "name": "搜索小组件",
          "fastQuery": true,
          "activityIds": "com.ss.android.ugc.aweme.search.activity.SearchResultActivity",
          "matches": "[text=\"开启搜索组件到桌面\"] +2 [text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/14123300"
        }
      ]
    },
    {
      "key": 49,
      "name": "全屏广告-老用户福利",
      "desc": "点击【不感兴趣】",
      "enable": false,
      "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14157498",
      "rules": [
        {
          "matches": "@[text=\"不感兴趣\"][clickable=true] + [text=\"更多优惠商品\"]",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity"
        }
      ]
    }
  ]
});

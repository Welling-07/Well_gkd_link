// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.article.news",
  "name": "今日头条",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12685000",
        "https://i.gkd.li/i/12840104",
        "https://i.gkd.li/i/13316081"
      ],
      "matchTime": 10000,
      "fastQuery": true,
      "actionMaximumKey": 0,
      "rules": [
        {
          "activityIds": [
            "com.bytedance.ies.outertest.cn.OuterTestGuideDialogActivity",
            "com.ss.android.article.base.feature.ugc.story.StoryVideoActivity"
          ],
          "matches": "@[desc=\"关闭\"] -(2,3) [text*=\"版本更新\" || text*=\"升级版本\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13316081",
            "https://i.gkd.li/i/17681710"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".activity.MainActivity",
          "matches": "[text=\"以后再说\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/79b75132-9d6f-4e4c-a95b-56dbaca1965d",
          "snapshotUrls": "https://i.gkd.li/i/18194356",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0
        },
        {
          "matches": "[text=\"升级版本\"] +n [desc=\"关闭\"][clickable=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "actionMaximumKey": 0
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-浮窗广告",
      "rules": [
        {
          "name": "首页-浮窗广告",
          "activityIds": ".activity.MainActivity",
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > @ImageView + ImageView[clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13762123"
        },
        {
          "name": "视频页-浮窗广告",
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity",
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > ImageView + ImageView[clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13761236"
        },
        {
          "name": "首页-浮窗广告 (2)",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > @ImageView + ImageView[clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13762123"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "activityIds": ".activity.MainActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] + LinearLayout > [text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706699",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.MainActivity"
        },
        {
          "matches": "[text^=\"开启通知\"] < LinearLayout +2 ImageView[desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840217",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.MainActivity"
        },
        {
          "matches": "[text^=\"开启通知\"] + LinearLayout > [text=\"暂不开启\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706699",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"开启通知\"] < LinearLayout +2 ImageView[desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840217",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-竖屏视频广告",
      "desc": "点击右上角[更多]图标按钮,点击不感兴趣",
      "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity",
      "rules": [
        {
          "name": "点击右上角[更多]图标按钮",
          "matches": "ImageView[clickable=true][desc=\"更多\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12679280",
            "https://i.gkd.li/i/12733282",
            "https://i.gkd.li/i/12763251",
            "https://i.gkd.li/i/12763252",
            "https://i.gkd.li/i/12733281",
            "https://i.gkd.li/i/13185633",
            "https://i.gkd.li/i/13186082",
            "https://i.gkd.li/i/13930050"
          ],
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity"
        },
        {
          "preKeys": 0,
          "actionCd": 35000,
          "name": "点击不感兴趣",
          "matches": "@LinearLayout[clickable=true] > RelativeLayout + TextView[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12679277",
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity"
        },
        {
          "preKeys": 0,
          "actionCd": 35000,
          "name": "点击不感兴趣 (2)",
          "matches": "@LinearLayout[clickable=true] > RelativeLayout + TextView[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12679277",
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "分段广告-信息流广告",
      "desc": "点击右上角x按钮,点击[不感兴趣]",
      "fastQuery": true,
      "activityIds": [
        ".activity.MainActivity",
        "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
      ],
      "rules": [
        {
          "name": "点击右上角x按钮",
          "matches": "UIView[text^=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12836272",
            "https://i.gkd.li/i/13093576",
            "https://i.gkd.li/i/16624480"
          ],
          "fastQuery": true,
          "activityIds": [
            ".activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击不感兴趣",
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733152",
            "https://i.gkd.li/i/12755265",
            "https://i.gkd.li/i/16624474",
            "https://i.gkd.li/i/16624395",
            "https://i.gkd.li/i/17893117"
          ],
          "fastQuery": true,
          "activityIds": [
            ".activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ]
        },
        {
          "name": "点击右上角x按钮 (2)",
          "matches": "UIView[text^=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12836272",
            "https://i.gkd.li/i/13093576",
            "https://i.gkd.li/i/16624480"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ]
        },
        {
          "preKeys": 2,
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/16624395",
          "fastQuery": true
        },
        {
          "preKeys": [
            2,
            3
          ],
          "name": "点击不感兴趣 (2)",
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733152",
            "https://i.gkd.li/i/12755265",
            "https://i.gkd.li/i/16624474"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ]
        },
        {
          "name": "点击右上角x按钮 (3)",
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ],
          "matches": "UIView[text^=\"不感兴趣\"][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733098",
            "https://i.gkd.li/i/12755264",
            "https://i.gkd.li/i/12836272",
            "https://i.gkd.li/i/12840162",
            "https://i.gkd.li/i/13093576",
            "https://i.gkd.li/i/12733098"
          ],
          "exampleUrls": [
            "https://user-images.githubusercontent.com/44717382/273436460-cf007525-81ce-418b-ac05-3bfd75a627fe.gif"
          ],
          "fastQuery": true
        },
        {
          "name": "点击不感兴趣 (3)",
          "preKeys": 5,
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ],
          "matches": "@ViewGroup[clickable=true] > ImageView + TextView[text=\"不感兴趣\"]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733152",
            "https://i.gkd.li/i/12755265"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-底部话题推荐弹窗",
      "activityIds": "com.ss.android.article.news.activity.MainActivity",
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "name": "话题谈论",
          "matches": "FlattenUIText[text=\"参与讨论\"] + FlattenUIImage[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12706699"
        },
        {
          "name": "话题谈论 (2)",
          "matches": "FlattenUIText[text=\"参与讨论\"] + FlattenUIImage[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12706699",
          "activityIds": "com.ss.android.article.news.activity.MainActivity"
        },
        {
          "name": "话题谈论 (3)",
          "matches": "FlattenUIText[text=\"参与讨论\"] + FlattenUIImage[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706699"
          ],
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 6,
      "name": "功能类-自动观看广告视频",
      "desc": "自动观看广告并等待30s后关闭",
      "fastQuery": true,
      "rules": [
        {
          "name": "点击\"看视频\"",
          "activityIds": ".activity.MainActivity",
          "matches": "[id=\"com.bytedance.novel.api:id/component_ad_dialog_button_video\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402468",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "name": "等待30s点击\"关闭\"",
          "actionDelay": 30000,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "matches": "UIText[text=\"广告\"] +n UIText[text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402480",
          "fastQuery": true
        },
        {
          "name": "点击\"看视频\" (2)",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "[id=\"com.bytedance.novel.api:id/component_ad_dialog_button_video\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402468",
          "fastQuery": true
        },
        {
          "name": "等待30s点击\"关闭\" (2)",
          "actionDelay": 30000,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "matches": "UIText[text=\"广告\"] +n UIText[text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402480",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-底部热榜弹窗",
      "desc": "点击X",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".activity.MainActivity",
          "matches": "FrameLayout[childCount=8] > FlattenUIImage[index=7]",
          "snapshotUrls": "https://i.gkd.li/i/13828331",
          "fastQuery": true
        },
        {
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "FrameLayout[childCount=8] > FlattenUIImage[index=7]",
          "snapshotUrls": "https://i.gkd.li/i/13828331",
          "fastQuery": true
        },
        {
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "@FlattenUIImage[clickable=true] <n FrameLayout <<2 FrameLayout - LinearLayout [text=\"首页\"]",
          "snapshotUrls": "https://i.gkd.li/i/13828331",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 8,
      "name": "功能类-[关联抖音账号]弹窗",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": "@[desc=\"关闭\"] + [text^=\"关联\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c938001e-f39b-4ece-ad0e-2c93ba41aa94",
          "snapshotUrls": "https://i.gkd.li/i/14717889",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "@[desc=\"关闭\"] + [text^=\"关联\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c938001e-f39b-4ece-ad0e-2c93ba41aa94",
          "snapshotUrls": "https://i.gkd.li/i/14717889",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 9,
      "name": "功能类-[下次打开APP默认进入xx频道]弹窗",
      "desc": "点击[取消]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.MainActivity",
          "matches": [
            "[text^=\"下次打开APP默认进入\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/6166519d-d38d-49c0-b54b-72c25670aa24",
          "snapshotUrls": "https://i.gkd.li/i/15102876",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 10,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.MainActivity",
          "matches": "[id=\"android:id/content\"] > FrameLayout[childCount=3] > ImageView[clickable=true][visibleToUser=true][index=2]",
          "exampleUrls": "https://e.gkd.li/c3889d29-7260-4ab1-8070-75a6a68e4e2c",
          "snapshotUrls": "https://i.gkd.li/i/15314921"
        },
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.MainActivity",
          "matches": "@FlattenUIImage[text=\"\"] -10 FlattenUIText[text=\"恭喜获得惊喜奖励\"]",
          "exampleUrls": "https://e.gkd.li/057d40f6-f94e-4b54-857f-b5b11de245a5",
          "snapshotUrls": "https://i.gkd.li/i/17681713"
        },
        {
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "[id=\"android:id/content\"] > FrameLayout[childCount=3] > ImageView[clickable=true][visibleToUser=true][index=2]",
          "exampleUrls": "https://m.gkd.li/57941037/096c3d85-08b0-4566-865d-31eb0079ad6e",
          "snapshotUrls": "https://i.gkd.li/i/15314921"
        }
      ]
    },
    {
      "key": 11,
      "name": "功能类-[下次打开APP默认进入发现频道]弹窗",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "matches": "[text^=\"下次打开APP默认进入\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6166519d-d38d-49c0-b54b-72c25670aa24",
          "snapshotUrls": "https://i.gkd.li/i/15102876",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 12,
      "name": "分段广告-竖屏视频广告",
      "desc": "检测到广告时,点击右上角[更多]图标按钮,出现菜单,点击不感兴趣",
      "enable": false,
      "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity",
      "rules": [
        {
          "preKeys": [
            1,
            2,
            3,
            4
          ],
          "actionCd": 35000,
          "name": "点击不感兴趣",
          "matches": "@LinearLayout[clickable=true] > RelativeLayout + TextView[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12679277",
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity"
        },
        {
          "name": "点击右上角[更多]图标按钮",
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout -2 RelativeLayout >4 LynxFlattenUI[text=\"头条优惠券无门槛全平台通用\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12679280",
            "https://i.gkd.li/i/12733282",
            "https://i.gkd.li/i/12763251",
            "https://i.gkd.li/i/12763252"
          ],
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity"
        },
        {
          "name": "点击右上角[更多]图标按钮-抖音直播",
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <4 RelativeLayout -2 RelativeLayout >4 LinearLayout[childCount=3] > ScrollView[childCount=1] > TextView[text$=\"广告\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733281"
          ],
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity"
        },
        {
          "name": "第二种广告界面；点击右上角[更多]图标按钮",
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout -2 RelativeLayout >n TextView[text$=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13185633"
          ],
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity"
        },
        {
          "name": "第三种广告界面；点击右上角[更多]图标按钮",
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout +2 LinearLayout > TextView[text$=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13186082"
          ],
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity"
        }
      ]
    },
    {
      "key": 13,
      "name": "局部广告-评论区广告",
      "desc": "点击X",
      "enable": false,
      "rules": [
        {
          "name": "评论广告",
          "activityIds": "com.bytedance.ugc.UgcDetailInfoActivity",
          "matches": "[text=\"点击查看\"] < LinearLayout +n FrameLayout > [desc=\"举报\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13915287",
            "https://i.gkd.li/i/13817019"
          ]
        },
        {
          "name": "活动横幅广告",
          "activityIds": "com.bytedance.ugc.UgcDetailInfoActivity",
          "matches": "TextView[text.length>0] < LinearLayout - ImageView +n ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/13825373"
          ]
        }
      ]
    }
  ]
});

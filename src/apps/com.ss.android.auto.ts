// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ss.android.auto",
  "name": "懂车帝",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-首页推荐卡片广告",
      "desc": "需二次点击关闭原因",
      "fastQuery": true,
      "activityIds": [
        ".activity.SplashActivity",
        ".policy.AutoPrivacyActivity"
      ],
      "rules": [
        {
          "name": "点击关闭",
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12660816",
            "https://i.gkd.li/i/13959610"
          ],
          "fastQuery": true,
          "activityIds": [
            ".activity.SplashActivity",
            ".policy.AutoPrivacyActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击\"不感兴趣\"1",
          "matches": "@ViewGroup[clickable=true] TextView[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538627",
          "fastQuery": true,
          "activityIds": [
            ".activity.SplashActivity",
            ".policy.AutoPrivacyActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击\"不感兴趣\"2",
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12711589",
            "https://i.gkd.li/i/13959613"
          ],
          "fastQuery": true,
          "activityIds": [
            ".activity.SplashActivity",
            ".policy.AutoPrivacyActivity"
          ]
        },
        {
          "name": "点击\"x\"",
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12660816",
            "https://i.gkd.li/i/13959610"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.auto.activity.SplashActivity",
            "com.ss.android.auto.policy.AutoPrivacyActivity"
          ]
        },
        {
          "preKeys": 3,
          "name": "点击\"不感兴趣\"1 (2)",
          "matches": "@ViewGroup[clickable=true] TextView[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538627",
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.auto.activity.SplashActivity",
            "com.ss.android.auto.policy.AutoPrivacyActivity"
          ]
        },
        {
          "preKeys": 3,
          "name": "点击\"不感兴趣\"2 (2)",
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12711589",
            "https://i.gkd.li/i/13959613"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.auto.activity.SplashActivity",
            "com.ss.android.auto.policy.AutoPrivacyActivity"
          ]
        },
        {
          "name": "点击【x】",
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660816",
          "fastQuery": true,
          "activityIds": "com.ss.android.auto.activity.SplashActivity"
        },
        {
          "name": "点击【不感兴趣】1",
          "matches": "@ViewGroup[clickable=true] TextView[text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538627",
          "fastQuery": true,
          "activityIds": "com.ss.android.auto.activity.SplashActivity"
        },
        {
          "preKeys": 7,
          "name": "点击【不感兴趣】2",
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12711589",
          "fastQuery": true,
          "activityIds": "com.ss.android.auto.activity.SplashActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13534445",
      "rules": [
        {
          "activityIds": ".activity.SplashActivity",
          "matches": "@TextView[text=\"以后再说\"] - FrameLayout >2 TextView[text$=\"升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13534445",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@TextView[text=\"以后再说\"] - FrameLayout >2 TextView[text$=\"升级\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右下角悬浮窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "activityIds": [
        "com.ss.android.auto.activity.SplashActivity",
        "com.ss.android.auto.activity.ConcernDetailActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12798338",
        "https://i.gkd.li/i/13535531",
        "https://i.gkd.li/i/13535933",
        "https://i.gkd.li/i/13535932"
      ],
      "rules": [
        {
          "activityIds": [
            ".activity.SplashActivity",
            ".activity.ConcernDetailActivity"
          ],
          "matches": "FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798338",
            "https://i.gkd.li/i/13535531",
            "https://i.gkd.li/i/13535933",
            "https://i.gkd.li/i/13535932"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "fastQuery": true,
          "resetMatch": "activity"
        },
        {
          "matches": "FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "activity",
          "activityIds": [
            "com.ss.android.auto.activity.SplashActivity",
            "com.ss.android.auto.activity.ConcernDetailActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-文章底部卡片广告",
      "fastQuery": true,
      "activityIds": "com.ss.android.article.base.feature.detail2.view.NewDetailActivity",
      "snapshotUrls": "https://i.gkd.li/i/12811597",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ss.android.article.base.feature.detail2.view.NewDetailActivity",
          "matches": "FrameLayout > RelativeLayout > @ImageView[clickable=true] + [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12811597"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-评论区信息流广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": [
        "com.ss.android.article.base.feature.detail2.view.NewDetailActivity",
        "com.ss.android.auto.ugc.video.activity.UgcLongPostActivity",
        "com.ss.android.auto.ugc.video.activity.UgcNewDetailActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12811459",
        "https://i.gkd.li/i/12825865",
        "https://i.gkd.li/i/12900666",
        "https://i.gkd.li/i/14321293"
      ],
      "rules": [
        {
          "activityIds": [
            "com.ss.android.article.base.feature.detail2.view.NewDetailActivity",
            ".ugc.video.activity.UgcLongPostActivity",
            ".ugc.video.activity.UgcNewDetailActivity"
          ],
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12811459",
            "https://i.gkd.li/i/12825865",
            "https://i.gkd.li/i/12900666",
            "https://i.gkd.li/i/14321293"
          ],
          "fastQuery": true
        },
        {
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"广告\"]",
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.article.base.feature.detail2.view.NewDetailActivity",
            "com.ss.android.auto.ugc.video.activity.UgcLongPostActivity",
            "com.ss.android.auto.ugc.video.activity.UgcNewDetailActivity"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "activityIds": [
            ".activity.SplashActivity",
            "com.bytedance.im.auto.conversation.activity.ConversationListActivity"
          ],
          "matches": "TextView[text*=\"推送通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12840664",
            "https://i.gkd.li/i/14060897",
            "https://i.gkd.li/i/14546563"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "调用返回",
          "action": "back",
          "matches": "TextView[text*=\"推送通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12840664",
            "https://i.gkd.li/i/14060897",
            "https://i.gkd.li/i/14546563"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-选车页卡片广告",
      "fastQuery": true,
      "activityIds": "com.ss.android.auto.activity.ConcernDetailActivity",
      "snapshotUrls": "https://i.gkd.li/i/13686928",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.ConcernDetailActivity",
          "matches": "@FrameLayout[clickable=true][id!=null] -2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13686928"
        },
        {
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] -2 [text=\"广告\"]",
          "fastQuery": true,
          "activityIds": "com.ss.android.auto.activity.ConcernDetailActivity"
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-车型页面右下角直播悬浮窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.ConcernDetailActivity",
          "matches": "FrameLayout[childCount=8] > TextView[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/14034740"
        },
        {
          "activityIds": "com.ss.android.auto.activity.ConcernDetailActivity",
          "matches": "FrameLayout[childCount=8] > TextView[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/14034740",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 8,
      "name": "评价提示",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "activityIds": ".activity.SplashActivity",
          "matches": "[text=\"去评价\"]",
          "snapshotUrls": "https://i.gkd.li/i/14810042",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "action": "back",
          "matches": "[text=\"去评价\"]",
          "snapshotUrls": "https://i.gkd.li/i/14810042",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 9,
      "name": "未分类-升级弹窗",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.ss.android.auto.activity.SplashActivity",
        "com.ss.android.auto.policy.AutoPrivacyActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/13534445",
      "rules": [
        {
          "matches": "@TextView[text=\"以后再说\"] - FrameLayout >2 TextView[text$=\"升级\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.ss.android.auto.activity.SplashActivity",
            "com.ss.android.auto.policy.AutoPrivacyActivity"
          ]
        }
      ]
    },
    {
      "key": 10,
      "name": "局部广告-评论区-信息流广告",
      "desc": "像正常内容的广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.ss.android.article.base.feature.detail2.view.NewDetailActivity",
        "com.ss.android.auto.ugc.video.activity.UgcLongPostActivity",
        "com.ss.android.auto.ugc.video.activity.UgcNewDetailActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12811459",
        "https://i.gkd.li/i/12825865",
        "https://i.gkd.li/i/12900666",
        "https://i.gkd.li/i/14321294"
      ],
      "rules": [
        {
          "matches": "FrameLayout > * > @ImageView[clickable=true] - LinearLayout > [text=\"广告\"]",
          "fastQuery": true,
          "activityIds": [
            "com.ss.android.article.base.feature.detail2.view.NewDetailActivity",
            "com.ss.android.auto.ugc.video.activity.UgcLongPostActivity",
            "com.ss.android.auto.ugc.video.activity.UgcNewDetailActivity"
          ]
        }
      ]
    },
    {
      "key": 11,
      "name": "未分类-请求推送通知弹窗",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.ss.android.auto.activity.SplashActivity",
        "com.ss.android.auto.policy.AutoPrivacyActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/12840664",
      "rules": [
        {
          "matches": "@TextView[clickable=true] + [text^=\"打开推送通知\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.ss.android.auto.activity.SplashActivity",
            "com.ss.android.auto.policy.AutoPrivacyActivity"
          ]
        }
      ]
    }
  ]
});

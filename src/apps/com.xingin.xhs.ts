// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xingin.xhs",
  "name": "小红书",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "excludeActivityIds": [
            "com.xingin.alioth.search.GlobalSearchActivity",
            "com.xingin.growth.ob.FloatingObPageActivity",
            "com.xingin.matrix.notedetail.NoteDetailActivity",
            "com.xingin.matrix.detail.activity.DetailFeedActivity"
          ],
          "excludeMatches": "[text=\"首页\" || text=\"选择兴趣推荐更精准\" || text=\"相关搜索\"][visibleToUser=true]",
          "matches": "[text*=\"跳过\" || text^=\"Skip Ad\"][text.length<10][!(vid=\"tv_user_name\")][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/9733ada7-4961-4a9f-b48d-3398ecd05508",
          "snapshotUrls": [
            "https://i.gkd.li/i/17452158",
            "https://i.gkd.li/i/22951606"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/19035037",
            "https://i.gkd.li/i/20585457",
            "https://i.gkd.li/i/21937254",
            "https://i.gkd.li/i/28885475"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"splash_count_down_view\"]",
          "exampleUrls": "https://e.gkd.li/6ed22307-ce1d-479e-8a8d-a6fe4ffa614c",
          "snapshotUrls": [
            "https://i.gkd.li/i/17109105",
            "https://i.gkd.li/i/17108010"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/9733ada7-4961-4a9f-b48d-3398ecd05508",
          "snapshotUrls": "https://i.gkd.li/i/17452158",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".index.v2.IndexActivityV2",
            ".notification.NotificationAuthorizationTranslucentActivity",
            "com.xingin.matrix.notedetail.r10.comment.r10.NoteCommentActivity",
            "com.xingin.authorization.NotificationAuthorizationTranslucentActivity"
          ],
          "matches": "@ImageView[clickable=true][visibleToUser=true] - LinearLayout > [text^=\"打开通知\" || text^=\"Enable notifications\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13195753",
            "https://i.gkd.li/i/13222356",
            "https://i.gkd.li/i/13255627",
            "https://i.gkd.li/i/16918033",
            "https://i.gkd.li/i/18417785"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 30000
        },
        {
          "activityIds": ".index.v2.IndexActivityV2",
          "matches": "@ImageView <2 FrameLayout - [text^=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13250418",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 30000
        },
        {
          "activityIds": [
            ".index.v2.IndexActivityV2",
            ".notification.NotificationAuthorizationTranslucentActivity",
            "com.xingin.matrix.notedetail.r10.comment.r10.NoteCommentActivity"
          ],
          "matches": "@ImageView <2 FrameLayout >2 [text^=\"打开通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13195753",
            "https://i.gkd.li/i/13222356",
            "https://i.gkd.li/i/13255627"
          ],
          "fastQuery": true,
          "matchTime": 30000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.xingin.authorization.NotificationAuthorizationTranslucentActivity",
          "matches": "[vid=\"mNegativeImageView\"]",
          "exampleUrls": "https://e.gkd.li/01c3cb0b-80b1-4e70-a330-6f4afb7ddf44",
          "snapshotUrls": "https://i.gkd.li/i/16918033",
          "fastQuery": true,
          "matchTime": 30000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView <2 FrameLayout >2 [text^=\"打开通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13195753",
            "https://i.gkd.li/i/13222356",
            "https://i.gkd.li/i/13256145",
            "https://i.gkd.li/i/13255627"
          ],
          "fastQuery": true,
          "matchTime": 30000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView <2 FrameLayout - [text^=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13250418",
          "fastQuery": true,
          "matchTime": 30000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "activityIds": [
        ".index.v2.IndexActivityV2",
        "com.xingin.update.UpdateDialogActivity"
      ],
      "rules": [
        {
          "matches": "@ImageView <2 * + * > [text=\"NEW\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13246890",
            "https://i.gkd.li/i/13741680",
            "https://i.gkd.li/i/14445193"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".index.v2.IndexActivityV2",
            "com.xingin.update.UpdateDialogActivity"
          ],
          "matchTime": 10000
        },
        {
          "matches": "Button[text=\"立即安装\" || text=\"Install now\"] + Button[text=\"稍后再说\" || text=\"Later\"]",
          "exampleUrls": "https://e.gkd.li/7064a569-fcdd-44e2-b4d1-c55e093f4a02",
          "snapshotUrls": [
            "https://i.gkd.li/i/15283162",
            "https://i.gkd.li/i/30352967",
            "https://i.gkd.li/i/32207987"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "activityIds": [
            ".index.v2.IndexActivityV2",
            "com.xingin.update.UpdateDialogActivity"
          ],
          "matchTime": 10000
        },
        {
          "matches": "Button[text=\"立即安装\"] + Button[text=\"稍后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/15283162",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "activityIds": [
            ".index.v2.IndexActivityV2",
            "com.xingin.update.UpdateDialogActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "分段广告-信息流广告",
      "desc": "①长按[赞助/广告]卡片 ②点击[不喜欢]",
      "fastQuery": true,
      "activityIds": ".index.v2.IndexActivityV2",
      "rules": [
        {
          "action": "longClick",
          "name": "①长按[赞助/广告]卡片",
          "excludeMatches": "RecyclerView > LinearLayout > [text^=\"不喜欢\"]",
          "matches": "@[longClickable=true] >(1,3) TextView[text=\"赞助\" || text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455503",
            "https://i.gkd.li/i/13470690",
            "https://i.gkd.li/i/27015032",
            "https://i.gkd.li/i/27015306"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14392171",
          "exampleUrls": [
            "https://e.gkd.li/728542d5-d6fe-44ab-91b2-a96ee34abdf8",
            "https://e.gkd.li/a5d7871e-05e1-4a77-b0f5-3d94d7fd7663"
          ],
          "fastQuery": true,
          "activityIds": ".index.v2.IndexActivityV2"
        },
        {
          "preKeys": 0,
          "name": "②点击[不喜欢]",
          "matches": "@[clickable=true] > TextView[text^=\"不喜欢\"][text!*=\"作者\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455500",
            "https://i.gkd.li/i/14392187",
            "https://i.gkd.li/i/26647708"
          ],
          "exampleUrls": [
            "https://e.gkd.li/cbf948c2-8a78-42a2-911d-c2369aaeff7d",
            "https://e.gkd.li/09f8f42b-ed78-4cd1-9d77-8327ca91e1e0"
          ],
          "fastQuery": true,
          "activityIds": ".index.v2.IndexActivityV2"
        },
        {
          "action": "longClick",
          "name": "长按\"赞助\"/\"广告\"卡片",
          "matches": "@FrameLayout[clickable=true] > LinearLayout TextView[text=\"赞助\"||text=\"广告\"][visibleToUser=true]",
          "excludeMatches": "RecyclerView > LinearLayout > [text^=\"不喜欢\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455503",
            "https://i.gkd.li/i/13470690",
            "https://i.gkd.li/i/14392171"
          ],
          "fastQuery": true,
          "activityIds": "com.xingin.xhs.index.v2.IndexActivityV2"
        },
        {
          "preKeys": 2,
          "name": "点\"不感兴趣\"",
          "matches": "RecyclerView > @LinearLayout[index=0] > TextView[text^=\"不喜欢\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455500",
            "https://i.gkd.li/i/14392187"
          ],
          "fastQuery": true,
          "activityIds": "com.xingin.xhs.index.v2.IndexActivityV2"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-优惠券弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.xingin.reactnative.ui.XhsReactTranslucentActivity",
          "matches": "@ImageView[visibleToUser=true] < * -2 * > [text=\"你有新人券待领取\"]",
          "snapshotUrls": "https://i.gkd.li/i/14391484"
        }
      ]
    },
    {
      "key": 5,
      "name": "评价提示-评分弹窗",
      "desc": "返回关闭弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 4000,
      "rules": [
        {
          "action": "back",
          "activityIds": "com.xingin.lurker.appscore.ui.AppScoreDialogActivity",
          "matches": "[text=\"您对小红书的评分如何?\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/9727815d-b881-4904-bbdc-19ade426977e",
          "snapshotUrls": "https://i.gkd.li/i/15281458",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "forcedTime": 4000
        },
        {
          "action": "back",
          "matches": "[text=\"您对小红书的评分如何?\"]",
          "exampleUrls": "https://m.gkd.li/57941037/9727815d-b881-4904-bbdc-19ade426977e",
          "snapshotUrls": "https://i.gkd.li/i/15281458",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "forcedTime": 4000
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-你可能感兴趣的人",
      "desc": "点击[关闭]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".index.v2.IndexActivityV2",
          "matches": "[text=\"你可能感兴趣的人\"] +2 Button[text=\"关闭\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/25244655"
        }
      ]
    },
    {
      "key": 8,
      "name": "局部广告-首页信息流中推荐博主",
      "desc": "x掉 (关注xx的人也关注TA)",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".index.v2.IndexActivityV2",
          "matches": "[vid=\"recommend_close\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25245325"
        }
      ]
    },
    {
      "key": 9,
      "name": "局部广告-直播间右下角卡片",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.xingin.alpha.audience.v2.AlphaAudienceActivityV2",
          "matches": "ImageView < @[clickable=true] <n ViewGroup <<3 [vid=\"canvasLayout\"]",
          "snapshotUrls": "https://i.gkd.li/i/25245250"
        }
      ]
    },
    {
      "key": 15,
      "name": "分段广告-直播卡片Ad",
      "desc": "长按\"直播中\"标识的卡片-点\"不喜欢\"",
      "fastQuery": true,
      "activityIds": ".index.v2.IndexActivityV2",
      "rules": [
        {
          "action": "longClick",
          "name": "长按\"直播中\"卡片",
          "matches": "[text=\"直播中\"] <<3 [vid=\"liveTagLottieLayout\"] + [vid=\"liveDescLayout\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25873879",
          "fastQuery": true,
          "activityIds": ".index.v2.IndexActivityV2"
        },
        {
          "preKeys": 0,
          "name": "点\"不喜欢\"",
          "matches": "@[clickable=true] > [text=\"不喜欢\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25874144",
          "exampleUrls": "https://e.gkd.li/6a32974d-ea39-4f85-9f76-2d8b8a3fc679",
          "fastQuery": true,
          "activityIds": ".index.v2.IndexActivityV2"
        }
      ]
    },
    {
      "key": 19,
      "name": "评价提示",
      "desc": "返回关闭弹窗",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "matches": "[text=\"您对小红书的评分如何?\"]",
          "exampleUrls": "https://m.gkd.li/57941037/9727815d-b881-4904-bbdc-19ade426977e",
          "snapshotUrls": "https://i.gkd.li/i/15281458",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

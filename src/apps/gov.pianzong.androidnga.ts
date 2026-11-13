// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "gov.pianzong.androidnga",
  "name": "NGA玩家社区",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12476484",
        "https://i.gkd.li/i/12706127",
        "https://i.gkd.li/i/12864707",
        "https://i.gkd.li/i/12911882",
        "https://i.gkd.li/i/13798686",
        "https://i.gkd.li/i/14155643",
        "https://i.gkd.li/i/15172694"
      ],
      "matchRoot": true,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"tv_tiaoguo\" || vid=\"iv_tg_ad\" || vid=\"tv_skip\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/d7520bc7-588b-4654-b6aa-d2736ac200bf",
          "snapshotUrls": [
            "https://i.gkd.li/i/13798686",
            "https://i.gkd.li/i/17082872",
            "https://i.gkd.li/i/17082897",
            "https://i.gkd.li/i/17082899",
            "https://i.gkd.li/i/23432463"
          ],
          "matchRoot": true,
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"tv_tiaoguo\" || vid=\"iv_tg_ad\"]",
          "exampleUrls": "https://e.gkd.li/d7520bc7-588b-4654-b6aa-d2736ac200bf",
          "snapshotUrls": [
            "https://i.gkd.li/i/17082872",
            "https://i.gkd.li/i/17082897",
            "https://i.gkd.li/i/17082899",
            "https://i.gkd.li/i/13798686"
          ],
          "matchRoot": true,
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_tg_ad\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "fastQuery": true,
          "resetMatch": "app",
          "matchRoot": true,
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/ksad_splash_circle_skip_view\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "fastQuery": true,
          "resetMatch": "app",
          "matchRoot": true,
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/ksad_skip_view_skip\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "fastQuery": true,
          "resetMatch": "app",
          "matchRoot": true,
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"tv_tiaoguo\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "fastQuery": true,
          "resetMatch": "app",
          "matchRoot": true,
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<=5]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "fastQuery": true,
          "resetMatch": "app",
          "matchRoot": true,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-首页-推荐-卡片广告",
      "activityIds": "com.donews.nga.activitys.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12482727",
      "rules": [
        {
          "activityIds": "com.donews.nga.activitys.MainActivity",
          "matches": "[vid=\"iv_close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/12482727"
        },
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_close_ad\"]",
          "activityIds": "com.donews.nga.activitys.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-话题-帖子列表广告",
      "desc": "点击卡片x按钮关闭广告",
      "activityIds": ".activity.forumdetail.ForumDetailActivity",
      "rules": [
        {
          "matches": "Image[text=\"ams_icon_single_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12655805",
          "activityIds": ".activity.forumdetail.ForumDetailActivity"
        },
        {
          "matches": "TextView[text!=null] - ImageView < LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView[id=null]",
          "snapshotUrls": "https://i.gkd.li/i/12706140",
          "activityIds": ".activity.forumdetail.ForumDetailActivity"
        },
        {
          "matches": "[text=\"广告\"] - [vid=\"iv_information_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13303236",
          "activityIds": ".activity.forumdetail.ForumDetailActivity"
        },
        {
          "matches": "Image[text=\"ams_icon_single_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12655805"
          ],
          "activityIds": "gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity"
        },
        {
          "matches": "TextView[text!=null] - ImageView < LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706140"
          ],
          "activityIds": "gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity"
        },
        {
          "matches": "[text=\"广告\"] - [id=\"gov.pianzong.androidnga:id/iv_information_ad_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13303236"
          ],
          "activityIds": "gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity"
        },
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/rv_post_list\"] > FrameLayout *[childCount=1 || childCount=3] > *[childCount<=4] > [text!=\"\" && text!=null] +(1,2) *[childCount<=3 && childCount!=2] > [name*=\"Image\" || name*=\"TextView\"][text!=\"\"][index=0 || index>1][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12655805",
            "https://i.gkd.li/i/12706140",
            "https://i.gkd.li/i/14123759",
            "https://i.gkd.li/i/14155652"
          ],
          "activityIds": "gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity"
        },
        {
          "actionCdKey": 6,
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_information_ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13303236",
          "activityIds": "gov.pianzong.androidnga.activity.forumdetail.ForumDetailActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-社区-顶部广告",
      "activityIds": "com.donews.nga.activitys.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12706132"
      ],
      "rules": [
        {
          "activityIds": "com.donews.nga.activitys.MainActivity",
          "matches": "[vid=\"iv_close_community_ad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706132"
          ]
        },
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_close_community_ad\"]",
          "activityIds": "com.donews.nga.activitys.MainActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.donews.nga.activitys.MainActivity",
          "matches": "[vid=\"iv_homedialog_close\" || vid=\"iv_close\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af",
          "snapshotUrls": [
            "https://i.gkd.li/i/14126934",
            "https://i.gkd.li/i/21158044"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.hihonor.android.launcher.unihome.UniHomeLauncher",
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_homedialog_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af",
          "snapshotUrls": "https://i.gkd.li/i/14126934",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-评论区底部广告",
      "desc": "点击关闭",
      "rules": [
        {
          "position": {
            "left": "width * 0.9629",
            "top": "width * 0.0472"
          },
          "activityIds": ".activity.forumdetail.ArticleDetailActivity",
          "matches": "[id=\"advertisementBottom\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/589a4441-4be0-4ebc-90f5-d0dc5cfc84ff",
          "snapshotUrls": "https://i.gkd.li/i/17348441",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17348415"
        },
        {
          "position": {
            "left": "width * 0.9629",
            "top": "width * 0.0472"
          },
          "activityIds": "gov.pianzong.androidnga.activity.forumdetail.ArticleDetailActivity",
          "matches": "[id=\"advertisementBottom\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/589a4441-4be0-4ebc-90f5-d0dc5cfc84ff",
          "snapshotUrls": "https://i.gkd.li/i/17348441",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17348415"
        }
      ]
    },
    {
      "key": 6,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.donews.nga.activitys.MainActivity",
          "matches": "[vid=\"iv_close_notification_guide\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/c6be338c-2a1b-4123-bd8c-51fa35d2b8f2",
          "snapshotUrls": "https://i.gkd.li/i/24105952",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 7,
      "name": "全屏广告-广告弹窗",
      "desc": "点击X",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.hihonor.android.launcher.unihome.UniHomeLauncher",
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_homedialog_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af",
          "snapshotUrls": "https://i.gkd.li/i/14126934"
        }
      ]
    }
  ]
});

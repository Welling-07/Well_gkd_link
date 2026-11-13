// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.seebaby",
  "name": "掌通家园",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": [
        "com.seebaby.login.ui.activity.LauncherActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12705351"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".login.ui.activity.LauncherActivity",
          "matches": "@[vid=\"btn_later\"] + [text$=\"新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705351",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.seebaby:id/btn_later\"] + [text$=\"新版本\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.seebaby.login.ui.activity.LauncherActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-信息流、文章底部广告",
      "activityIds": [
        ".login.ui.activity.LauncherActivity",
        ".parent.article.ui.activity.NativeArticleDetailActivity"
      ],
      "rules": [
        {
          "matches": "[vid=\"tv_ad_detail\"] + [vid=\"ic_delad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12705353",
            "https://i.gkd.li/i/12705363"
          ],
          "activityIds": [
            ".login.ui.activity.LauncherActivity",
            ".parent.article.ui.activity.NativeArticleDetailActivity"
          ]
        },
        {
          "matches": "[vid=\"ad_tv_advertiser\"] + [vid=\"ad_iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705372",
          "activityIds": [
            ".login.ui.activity.LauncherActivity",
            ".parent.article.ui.activity.NativeArticleDetailActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1
          ],
          "matches": "[vid=\"tv_un_instrest\"]",
          "snapshotUrls": "https://i.gkd.li/i/12705358",
          "activityIds": [
            ".login.ui.activity.LauncherActivity",
            ".parent.article.ui.activity.NativeArticleDetailActivity"
          ]
        },
        {
          "matches": "[id=\"com.seebaby:id/tv_ad_detail\"] + [id=\"com.seebaby:id/ic_delad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12705353",
            "https://i.gkd.li/i/12705363"
          ],
          "activityIds": [
            "com.seebaby.login.ui.activity.LauncherActivity",
            "com.seebaby.parent.article.ui.activity.NativeArticleDetailActivity"
          ]
        },
        {
          "matches": "[id=\"com.seebaby:id/ad_tv_advertiser\"] + [id=\"com.seebaby:id/ad_iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12705372"
          ],
          "activityIds": [
            "com.seebaby.login.ui.activity.LauncherActivity",
            "com.seebaby.parent.article.ui.activity.NativeArticleDetailActivity"
          ]
        },
        {
          "preKeys": [
            3,
            4
          ],
          "matches": "[id=\"com.seebaby:id/tv_un_instrest\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12705358"
          ],
          "activityIds": [
            "com.seebaby.login.ui.activity.LauncherActivity",
            "com.seebaby.parent.article.ui.activity.NativeArticleDetailActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.ranfeng.adranfengsdk.biz.activity.InterstitialActivity",
            "com.tianmu.biz.activity.InterstitialActivity"
          ],
          "matches": "[vid=\"ranfeng_widget_iv_close\" || vid=\"tianmu_widget_iv_close\"][clickable=true]",
          "exampleUrls": "https://e.gkd.li/0ae7b19f-6fa1-4eaf-a5b9-0dfb214541b4",
          "snapshotUrls": [
            "https://i.gkd.li/i/23981370",
            "https://i.gkd.li/i/24360340"
          ]
        }
      ]
    }
  ]
});

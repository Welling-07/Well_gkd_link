// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huawei.android.totemweather",
  "name": "华为天气",
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
          "action": "clickCenter",
          "matches": "[id=\"com.huawei.hms.ads.uiengine:id/hiad_skip_text\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12928975",
            "https://i.gkd.li/i/13226636"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": [
            "[id=\"com.huawei.android.totemweather:id/rl_splash_container\"]",
            "[text.length<=4][text^=\"跳过\"]"
          ],
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12928975",
            "https://i.gkd.li/i/13226636"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".WeatherMainActivity",
            ".WeatherHome"
          ],
          "matches": "[vid=\"rl_close_pps\" || vid=\"ad_cancel\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521221",
            "https://i.gkd.li/i/13787501",
            "https://i.gkd.li/i/13800100",
            "https://i.gkd.li/i/14278462",
            "https://i.gkd.li/i/15831584"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".composite.MarketCompositeActivity",
          "matches": "[vid=\"promote_ad_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13218197",
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "activityIds": ".news.main.content.ModulesActivity",
          "matches": "@[clickable=true][text=\"负反馈\"] <<n [vid=\"content_main_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/24688832"
        },
        {
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "com.huawei.openalliance.ad.activity.FeedbackActivity",
            ".news.main.content.ModulesActivity"
          ],
          "anyMatches": [
            "[text=\"直接关闭\"]",
            "@[clickable=true][text=\"直接关闭\"] <<n [vid=\"content_main_view\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13259434",
            "https://i.gkd.li/i/15831539",
            "https://i.gkd.li/i/24688856"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "matches": "[vid=\"rl_close_pps\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13800100",
            "https://i.gkd.li/i/14278462",
            "https://i.gkd.li/i/15831584"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.huawei.android.totemweather.composite.MarketCompositeActivity",
          "matches": "[id=\"com.huawei.android.totemweather:id/promote_ad_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13218197",
          "fastQuery": true
        },
        {
          "preKeys": [
            4,
            5
          ],
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "matches": "[text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13259434",
            "https://i.gkd.li/i/15831539"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            "com.huawei.android.totemweather.WeatherMainActivity",
            "com.huawei.android.totemweather.WeatherHome"
          ],
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13521221",
            "https://i.gkd.li/i/13787501"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-卡片式广告",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.huawei.android.totemweather.composite.MarketCompositeActivity",
          "matches": "[id=\"com.huawei.android.totemweather:id/promote_ad_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13218197",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "matches": "[id=\"com.huawei.android.totemweather:id/feedback_negative_flv\"] > [text=\"直接关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259434",
          "fastQuery": true
        },
        {
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13521221",
          "fastQuery": true
        },
        {
          "activityIds": "com.huawei.android.totemweather.WeatherHome",
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13787501",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-顶部广告条",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "matches": "[vid=\"rl_close_pps\"] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13800100"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huawei.hwid",
  "name": "HMS Core",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": [
        "com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity"
      ],
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity",
            "com.huawei.openalliance.ad.ppskit.activity.InterstitialAdActivity"
          ],
          "matches": "@[id*=\"interstitial_close\"][clickable=true] +n * >n [text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12709068",
            "https://i.gkd.li/i/24675884",
            "https://i.gkd.li/i/24979139"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.huawei.hms.runtimekit.stub.",
          "matches": "[id=\"com.huawei.hms.game:id/close_image\"]",
          "snapshotUrls": "https://i.gkd.li/i/34187296",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.huawei.hwid:id/interstitial_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12709068"
          ],
          "activityIds": [
            "com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-页面中间跳出广告",
      "enable": false,
      "activityIds": [
        "com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"com.huawei.hwid:id/interstitial_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12709068"
          ],
          "activityIds": [
            "com.huawei.openalliance.ad.ppskit.activity.InnerPPSInterstitialAdActivity"
          ]
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.longshine.nanwang.electric.charge",
  "name": "顺易充",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": [
        "com.android.app.station.NewMainAct"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12700011"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.android.app.station.NewMainAct",
          "matches": "[vid=\"bodyFL\"] + [vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700011",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.longshine.nanwang.electric.charge:id/bodyFL\"] + [id=\"com.longshine.nanwang.electric.charge:id/ivClose\"]",
          "activityIds": [
            "com.android.app.station.NewMainAct"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "activityIds": [
        "com.android.app.station.NewMainAct"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12700011"
      ],
      "rules": [
        {
          "matches": "[id=\"com.longshine.nanwang.electric.charge:id/bodyFL\"] + [id=\"com.longshine.nanwang.electric.charge:id/ivClose\"]",
          "activityIds": [
            "com.android.app.station.NewMainAct"
          ]
        }
      ]
    }
  ]
});

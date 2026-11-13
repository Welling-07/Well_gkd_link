// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yaerxing.fkst",
  "name": "疯狂刷题",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "enable": false,
      "activityIds": [
        "com.yaerxing.fkst.activity.MainActivity",
        "com.yaerxing.fkst.activity.SplashActivity",
        "com.yaerxing.fkst.activity.SelectModuleActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12715037",
        "https://i.gkd.li/i/12715047",
        "https://i.gkd.li/i/12715053"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[id=\"com.yaerxing.fkst:id/iv_close\"] < LinearLayout - LinearLayout > [id=\"com.yaerxing.fkst:id/btn_update\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.yaerxing.fkst.activity.MainActivity",
            "com.yaerxing.fkst.activity.SplashActivity",
            "com.yaerxing.fkst.activity.SelectModuleActivity"
          ]
        }
      ]
    }
  ]
});

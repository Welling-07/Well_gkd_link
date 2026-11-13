// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qjy.youqulife.io",
  "name": "MINO 4K",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "快手广告",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": [
            "[text=\"广告\"] ",
            "[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13378653",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "快手广告 (2)",
          "activityIds": "com.qjy.youqulife.io.MainActivity",
          "fastQuery": true,
          "matches": "[text=\"广告\"] <2 ViewGroup -n ViewGroup > ViewGroup > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13378653",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

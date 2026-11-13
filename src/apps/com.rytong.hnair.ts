// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.rytong.hnair",
  "name": "海南航空",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "com.hnair.airlines.ui.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12846381",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.hnair.airlines.ui.main.MainActivity",
          "matches": "ImageView[id*=\"com.rytong.hnair:id/iv_cloes\"]",
          "snapshotUrls": "https://i.gkd.li/i/12846381",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

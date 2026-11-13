// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.netease.yanxuan",
  "name": "网易严选",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "com.netease.yanxuan.module.mainpage.activity.MainPageActivity",
      "snapshotUrls": "https://i.gkd.li/i/12840641",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".module.mainpage.activity.MainPageActivity",
          "matches": "[vid=\"trans_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840641",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.netease.yanxuan:id/trans_cancel\"]",
          "activityIds": "com.netease.yanxuan.module.mainpage.activity.MainPageActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lanjinger.choiassociatedpress",
  "name": "财联社",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.lanjinger.choiassociatedpress.main.OperateActivity",
      "snapshotUrls": "https://i.gkd.li/i/13749206",
      "rules": [
        {
          "activityIds": ".main.OperateActivity",
          "matches": "@ImageView[id$=\"iv_back\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13749206",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[id$=\"iv_back\"][clickable=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.lanjinger.choiassociatedpress.main.OperateActivity"
        }
      ]
    }
  ]
});

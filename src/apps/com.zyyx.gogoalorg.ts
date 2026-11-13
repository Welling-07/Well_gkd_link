// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zyyx.gogoalorg",
  "name": "Go-Goal",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.AdvertrisementActivity",
          "matches": "RelativeLayout[childCount=3] > [vid=\"iv_bottom_view\"] - [text$=\"跳转\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26194519",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.youloft.calendar",
  "name": "万年历",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-悬浮广告",
      "rules": [
        {
          "name": "万年历页面-右侧悬浮广告",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"ad_iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13348416"
        },
        {
          "name": "万年历页面-右侧悬浮广告 (2)",
          "activityIds": "com.youloft.calendar.MainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.youloft.calendar:id/ad_iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13348416"
        }
      ]
    }
  ]
});

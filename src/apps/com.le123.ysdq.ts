// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.le123.ysdq",
  "name": "影视大全",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.elinkway.infinitemovies.ui.activity.NewMainActivity",
          "matches": "[vid=\"ad_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13635244"
        },
        {
          "activityIds": "com.elinkway.infinitemovies.ui.activity.NewMainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.le123.ysdq:id/ad_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13635244"
        }
      ]
    }
  ]
});

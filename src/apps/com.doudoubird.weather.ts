// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.doudoubird.weather",
  "name": "最准天气",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"ad_view\"] + [vid=\"delete_icon\"]",
          "exampleUrls": "https://e.gkd.li/2a61d3de-6117-4d85-8f4d-565f6ee00a57",
          "snapshotUrls": "https://i.gkd.li/i/17358146"
        }
      ]
    }
  ]
});

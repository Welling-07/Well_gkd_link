// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.wallet",
  "name": "荣耀钱包",
  "groups": [
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.hihonor.adsdk.reward.RewardActivity",
          "matches": "[vid=\"ad_close_dialog\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/31248363",
          "exampleUrls": "https://e.gkd.li/457f1d00-a7ea-43cb-9263-be9a012bf310"
        }
      ]
    }
  ]
});

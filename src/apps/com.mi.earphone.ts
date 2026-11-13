// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mi.earphone",
  "name": "小米耳机",
  "groups": [
    {
      "key": 0,
      "name": "评价提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "@[vid=\"close_iv\"] + [text=\"喜欢“小米耳机”吗？\"]",
          "snapshotUrls": "https://i.gkd.li/i/23263036"
        }
      ]
    }
  ]
});

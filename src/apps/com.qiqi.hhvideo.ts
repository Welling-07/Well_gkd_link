// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qiqi.hhvideo",
  "name": "电影猎手",
  "groups": [
    {
      "key": 0,
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text=\"开启青少年模式\"] + [text=\"我已知晓\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c50c5c8f-5fec-437e-908c-abc7b2cedee8",
          "snapshotUrls": "https://i.gkd.li/i/14343546",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

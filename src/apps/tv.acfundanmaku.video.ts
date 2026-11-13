// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "tv.acfundanmaku.video",
  "name": "AcFun",
  "groups": [
    {
      "key": 0,
      "name": "青少年模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"tv.acfundanmaku.video:id/btnSimpleDialogOne\"]",
          "exampleUrls": "https://m.gkd.li/6328439/8229e6ec-f1d6-4162-96ad-c3a6b74877c7",
          "snapshotUrls": "https://i.gkd.li/i/13518737",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

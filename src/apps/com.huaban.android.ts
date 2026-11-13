// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huaban.android",
  "name": "花瓣",
  "groups": [
    {
      "key": 0,
      "name": "更新提示-版本更新弹窗",
      "desc": "点击不再提示",
      "order": -9,
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"tv_update\"] + * > [text=\"不再提示\"]",
          "snapshotUrls": "https://i.gkd.li/i/13832253",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

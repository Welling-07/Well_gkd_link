// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tvbc.maiduidui",
  "name": "埋堆堆",
  "groups": [
    {
      "key": 0,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/13847804",
      "rules": [
        {
          "matches": "@[vid=\"tv_ok\"] - [vid=\"tv_open_child_model\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    }
  ]
});

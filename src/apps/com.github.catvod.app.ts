// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.github.catvod.app",
  "name": "猫影视",
  "groups": [
    {
      "key": 0,
      "name": "功能类-应用协议弹窗",
      "enable": false,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": "com.github.catvod.app.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13938918",
      "rules": [
        {
          "matches": "[desc*=\"本软件仅供学习\"] + [desc=\"同意\"]",
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": "com.github.catvod.app.MainActivity"
        }
      ]
    }
  ]
});

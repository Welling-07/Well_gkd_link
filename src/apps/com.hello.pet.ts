// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hello.pet",
  "name": "街猫",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14622639",
      "matchTime": 10000,
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] +2 [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14622639",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "通知提示-请求开启通知权限弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14622639",
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] +2 [text=\"取消\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

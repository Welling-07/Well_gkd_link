// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sankuai.movie",
  "name": "猫眼",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-开启通知弹窗",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - * > [text=\"开启通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/18455375",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/12649942",
        "https://i.gkd.li/i/12649938",
        "https://i.gkd.li/i/13799885"
      ],
      "matchTime": 10000,
      "rules": [
        {
          "matches": "[text^=\"更新\"] +(3) LinearLayout > [text=\"取消\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

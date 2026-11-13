// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.gamecenter.sdk.service",
  "name": "小米游戏服务",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14188929",
      "rules": [
        {
          "activityIds": "com.xiaomi.gamecenter.sdk.ui.actlayout.ViewUpgrade",
          "matches": "[text=\"升级提示\"] < * + [vid=\"btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14188929",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"升级提示\"] < * + [vid=\"btn_close\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

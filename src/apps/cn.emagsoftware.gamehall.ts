// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.emagsoftware.gamehall",
  "name": "咪咕快游",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13448894",
      "rules": [
        {
          "activityIds": "com.migugame.home_module.ui.activity.HomeActivity",
          "matches": "[vid=\"btn_update\"] -2 [vid=\"btn_cancle\"]",
          "snapshotUrls": "https://i.gkd.li/i/13448894",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"cn.emagsoftware.gamehall:id/btn_update\"] -2 [id=\"cn.emagsoftware.gamehall:id/btn_cancle\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.migugame.home_module.ui.activity.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13448894",
      "rules": [
        {
          "matches": "[id=\"cn.emagsoftware.gamehall:id/btn_update\"] -2 [id=\"cn.emagsoftware.gamehall:id/btn_cancle\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.migugame.home_module.ui.activity.HomeActivity"
        }
      ]
    }
  ]
});

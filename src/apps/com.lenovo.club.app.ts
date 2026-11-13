// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lenovo.club.app",
  "name": "联想",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13498778",
      "rules": [
        {
          "matches": "[id=\"com.lenovo.club.app:id/tv_title\"][text=\"发现新版本\"] < LinearLayout [text=\"下次再说\"]",
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
      "activityIds": "com.lenovo.club.app.AdActivity",
      "snapshotUrls": "https://i.gkd.li/i/13498778",
      "rules": [
        {
          "matches": "[id=\"com.lenovo.club.app:id/tv_title\"][text=\"发现新版本\"] < LinearLayout [text=\"下次再说\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.lenovo.club.app.AdActivity"
        }
      ]
    }
  ]
});

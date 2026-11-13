// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wisedu.cpdaily",
  "name": "今日校园",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13643565",
      "rules": [
        {
          "activityIds": "com.wisorg.wisedu.home.ui.HomeActivity",
          "matches": "[vid=\"btn_update\"] + [vid=\"tv_ignore\"]",
          "snapshotUrls": "https://i.gkd.li/i/13643565",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.wisedu.cpdaily:id/btn_update\"] + [id=\"com.wisedu.cpdaily:id/tv_ignore\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.wisorg.wisedu.home.ui.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13643565",
      "rules": [
        {
          "matches": "[id=\"com.wisedu.cpdaily:id/btn_update\"] + [id=\"com.wisedu.cpdaily:id/tv_ignore\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.wisorg.wisedu.home.ui.HomeActivity"
        }
      ]
    }
  ]
});

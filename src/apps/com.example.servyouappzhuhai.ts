// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.example.servyouappzhuhai",
  "name": "广东税务",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.com.servyou.servyouzhuhai.activity.main.imps.MainActivity",
          "matches": "[vid=\"btn_dialog_negtive\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440721",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.example.servyouappzhuhai:id/btn_dialog_negtive\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440721",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-通知权限授权弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "rules": [
        {
          "matches": "[id=\"com.example.servyouappzhuhai:id/btn_dialog_negtive\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440721",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "activity"
        }
      ]
    }
  ]
});

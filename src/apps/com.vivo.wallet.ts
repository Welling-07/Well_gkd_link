// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vivo.wallet",
  "name": "钱包",
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
          "activityIds": ".bookkeep.activity.BookKeepMainActivity",
          "matches": "@[clickable=true] > [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440881",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@Button[text*=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440881",
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
      "activityIds": "com.vivo.wallet.bookkeep.activity.BookKeepMainActivity",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "rules": [
        {
          "matches": "@Button[text*=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440881",
          "activityIds": "com.vivo.wallet.bookkeep.activity.BookKeepMainActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "activity"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cmcc.hebao",
  "name": "和包",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.cmcc.wallet.mocam.activity.home.WalletHomeActivity",
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"dialog-delete\"] <<n [vid=\"rl_parent\"]",
          "exampleUrls": "https://m.gkd.li/57941037/cb33c5b5-dd2e-4aa9-80d1-f7013f150305",
          "snapshotUrls": "https://i.gkd.li/i/14567338",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.cmcc.wallet.mocam.activity.home.WalletHomeActivity",
          "matches": "@[clickable=true] > [text=\"dialog-delete\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/cb33c5b5-dd2e-4aa9-80d1-f7013f150305",
          "snapshotUrls": "https://i.gkd.li/i/14567338",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.cmcc.wallet.mocam.activity.home.WalletHomeActivity",
          "matches": "@[clickable=true] > [text=\"dialog-delete\"][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/cb33c5b5-dd2e-4aa9-80d1-f7013f150305",
          "snapshotUrls": "https://i.gkd.li/i/14567338"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cisdom.com.bigteaapp",
  "name": "大茶肆",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "snapshotUrls": "https://i.gkd.li/i/13228579",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text$=\"抽奖送大礼\"] < WebView - [vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13228579",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text$=\"抽奖送大礼\"] < WebView - [id=\"cisdom.com.bigteaapp:id/close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "snapshotUrls": "https://i.gkd.li/i/13228579",
      "rules": [
        {
          "matches": "[text$=\"抽奖送大礼\"] < WebView - [id=\"cisdom.com.bigteaapp:id/close\"]",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    }
  ]
});

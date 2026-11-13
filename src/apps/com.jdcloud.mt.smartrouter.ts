// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jdcloud.mt.smartrouter",
  "name": "京东云无线宝",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/26521f31-ee9b-4bab-8275-fab75a76c96e",
          "snapshotUrls": "https://i.gkd.li/i/14432168",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

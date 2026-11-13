// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tradingview.tradingviewapp",
  "name": "TradingView",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".root.view.RootActivity",
          "action": "clickCenter",
          "matches": "@[clickable=true][text=\"关闭广告\"] <<n [vid=\"chart_wbv\"]",
          "exampleUrls": "https://e.gkd.li/b1a372a2-f722-4d1f-ad86-32ea1cd4d83d",
          "snapshotUrls": "https://i.gkd.li/i/29629766"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tradingview.tradingviewapp.root.view.RootActivity",
          "matches": "@[clickable=true][text=\"关闭广告\"] <<n [vid=\"chart_wbv\"]",
          "exampleUrls": "https://e.gkd.li/3798ab1b-2cd3-471e-8303-b8124746e9d8",
          "snapshotUrls": "https://i.gkd.li/i/16725697"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".root.view.RootActivity",
          "matches": "[vid=\"friday_fl_layout\"] > [vid=\"friday_iv_close\"]",
          "exampleUrls": "https://e.gkd.li/9cc35e84-1b27-4aa5-a74b-ace7cf42d943",
          "snapshotUrls": "https://i.gkd.li/i/18222211"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zdbq.ljtq.ljweather",
  "name": "莉景天气",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.zdbq.ljtq.ljweather.IndexActivity",
          "matches": "[vid=\"dialog_daily_activity_card_cancel\"]"
        }
      ]
    }
  ]
});

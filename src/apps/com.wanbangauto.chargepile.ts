// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wanbangauto.chargepile",
  "name": "星星充电",
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
          "activityIds": ".ui.newhome.MainActivity",
          "matches": "@[vid=\"image_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/ce4838fb-0f0d-4b20-bab3-565bd80bbc93",
          "snapshotUrls": "https://i.gkd.li/i/18421090",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

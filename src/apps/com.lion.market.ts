// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lion.market",
  "name": "虫虫助手",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".app.MainActivity",
          "matches": "[vid=\"dlg_main_ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6e29aaa4-1a01-4422-8379-24140a4ffed5",
          "snapshotUrls": "https://i.gkd.li/i/23784776",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

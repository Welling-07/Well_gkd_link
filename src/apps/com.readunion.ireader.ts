// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.readunion.ireader",
  "name": "息壤阅读",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.union.modulehome.ui.MainActivity",
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/8192872f-b071-450b-aea7-ec3ce62fee95",
          "snapshotUrls": "https://i.gkd.li/i/16790805"
        }
      ]
    }
  ]
});

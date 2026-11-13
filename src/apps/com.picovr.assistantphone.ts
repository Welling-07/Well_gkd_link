// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.picovr.assistantphone",
  "name": "PICO",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchRoot": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.MainActivity",
          "matches": "[vid=\"update_check_cancel_btn\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/b63e9ce4-e333-4702-abd5-d2355f83da1f",
          "snapshotUrls": "https://i.gkd.li/i/20852432",
          "matchRoot": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

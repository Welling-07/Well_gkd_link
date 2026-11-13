// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.chinaunicom.bol.cloudapp",
  "name": "联通云盘",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"update_button_cancel\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13998612",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"取消\"] < * + * > [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/13998612",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

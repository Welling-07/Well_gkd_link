// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.example.robortx.clousx6F",
  "name": "Clousx6",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-公告弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "@[vid=\"iv_close\"] + * >2 [text=\"上一条\"]",
          "exampleUrls": "https://m.gkd.li/57941037/a59e4c30-29e3-4d7e-9c05-f7e844ff6ac3",
          "snapshotUrls": "https://i.gkd.li/i/14571096",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-公告弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/14571096",
      "rules": [
        {
          "matches": "[vid=\"tv_next\"][text=\"下一条\"] <<n LinearLayout - [vid=\"iv_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1
        }
      ]
    }
  ]
});

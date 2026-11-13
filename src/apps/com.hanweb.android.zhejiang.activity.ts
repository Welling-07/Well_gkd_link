// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hanweb.android.zhejiang.activity",
  "name": "浙里办",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "actionMaximum": 1,
          "matches": "@[vid=\"iv_cancel\"] -2 * >2 [text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402048",
          "fastQuery": true,
          "resetMatch": "app"
        },
        {
          "actionMaximumKey": 0,
          "matches": "LinearLayout[childCount=2] > LinearLayout[childCount=2] > [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13520598",
          "fastQuery": true,
          "resetMatch": "app"
        },
        {
          "preKeys": 1,
          "matches": "[text=\"版本更新\"] - [vid=\"rl_back\"]",
          "snapshotUrls": "https://i.gkd.li/i/13521059",
          "fastQuery": true,
          "resetMatch": "app"
        },
        {
          "actionMaximum": 1,
          "matches": "@[id=\"com.hanweb.android.zhejiang.activity:id/iv_cancel\"] -2 * >2 [text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402048",
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "preKeys": 1,
          "matches": "[text=\"版本更新\"] - [id=\"com.hanweb.android.zhejiang.activity:id/rl_back\"]",
          "snapshotUrls": "https://i.gkd.li/i/13521059",
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

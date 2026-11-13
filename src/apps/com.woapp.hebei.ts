// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.woapp.hebei",
  "name": "联通智家",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "enable": false,
      "activityIds": "net.smartont.we.wohome.ui.main.view.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12707746"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[text=\"忽略更新\"] + [text=\"立即更新\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "net.smartont.we.wohome.ui.main.view.MainActivity"
        }
      ]
    }
  ]
});

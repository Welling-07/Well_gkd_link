// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wibo.bigbang.ocr",
  "name": "布丁扫描",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.vivo.upgradelibrary.upmode.appdialog.VivoUpgradeActivityDialog",
          "matches": "[vid=\"vivo_upgrade_negative_btn\"][text=\"忽略本次\"]",
          "snapshotUrls": "https://i.gkd.li/i/13360281",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.wibo.bigbang.ocr:id/vivo_upgrade_negative_btn\"][text=\"忽略本次\"]",
          "snapshotUrls": "https://i.gkd.li/i/13360281",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.wibo.bigbang.ocr:id/vivo_upgrade_negative_btn\"][text=\"忽略本次\"]",
          "snapshotUrls": "https://i.gkd.li/i/13360281",
          "matchTime": 20000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

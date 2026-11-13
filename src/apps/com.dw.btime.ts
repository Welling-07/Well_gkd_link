// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dw.btime",
  "name": "亲宝宝",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.dw.btime.MainHomeTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/12889448",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainHomeTabActivity",
          "matches": "[vid=\"iv_overlay_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12889448",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.dw.btime:id/iv_overlay_close\"][clickable=true]",
          "fastQuery": true,
          "activityIds": "com.dw.btime.MainHomeTabActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-横幅广告",
      "fastQuery": true,
      "activityIds": "com.dw.btime.MainHomeTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/12889450",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainHomeTabActivity",
          "matches": "[vid=\"old_baby_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12889450"
        },
        {
          "matches": "[id=\"com.dw.btime:id/old_baby_close\"][clickable=true]",
          "fastQuery": true,
          "activityIds": "com.dw.btime.MainHomeTabActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "activityIds": "com.dw.btime.base_library.dialog.DWBaseDialog",
      "snapshotUrls": "https://i.gkd.li/i/12911011",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".base_library.dialog.DWBaseDialog",
          "matches": "[vid=\"iv_upgrade_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12911011",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[text=\"立即更新\"] -3 [id=\"com.dw.btime:id/iv_upgrade_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.dw.btime.base_library.dialog.DWBaseDialog"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-应用内弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.dw.btime.MainHomeTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/12889448",
      "rules": [
        {
          "matches": "[id=\"com.dw.btime:id/iv_overlay_close\"][clickable=true]",
          "fastQuery": true,
          "activityIds": "com.dw.btime.MainHomeTabActivity"
        }
      ]
    }
  ]
});

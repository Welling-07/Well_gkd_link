// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ddyc.lotterytool",
  "name": "彩虹多多",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".module.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13324555",
      "rules": [
        {
          "matches": "@ImageButton[clickable=true][childCount=0] < LinearLayout < FrameLayout < [parent=null]",
          "snapshotUrls": "https://i.gkd.li/i/13324555",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".module.main.MainActivity",
          "fastQuery": true
        },
        {
          "matches": "ImageView - ImageButton[id=\"com.ddyc.lotterytool:id/arg\"][text=null]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ddyc.lotterytool.module.main.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13325888",
      "rules": [
        {
          "matches": "[text^=\"开启推送通知\"] +2 LinearLayout [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13325888",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

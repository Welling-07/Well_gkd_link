// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lxt.cfmoto",
  "name": "CFMOTO",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "name": "首页弹窗广告",
          "fastQuery": true,
          "activityIds": "com.cfmoto.oilmoto.ui.MainCfActivity",
          "matches": "[vid=\"closeClick\"]",
          "snapshotUrls": "https://i.gkd.li/i/13401967",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "首页弹窗广告 (2)",
          "activityIds": "com.cfmoto.oilmoto.ui.MainCfActivity",
          "matches": "RelativeLayout[childCount=2] > [id=\"com.lxt.cfmoto:id/image\"] + [id=\"com.lxt.cfmoto:id/closeClick\"]",
          "snapshotUrls": "https://i.gkd.li/i/13401967",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

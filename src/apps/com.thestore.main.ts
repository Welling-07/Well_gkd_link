// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.thestore.main",
  "name": "1号会员店",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "关闭弹窗",
      "activityIds": "com.thestore.main.app.home.HomeActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.home.HomeActivity",
          "matches": "@TextView[clickable=true][childCount=0] <2 RelativeLayout[childCount=2] < FrameLayout < [parent=null]",
          "snapshotUrls": "https://i.gkd.li/i/13163686",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.thestore.main.home.feature:id/ad\"] > TextView",
          "snapshotUrls": "https://i.gkd.li/i/13163686",
          "activityIds": "com.thestore.main.app.home.HomeActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-促销广告",
      "desc": "关闭促销弹窗，也许有用呢",
      "enable": false,
      "activityIds": "com.thestore.main.app.home.HomeActivity",
      "rules": [
        {
          "matches": "[id=\"com.thestore.main.home.feature:id/ad\"] > TextView",
          "snapshotUrls": "https://i.gkd.li/i/13163686",
          "activityIds": "com.thestore.main.app.home.HomeActivity"
        }
      ]
    }
  ]
});

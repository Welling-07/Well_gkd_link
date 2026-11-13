// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dep.biguo",
  "name": "自考笔果题库",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12708751",
      "rules": [
        {
          "activityIds": ".dialog",
          "matches": "@[text=\"取消\"] +2 [text=\"立即更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/12708751",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"取消\"] +2 [text=\"立即更新\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "com.dep.biguo.dialog",
      "snapshotUrls": "https://i.gkd.li/i/12708756",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".dialog",
          "matches": "[vid=\"imageView\"] + [vid=\"closeView\"]",
          "snapshotUrls": "https://i.gkd.li/i/12708756",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.dep.biguo:id/imageView\"] + [id=\"com.dep.biguo:id/closeView\"]",
          "activityIds": "com.dep.biguo.dialog",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-定位权限",
      "activityIds": "com.dep.biguo.mvp.ui.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12708770",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".mvp.ui.activity.MainActivity",
          "matches": "[text*=\"定位权限\"] +2 [text=\"拒绝\"]",
          "snapshotUrls": "https://i.gkd.li/i/12708770",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text*=\"定位权限\"] +2 [text=\"拒绝\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.dep.biguo.mvp.ui.activity.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "activityIds": "com.dep.biguo.dialog",
      "snapshotUrls": "https://i.gkd.li/i/12708756",
      "rules": [
        {
          "matches": "[id=\"com.dep.biguo:id/imageView\"] + [id=\"com.dep.biguo:id/closeView\"]",
          "activityIds": "com.dep.biguo.dialog"
        }
      ]
    }
  ]
});

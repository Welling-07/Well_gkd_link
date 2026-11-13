// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaolian.prometheus",
  "name": "智慧笑联",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14292788",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "com.xiaolian.home.ui.HomeActivity",
          "matches": "@[vid=\"close_rel\"] - * > [text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/14292788",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[vid=\"close_rel\"] - * > [text=\"发现新版本\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-关注公众号弹窗",
      "desc": "点击关闭",
      "activityIds": "com.xiaolian.home.ui.HomeActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14292789",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xiaolian.home.ui.HomeActivity",
          "matches": "@[vid=\"close_img\"] + [text=\"关注\"]",
          "snapshotUrls": "https://i.gkd.li/i/14292789",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

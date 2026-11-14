// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wan.tools",
  "name": "下载工具箱",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-公告弹窗",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13392027",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "com.one.downloadtools.ui.activity.HomeActivity",
          "matches": "LinearLayout[childCount=2] > @[text=\"取消\"] + [text=\"确认\"]",
          "snapshotUrls": "https://i.gkd.li/i/13392027",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "LinearLayout[childCount=2] > @[text=\"取消\"] + [text=\"确认\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-开通会员弹窗",
      "activityIds": "com.one.downloadtools.ui.activity.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13392112",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.one.downloadtools.ui.activity.HomeActivity",
          "matches": [
            "[text^=\"开通会员\"]",
            "[text=\"暂不\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13392112",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"开通会员\"] < * +n * > [text=\"暂不\"]",
          "activityIds": "com.one.downloadtools.ui.activity.HomeActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

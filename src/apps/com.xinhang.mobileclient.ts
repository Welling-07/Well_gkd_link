// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xinhang.mobileclient",
  "name": "中国移动河南",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": ".home.activity.HomeActivity",
      "rules": [
        {
          "matches": "View[desc^=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13024867",
          "activityIds": ".home.activity.HomeActivity"
        },
        {
          "matches": "View > View > TextView + TextView[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/13024869",
          "activityIds": ".home.activity.HomeActivity"
        },
        {
          "matches": "View[desc^=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13024867",
          "activityIds": "com.xinhang.mobileclient.home.activity.HomeActivity"
        },
        {
          "matches": "View > View > TextView + TextView[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/13024869",
          "activityIds": "com.xinhang.mobileclient.home.activity.HomeActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-右侧悬浮广告",
      "activityIds": "com.xinhang.mobileclient.home.activity.HomeActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13024863",
        "https://i.gkd.li/i/13024872"
      ],
      "rules": [
        {
          "activityIds": ".home.activity.HomeActivity",
          "matches": "@[vid=\"iv_close\"] + [vid=\"iv_advert\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13024863",
            "https://i.gkd.li/i/13024872"
          ]
        },
        {
          "matches": "@[id=\"com.xinhang.mobileclient:id/iv_close\"] + [id=\"com.xinhang.mobileclient:id/iv_advert\"]",
          "activityIds": "com.xinhang.mobileclient.home.activity.HomeActivity"
        }
      ]
    }
  ]
});

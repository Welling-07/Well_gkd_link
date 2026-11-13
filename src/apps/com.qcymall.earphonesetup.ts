// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qcymall.earphonesetup",
  "name": "QCY",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-我的-卡片广告",
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "activityIds": "com.qcymall.earphonesetup.v2ui.activity.V2MainActivity",
      "actionMaximum": 1,
      "snapshotUrls": "https://i.gkd.li/i/13874219",
      "rules": [
        {
          "activityIds": ".v2ui.activity.V2MainActivity",
          "matches": "[vid=\"close_img_banner\"]",
          "snapshotUrls": "https://i.gkd.li/i/13874219",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        },
        {
          "matches": "[vid=\"close_img_banner\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "activity",
          "activityIds": "com.qcymall.earphonesetup.v2ui.activity.V2MainActivity",
          "actionMaximum": 1
        }
      ]
    }
  ]
});

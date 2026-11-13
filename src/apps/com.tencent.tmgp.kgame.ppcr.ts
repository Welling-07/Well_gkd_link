// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.tmgp.kgame.ppcr",
  "name": "全民泡泡超人",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[id=\"com.tencent.ysdkcore:id/com_tencent_ysdk_icon_h5_xx\"]",
          "snapshotUrls": "https://i.gkd.li/i/13276317",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.tencent.ysdkcore:id/com_tencent_ysdk_icon_h5_xx\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13276317"
          ],
          "fastQuery": true,
          "matchTime": 15000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});

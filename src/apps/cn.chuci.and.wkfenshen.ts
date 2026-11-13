// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.chuci.and.wkfenshen",
  "name": "猴子分身",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-购买会员弹窗",
      "activityIds": "cn.chuci.and.wkfenshen.ActMain",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".ActMain",
          "matches": [
            "[vid=\"dialog_local_buy_btn\"]",
            "[vid=\"action_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13226988",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "matches": [
            "[id=\"cn.chuci.and.wkfenshen:id/dialog_local_buy_btn\"]",
            "[id=\"cn.chuci.and.wkfenshen:id/action_close\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13226988",
          "activityIds": "cn.chuci.and.wkfenshen.ActMain",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

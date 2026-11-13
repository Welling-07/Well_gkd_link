// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yunxiang.wuyu",
  "name": "特狗APP",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.yunxiang.wuyu.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13455634",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13455634",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[desc^=\"人生嘛\"] +4 ImageView[clickable=true]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.yunxiang.wuyu.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "name": "\"x\"型",
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13455628",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "name": "\"跳过\"型",
          "matches": [
            "TextView[text=\"广告\"]",
            "@ViewGroup > TextView[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13455629",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "name": "\"x\"型 (2)",
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13455628",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.yunxiang.wuyu.MainActivity"
        },
        {
          "name": "\"跳过\"型 (2)",
          "matches": [
            "TextView[text=\"广告\"]",
            "@ViewGroup > TextView[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13455629",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.yunxiang.wuyu.MainActivity"
        }
      ]
    }
  ]
});

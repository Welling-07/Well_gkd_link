// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.TuHu.android",
  "name": "途虎养车",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/13228818",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "matches": "@[vid=\"imgClose\"] - [vid=\"rlContent\"] > [vid=\"img_jump\"]",
          "snapshotUrls": "https://i.gkd.li/i/13228818",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"cn.TuHu.android:id/imgClose\"] - [id=\"cn.TuHu.android:id/rlContent\"] > [id=\"cn.TuHu.android:id/img_jump\"]",
          "fastQuery": true,
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13228796",
        "https://i.gkd.li/i/13256535"
      ],
      "rules": [
        {
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
          "matches": "[vid=\"imgClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13228796",
            "https://i.gkd.li/i/13256535"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"cn.TuHu.android:id/imgClose\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/13228818",
      "rules": [
        {
          "matches": "@[id=\"cn.TuHu.android:id/imgClose\"] - [id=\"cn.TuHu.android:id/rlContent\"] > [id=\"cn.TuHu.android:id/img_jump\"]",
          "fastQuery": true,
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13228796",
        "https://i.gkd.li/i/13256535"
      ],
      "rules": [
        {
          "matches": "[id=\"cn.TuHu.android:id/imgClose\"]",
          "fastQuery": true,
          "activityIds": "cn.TuHu.Activity.tuhutab.TuHuTabActivity"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.apps.photos",
  "name": "谷歌相册",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "点击[以后再说]",
      "matchRoot": true,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": [
            ".update.treatment.UpdateAppTreatmentPromoPageActivity",
            ".home.HomeActivity"
          ],
          "matches": "[text=\"以后再说\" || text=\"Not now\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218940",
            "https://i.gkd.li/i/18522070",
            "https://i.gkd.li/i/18608917"
          ],
          "matchRoot": true,
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-会员广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".cloudstorage.paidfeatures.PaidFeaturesActivity",
          "matches": "@[desc=\"转到上一层级\"] < ViewGroup[vid=\"toolbar\"]",
          "snapshotUrls": "https://i.gkd.li/i/13774247"
        },
        {
          "fastQuery": true,
          "activityIds": ".home.HomeActivity",
          "matches": "[vid=\"spark_container\"] > [vid=\"close_button\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/581cad00-a5fa-4f42-b31f-84a2d5c89afc",
          "snapshotUrls": "https://i.gkd.li/i/22482732"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "点击[No thanks]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".home.HomeActivity",
          "matches": "[text=\"No thanks\"] < @[clickable=true] <7 ScrollView < View < View < View < View < View < ViewGroup < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/30710352",
          "exampleUrls": "https://e.gkd.li/e9db52c0-597e-4fa2-a936-8affe0d60864"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示-取消更新",
      "desc": "点击[以后再说]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[id=\"com.google.android.apps.photos:id/negative_button\"][text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13218940",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-优惠提示",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.google.android.apps.photos.cloudstorage.paidfeatures.PaidFeaturesActivity",
          "matches": "@[desc=\"转到上一层级\"] < ViewGroup[id=\"com.google.android.apps.photos:id/toolbar\"]",
          "snapshotUrls": "https://i.gkd.li/i/13774247",
          "fastQuery": true
        }
      ]
    }
  ]
});

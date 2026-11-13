// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.shark.jizhang",
  "name": "鲨鱼记账",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-悬浮广告",
      "rules": [
        {
          "activityIds": ".module.main.MainActivity",
          "matches": "[vid=\"float_btn\"] >2 [vid=\"close_view\"]",
          "exampleUrls": "https://e.gkd.li/b64da622-2632-4140-930b-89d0f8cbdee1",
          "snapshotUrls": "https://i.gkd.li/i/12518517"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".module.main.MainActivity",
          "matches": "[vid=\"sdv_image\"] + [vid=\"close_view\"]",
          "exampleUrls": "https://e.gkd.li/1cad4c8f-fdb0-4608-8398-2c22d81d435d",
          "snapshotUrls": "https://i.gkd.li/i/12518500",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-新用户特惠广告",
      "desc": "弹窗广告,右下角浮动广告",
      "enable": false,
      "activityIds": "com.shark.jizhang.module.main.MainActivity",
      "rules": [
        {
          "matches": "[id=\"com.shark.jizhang:id/buy_later_view\"||id=\"com.shark.jizhang:id/tv_count_down\"] - [id=\"com.shark.jizhang:id/close_view\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12518500",
            "https://i.gkd.li/i/12518517"
          ],
          "activityIds": "com.shark.jizhang.module.main.MainActivity"
        }
      ]
    }
  ]
});

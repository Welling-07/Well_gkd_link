// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huatu.handheld_huatu",
  "name": "华图在线",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": [
        "com.huatu.handheld_huatu.view.MainPopDialog",
        "com.huatu.handheld_huatu.business.main.MainTabActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12715702",
        "https://i.gkd.li/i/12744973"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".view.MainPopDialog",
            ".business.main.MainTabActivity"
          ],
          "matches": "[vid=\"main_img_adv_bg\"] + [vid=\"main_img_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12715702",
            "https://i.gkd.li/i/12744973"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.huatu.handheld_huatu:id/main_img_adv_bg\"] + [id=\"com.huatu.handheld_huatu:id/main_img_close\"]",
          "activityIds": [
            "com.huatu.handheld_huatu.view.MainPopDialog",
            "com.huatu.handheld_huatu.business.main.MainTabActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12715719",
      "rules": [
        {
          "activityIds": ".business.main.MainTabActivity",
          "matches": "[text*=\"开启通知提示\"] +2 LinearLayout > [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715719",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text*=\"开启通知提示\"] +2 LinearLayout > [text=\"取消\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "activityIds": [
        "com.huatu.handheld_huatu.view.MainPopDialog",
        "com.huatu.handheld_huatu.business.main.MainTabActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12715702",
        "https://i.gkd.li/i/12744973"
      ],
      "rules": [
        {
          "matches": "[id=\"com.huatu.handheld_huatu:id/main_img_adv_bg\"] + [id=\"com.huatu.handheld_huatu:id/main_img_close\"]",
          "activityIds": [
            "com.huatu.handheld_huatu.view.MainPopDialog",
            "com.huatu.handheld_huatu.business.main.MainTabActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "activityIds": "com.huatu.handheld_huatu.business.main.MainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/12715719",
      "rules": [
        {
          "matches": "[text*=\"开启通知提示\"] +2 LinearLayout > [text=\"取消\"]",
          "activityIds": "com.huatu.handheld_huatu.business.main.MainTabActivity"
        }
      ]
    }
  ]
});

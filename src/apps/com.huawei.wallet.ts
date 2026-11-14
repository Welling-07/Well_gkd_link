// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huawei.wallet",
  "name": "华为钱包",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-钱包扩展服务提示",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text=\"开启钱包扩展服务\"] +2 [vid=\"linear_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13441814",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启钱包扩展服务\"] +2 [id=\"com.huawei.wallet:id/linear_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13441814",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-小额免密支付弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.huawei.petalpay.userapp.function.withhold.view.activity.PetalPayGuideSmallFreePwdActivity",
          "matches": [
            "[text=\"开通小额免密支付\"]",
            "[vid=\"title_close_btn\"]"
          ],
          "exampleUrls": "https://e.gkd.li/7fcdf7d8-d9db-4b30-840d-3f656f645fe3",
          "snapshotUrls": "https://i.gkd.li/i/16397908"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-首页卡片广告",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".view.MainActivity",
          "matches": "[vid=\"ad_sign_text_and_feedback\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/11edaf9a-f54c-489c-99e0-78da25a5cc9b",
          "snapshotUrls": "https://i.gkd.li/i/16833449",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "matches": "[text=\"直接关闭\"]",
          "exampleUrls": "https://e.gkd.li/f0d67fb4-ccdb-443b-8e4e-9dff2242a84f",
          "snapshotUrls": "https://i.gkd.li/i/16833452",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-NFC权限",
      "desc": "点击取消",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.huawei.nfc.carrera.ui.swipe.SetDefaultPayServiceActivity",
          "matches": [
            "[text*=\"是否每次使用华为钱包都自动开启 NFC\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/87466a06-2169-4808-971e-d347cd40ac66",
          "snapshotUrls": "https://i.gkd.li/i/20918311"
        }
      ]
    }
  ]
});

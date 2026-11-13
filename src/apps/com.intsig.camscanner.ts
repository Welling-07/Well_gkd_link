// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.intsig.camscanner",
  "name": "扫描全能王",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-主页面上方广告",
      "activityIds": ".mainmenu.mainactivity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12668813",
      "exampleUrls": "https://e.gkd.li/772a24be-ca12-459f-8abf-e9573cde3f56",
      "rules": [
        {
          "matches": "[vid=\"card_ad_tag\"] + [vid=\"card_close\"]",
          "activityIds": ".mainmenu.mainactivity.MainActivity"
        },
        {
          "matches": "[id=\"com.intsig.camscanner:id/card_ad_tag\"] + [id=\"com.intsig.camscanner:id/card_close\"]",
          "activityIds": "com.intsig.camscanner.mainmenu.mainactivity.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-开通会员",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"iv_cancel\"]",
          "fastQuery": true,
          "exampleUrls": "https://e.gkd.li/5f628895-e214-4a0b-8344-14f3d8c20807",
          "snapshotUrls": "https://i.gkd.li/i/16761285",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".guide.CancelAdShowCnGuidePurchaseActivity",
          "matches": "[vid=\"iv_drop_cnl_close\"]",
          "fastQuery": true,
          "exampleUrls": "https://e.gkd.li/e9a6775a-be51-4aca-b3cd-0b496efe2f0c",
          "snapshotUrls": "https://i.gkd.li/i/17002087",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "其他-关闭[发现新截图]提示",
      "fastQuery": true,
      "activityIds": ".mainmenu.mainactivity.MainActivity",
      "exampleUrls": "https://e.gkd.li/c66080aa-1758-4a69-9752-aa1373d7f2b5",
      "snapshotUrls": "https://i.gkd.li/i/16975714",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".mainmenu.mainactivity.MainActivity",
          "matches": "RelativeLayout[vid=\"rl_screenshot\"] + ImageView[vid=\"iv_esc\"]",
          "exampleUrls": "https://e.gkd.li/c66080aa-1758-4a69-9752-aa1373d7f2b5",
          "snapshotUrls": "https://i.gkd.li/i/16975714"
        }
      ]
    }
  ]
});

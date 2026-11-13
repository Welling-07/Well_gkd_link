// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.pingan.paces.ccms",
  "name": "平安口袋银行",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页-权益/抽奖弹窗",
      "enable": false,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": "com.pingan.launcher.activity.LauncherActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/14107110",
        "https://i.gkd.li/i/14107111"
      ],
      "rules": [
        {
          "matches": "[text!=\"\" || text!=null] < [vid=\"alertHeader\"] < [vid=\"allViewstub\"] + [vid=\"horizontalBottomIcon\"] >2 [vid=\"bottom_close_image\"]",
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": "com.pingan.launcher.activity.LauncherActivity"
        }
      ]
    }
  ]
});

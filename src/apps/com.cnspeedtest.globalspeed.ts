// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cnspeedtest.globalspeed",
  "name": "全球网测",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-定位权限",
      "desc": "点击[取消]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.ruili.android.taierspeed.main.WelcomeActivity",
          "matches": [
            "[text*=\"开启GPS权限\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/f6668ec9-eac9-4728-9ab1-5c76ac4b1ef5",
          "snapshotUrls": "https://i.gkd.li/i/24012859"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12642345",
      "rules": [
        {
          "matches": "[id=\"com.cnspeedtest.globalspeed:id/vision_btn_ok\"][text=\"更新\"] +2 [id=\"com.cnspeedtest.globalspeed:id/vision_btn_cancel\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.duokan.phone.remotecontroller",
  "name": "万能遥控",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-定位权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
      "snapshotUrls": "https://i.gkd.li/i/13642080",
      "rules": [
        {
          "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
          "matches": "[vid=\"ll_permission\"] >2 [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13642080",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.duokan.phone.remotecontroller:id/ll_permission\"] [text=\"取消\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
          "matches": "[vid=\"image_close_banner\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/bf36812a-1bf9-43dc-aca5-f351c2f8d1f6",
          "snapshotUrls": "https://i.gkd.li/i/22451785"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-底部横幅广告",
      "enable": false,
      "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2",
      "rules": [
        {
          "matches": "ImageView[id=\"com.duokan.phone.remotecontroller:id/image_close_banner\"]",
          "activityIds": "com.xiaomi.mitv.phone.remotecontroller.HoriWidgetMainActivityV2"
        }
      ]
    }
  ]
});

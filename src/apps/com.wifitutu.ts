// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wifitutu",
  "name": "WiFi万能钥匙",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-首页-WiFi列表广告",
      "desc": "点击关闭",
      "activityIds": [
        "com.wifitutu.ui.main.MainActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.main.MainActivity",
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] + FrameLayout >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13233916"
        },
        {
          "fastQuery": true,
          "activityIds": ".ui.main.MainActivity",
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[visibleToUser=true][text=\"广告\"] <<n [vid=\"ad_part\"]",
          "snapshotUrls": "https://i.gkd.li/i/13234048"
        },
        {
          "matches": "View < [desc^=\"dislike\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13233916",
          "activityIds": [
            "com.wifitutu.ui.main.MainActivity"
          ]
        },
        {
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13234048",
          "activityIds": [
            "com.wifitutu.ui.main.MainActivity"
          ]
        }
      ]
    }
  ]
});

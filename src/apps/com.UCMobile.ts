// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.UCMobile",
  "name": "UC浏览器",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "ignoreGlobalGroupMatch": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] > FrameLayout[childCount=4] >3 FrameLayout[childCount=4] > RelativeLayout[childCount=1] > View[childCount=0][text=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13197655",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.9",
            "top": "width * 0.1676"
          },
          "matches": "[id=\"com.UCMobile.adn_jingdong_sdk:id/animation_view\"]",
          "exampleUrls": "https://e.gkd.li/92da64ad-5b08-4343-bec2-bb6a7e0bb92d",
          "snapshotUrls": "https://i.gkd.li/i/16494884",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/13188653",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "fastQuery": true,
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[text=null] <<n [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13188653",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.9",
            "top": "width * 0.1676"
          },
          "activityIds": "com.uc.browser.InnerUCMobile",
          "matches": "[id=\"com.UCMobile.adn_jingdong_sdk:id/animation_view\"]",
          "exampleUrls": "https://e.gkd.li/92da64ad-5b08-4343-bec2-bb6a7e0bb92d",
          "snapshotUrls": "https://i.gkd.li/i/16494884",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 3,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-信息流广告",
      "activityIds": "com.uc.browser.InnerUCMobile",
      "rules": [
        {
          "matches": "TextView[text=\"广告\"] +n ImageView[desc=\"不感兴趣\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12880737",
            "https://i.gkd.li/i/12881751"
          ],
          "activityIds": "com.uc.browser.InnerUCMobile"
        },
        {
          "preKeys": 0,
          "matches": "[text^=\"屏蔽\"][text$=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12880772",
            "https://i.gkd.li/i/12881307"
          ],
          "activityIds": "com.uc.browser.InnerUCMobile"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12880812",
        "https://i.gkd.li/i/12880802"
      ],
      "rules": [
        {
          "activityIds": "com.uc.browser.InnerUCMobile",
          "matches": "@ImageView - LinearLayout >n [text=\"开启消息通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/12880812",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView - LinearLayout >n [text=\"开启消息通知\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "其他-请求添加桌面快捷方式弹窗",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": "com.uc.browser.InnerUCMobile",
          "matches": "@ImageView + [text^=\"添加\"][text$=\"到桌面\"]",
          "snapshotUrls": "https://i.gkd.li/i/12880983"
        }
      ]
    }
  ]
});

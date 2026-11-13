// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cn21.ecloud",
  "name": "天翼云盘",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "fastQuery": true,
      "activityIds": "com.cn21.ecloud.activity.MainPageActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.MainPageActivity",
          "matches": "FrameLayout > View[childCount=1] > View[childCount=1] >(1,4) View[childCount=2][desc=null] > @ImageView[clickable=true][visibleToUser=true] <<n [vid=\"content_frame\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12865488",
            "https://i.gkd.li/i/16653930",
            "https://i.gkd.li/i/16647901"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "FrameLayout > View[childCount=1] > View[childCount=1] >(1,4) View[childCount=2][desc=null] > @ImageView[clickable=true][visibleToUser=true] <<n [vid=\"content_frame\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12865488",
            "https://i.gkd.li/i/16653930",
            "https://i.gkd.li/i/16647901"
          ],
          "fastQuery": true,
          "activityIds": "com.cn21.ecloud.activity.MainPageActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.cn21.ecloud.activity.MainPageActivity",
      "snapshotUrls": "https://i.gkd.li/i/13399488",
      "rules": [
        {
          "activityIds": ".activity.MainPageActivity",
          "matches": "[vid=\"ivCancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13399488",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cn21.ecloud:id/ivCancel\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.cn21.ecloud.activity.MainPageActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-首页弹窗",
      "enable": false,
      "activityIds": "com.cn21.ecloud.activity.MainPageActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12865481",
        "https://i.gkd.li/i/12865488"
      ],
      "rules": [
        {
          "matches": "[id=\"com.cn21.ecloud:id/content_frame\"] >n FrameLayout >n @ImageView[desc=null] - View < View[childCount=2]",
          "activityIds": "com.cn21.ecloud.activity.MainPageActivity"
        }
      ]
    }
  ]
});

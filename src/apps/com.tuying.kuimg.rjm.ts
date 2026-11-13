// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tuying.kuimg.rjm",
  "name": "热剧猫",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.tuying.kuimg.rjm.MainActivity",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13166088",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".MainActivity",
          "matches": [
            "[text=\"广告\"]",
            "@ViewGroup > [text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13166086",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup[childCount=1][clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13166088",
          "activityIds": "com.tuying.kuimg.rjm.MainActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13166086",
          "activityIds": "com.tuying.kuimg.rjm.MainActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-广告弹窗",
      "enable": false,
      "activityIds": "com.tuying.kuimg.rjm.MainActivity",
      "rules": [
        {
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup[childCount=1][clickable=true] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13166088",
          "activityIds": "com.tuying.kuimg.rjm.MainActivity"
        },
        {
          "matches": "[id=\"com.tuying.kuimg.rjm:id/ksad_tk_view\"] >n @ViewGroup > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13166086",
          "activityIds": "com.tuying.kuimg.rjm.MainActivity"
        }
      ]
    }
  ]
});

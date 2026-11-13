// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.livelab",
  "name": "纷玩岛",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": "cn.com.livelab.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13258873",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@Button[clickable=true][childCount=0][visibleToUser=true] <2 View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13258873",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "View >n View[childCount=2] > ImageView + Button",
          "activityIds": "cn.com.livelab.MainActivity",
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
      "activityIds": "cn.com.livelab.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13258873",
      "rules": [
        {
          "matches": "View >n View[childCount=2] > ImageView + Button",
          "activityIds": "cn.com.livelab.MainActivity"
        }
      ]
    }
  ]
});

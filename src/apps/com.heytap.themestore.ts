// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.heytap.themestore",
  "name": "主题商店",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.nearme.themespace.activities.ThemeMainActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0][width<120 && height<120] <2 RelativeLayout[childCount=2] < ViewGroup[childCount=1] < [id=\"android:id/content\"]",
          "exampleUrls": "https://e.gkd.li/4e97c4fa-6d59-4073-8dd1-fc2deb531a41",
          "snapshotUrls": "https://i.gkd.li/i/21327613",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.leiting.lt65207",
  "name": "山东人在山西",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-软件推荐",
      "desc": "点击右上角X",
      "enable": false,
      "activityIds": "com.leiting.lt65207.ui.MainActivity",
      "exampleUrls": "https://m.gkd.li/57941037/1fb3d32f-961d-4026-9f02-10da392fca92",
      "snapshotUrls": "https://i.gkd.li/i/14107951",
      "rules": [
        {
          "matches": "[vid=\"tab_main_bg\"] > FrameLayout[childCount=6] > ImageView[index=1]",
          "activityIds": "com.leiting.lt65207.ui.MainActivity"
        }
      ]
    }
  ]
});

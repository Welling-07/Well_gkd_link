// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tmobile.tuesdays",
  "name": "T-Life",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.telekom.tworld.dashboard.DashboardActivity",
          "matches": "Button[text=\"See full details\"][index=parent.childCount.minus(1)] <n View -n @[desc=\"Close\"][clickable=true] < [id=\"screen-offer\"] < WebView <<2 * - * >2 [vid=\"action_bar_root\"]",
          "snapshotUrls": "https://i.gkd.li/i/32868780",
          "exampleUrls": "https://e.gkd.li/3a0b5df5-dbaa-461a-a61d-bdb7b54dafc1"
        }
      ]
    }
  ]
});

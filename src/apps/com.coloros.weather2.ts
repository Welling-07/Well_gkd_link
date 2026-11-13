// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.coloros.weather2",
  "name": "天气",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-卡片广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": "com.oplus.weather.main.view.WeatherMainActivity",
      "rules": [
        {
          "matches": "[vid=\"feed_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/fc08493c-dec2-4534-9f61-3627aa337b30",
          "snapshotUrls": "https://i.gkd.li/i/14258190",
          "fastQuery": true,
          "activityIds": "com.oplus.weather.main.view.WeatherMainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "exampleUrls": "https://e.gkd.li/9137d262-7fda-4b57-a0bc-b9fa60634a22",
          "snapshotUrls": [
            "https://i.gkd.li/i/16631878",
            "https://i.gkd.li/i/20429502"
          ],
          "fastQuery": true,
          "activityIds": "com.oplus.weather.main.view.WeatherMainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "exampleUrls": "https://e.gkd.li/9137d262-7fda-4b57-a0bc-b9fa60634a22",
          "snapshotUrls": "https://i.gkd.li/i/16631878",
          "fastQuery": true,
          "activityIds": "com.oplus.weather.main.view.WeatherMainActivity"
        }
      ]
    }
  ]
});

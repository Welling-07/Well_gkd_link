// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.giraffe",
  "name": "安易加速器",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "点击关闭",
      "order": -9,
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 10000,
      "resetMatch": "app",
      "activityIds": "com.speed.shadowsocks.ui.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13998233",
      "rules": [
        {
          "activityIds": "com.speed.shadowsocks.ui.main.MainActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14000409",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.giraffe:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14000409",
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.speed.shadowsocks.ui.main.MainActivity"
        }
      ]
    }
  ]
});

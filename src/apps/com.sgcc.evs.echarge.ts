// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sgcc.evs.echarge",
  "name": "e充电",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.evs.echarge.dev.ui.advertisement.SplashActivity",
            "com.evs.echarge.dev.ui.MainActivity"
          ],
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13958838",
            "https://i.gkd.li/i/14005508"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": [
            "com.evs.echarge.dev.ui.advertisement.SplashActivity",
            "com.evs.echarge.dev.ui.MainActivity"
          ],
          "matches": "[id=\"com.sgcc.evs.echarge:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13958838",
            "https://i.gkd.li/i/14005508"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

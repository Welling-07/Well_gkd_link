// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kurogame.kjq",
  "name": "库街区",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d9c598fc-5bd4-4773-8db1-316b8f7155c3",
          "snapshotUrls": "https://i.gkd.li/i/15629864",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.kurogame.kjq.MainActivity",
          "matches": "[vid=\"close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d9c598fc-5bd4-4773-8db1-316b8f7155c3",
          "snapshotUrls": "https://i.gkd.li/i/15629864",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

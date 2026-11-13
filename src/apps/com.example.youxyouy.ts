// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.example.youxyouy",
  "name": "有鱼生活",
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
          "activityIds": ".MainActivity",
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/ddeb0c34-6a3d-407d-b600-96d21dd1f77b",
          "snapshotUrls": [
            "https://i.gkd.li/i/20637763",
            "https://i.gkd.li/i/20637764"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

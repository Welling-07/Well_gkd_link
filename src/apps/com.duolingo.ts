// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.duolingo",
  "name": "Duolingo",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-试用会员",
      "desc": "点击[算了吧]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".splash.LaunchActivity",
          "matches": "[text=\"算了吧\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/30885277",
          "exampleUrls": "https://e.gkd.li/366f8f0e-fbfe-4892-8fc6-84ab44e4230a"
        }
      ]
    }
  ]
});

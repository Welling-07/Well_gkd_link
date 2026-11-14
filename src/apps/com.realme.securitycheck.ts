// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.realme.securitycheck",
  "name": "SecurityAnalysis",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-安全监测通过后的广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".SecurityCheckActivity",
          "matches": "[vid=\"ad_contain\"] >5 [vid=\"close\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/c4a9acc9-3108-4364-8586-906b200e1171",
          "snapshotUrls": "https://i.gkd.li/i/14476628"
        },
        {
          "fastQuery": true,
          "activityIds": "com.realme.securitycheck.SecurityCheckActivity",
          "matches": "[vid=\"ad_contain\"] >5 [vid=\"close\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/c4a9acc9-3108-4364-8586-906b200e1171",
          "snapshotUrls": "https://i.gkd.li/i/14476628"
        }
      ]
    }
  ]
});

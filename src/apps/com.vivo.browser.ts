// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vivo.browser",
  "name": "vivo浏览器",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-天气详情页面",
      "rules": [
        {
          "activityIds": ".lightweb.LightWebNomalStartActivity",
          "matches": "[text$=\"广告\"] +5 * > Image",
          "snapshotUrls": "https://i.gkd.li/i/14392332"
        },
        {
          "activityIds": "com.vivo.browser.lightweb.LightWebNomalStartActivity",
          "matches": "[text$=\"广告\"] +5 * > Image",
          "snapshotUrls": "https://i.gkd.li/i/14392332"
        }
      ]
    }
  ]
});

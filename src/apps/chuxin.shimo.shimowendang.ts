// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "chuxin.shimo.shimowendang",
  "name": "石墨文档",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-首页顶部横幅广告",
      "activityIds": "chuxin.shimo.shimowendang.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13627960",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[desc=\"banner-desktop-announcement-close\"][visibleToUser=true] - ViewGroup > [text*=\"免费试用企业版\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627960"
        },
        {
          "matches": "[desc=\"banner-desktop-announcement-close\"]",
          "activityIds": "chuxin.shimo.shimowendang.MainActivity"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.searchcraft",
  "name": "简单搜索",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-信息流广告",
      "rules": [
        {
          "name": "快手广告",
          "activityIds": "com.baidu.browser.search.LightSearchActivity",
          "matches": "[desc=\"ad-logo\"] + [id=\"logo-close-btn\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13520385"
        }
      ]
    }
  ]
});

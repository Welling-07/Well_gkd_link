// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dayunlinks.cloudbirds",
  "name": "千鸟物联",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.qianniao.main.TabActivity",
          "matches": "[vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/34136039",
          "exampleUrls": "https://e.gkd.li/2e8463c1-c6d6-4fd9-84c2-98d502e95a19"
        }
      ]
    }
  ]
});

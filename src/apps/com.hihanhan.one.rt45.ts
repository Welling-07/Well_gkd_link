// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihanhan.one.rt45",
  "name": "一个",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "enable": false,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14099393",
      "rules": [
        {
          "matches": "[vid=\"ivClose\"]",
          "fastQuery": true
        }
      ]
    }
  ]
});

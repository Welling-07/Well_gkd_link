// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hichip.campro",
  "name": "CamHipro",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "main.MainActivity",
          "matches": "[vid=\"iv_close_ad\"]",
          "snapshotUrls": "https://i.gkd.li/i/15847732"
        }
      ]
    }
  ]
});

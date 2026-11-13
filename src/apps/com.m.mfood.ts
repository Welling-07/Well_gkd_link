// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.m.mfood",
  "name": "mFood",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-浮窗广告",
      "fastQuery": true,
      "activityIds": "com.zdyl.mfood.ui.home.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13350787",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.zdyl.mfood.ui.home.MainActivity",
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13350787"
        },
        {
          "matches": "[id=\"com.m.mfood:id/close\"]",
          "fastQuery": true,
          "activityIds": "com.zdyl.mfood.ui.home.MainActivity"
        }
      ]
    }
  ]
});

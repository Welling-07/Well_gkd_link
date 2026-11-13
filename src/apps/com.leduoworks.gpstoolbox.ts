// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.leduoworks.gpstoolbox",
  "name": "GPS工具箱",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-首页占位广告",
      "activityIds": "com.leduoworks.gpstoolbox.frmt.MainFrmtActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13062612",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".frmt.MainFrmtActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13062612"
        },
        {
          "matches": "[id=\"com.leduoworks.gpstoolbox:id/iv_close\"]",
          "activityIds": "com.leduoworks.gpstoolbox.frmt.MainFrmtActivity",
          "fastQuery": true
        }
      ]
    }
  ]
});

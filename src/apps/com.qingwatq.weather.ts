// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qingwatq.weather",
  "name": "呱呱天气",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".home.HomeActivity",
          "matches": "[vid=\"titleArea\"] + [vid=\"closeImg\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476350"
        },
        {
          "activityIds": "com.qingwatq.weather.home.HomeActivity",
          "matches": "[id=\"com.qingwatq.weather:id/titleArea\"] + [id=\"com.qingwatq.weather:id/closeImg\"]",
          "snapshotUrls": "https://i.gkd.li/i/13476350"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.uroad.carclub",
  "name": "ETC车宝",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.activity.MainActivity",
          "matches": "View[childCount=4] > @TextView[index=2][clickable=true] <<n [vid=\"ad_container_fl\"]",
          "snapshotUrls": "https://i.gkd.li/i/13800067"
        },
        {
          "activityIds": "com.uroad.carclub.main.activity.MainActivity",
          "matches": "[id=\"com.uroad.carclub:id/ad_container_fl\"] >n View[childCount=4] > TextView[index=2][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13800067"
        }
      ]
    }
  ]
});

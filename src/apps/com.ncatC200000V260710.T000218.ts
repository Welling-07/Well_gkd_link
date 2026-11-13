// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ncatC200000V260710.T000218",
  "name": "网飞猫",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "desc": "视频详情页广告",
      "fastQuery": true,
      "activityIds": "com.salmon.film.video.ui.detail.VodDetailActivity",
      "rules": [
        {
          "name": "暂停视频时的广告",
          "matches": "[text=\"广告\"] - [vid=\"pause_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/29900521",
          "fastQuery": true,
          "activityIds": "com.salmon.film.video.ui.detail.VodDetailActivity"
        },
        {
          "name": "观看新视频时的提示",
          "matches": "@[childCount=2] > ImageView + [vid=\"image_arrow\"]",
          "snapshotUrls": "https://i.gkd.li/i/29900516",
          "fastQuery": true,
          "activityIds": "com.salmon.film.video.ui.detail.VodDetailActivity"
        }
      ]
    }
  ]
});

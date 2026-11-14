// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sh.gj",
  "name": "上海公交",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".MainActivity",
            ".activity.LineDetailActivity"
          ],
          "matches": "ImageView[visibleToUser=true] - FrameLayout[childCount=1] > @ImageView[visibleToUser=true] <<n [vid=\"bannerContainer\"]",
          "exampleUrls": "https://m.gkd.li/57941037/36771be2-e3fd-498c-9adb-458e9f487b9b",
          "snapshotUrls": [
            "https://i.gkd.li/i/14883102",
            "https://i.gkd.li/i/14883152"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.sh.gj.MainActivity",
            "com.sh.gj.activity.LineDetailActivity"
          ],
          "matches": "ImageView[visibleToUser=true] - FrameLayout[childCount=1] > @ImageView[visibleToUser=true] <<n [vid=\"bannerContainer\"]",
          "exampleUrls": "https://m.gkd.li/57941037/36771be2-e3fd-498c-9adb-458e9f487b9b",
          "snapshotUrls": [
            "https://i.gkd.li/i/14883102",
            "https://i.gkd.li/i/14883152"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告",
      "enable": false,
      "rules": [
        {
          "name": "腾讯SDK",
          "fastQuery": true,
          "activityIds": [
            "com.sh.gj.MainActivity",
            "com.sh.gj.activity.LineDetailActivity"
          ],
          "matches": "ImageView < @FrameLayout <<n [vid=\"bannerContainer\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14883107",
            "https://i.gkd.li/i/14883157"
          ]
        }
      ]
    }
  ]
});

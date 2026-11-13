// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kuaikan.comic",
  "name": "快看漫画",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-漫画界面底部弹窗广告",
      "activityIds": ".infinitecomic.view.ComicInfiniteActivity",
      "snapshotUrls": "https://i.gkd.li/i/12910268",
      "rules": [
        {
          "matches": "[vid=\"adBannerClose\"]",
          "activityIds": ".infinitecomic.view.ComicInfiniteActivity"
        },
        {
          "matches": "[id=\"com.kuaikan.comic:id/adBannerClose\"]",
          "activityIds": "com.kuaikan.comic.infinitecomic.view.ComicInfiniteActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12565678",
      "rules": [
        {
          "matches": "[text*=\"青少年模式\"] +2 [id=\"com.kuaikan.comic:id/cancel\"]",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

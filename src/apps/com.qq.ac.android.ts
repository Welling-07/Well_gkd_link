// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qq.ac.android",
  "name": "腾讯动漫",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-漫画阅读页面-左侧悬浮广告",
      "activityIds": "com.qq.ac.android.reader.comic.ComicReaderActivity",
      "snapshotUrls": "https://i.gkd.li/i/12707756",
      "rules": [
        {
          "activityIds": ".reader.comic.ComicReaderActivity",
          "matches": "[vid=\"operation_ad_view\"] > [vid=\"btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12707756"
        },
        {
          "matches": "[id=\"com.qq.ac.android:id/operation_ad_view\"] > [id=\"com.qq.ac.android:id/btn_close\"]",
          "activityIds": "com.qq.ac.android.reader.comic.ComicReaderActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "rules": [
        {
          "name": "漫画章节之间的广告",
          "fastQuery": true,
          "activityIds": ".reader.comic.ComicReaderActivity",
          "matches": "[vid=\"iv_del\"]",
          "exampleUrls": "https://m.gkd.li/57941037/1be7564d-f6c2-429d-9cb0-3d923adafc8a",
          "snapshotUrls": "https://i.gkd.li/i/14730335"
        },
        {
          "name": "漫画章节之间的广告 (2)",
          "fastQuery": true,
          "activityIds": "com.qq.ac.android.reader.comic.ComicReaderActivity",
          "matches": "[vid=\"iv_del\"]",
          "exampleUrls": "https://m.gkd.li/57941037/1be7564d-f6c2-429d-9cb0-3d923adafc8a",
          "snapshotUrls": "https://i.gkd.li/i/14730335"
        }
      ]
    },
    {
      "key": 2,
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12707752",
        "https://i.gkd.li/i/13195636"
      ],
      "rules": [
        {
          "matches": "[text=\"青少年守护模式\"] - [id=\"com.qq.ac.android:id/close_btn\"]",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

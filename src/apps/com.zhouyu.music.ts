// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zhouyu.music",
  "name": "微音乐",
  "groups": [
    {
      "key": 0,
      "name": "未分类-广告弹窗",
      "enable": false,
      "activityIds": "com.zhouyu.music.activities.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13062330",
        "https://i.gkd.li/i/13068583",
        "https://i.gkd.li/i/13231850"
      ],
      "exampleUrls": "https://github.com/gkd-kit/inspect/assets/38517192/798afc53-4aaf-481f-acb1-7c193bd8e6d6",
      "rules": [
        {
          "matches": "@[id=null][clickable=true] + View >n View [text$=\"广告\"]",
          "activityIds": "com.zhouyu.music.activities.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-搜索底部广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.zhouyu.music.activities.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13245859"
      ],
      "rules": [
        {
          "matches": "[id=\"com.zhouyu.music:id/ksad_ad_dislike\"]",
          "fastQuery": true,
          "activityIds": "com.zhouyu.music.activities.MainActivity"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jz.xydj",
  "name": "星芽免费短剧",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "name": "底部卡片广告",
          "fastQuery": true,
          "activityIds": "com.jz.jzdj.ui.activity.shortvideo.ShortVideoActivity2",
          "matches": "[vid=\"ad_close\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/c6e1dfa9-388e-417f-9ab2-d3ea63d3eb8a",
          "snapshotUrls": "https://i.gkd.li/i/14391204"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-视频观看页下方广告",
      "enable": false,
      "rules": [
        {
          "name": "腾讯SDK",
          "fastQuery": true,
          "activityIds": "com.jz.jzdj.ui.activity.shortvideo.ShortVideoActivity2",
          "matches": "[vid=\"ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14391606"
        }
      ]
    }
  ]
});

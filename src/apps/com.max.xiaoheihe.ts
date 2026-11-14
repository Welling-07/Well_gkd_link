// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.max.xiaoheihe",
  "name": "小黑盒",
  "groups": [
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "name": "收藏帖子后底部推荐关注卡片",
          "fastQuery": true,
          "activityIds": ".module.bbs.post.ui.activitys.WebNewsPostPageActivity",
          "matches": "[vid=\"iv_notify_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/b7c25b6e-cc77-4bcc-a477-23b3de74c61f",
          "snapshotUrls": "https://i.gkd.li/i/14914139"
        },
        {
          "name": "收藏帖子后底部推荐关注卡片 (2)",
          "fastQuery": true,
          "activityIds": "com.max.xiaoheihe.module.bbs.post.ui.activitys.WebNewsPostPageActivity",
          "matches": "[vid=\"iv_notify_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/b7c25b6e-cc77-4bcc-a477-23b3de74c61f",
          "snapshotUrls": "https://i.gkd.li/i/14914139"
        }
      ]
    }
  ]
});

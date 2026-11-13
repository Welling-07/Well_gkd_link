// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.duoduo.child.story",
  "name": "儿歌多多",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.PlayActivity",
          "matches": "[vid=\"iv_close_banner\"]",
          "exampleUrls": "https://m.gkd.li/57941037/0a4febc1-9a34-41cb-bbca-63c6723fa228",
          "snapshotUrls": "https://i.gkd.li/i/15531352"
        },
        {
          "fastQuery": true,
          "activityIds": "com.duoduo.child.story.ui.activity.PlayActivity",
          "matches": "[vid=\"iv_close_banner\"]",
          "exampleUrls": "https://m.gkd.li/57941037/0a4febc1-9a34-41cb-bbca-63c6723fa228",
          "snapshotUrls": "https://i.gkd.li/i/15531352"
        }
      ]
    }
  ]
});

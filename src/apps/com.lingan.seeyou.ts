// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lingan.seeyou",
  "name": "美柚",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-评论区上方卡片广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.community.topicdetail.TopicDetailActivity",
          "matches": "[vid=\"v_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14034770"
        },
        {
          "activityIds": "com.lingan.seeyou.ui.activity.community.topicdetail.TopicDetailActivity",
          "matches": "[id=\"com.lingan.seeyou:id/v_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14034770",
          "fastQuery": true
        }
      ]
    }
  ]
});

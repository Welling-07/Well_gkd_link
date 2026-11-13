// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sina.weibocare",
  "name": "WeiboBig",
  "groups": [
    {
      "key": 0,
      "name": "功能类-流量继续播放视频",
      "desc": "点击[播放]",
      "fastQuery": true,
      "activityIds": "com.weico.international.activity.MainFragmentActivity",
      "snapshotUrls": "https://i.gkd.li/i/13253223",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.weico.international.activity.MainFragmentActivity",
          "matches": "[vid=\"ed_btn_positive\"][text=\"播放\"]",
          "snapshotUrls": "https://i.gkd.li/i/13253223"
        },
        {
          "matches": "[id=\"com.sina.weibocare:id/ed_btn_positive\"][text=\"播放\"]",
          "fastQuery": true,
          "activityIds": "com.weico.international.activity.MainFragmentActivity"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "tw.com.gamer.android.animad",
  "name": "動畫瘋",
  "groups": [
    {
      "key": 0,
      "name": "其他-动画疯年龄限制",
      "desc": "点击同意",
      "activityIds": "tw.com.gamer.android.animad.VideoActivity",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".VideoActivity",
          "matches": "[vid=\"agree_button\"][text=\"同意\"]",
          "snapshotUrls": "https://i.gkd.li/i/13808757"
        },
        {
          "matches": "[id=\"tw.com.gamer.android.animad:id/agree_button\"][text=\"同意\"]",
          "snapshotUrls": "https://i.gkd.li/i/13808757",
          "activityIds": "tw.com.gamer.android.animad.VideoActivity",
          "fastQuery": true
        }
      ]
    }
  ]
});

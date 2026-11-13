// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sdu.didi.gsui",
  "name": "滴滴车主",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"main_dialog_banner_image_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13958887"
        },
        {
          "activityIds": "com.sdu.didi.gsui.main.MainActivity",
          "matches": "[id=\"com.sdu.didi.gsui:id/main_dialog_banner_image_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13958887",
          "fastQuery": true
        }
      ]
    }
  ]
});

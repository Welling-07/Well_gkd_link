// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.modian.app",
  "name": "摩点",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-[我的]界面广告条",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".ui.activity.MainActivity",
          "matches": "[vid=\"fl_banner_layout\"] > [vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13610188"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-\"我的\"界面广告条",
      "enable": false,
      "activityIds": "com.modian.app.ui.activity.MainActivity",
      "rules": [
        {
          "matches": "[id=\"com.modian.app:id/banner_view\"] + [id=\"com.modian.app:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13610188",
          "activityIds": "com.modian.app.ui.activity.MainActivity"
        }
      ]
    }
  ]
});

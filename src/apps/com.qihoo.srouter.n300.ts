// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qihoo.srouter.n300",
  "name": "360家庭防火墙",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13800011",
      "rules": [
        {
          "activityIds": "com.ifenglian.superapp.ui.firewall.SAMainActivity",
          "matches": "[vid=\"app_update_later_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13800011",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"app_update_later_button\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

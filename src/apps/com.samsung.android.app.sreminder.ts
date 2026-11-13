// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.samsung.android.app.sreminder",
  "name": "三星生活助手",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".popupconfig.PopupConfigActivity",
          "matches": "[vid=\"cancel_iv\"]",
          "exampleUrls": "https://e.gkd.li/428ddc56-fff5-401d-a08e-2fcfc4bb4510",
          "snapshotUrls": "https://i.gkd.li/i/17611025",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

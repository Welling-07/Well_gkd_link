// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaoe.client",
  "name": "小鹅通",
  "groups": [
    {
      "key": 0,
      "name": "更新提示-版本更新弹窗",
      "desc": "点击暂不更新",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.xiaoe.app.ui.main.XiaoeMainActivity",
          "matches": "FrameLayout[vid=\"centerPopupContainer\"] [text=\"暂不更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13832282",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "FrameLayout[vid=\"centerPopupContainer\"] [text=\"暂不更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13832282",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

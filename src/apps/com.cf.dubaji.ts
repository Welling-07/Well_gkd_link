// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cf.dubaji",
  "name": "毒霸姬",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": "com.cf.dubaji.module.main.MainActivity",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".module.main.MainActivity",
          "matches": "[vid=\"dlg_action_positive\"][text=\"立即更新\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/13198107",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cf.dubaji:id/dlg_action_positive\"][text=\"立即更新\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/13198107",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.cf.dubaji.module.main.MainActivity"
        }
      ]
    }
  ]
});

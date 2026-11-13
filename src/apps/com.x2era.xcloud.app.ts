// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.x2era.xcloud.app",
  "name": "Fa米家",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "关闭升级弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": [
            "[vid=\"tv_upgrade\"]",
            "[vid=\"iv_cancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13420706",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id$=\"com.x2era.xcloud.app:id/iv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13420706",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-Fa米家-升级提示",
      "desc": "关闭升级弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": "com.x2era.xcloud.app.MainActivity",
          "matches": "[id$=\"com.x2era.xcloud.app:id/iv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13420706",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    }
  ]
});

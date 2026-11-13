// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mem.MacaoLife",
  "name": "澳覓",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13350665",
      "rules": [
        {
          "activityIds": "com.mem.life.ui.launch.LaunchActivity",
          "matches": "[vid=\"cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13350665",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.mem.MacaoLife:id/cancel\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-浮窗广告",
      "fastQuery": true,
      "activityIds": "com.mem.life.ui.home.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/13350685",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mem.life.ui.home.HomeActivity",
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13350685"
        },
        {
          "matches": "[id=\"com.mem.MacaoLife:id/close\"]",
          "fastQuery": true,
          "activityIds": "com.mem.life.ui.home.HomeActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-開啟通知提示",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.mem.life.ui.launch.LaunchActivity",
      "snapshotUrls": "https://i.gkd.li/i/13350665",
      "rules": [
        {
          "matches": "[id=\"com.mem.MacaoLife:id/cancel\"]",
          "fastQuery": true,
          "activityIds": "com.mem.life.ui.launch.LaunchActivity"
        }
      ]
    }
  ]
});

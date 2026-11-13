// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.pwrd.steam.esports",
  "name": "完美世界电竞",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"rl_skip\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/b7adf229-631c-4c27-a07b-eb6e0e1854af",
          "snapshotUrls": "https://i.gkd.li/i/21808124",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text=\"开启推送通知\"] + [vid=\"tv_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6bb3a2b3-5511-4655-9e4a-c0eb6bae27ad",
          "snapshotUrls": "https://i.gkd.li/i/14622501",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "通知提示-开启推送通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14622501",
      "rules": [
        {
          "matches": "[text=\"开启推送通知\"] + [vid=\"tv_close\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

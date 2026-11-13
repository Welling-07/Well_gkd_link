// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.realmecomm.app",
  "name": "realme社区",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动签到",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.android.realme2.home.view.MainActivity",
          "matches": "[text=\"签到\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/18a5751c-0bbd-475d-be6a-5803307111cb",
          "snapshotUrls": "https://i.gkd.li/i/14321155",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-自动点击签到",
      "desc": "自动点击签到",
      "enable": false,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": "com.android.realme2.home.view.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14321155",
      "rules": [
        {
          "matches": "[vid=\"tv_check_in\"][text=\"签到\"]",
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": "com.android.realme2.home.view.MainActivity"
        }
      ]
    }
  ]
});

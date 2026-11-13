// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.coloros.gallery3d",
  "name": "相册",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".app.MainActivity",
          "matches": "[text=\"更新\"] -2 [text=\"取消\"]",
          "exampleUrls": "https://m.gkd.li/47232102/0dae9f4b-8432-4cf4-b648-07ae17cdece2",
          "snapshotUrls": "https://i.gkd.li/i/13554797",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"更新\"] -2 [text=\"取消\"]",
          "exampleUrls": "https://m.gkd.li/47232102/0dae9f4b-8432-4cf4-b648-07ae17cdece2",
          "snapshotUrls": "https://i.gkd.li/i/13554797",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-开启相册同步弹窗",
      "desc": "点击忽略",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.coloros.gallery3d.app.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13637185",
      "rules": [
        {
          "activityIds": ".app.MainActivity",
          "matches": "[text=\"开启相册自动同步，保障相册数据安全\"] + [text=\"忽略\"]",
          "snapshotUrls": "https://i.gkd.li/i/13637185",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"开启相册自动同步，保障相册数据安全\"] + [text=\"忽略\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.coloros.gallery3d.app.MainActivity"
        }
      ]
    }
  ]
});

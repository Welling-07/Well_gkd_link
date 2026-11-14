// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.example.raylink_flutter",
  "name": "RayLink",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13659530",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"立即升级\"] + [desc=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13659530",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[desc=\"立即升级\"] + [desc=\"以后再说\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "通知提示-首页反诈骗提示",
      "rules": [
        {
          "activityIds": "com.remote.cn.MainActivity",
          "matches": "[desc=\"允许远程本设备\"] +2 View[childCount=1][index=parent.childCount.minus(1)] > ImageView[clickable=true][width<80 && height<80]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24853050",
            "https://i.gkd.li/i/24995320"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.example.raylink_flutter.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13659530",
      "rules": [
        {
          "matches": "[desc=\"立即升级\"] + [desc=\"以后再说\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.example.raylink_flutter.MainActivity"
        }
      ]
    }
  ]
});

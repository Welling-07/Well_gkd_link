// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "lab.vie.two",
  "name": "LIBVIO",
  "groups": [
    {
      "key": 0,
      "name": "其他-账号注册说明弹窗",
      "desc": "每次打开app的弹窗提示，自动点击\"我知道了\"",
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13379070",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"账号注册说明\"] +2 [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13379070",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[desc=\"账号注册说明\"] +2 [desc=\"我知道了\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "matchTime": 10000
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hose.ekuaibao",
  "name": "易快报",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-首页横幅广告",
      "activityIds": "com.hose.ekuaibao.view.activity.EkbProActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12649616",
        "https://i.gkd.li/i/18455642"
      ],
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app",
          "activityIds": "com.hose.ekuaibao.view.activity.EkbProActivity"
        },
        {
          "matches": "View[childCount=2] > TextView + TextView[text=\"不感兴趣\"][clickable=true]",
          "activityIds": "com.hose.ekuaibao.view.activity.EkbProActivity",
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

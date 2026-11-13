// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jxhy.kuwan.gga",
  "name": "ギリギリ愛",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-公告弹窗",
      "desc": "点击[我知道了]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"我知道了\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/95caf815-b2bc-48cc-a245-0341e58f0e39",
          "snapshotUrls": "https://i.gkd.li/i/19749364",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.aurora_tec.downloader",
  "name": "极光下载器",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-系统公告",
      "desc": "点击[确定]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".HomeActivity",
          "matches": "[text=\"系统公告\"] +2 [text=\"确定\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/45886cda-e54a-4a1f-b136-949b59704f0c",
          "snapshotUrls": "https://i.gkd.li/i/24726084",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaohu.olevodmobile",
  "name": "欧乐影院",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12826256",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@[vid=\"init_time_text\"] + [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12826256",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@[id=\"com.xiaohu.olevodmobile:id/init_time_text\"] + [text=\"跳过\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});

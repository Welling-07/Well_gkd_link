// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sjm.zhuanzhuan.mcy",
  "name": "喵次元",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchTime": 10000,
      "fastQuery": true,
      "rules": [
        {
          "action": "back",
          "matches": "[text=\"立即升级\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13392514",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "更新弹窗",
          "matches": "[id=\"com.sjm.zhuanzhuan.mcy:id/tv_new_version\"] < LinearLayoutCompat +n [text=\"立即升级\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/13392514",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

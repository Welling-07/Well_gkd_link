// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.alibaba.android.rimet",
  "name": "钉钉",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-消息列表上方广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@FrameLayout > [vid=\"icft_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13325125",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@FrameLayout > [id=\"com.alibaba.android.rimet:id/icft_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13325125",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@Button[text*=\"暂不更新\"] + Button[text*=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402478",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[vid=\"dialog_close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13772151",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[id=\"com.alibaba.android.rimet:id/dialog_close_button\"]",
          "snapshotUrls": "https://i.gkd.li/i/13772151",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

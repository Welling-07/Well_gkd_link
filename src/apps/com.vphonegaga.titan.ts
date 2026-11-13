// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vphonegaga.titan",
  "name": "光速虚拟机",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.vphonegaga.titan.MyNativeActivity1",
      "snapshotUrls": "https://i.gkd.li/i/13292911",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MyNativeActivity",
          "matches": "@Image[childCount=0][text=\"\"][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "exampleUrls": "https://e.gkd.li/ef6b8242-76d7-4ce5-b0fc-4444f72b9b39",
          "snapshotUrls": "https://i.gkd.li/i/13292911",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "@Image < View +2 [text=\"反馈\"]",
          "fastQuery": true,
          "activityIds": "com.vphonegaga.titan.MyNativeActivity1",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.vphonegaga.titan.MyNativeActivity1",
      "snapshotUrls": "https://i.gkd.li/i/13292911",
      "rules": [
        {
          "matches": "@Image < View +2 [text=\"反馈\"]",
          "fastQuery": true,
          "activityIds": "com.vphonegaga.titan.MyNativeActivity1"
        }
      ]
    }
  ]
});

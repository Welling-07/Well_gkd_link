// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.flutter3.ctangxin.vf0egg",
  "name": "糖心Vlog",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionCd": 100,
      "resetMatch": "app",
      "activityIds": "com.example.flutter3_frame.MainActivity",
      "rules": [
        {
          "action": "back",
          "matches": "FrameLayout > View > View > View[index=0] > View > ImageView[childCount=1] + View[clickable=true && desc=null]",
          "snapshotUrls": "https://i.gkd.li/i/12836891",
          "matchTime": 10000,
          "actionCd": 100,
          "resetMatch": "app",
          "activityIds": "com.example.flutter3_frame.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-公告弹窗",
      "matchTime": 10000,
      "resetMatch": "app",
      "activityIds": "com.example.flutter3_frame.MainActivity",
      "rules": [
        {
          "action": "back",
          "matches": "[desc=\"公告\"] +2 [desc=\"取消\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12836854",
          "matchTime": 10000,
          "resetMatch": "app",
          "activityIds": "com.example.flutter3_frame.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "开屏广告",
      "desc": "虚假按钮，实际点击无法跳过，规则暂时保留",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "FrameLayout > View > View > View > View > @View[clickable=true && desc.length=2] + ImageView[childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/12836857",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    }
  ]
});

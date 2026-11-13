// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jk.fitness",
  "name": "食卡卡",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "子key2会点击假的[跳过]按钮进入广告,需配合下一条规则使用",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@ImageView < [width<137 && height<137] < [visibleToUser=true] +n ViewGroup >2 [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28437892",
            "https://i.gkd.li/i/28447272"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "TextView - @View[id=null][text=null][desc=null][clickable=true][width<148 && height<148] <3 FrameLayout[childCount=4] <<n [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/28448877",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-开屏误触后的返回操作",
      "desc": "配合开屏广告规则使用",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "matches": "@Button[desc=\"返回\"] < View < View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/29038524",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "[desc*=\"会员\"] -n @ImageView[clickable=true][width<157] <3 View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/31331586",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "@ImageView[clickable=true] <2 View < View < View < View < View < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/29038568",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-获取设备",
      "desc": "获取AI体脂秤-> 暂不",
      "matchTime": 14000,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.jk.fitness.MainActivity",
          "matches": "@View[desc=\"暂不\"][clickable=true][visibleToUser=true] -2 ImageView < View[childCount=3][left=0 && top=0] <<(6-n) FrameLayout <<(4-n) [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/30460157",
          "exampleUrls": "https://e.gkd.li/82711399-cc15-4cab-acc2-f6d359b9d349",
          "matchTime": 14000
        }
      ]
    }
  ]
});

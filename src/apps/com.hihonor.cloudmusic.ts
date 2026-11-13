// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.cloudmusic",
  "name": "荣耀音乐",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-推荐页卡片广告",
      "desc": "点击[关闭]-点击[直接关闭]",
      "fastQuery": true,
      "activityIds": "com.netease.cloudmusic.activity.MainActivity",
      "rules": [
        {
          "matches": "[vid=\"tag_ad_banner\"]",
          "snapshotUrls": "https://i.gkd.li/i/15835795",
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"直接关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/15835857",
          "fastQuery": true,
          "activityIds": "com.netease.cloudmusic.activity.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matches": "[vid=\"dsl_dialog_root\"]",
          "snapshotUrls": "https://i.gkd.li/i/15860430",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-首页-网易云音乐弹窗广告",
      "enable": false,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": "com.netease.cloudmusic.activity.MainActivity",
      "exampleUrls": "https://m.gkd.li/101449500/7471ea5e-df20-4340-971f-1acfccbe6fab",
      "snapshotUrls": "https://i.gkd.li/i/14167946",
      "rules": [
        {
          "matches": "[vid=\"dsl_dialog_root\"] >4 ImageView[index=1]",
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": "com.netease.cloudmusic.activity.MainActivity"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.spotware.ct",
  "name": "cTrader",
  "groups": [
    {
      "key": 0,
      "name": "功能类-询问是否是美国居民弹窗",
      "desc": "点击[我不是美国居民]-点击[确认]",
      "fastQuery": true,
      "activityIds": "mobile.droid.ctrader.views.main.MainActivity",
      "rules": [
        {
          "name": "点击[我不是美国居民]",
          "matches": "[text=\"我不是美国居民\"]",
          "exampleUrls": "https://m.gkd.li/57941037/959b6c00-0d43-46d4-83eb-056326f036a5",
          "snapshotUrls": "https://i.gkd.li/i/14495502",
          "fastQuery": true,
          "activityIds": "mobile.droid.ctrader.views.main.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "点击[确认]",
          "matches": "[text=\"确认\"]",
          "exampleUrls": "https://m.gkd.li/57941037/8adae91e-019d-44eb-8820-b3d560a2b66d",
          "snapshotUrls": "https://i.gkd.li/i/14495496",
          "fastQuery": true,
          "activityIds": "mobile.droid.ctrader.views.main.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-我不是美国公民弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "mobile.droid.ctrader.views.main.MainActivity",
      "rules": [
        {
          "matches": "[text=\"我不是美国居民\"]",
          "snapshotUrls": "https://i.gkd.li/i/14537505",
          "fastQuery": true,
          "activityIds": "mobile.droid.ctrader.views.main.MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"确认\"]",
          "exampleUrls": "https://m.gkd.li/101449500/085abfc1-cb72-465b-93b6-63e1c89af88f",
          "snapshotUrls": "https://i.gkd.li/i/14495496",
          "fastQuery": true,
          "activityIds": "mobile.droid.ctrader.views.main.MainActivity"
        }
      ]
    }
  ]
});

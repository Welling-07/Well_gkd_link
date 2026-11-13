// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.youdao.translator",
  "name": "有道翻译官",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-翻译结果下方广告",
      "desc": "①点击[x]掉 ②点击[不再展示]",
      "fastQuery": true,
      "activityIds": ".activity.trans.TransResultActivity",
      "rules": [
        {
          "name": "①点击[x]掉",
          "matches": "@ImageView[vid=\"close_iv\"] + [vid=\"native_ad_flag_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259910",
          "fastQuery": true,
          "activityIds": ".activity.trans.TransResultActivity"
        },
        {
          "preKeys": 0,
          "name": "②点击[不再展示]",
          "matches": "[text*=\"不再展示\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/30857016",
          "exampleUrls": "https://e.gkd.li/7975274a-aa0b-4021-9624-5c1c3477cb9a",
          "fastQuery": true,
          "activityIds": ".activity.trans.TransResultActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-翻译界面-结果下方广告",
      "desc": "点击卡片广告右上角x",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.youdao.translator.activity.trans.TransResultActivity"
      ],
      "rules": [
        {
          "matches": "@ImageView[id=\"com.youdao.translator:id/close_iv\"] + [id=\"com.youdao.translator:id/native_ad_flag_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259910",
          "fastQuery": true,
          "activityIds": [
            "com.youdao.translator.activity.trans.TransResultActivity"
          ]
        },
        {
          "matches": "@ImageView[id=\"com.youdao.translator:id/close_iv\"] + [id=\"com.youdao.translator:id/native_ad_flag_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13259910",
          "fastQuery": true,
          "activityIds": "com.youdao.translator.activity.trans.TransResultActivity"
        }
      ]
    }
  ]
});

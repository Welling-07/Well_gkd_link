// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.didiglobal.express.driver",
  "name": "滴滴送货司机",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-悬浮窗",
      "desc": "点击[忽略]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".v2.main.EDMainActivity",
          "matches": "[text*=\"悬浮窗\"] +n @[clickable=true] > [text=\"忽略\"]",
          "snapshotUrls": "https://i.gkd.li/i/33427414"
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-附近有新商户",
      "desc": "点击[忽略]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".v2.main.EDMainActivity",
          "matches": "[text*=\"有新商户\"] +n @[clickable=true] > [text=\"忽略\"]",
          "snapshotUrls": "https://i.gkd.li/i/33427414",
          "exampleUrls": "https://e.gkd.li/fbbd9498-9140-40fe-a772-ba4613bfa9a4"
        }
      ]
    },
    {
      "key": 2,
      "name": "其他-开启自动接单?",
      "desc": "点击[忽略]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".v2.main.EDMainActivity",
          "matches": "[text*=\"开启\"][text*=\"自动接单\"] +n @[clickable=true] > [text=\"忽略\"]",
          "snapshotUrls": "https://i.gkd.li/i/33851087",
          "exampleUrls": "https://e.gkd.li/f3a0d6e2-8b2e-4b68-847d-6f6a6692ae08"
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-小悬浮窗",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".v2.main.EDMainActivity",
          "matches": "ImageView[width<86] < * < @[clickable=true] <2 [childCount=2][width<350] < ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/33917243",
          "exampleUrls": "https://e.gkd.li/dfc8c4b0-23bd-4163-8255-6f3e09c64fda"
        }
      ]
    },
    {
      "key": 5,
      "name": "通知提示-顶部横幅消息",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".v2.main.EDMainActivity",
          "matches": "ImageView < * < @[clickable=true] < [childCount>5][desc.length>20] <3 [childCount>10] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/33917290",
          "exampleUrls": "https://e.gkd.li/2381785a-ccc8-4fb8-9061-e0f1c559c4e9"
        }
      ]
    }
  ]
});

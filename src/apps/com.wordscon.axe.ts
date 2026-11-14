// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.wordscon.axe",
  "name": "句子控",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.MainActivity",
          "matches": "[vid=\"imv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/28225736"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告",
      "desc": "①点击x掉 ②点击[不感兴趣] ③点击[我知道了]",
      "fastQuery": true,
      "activityIds": [
        ".sentence.AXPostDetailActivity",
        ".main.MainActivity",
        ".search.AXSquareSearchActivity",
        ".topic.AXDetailTopicActivity"
      ],
      "rules": [
        {
          "name": "①点击[x]掉",
          "matches": "@[clickable=true] < [desc^=\"dislike\"] -2 [childCount=2] >2 [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28225949",
            "https://i.gkd.li/i/28226212",
            "https://i.gkd.li/i/28226355"
          ],
          "exampleUrls": "https://e.gkd.li/6a509f3c-811f-49b0-8314-8aaf7b604e5c",
          "fastQuery": true,
          "activityIds": [
            ".sentence.AXPostDetailActivity",
            ".main.MainActivity",
            ".search.AXSquareSearchActivity",
            ".topic.AXDetailTopicActivity"
          ]
        },
        {
          "name": "①点击x掉",
          "matches": "@Image[width<69 && height<69][bottom<getPrev(3).top] < View[index=1] <<n [vid=\"layout_ad_container\"] <<n [vid=\"layout_detail\"] + [vid=\"bt_response\"]",
          "snapshotUrls": "https://i.gkd.li/i/28226759",
          "exampleUrls": "https://e.gkd.li/dae5c8a2-77b4-428d-8568-e9a04bd773e9",
          "fastQuery": true,
          "activityIds": [
            ".sentence.AXPostDetailActivity",
            ".main.MainActivity",
            ".search.AXSquareSearchActivity",
            ".topic.AXDetailTopicActivity"
          ]
        },
        {
          "name": "①x掉",
          "matches": "@ImageView[width<71 && height<71] <4 [childCount=4] -2 FrameLayout >3 [text^=\"跳转至\"]",
          "snapshotUrls": "https://i.gkd.li/i/28227993",
          "exampleUrls": "https://e.gkd.li/6ed41a6d-5e89-4e86-b1d9-de977ca128c0",
          "fastQuery": true,
          "activityIds": [
            ".sentence.AXPostDetailActivity",
            ".main.MainActivity",
            ".search.AXSquareSearchActivity",
            ".topic.AXDetailTopicActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2
          ],
          "name": "②点击[不感兴趣]",
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/28225930",
            "https://i.gkd.li/i/28226757",
            "https://i.gkd.li/i/28228086"
          ],
          "exampleUrls": "https://e.gkd.li/7847c022-0eec-4d9a-8649-4ed6bde51f29",
          "fastQuery": true,
          "activityIds": [
            ".sentence.AXPostDetailActivity",
            ".main.MainActivity",
            ".search.AXSquareSearchActivity",
            ".topic.AXDetailTopicActivity"
          ]
        },
        {
          "preKeys": 3,
          "name": "③点击[我知道了]",
          "matches": "[text=\"开通会员\"] -2 [vid=\"tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/28226756",
          "fastQuery": true,
          "activityIds": [
            ".sentence.AXPostDetailActivity",
            ".main.MainActivity",
            ".search.AXSquareSearchActivity",
            ".topic.AXDetailTopicActivity"
          ]
        }
      ]
    }
  ]
});

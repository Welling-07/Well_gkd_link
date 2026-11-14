// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.openai.chatgpt",
  "name": "ChatGPT",
  "groups": [
    {
      "key": 0,
      "name": "通知提示-充值Plus提示",
      "desc": "在输入框上方提示, 点击x掉",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@[clickable=true][getChild(0).desc=\"关闭\"] <<(-n+10)  * -> [getChild(0).text*=\"Plus\" || text*=\"Plus\"] <<(-n+12) View[childCount>=2][left!=0] <<(-n+12) [left=0][top!=0] <n [childCount>=3] <<(-n+18) [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/24996012",
            "https://i.gkd.li/i/28416563",
            "https://i.gkd.li/i/28416912",
            "https://i.gkd.li/i/28416926",
            "https://i.gkd.li/i/28435734",
            "https://i.gkd.li/i/28840922"
          ],
          "exampleUrls": "https://e.gkd.li/db0ecc3d-9401-4c2d-bdc0-32262ce443a4",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matchTime": 18000,
          "resetMatch": "app",
          "actionMaximum": 3,
          "matches": "Button - [desc=\"关闭\"] < @View[clickable=true][childCount=2] - * -> [text=\"获取 Plus\"] < [childCount=2] <<2 View <(2,3,4) View[childCount>=3] <<(-n+18) [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26234095",
          "exampleUrls": "https://e.gkd.li/dd8a2887-ea64-466d-b270-de7568b55af4"
        }
      ]
    },
    {
      "key": 3,
      "name": "通知提示-聊天记忆容量警告",
      "desc": "x掉通知",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@[clickable=true][getChild(0).desc=\"关闭\"] - [text*=\"记忆容量\"] <(1,2) View[childCount>2] <<(1,2) [index=parent.childCount.minus(3)] <n [childCount>5] <<(6,8) [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26647576",
          "exampleUrls": "https://e.gkd.li/a53e015f-2b08-4177-80aa-b516d213b333",
          "fastQuery": true
        }
      ]
    }
  ]
});

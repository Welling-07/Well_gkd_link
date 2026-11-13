// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sgcc.wsgw.cn",
  "name": "网上国网",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-首页弹窗广告",
      "activityIds": [
        "com.sgcc.wsgw.mainbundle.NewsSyRemind2Activity",
        "com.sgcc.wsgw.rnbundle.activity.HomeReactActivity"
      ],
      "rules": [
        {
          "actionCd": 2000,
          "fastQuery": true,
          "matches": "@[focusable=true] + [text=\"今日不再出现\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12745042",
            "https://i.gkd.li/i/13247655"
          ],
          "activityIds": [
            "com.sgcc.wsgw.mainbundle.NewsSyRemind2Activity",
            "com.sgcc.wsgw.rnbundle.activity.HomeReactActivity"
          ]
        },
        {
          "preKeys": 0,
          "actionDelay": 300,
          "matches": "ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/13247655",
            "https://i.gkd.li/i/13247655"
          ],
          "activityIds": [
            "com.sgcc.wsgw.mainbundle.NewsSyRemind2Activity",
            "com.sgcc.wsgw.rnbundle.activity.HomeReactActivity"
          ]
        },
        {
          "preKeys": 0,
          "actionDelay": 300,
          "fastQuery": true,
          "matches": "[vid=\"news_remind_laytout\"] >n [vid=\"btn_remind_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12745042",
          "activityIds": [
            "com.sgcc.wsgw.mainbundle.NewsSyRemind2Activity",
            "com.sgcc.wsgw.rnbundle.activity.HomeReactActivity"
          ]
        },
        {
          "preKeys": 0,
          "actionDelay": 300,
          "fastQuery": true,
          "matches": "[id=\"com.sgcc.wsgw.cn:id/news_remind_laytout\"] >n [id=\"com.sgcc.wsgw.cn:id/btn_remind_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12745042"
          ],
          "activityIds": [
            "com.sgcc.wsgw.mainbundle.NewsSyRemind2Activity",
            "com.sgcc.wsgw.rnbundle.activity.HomeReactActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13501638",
      "rules": [
        {
          "activityIds": "com.sgcc.wsgw.rnbundle.activity.HomeReactActivity",
          "matches": "@ImageView < ViewGroup -3 [text=\"有新版本啦!\"]",
          "snapshotUrls": "https://i.gkd.li/i/13501638",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView < ViewGroup -3 [text=\"有新版本啦!\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

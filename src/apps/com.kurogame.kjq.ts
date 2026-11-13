// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kurogame.kjq",
  "name": "库街区",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动签到",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "matches": "[vid=\"sign_click\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15521224",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 0,
          "matches": "[vid=\"bt_close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15521225",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "[vid=\"sign_click\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15521224",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.kurogame.kjq.MainActivity"
        },
        {
          "preKeys": 2,
          "matches": "[vid=\"bt_close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15521225",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.kurogame.kjq.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d9c598fc-5bd4-4773-8db1-316b8f7155c3",
          "snapshotUrls": "https://i.gkd.li/i/15629864",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.kurogame.kjq.MainActivity",
          "matches": "[vid=\"close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/d9c598fc-5bd4-4773-8db1-316b8f7155c3",
          "snapshotUrls": "https://i.gkd.li/i/15629864",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-鸣潮自动签到",
      "desc": "①点击签到 ②签到成功-点击x掉 ③按[返回键]",
      "activityIds": ".profile.ui.activity.WebViewShareActivity",
      "rules": [
        {
          "name": "①点击签到",
          "matches": "[childCount=1][getChild(0).getChild(1).text=\"《鸣潮》每日签到工具\"] +(2,3) View >3 @View[childCount=3][height>250][getChild(2).width<150][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15632005",
            "https://i.gkd.li/i/32262391",
            "https://i.gkd.li/i/34076762",
            "https://i.gkd.li/i/34198526"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/15632902",
          "activityIds": ".profile.ui.activity.WebViewShareActivity"
        },
        {
          "preKeys": 0,
          "name": "②签到成功-点击x掉",
          "matches": "@TextView - * > [text=\"签到成功！\"]",
          "snapshotUrls": "https://i.gkd.li/i/15632138",
          "activityIds": ".profile.ui.activity.WebViewShareActivity"
        },
        {
          "preKeys": 1,
          "name": "③按[返回键]",
          "action": "back",
          "matches": "View[text=\"《鸣潮》每日签到工具\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15632250",
          "activityIds": ".profile.ui.activity.WebViewShareActivity"
        },
        {
          "matches": "[text=\"《鸣潮》每日签到工具\"] >6 ListView[childCount=12] > @View[childCount=3][visibleToUser=true] > TextView[width<150] <3 * + View[childCount=2]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15632005",
            "https://i.gkd.li/i/15632902"
          ],
          "activityIds": "com.kurogame.kjq.profile.ui.activity.WebViewShareActivity"
        },
        {
          "preKeys": 3,
          "matches": "@TextView - * > [text=\"签到成功！\"]",
          "snapshotUrls": "https://i.gkd.li/i/15632138",
          "activityIds": "com.kurogame.kjq.profile.ui.activity.WebViewShareActivity"
        },
        {
          "preKeys": 4,
          "action": "back",
          "matches": "View[text=\"《鸣潮》每日签到工具\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15632250",
          "activityIds": "com.kurogame.kjq.profile.ui.activity.WebViewShareActivity"
        }
      ]
    }
  ]
});

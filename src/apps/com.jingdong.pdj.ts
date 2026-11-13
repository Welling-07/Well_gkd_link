// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jingdong.pdj",
  "name": "京东到家",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "activityIds": "pdj.main.MainActivity",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "WebView[text=\"京东到家\"] >5 @View[clickable=true][childCount=1][visibleToUser=true] > View[childCount=1] > TextView[childCount=0] <<n [vid=\"mWebView\"]",
          "snapshotUrls": "https://i.gkd.li/i/13217796",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "pdj.main.MainActivity"
        },
        {
          "matches": "[vid=\"ivClose\"][desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13223282",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "pdj.main.MainActivity"
        },
        {
          "matches": "WebView[text=\"京东到家\"] >7 TextView[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/13217796",
          "matchTime": 10000,
          "activityIds": "pdj.main.MainActivity",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.jingdong.pdj:id/ivClose\"][desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13223282",
          "matchTime": 10000,
          "activityIds": "pdj.main.MainActivity",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "activityIds": "com.jingdong.pdj.plunginupdate.update.UpdateDialogActivity",
      "snapshotUrls": "https://i.gkd.li/i/13217634",
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".plunginupdate.update.UpdateDialogActivity",
          "matches": "Button[text=\"暂不安装\"]",
          "snapshotUrls": "https://i.gkd.li/i/13217634",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "Button[text=\"暂不安装\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.jingdong.pdj.plunginupdate.update.UpdateDialogActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "activityIds": "pdj.main.MainActivity",
      "rules": [
        {
          "matches": "WebView[text=\"京东到家\"] >7 TextView[text=\"\"]",
          "snapshotUrls": "https://i.gkd.li/i/13217796",
          "matchTime": 10000,
          "activityIds": "pdj.main.MainActivity"
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.jingdong.pdj:id/ivClose\"][desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13223282",
          "matchTime": 10000,
          "activityIds": "pdj.main.MainActivity"
        }
      ]
    }
  ]
});

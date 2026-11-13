// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sf.activity",
  "name": "顺丰速运",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "order": -9,
      "activityIds": ".MainActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[text=\"取消\"] < ViewGroup - ScrollView >(2) [text*=\"新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/12642445",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "fastQuery": true,
          "matches": "@Button[desc=\"取消\"] - ViewGroup >3 [visibleToUser=true][text=\"立即升级\"] <<n [vid=\"rnRootLayout\"]",
          "snapshotUrls": "https://i.gkd.li/i/13291144",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "@[desc=\"取消\"] - ViewGroup >n [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13291144",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity"
        },
        {
          "matches": "@[text=\"取消\"] < ViewGroup - ScrollView >(2) [text*=\"新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/12642445",
          "activityIds": "com.sf.activity.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[desc=\"取消\"] - ViewGroup >n [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/13291144",
          "activityIds": "com.sf.activity.MainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-专属月报弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[id=\"MonthReportDialogCloseBtn\"] > ImageView",
          "exampleUrls": "https://m.gkd.li/57941037/83023ed5-f143-4355-9fff-e078011dfa4a",
          "snapshotUrls": "https://i.gkd.li/i/12642441",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@Button[id=\"BmsAdDialogViewCloseButton\"] <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < [vid=\"rnRootLayout\"]",
          "exampleUrls": "https://e.gkd.li/3be50f7b-5696-47c9-95cc-ef46f8531967",
          "snapshotUrls": [
            "https://i.gkd.li/i/14502128",
            "https://i.gkd.li/i/17869485"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "name": "本月礼包",
          "activityIds": "com.sf.activity.MainActivity",
          "matches": "[id=\"BmsAdDialogViewCloseButton\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6baf1ea4-9424-4360-b28b-7907b0d7aa4a",
          "snapshotUrls": "https://i.gkd.li/i/14502128",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/53c0a275-e6f7-42b2-b60e-6998685d30c3",
          "snapshotUrls": "https://i.gkd.li/i/16401925",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-专属月报弹窗",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.sf.activity.MainActivity",
          "matches": "[id=\"MonthReportDialogCloseBtn\"] > ImageView",
          "exampleUrls": "https://m.gkd.li/57941037/83023ed5-f143-4355-9fff-e078011dfa4a",
          "snapshotUrls": "https://i.gkd.li/i/12642441"
        }
      ]
    }
  ]
});

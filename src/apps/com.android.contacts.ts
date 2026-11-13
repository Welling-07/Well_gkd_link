// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.contacts",
  "name": "通讯录与拨号",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.mobile.businesshall.ui.common.RecommendPopupActivity",
          "matches": "[vid=\"img_close_btn\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/a3ad68fc-4a2e-45e2-87d3-97ece1fceaa4",
          "snapshotUrls": "https://i.gkd.li/i/14321032",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击[取消]",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "@[text=\"取消\"] +2 [text=\"更新\"]",
          "exampleUrls": "https://m.gkd.li/57941037/803695f8-48e1-43e8-8841-ec0288393489",
          "snapshotUrls": "https://i.gkd.li/i/14469082",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.mobile.businesshall.ui.common.RecommendPopupActivity",
          "matches": "[vid=\"img_close_btn\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/a3ad68fc-4a2e-45e2-87d3-97ece1fceaa4",
          "snapshotUrls": "https://i.gkd.li/i/14321032"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lucky.luckyclient",
  "name": "瑞幸咖啡",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12846499",
      "rules": [
        {
          "activityIds": "com.luckin.client.main.FirstActivity",
          "matches": "@ImageView[vid=\"dismiss_btn\"] - LinearLayout > ImageView[vid=\"update_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12846499",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[id=\"com.lucky.luckyclient:id/dismiss_btn\"] - LinearLayout > ImageView[id=\"com.lucky.luckyclient:id/update_btn\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-超值换购弹窗",
      "desc": "关闭超值换购弹窗",
      "activityIds": "com.lucky.luckyclient.preview2.OrderPreviewActivity2",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12922834",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".preview2.OrderPreviewActivity2",
          "matches": "[vid=\"close_iv\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12922834"
        },
        {
          "matches": "[id=\"com.lucky.luckyclient:id/close_iv\"][visibleToUser=true]",
          "activityIds": "com.lucky.luckyclient.preview2.OrderPreviewActivity2",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-优惠卷领取提示",
      "desc": "按下返回键关闭优惠卷领取提示",
      "activityIds": "com.luckin.client.main.FirstActivity",
      "snapshotUrls": "https://i.gkd.li/i/13164114",
      "rules": [
        {
          "activityIds": "com.luckin.client.main.FirstActivity",
          "action": "back",
          "matches": "[vid=\"webcontent\"]",
          "snapshotUrls": "https://i.gkd.li/i/13164114"
        },
        {
          "matches": "[id=\"com.lucky.luckyclient:id/webcontent\"]",
          "action": "back",
          "activityIds": "com.luckin.client.main.FirstActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-软件更新",
      "enable": false,
      "activityIds": "com.luckin.client.main.FirstActivity",
      "snapshotUrls": "https://i.gkd.li/i/12846499",
      "rules": [
        {
          "matches": "@ImageView[id=\"com.lucky.luckyclient:id/dismiss_btn\"] - LinearLayout > ImageView[id=\"com.lucky.luckyclient:id/update_btn\"]",
          "activityIds": "com.luckin.client.main.FirstActivity"
        }
      ]
    }
  ]
});

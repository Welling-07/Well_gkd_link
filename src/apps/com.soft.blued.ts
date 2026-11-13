// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.soft.blued",
  "name": "Blued",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.blued.android.core.ui.TerminalActivity",
            ".ui.home.HomeActivity"
          ],
          "matches": "[vid=\"fl_main\"] [vid=\"img_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12777097",
            "https://i.gkd.li/i/13694950",
            "https://i.gkd.li/i/13699455"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".ui.home.HomeActivity",
          "matches": "[vid=\"ad_option\"]",
          "exampleUrls": "https://m.gkd.li/57941037/65ee5632-c54b-4ef6-95e9-e57582ff7017",
          "snapshotUrls": "https://i.gkd.li/i/14149470"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.blued.android.core.ui.TerminalActivity",
            "com.soft.blued.ui.home.HomeActivity"
          ],
          "matches": "[id=\"com.soft.blued:id/fl_main\"] [id=\"com.soft.blued:id/img_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12777097",
            "https://i.gkd.li/i/13694950",
            "https://i.gkd.li/i/13699455"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.soft.blued.ui.home.HomeActivity",
          "matches": "[id=\"com.soft.blued:id/ad_option\"]",
          "exampleUrls": "https://m.gkd.li/57941037/65ee5632-c54b-4ef6-95e9-e57582ff7017",
          "snapshotUrls": "https://i.gkd.li/i/14149470"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.blued.android.core.ui.TerminalActivity",
          "matches": "[vid=\"iv_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/37ea59cf-9606-4cd6-a74a-84f353f07975",
          "snapshotUrls": "https://i.gkd.li/i/14157519",
          "fastQuery": true
        },
        {
          "activityIds": ".ui.home.HomeActivity",
          "matches": "[vid=\"nearby_common_guide_close_iv\"]",
          "exampleUrls": "https://e.gkd.li/04e78fd8-9d78-48d7-b1f0-eddde80f5c52",
          "snapshotUrls": "https://i.gkd.li/i/17172243",
          "fastQuery": true
        },
        {
          "activityIds": "com.blued.android.core.ui.TerminalActivity",
          "matches": "[id=\"com.soft.blued:id/iv_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/37ea59cf-9606-4cd6-a74a-84f353f07975",
          "snapshotUrls": "https://i.gkd.li/i/14157519",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-会员活动弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.blued.android.core.ui.TransparentActivity",
          "matches": "[vid=\"blued_ad_layout\"] + [vid=\"img_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14310618",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-会员购买弹窗",
      "enable": false,
      "fastQuery": true,
      "resetMatch": "app",
      "activityIds": "com.blued.android.core.ui.TransparentActivity",
      "exampleUrls": "https://m.gkd.li/101449500/2a5e9e45-09c5-4b72-a6af-4d284c6532a2",
      "snapshotUrls": "https://i.gkd.li/i/13989423",
      "rules": [
        {
          "matches": "[vid=\"blued_ad_layout\"] +n [vid=\"img_close\"]",
          "fastQuery": true,
          "resetMatch": "app",
          "activityIds": "com.blued.android.core.ui.TransparentActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-首充弹窗",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.soft.blued.ui.home.HomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/14039501",
      "rules": [
        {
          "matches": "[vid=\"fl_main\"] > [vid=\"iv_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.soft.blued.ui.home.HomeActivity"
        }
      ]
    }
  ]
});

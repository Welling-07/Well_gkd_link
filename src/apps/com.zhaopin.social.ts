// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zhaopin.social",
  "name": "智联招聘",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12706186"
      ],
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/update\"] + [id=\"com.zhaopin.social:id/ignore\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-我的页面卡片广告",
      "enable": false,
      "activityIds": "com.zhaopin.social.homepage.ZSC_MainTabActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/12706181"
      ],
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/rl_banner_close\"][clickable=true]",
          "activityIds": "com.zhaopin.social.homepage.ZSC_MainTabActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-社区页面弹窗广告",
      "enable": false,
      "activityIds": [
        "com.zhaopin.social.homepage.ZSC_MainTabActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/13063442",
      "rules": [
        {
          "matches": "ImageView[clickable=true&&focusable=true] < FrameLayout + FrameLayout > ImageView[clickable=false&&focusable=false]",
          "activityIds": [
            "com.zhaopin.social.homepage.ZSC_MainTabActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "自动点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13063427",
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/message_pushlayout_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-消息-开启消息通知",
      "desc": "自动点击关闭",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.zhaopin.social.homepage.ZSC_MainTabActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/13063427",
      "rules": [
        {
          "matches": "[id=\"com.zhaopin.social:id/message_pushlayout_close\"]",
          "fastQuery": true,
          "activityIds": [
            "com.zhaopin.social.homepage.ZSC_MainTabActivity"
          ]
        }
      ]
    }
  ]
});

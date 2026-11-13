// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.damai",
  "name": "大麦",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "desc": "该规则需要在高级设置中开启[启用优化]才能生效",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "priorityTime": 10000,
      "forcedTime": 8000,
      "rules": [
        {
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[vid=\"homepage_advert_pb\"]",
          "snapshotUrls": "https://i.gkd.li/i/14585402",
          "exampleUrls": "https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "forcedTime": 8000,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".homepage.MainActivity",
          "matches": "[vid=\"homepage_popup_window_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627900",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "cn.damai.homepage.MainActivity",
          "matches": "[id=\"cn.damai:id/homepage_popup_window_image\"] + [id=\"cn.damai:id/homepage_popup_window_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627900",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".homepage.MainActivity",
          "matches": "[vid=\"damai_theme_dialog_close_layout\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/24213790",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "enable": false,
      "fastQuery": true,
      "activityIds": "cn.damai.homepage.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13985393",
      "rules": [
        {
          "matches": "[text*=\"通知权限\"] +2 LinearLayout > [text=\"不开启\"]",
          "fastQuery": true,
          "activityIds": "cn.damai.homepage.MainActivity"
        }
      ]
    }
  ]
});

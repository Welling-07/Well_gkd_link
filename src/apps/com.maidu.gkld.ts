// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.maidu.gkld",
  "name": "公考雷达",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/34117369",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-首页右侧悬浮广告",
      "activityIds": "com.maidu.gkld.ui.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12715291",
      "rules": [
        {
          "activityIds": ".ui.main.MainActivity",
          "matches": "[vid=\"fl_float\"] + [vid=\"close_image_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715291"
        },
        {
          "matches": "[id=\"com.maidu.gkld:id/fl_float\"] + [id=\"com.maidu.gkld:id/close_image_view\"]",
          "activityIds": "com.maidu.gkld.ui.main.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12715250",
      "rules": [
        {
          "matches": "[vid=\"ll_open_app_notice\"] + [vid=\"iv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715250",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.maidu.gkld:id/ll_open_app_notice\"] + [id=\"com.maidu.gkld:id/iv_cancel\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12715215",
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/tv_update_next\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "activityIds": "com.maidu.gkld.ui.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12715250",
      "rules": [
        {
          "matches": "[id=\"com.maidu.gkld:id/ll_open_app_notice\"] + [id=\"com.maidu.gkld:id/iv_cancel\"]",
          "activityIds": "com.maidu.gkld.ui.main.MainActivity"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dataoke.union",
  "name": "大淘客联盟",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "desc": "点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.dtk.plat_home_lib.index.activity.IndexActivity",
            "com.dtk.plat_web_lib.X5WebViewActivity"
          ],
          "matches": [
            "[text^=\"你还没有打开通知哦\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13446826",
            "https://i.gkd.li/i/18094567"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text^=\"你还没有打开通知哦\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13446826",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
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
          "activityIds": "com.dtk.plat_web_lib.X5WebViewActivity",
          "matches": "[vid=\"img_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/a1cfa798-0fb1-456c-9875-dd3387f5b7e0",
          "snapshotUrls": "https://i.gkd.li/i/18094553",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-开启消息通知",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.dtk.plat_home_lib.index.activity.IndexActivity",
      "snapshotUrls": "https://i.gkd.li/i/13446826",
      "rules": [
        {
          "matches": "@[text=\"取消\"] <<n [id=\"com.dataoke.union:id/parentPanel\"] [text^=\"你还没有打开通知哦\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.dtk.plat_home_lib.index.activity.IndexActivity"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.systemAdSolution",
  "name": "智能服务",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-为什么不希望看到这条推广",
      "desc": "点击\"不感兴趣\"",
      "activityIds": [
        "com.xiaomi.ad.feedback",
        "com.android.thememanager.module.detail.view.ThemeDetailActivity",
        "com.android.thememanager.ThemeResourceProxyTabActivity",
        "com.android.calendar.homepage.AllInOneActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "anyMatches": [
            "[text=\"不感兴趣\"][clickable=true]",
            "@[clickable=true] > [text=\"不感兴趣\"][clickable=false][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13227328",
            "https://i.gkd.li/i/13255751",
            "https://i.gkd.li/i/14946925",
            "https://i.gkd.li/i/23619341"
          ],
          "activityIds": [
            "com.xiaomi.ad.feedback",
            "com.android.thememanager.module.detail.view.ThemeDetailActivity",
            "com.android.thememanager.ThemeResourceProxyTabActivity",
            "com.android.calendar.homepage.AllInOneActivity"
          ]
        },
        {
          "preKeys": 0,
          "fastQuery": true,
          "anyMatches": [
            "[text=\"广告密集\"][clickable=true]",
            "@[clickable=true] > [text=\"广告密集\"][clickable=false][visibleToUser=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/19636920",
            "https://i.gkd.li/i/23619357"
          ],
          "activityIds": [
            "com.xiaomi.ad.feedback",
            "com.android.thememanager.module.detail.view.ThemeDetailActivity",
            "com.android.thememanager.ThemeResourceProxyTabActivity",
            "com.android.calendar.homepage.AllInOneActivity"
          ]
        },
        {
          "fastQuery": true,
          "matches": "[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13227328",
            "https://i.gkd.li/i/13255751",
            "https://i.gkd.li/i/14946925"
          ],
          "activityIds": [
            "com.xiaomi.ad.feedback",
            "com.android.thememanager.module.detail.view.ThemeDetailActivity",
            "com.android.thememanager.ThemeResourceProxyTabActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "resetMatch": "app",
      "actionMaximum": 1,
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[vid=\"view_skip_button\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14927422",
            "https://i.gkd.li/i/16323945"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/14927422",
          "fastQuery": true,
          "matchTime": 10000,
          "resetMatch": "app",
          "actionMaximum": 1,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-miui-为什么不希望看到这条推广",
      "desc": "点击【不感兴趣】",
      "enable": false,
      "activityIds": [
        "com.xiaomi.ad.feedback",
        "com.android.thememanager.module.detail.view.ThemeDetailActivity",
        "com.android.thememanager.ThemeResourceProxyTabActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13227328",
        "https://i.gkd.li/i/13255751"
      ],
      "rules": [
        {
          "matches": "[id=\"com.miui.systemAdSolution:id/no_interest\"]",
          "activityIds": [
            "com.xiaomi.ad.feedback",
            "com.android.thememanager.module.detail.view.ThemeDetailActivity",
            "com.android.thememanager.ThemeResourceProxyTabActivity"
          ]
        }
      ]
    }
  ]
});

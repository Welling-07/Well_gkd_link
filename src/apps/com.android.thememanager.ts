// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.thememanager",
  "name": "主题壁纸",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-信息流广告",
      "desc": "该广告的第二段需开启[智能服务]的对应规则才能关闭",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".ThemeResourceProxyTabActivity",
            ".module.detail.view.ThemeDetailActivity",
            ".module.detail.view.WidgetDetailActivity",
            ".v9.WallpaperSubjectActivity"
          ],
          "matches": "[vid=\"ad_close_btn\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17143445",
            "https://i.gkd.li/i/17143447",
            "https://i.gkd.li/i/17675601",
            "https://i.gkd.li/i/19637669"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": [
        "com.android.thememanager.ThemeResourceTabActivity",
        "com.android.thememanager.ThemeResourceProxyTabActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/13215038",
        "https://i.gkd.li/i/15286330"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "action": "clickCenter",
          "activityIds": [
            ".ThemeResourceTabActivity",
            ".ThemeResourceProxyTabActivity"
          ],
          "matches": "ImageView[vid=\"cancel\"][desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13215038",
            "https://i.gkd.li/i/15286330"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[id=\"com.android.thememanager:id/cancel\"][desc=\"关闭\"]",
          "fastQuery": true,
          "activityIds": [
            "com.android.thememanager.ThemeResourceTabActivity",
            "com.android.thememanager.ThemeResourceProxyTabActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右下角悬浮窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".ThemeResourceTabActivity",
            ".ThemeResourceProxyTabActivity"
          ],
          "matches": "[vid=\"close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/41ff6d56-e583-4e6e-9fb3-4efafaeedbd5",
          "snapshotUrls": [
            "https://i.gkd.li/i/14722559",
            "https://i.gkd.li/i/15286334"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.android.thememanager.ThemeResourceTabActivity",
            "com.android.thememanager.ThemeResourceProxyTabActivity"
          ],
          "matches": "[vid=\"close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/41ff6d56-e583-4e6e-9fb3-4efafaeedbd5",
          "snapshotUrls": [
            "https://i.gkd.li/i/14722559",
            "https://i.gkd.li/i/15286334"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "分段广告-主题页广告",
      "desc": "该广告的第二段需开启[智能服务]的对应规则才能关闭",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".ThemeResourceProxyTabActivity",
            ".module.detail.view.ThemeDetailActivity"
          ],
          "matches": "[vid=\"ad_close_btn\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17143445",
            "https://i.gkd.li/i/17143447"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "局部广告-主题详情底部广告",
      "desc": "注意如果使用 ADB 禁用了 MIUI 广告组件，点击此按钮会无反应，可关闭此规则，避免过多相同点击记录",
      "enable": false,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13227330",
      "rules": [
        {
          "matches": "[id=\"com.android.thememanager:id/ad_close_btn\"][visibleToUser=true]",
          "fastQuery": true
        }
      ]
    }
  ]
});

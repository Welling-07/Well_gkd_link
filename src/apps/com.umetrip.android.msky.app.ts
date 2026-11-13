// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.umetrip.android.msky.app",
  "name": "航旅纵横",
  "groups": [
    {
      "key": 0,
      "name": "其他-进入飞行模式-提示弹窗",
      "fastQuery": true,
      "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/12750185",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
          "matches": "[vid=\"imageView\"] + [vid=\"iv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12750185"
        },
        {
          "matches": "[id=\"com.umetrip.android.msky.app:id/imageView\"] + [id=\"com.umetrip.android.msky.app:id/iv_cancel\"]",
          "fastQuery": true,
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-首页右侧悬浮广告",
      "fastQuery": true,
      "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
      "snapshotUrls": "https://i.gkd.li/i/12783264",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
          "matches": "@[vid=\"iv_close_envelope\"] + [vid=\"media_view_envelope\"]",
          "snapshotUrls": "https://i.gkd.li/i/12783264"
        },
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_close_envelope\"] + [id=\"com.umetrip.android.msky.app:id/media_view_envelope\"]",
          "fastQuery": true,
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true][width=height] < FrameLayout <2 FrameLayout <3 FrameLayout < [vid=\"operation_dialog_weex_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/24706615"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.ume.lib_weex.view.WeexActivity",
      "snapshotUrls": "https://i.gkd.li/i/12909632",
      "rules": [
        {
          "matches": "View[desc=\"立即预订\"] <n FrameLayout <n FrameLayout <n FrameLayout <n ViewPager <n FrameLayout + FrameLayout > ImageView[id=null]",
          "fastQuery": true,
          "activityIds": "com.ume.lib_weex.view.WeexActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/12838294",
        "https://i.gkd.li/i/12838293"
      ],
      "rules": [
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_cancel\"] - * > [id=\"com.umetrip.android.msky.app:id/btn_upgrade\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 5,
      "name": "未分类-首页-升级提示",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.miui.home.launcher.Launcher",
        "com.umetrip.android.msky.homepage.activity.UmeHomeActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12838294",
        "https://i.gkd.li/i/12838293"
      ],
      "rules": [
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_cancel\"] - * > [id=\"com.umetrip.android.msky.app:id/btn_upgrade\"]",
          "fastQuery": true,
          "activityIds": [
            "com.miui.home.launcher.Launcher",
            "com.umetrip.android.msky.homepage.activity.UmeHomeActivity"
          ]
        }
      ]
    }
  ]
});

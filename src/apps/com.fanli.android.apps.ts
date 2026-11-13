// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fanli.android.apps",
  "name": "返利",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "activityIds": "com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity",
      "snapshotUrls": "https://i.gkd.li/i/13245808",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity",
          "matches": "@View[clickable=true][width<158 && height<158] <n View[childCount=4] < View < WebView < * < [vid=\"webviewContainer\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13245808",
            "https://i.gkd.li/i/33924810"
          ],
          "exampleUrls": "https://e.gkd.li/47c6d3bf-7cff-4462-9288-1be6d2368f99",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"J_poplayer_box\"] >n @View + [text=\"main_bkg\"]",
          "activityIds": "com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知",
      "fastQuery": true,
      "activityIds": "com.fanli.android.module.main.activity.PanoMainActivity",
      "rules": [
        {
          "matches": "ImageView[vid=null][width<68 && height<68] < @FrameLayout[childCount=1] < * - RelativeLayout > [text=\"开启提醒\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/33924577",
          "exampleUrls": "https://e.gkd.li/061779d2-fb8c-43a1-80ac-11e36deaab83",
          "fastQuery": true,
          "activityIds": "com.fanli.android.module.main.activity.PanoMainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-小悬浮窗",
      "desc": "x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.fanli.android.module.main.activity.PanoMainActivity",
          "matches": "@ImageView[width<76 && width<76][visibleToUser=true] <n [childCount>1] < * < * < [vid=\"float_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/33924577"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-应用内弹窗",
      "enable": false,
      "activityIds": "com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity",
      "snapshotUrls": "https://i.gkd.li/i/13245808",
      "rules": [
        {
          "matches": "[id=\"J_poplayer_box\"] >n @View + [text=\"main_bkg\"]",
          "activityIds": "com.fanli.android.module.webview.ui.activity.TransparentBrowserInnerActivity"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.kuaiduizuoye.scan",
  "name": "快对",
  "groups": [
    {
      "key": 0,
      "name": "分段广告",
      "desc": "①点击[关闭] ②点击[知道了]",
      "fastQuery": true,
      "activityIds": [
        ".activity.manyquestionsearch.activity.PicManySearchActivity",
        ".picturesearch.pages.whole.PicManySearchNewV3Activity"
      ],
      "rules": [
        {
          "name": "①点击[关闭]",
          "matches": "[width>700][height<300] >3 [text=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/33854308",
            "https://i.gkd.li/i/34192315"
          ],
          "exampleUrls": "https://e.gkd.li/e81f7bbd-a5ce-4b57-b09a-185bd9529c9d",
          "fastQuery": true,
          "activityIds": [
            ".activity.manyquestionsearch.activity.PicManySearchActivity",
            ".picturesearch.pages.whole.PicManySearchNewV3Activity"
          ]
        },
        {
          "preKeys": 0,
          "name": "②点击[知道了]",
          "matches": "[text=\"知道了\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/34192316",
          "exampleUrls": "https://e.gkd.li/fc3499a7-a8a7-4b7d-9f47-71814bf7e811",
          "fastQuery": true,
          "activityIds": [
            ".activity.manyquestionsearch.activity.PicManySearchActivity",
            ".picturesearch.pages.whole.PicManySearchNewV3Activity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15746254",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "action": "clickCenter",
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": "https://i.gkd.li/i/15741399",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-首页弹窗广告",
      "enable": false,
      "activityIds": "com.hihonor.android.launcher.drawer.DrawerLauncher",
      "snapshotUrls": "https://i.gkd.li/i/12716285",
      "rules": [
        {
          "matches": "[id=\"com.kuaiduizuoye.scan:id/iv_advertisement_widget_close\"]",
          "activityIds": "com.hihonor.android.launcher.drawer.DrawerLauncher"
        }
      ]
    }
  ]
});

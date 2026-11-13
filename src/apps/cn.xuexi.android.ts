// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.xuexi.android",
  "name": "学习强国",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12715139",
      "rules": [
        {
          "activityIds": "com.alibaba.android.rimet.biz.SplashActivity",
          "matches": "@[text=\"取消\"] + [text=\"立即升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715139",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"取消\"] + [text=\"立即升级\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12715160",
      "rules": [
        {
          "activityIds": "com.alibaba.android.rimet.biz.SplashActivity",
          "matches": "[text^=\"开启消息通知\"] +2 [vid=\"layout_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715160",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"开启消息通知\"] +2 [id=\"cn.xuexi.android:id/layout_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-请求开启通知权限提示信息",
      "desc": "自动点击x按钮",
      "enable": false,
      "activityIds": "com.alibaba.android.rimet.biz.SplashActivity",
      "snapshotUrls": "https://i.gkd.li/i/12715160",
      "rules": [
        {
          "matches": "[text^=\"开启消息通知\"] +2 [id=\"cn.xuexi.android:id/layout_close\"]",
          "activityIds": "com.alibaba.android.rimet.biz.SplashActivity"
        }
      ]
    }
  ]
});

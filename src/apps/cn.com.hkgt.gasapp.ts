// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.hkgt.gasapp",
  "name": "易捷加油",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": "cn.com.hkgt.gasapp.dialog.BannerDialog",
      "snapshotUrls": "https://i.gkd.li/i/12744270",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".dialog.BannerDialog",
          "matches": "ImageView[vid=\"exit\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12744270",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[id=\"cn.com.hkgt.gasapp:id/exit\"][clickable=true]",
          "activityIds": "cn.com.hkgt.gasapp.dialog.BannerDialog",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-定位权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.main.HkMainActivity",
          "matches": "@[vid=\"close_open\"] -2 [text*=\"开启定位\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/82022058-fadc-43de-baca-d254249b6c51",
          "snapshotUrls": "https://i.gkd.li/i/20961130",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-广告弹窗",
      "enable": false,
      "activityIds": "cn.com.hkgt.gasapp.dialog.BannerDialog",
      "snapshotUrls": "https://i.gkd.li/i/12744270",
      "rules": [
        {
          "matches": "ImageView[id=\"cn.com.hkgt.gasapp:id/exit\"][clickable=true]",
          "activityIds": "cn.com.hkgt.gasapp.dialog.BannerDialog"
        }
      ]
    }
  ]
});

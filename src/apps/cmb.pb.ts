// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cmb.pb",
  "name": "招商银行",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-首页活动悬浮广告",
      "fastQuery": true,
      "activityIds": "cmb.pb.app.mainframe.container.PBMainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14208669",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.mainframe.container.PBMainActivity",
          "matches": "[vid=\"float_window\"] > [vid=\"ivCancle\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14208669",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"float_window\"] > [vid=\"ivCancle\"][clickable=true]",
          "fastQuery": true,
          "activityIds": "cmb.pb.app.mainframe.container.PBMainActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": ".app.h5container.webviewcontainer.PBWebContainerActivity",
          "matches": "[id=\"cover-img\"] + [text=\"关闭推荐\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706022"
        },
        {
          "fastQuery": true,
          "activityIds": "com.pb.marketing.PopupWindowActivity",
          "matches": "[desc^=\"活动图片\"] + [vid=\"ivCancle\"][desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/14208693"
        },
        {
          "activityIds": "cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity",
          "matches": "[id=\"cover-img\"] + [text=\"关闭推荐\"]",
          "snapshotUrls": "https://i.gkd.li/i/12706022"
        },
        {
          "activityIds": "com.pb.marketing.PopupWindowActivity",
          "matches": "[desc^=\"活动图片\"] + [desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/14208693"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12706029",
        "https://i.gkd.li/i/13248893",
        "https://i.gkd.li/i/13897345",
        "https://i.gkd.li/i/14208717"
      ],
      "rules": [
        {
          "activityIds": [
            ".app.h5container.webviewcontainer.PBWebContainerActivity",
            ".app.search.PBSearchWebActivity",
            "com.pb.marketing.PopupWindowActivity"
          ],
          "matches": "@[desc=\"关闭\"] - * > [text*=\"开启\"][text*=\"定位\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13248893",
            "https://i.gkd.li/i/13897345",
            "https://i.gkd.li/i/14208717"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[desc=\"关闭\"] - * > [text*=\"开启\"][text*=\"定位\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

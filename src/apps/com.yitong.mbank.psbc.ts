// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yitong.mbank.psbc",
  "name": "邮储银行",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".module.home.view.activity.MainActivity",
            ".module.app.view.customview.dialog.DialogUpdateApk"
          ],
          "matches": "Button[vid=\"bt_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12685350",
            "https://i.gkd.li/i/13695462"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "Button[id=\"com.yitong.mbank.psbc:id/bt_cancel\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12685350",
            "https://i.gkd.li/i/13695462"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "com.yitong.mbank.psbc.module.home.view.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12755516",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".module.home.view.activity.MainActivity",
          "matches": "[vid=\"iv_theme\"] + [vid=\"iv_theme_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755516",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.yitong.mbank.psbc:id/iv_theme\"] + [id=\"com.yitong.mbank.psbc:id/iv_theme_close_btn\"]",
          "activityIds": "com.yitong.mbank.psbc.module.home.view.activity.MainActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-首页-浮窗广告",
      "activityIds": "com.yitong.mbank.psbc.module.home.view.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13797314",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".module.home.view.activity.MainActivity",
          "matches": "[vid=\"img_close_float_window\"]",
          "snapshotUrls": "https://i.gkd.li/i/13797314"
        },
        {
          "matches": "[id=\"com.yitong.mbank.psbc:id/img_close_float_window\"]",
          "activityIds": "com.yitong.mbank.psbc.module.home.view.activity.MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "其他-无视网络代理风险[继续]使用",
      "desc": "点击[知晓风险, 继续使用]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".module.home.view.activity.MainActivity",
          "matches": "[text*=\"正在使用网络代理\"] +n [text$=\"继续使用\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/27544847"
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "activityIds": "com.yitong.mbank.psbc.module.home.view.activity.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12755516",
      "rules": [
        {
          "matches": "[id=\"com.yitong.mbank.psbc:id/iv_theme\"] + [id=\"com.yitong.mbank.psbc:id/iv_theme_close_btn\"]",
          "activityIds": "com.yitong.mbank.psbc.module.home.view.activity.MainActivity"
        }
      ]
    }
  ]
});

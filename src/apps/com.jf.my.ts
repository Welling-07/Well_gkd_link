// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jf.my",
  "name": "蜜源",
  "groups": [
    {
      "key": 0,
      "name": "更新提示-版本升级弹窗",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.lbe.security.ui.CountdownDialogActivity",
        "com.jf.my.MainActivity"
      ],
      "actionMaximumKey": 0,
      "rules": [
        {
          "activityIds": [
            ".MainActivity",
            "com.lbe.security.ui.CountdownDialogActivity"
          ],
          "matches": "[vid=\"btn_ok\"][text=\"更新\"] - [vid=\"btn_cancel\"][text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12838034",
            "https://i.gkd.li/i/12840591"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"toUpgradeTv\"] - [vid=\"cancelTv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13786867",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "activityIds": [
            "com.lbe.security.ui.CountdownDialogActivity",
            "com.jf.my.MainActivity"
          ]
        },
        {
          "matches": "[id=\"com.jf.my:id/btn_ok\"][text=\"更新\"] - [id=\"com.jf.my:id/btn_cancel\"][text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12838034",
            "https://i.gkd.li/i/12840591"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "activityIds": [
            "com.lbe.security.ui.CountdownDialogActivity",
            "com.jf.my.MainActivity"
          ]
        },
        {
          "matches": "[id=\"com.jf.my:id/toUpgradeTv\"] - [id=\"com.jf.my:id/cancelTv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13786867",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "activityIds": [
            "com.lbe.security.ui.CountdownDialogActivity",
            "com.jf.my.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "com.jf.my.main.ui.dialog.HomeRedPackageDialog",
      "snapshotUrls": "https://i.gkd.li/i/12840619",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".main.ui.dialog.HomeRedPackageDialog",
          "matches": "[vid=\"iv_back\"]",
          "snapshotUrls": "https://i.gkd.li/i/12840619",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.jf.my:id/iv_back\"]",
          "activityIds": "com.jf.my.main.ui.dialog.HomeRedPackageDialog",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-首页-广告弹窗",
      "enable": false,
      "activityIds": "com.jf.my.main.ui.dialog.HomeRedPackageDialog",
      "snapshotUrls": "https://i.gkd.li/i/12840619",
      "rules": [
        {
          "matches": "[id=\"com.jf.my:id/iv_back\"]",
          "activityIds": "com.jf.my.main.ui.dialog.HomeRedPackageDialog"
        }
      ]
    }
  ]
});

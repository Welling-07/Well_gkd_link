// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cmbchina.ccd.pluto.cmbActivity",
  "name": "掌上生活",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12647025",
        "https://i.gkd.li/i/12727203",
        "https://i.gkd.li/i/13345771"
      ],
      "rules": [
        {
          "activityIds": [
            ".CMBRootActivityV2",
            ".secplugin.activity.login.fingerprint.cmbR6VH0R"
          ],
          "matches": "[text=\"暂不更新\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647025",
            "https://i.gkd.li/i/12727203",
            "https://i.gkd.li/i/13345771"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/bt_sure_tips\"] - [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/bt_cancel_tips\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-首页弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        ".CMBRootActivityV2"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12647000",
        "https://i.gkd.li/i/13360282"
      ],
      "rules": [
        {
          "matches": "[vid=\"lly_pop_shell\"] > [vid=\"img_cf_view_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".CMBRootActivityV2"
          ]
        },
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/lly_pop_shell\"] > [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_cf_view_close\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右侧悬浮广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "rules": [
        {
          "name": "信用卡、我的页面",
          "activityIds": [
            ".CMBRootActivityV2",
            ".secondNav"
          ],
          "matches": "[vid=\"img_floating_ad_cmb\"] - [vid=\"img_close_floating_ad_cmb\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647039",
            "https://i.gkd.li/i/12647052"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app"
        },
        {
          "name": "查账页面",
          "activityIds": [
            ".CMBRootActivityV2",
            ".repaymentBillv3.billRepay",
            ".repaymentBillv3.billDetail.view"
          ],
          "matches": "@[vid=\"img_cmb_drag_pendant_close\"] + [vid=\"img_cmb_drag_pendant_bg\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647127",
            "https://i.gkd.li/i/14209121"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app"
        },
        {
          "name": "发现页",
          "activityIds": ".CMBRootActivityV2",
          "matches": "[vid=\"view_cat\"] + [vid=\"view_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402782",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app"
        },
        {
          "name": "信用卡、我的页面 (2)",
          "activityIds": [
            "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2",
            "com.cmbchina.ccd.pluto.cmbActivity.secondNav"
          ],
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_floating_ad_cmb\"] - [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/img_close_floating_ad_cmb\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647039",
            "https://i.gkd.li/i/12647052"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app"
        },
        {
          "name": "查账页面 (2)",
          "activityIds": [
            "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2",
            "com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billRepay",
            "com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billDetail.view"
          ],
          "matches": "@[vid=\"img_cmb_drag_pendant_close\"] + [vid=\"img_cmb_drag_pendant_bg\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647127",
            "https://i.gkd.li/i/14209121"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app"
        },
        {
          "name": "发现页 (2)",
          "activityIds": "com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2",
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/view_cat\"] + [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/view_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13402782",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 2,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "点击x按钮，不开启系统通知",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12647068"
      ],
      "rules": [
        {
          "matches": "[vid=\"btn_open_notify\"] + [vid=\"iv_delete\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/btn_open_notify\"] + [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/iv_delete\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/14209071",
      "rules": [
        {
          "matches": "[text=\"定位服务\"] +n * > [text=\"取消\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "通知提示-消息页面通知开关",
      "desc": "点击x按钮，不开启系统通知",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.cmbchina.ccd.pluto.cmbActivity.messagebox"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12647068"
      ],
      "rules": [
        {
          "matches": "[id=\"com.cmbchina.ccd.pluto.cmbActivity:id/btn_open_notify\"] + [id=\"com.cmbchina.ccd.pluto.cmbActivity:id/iv_delete\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.cmbchina.ccd.pluto.cmbActivity.messagebox"
          ]
        }
      ]
    }
  ]
});

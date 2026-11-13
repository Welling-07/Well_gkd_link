// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.BaiduMap",
  "name": "百度地图",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "actionMaximumKey": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/f03b3648-757a-48e3-bd3b-098f8293edbf",
          "snapshotUrls": "https://i.gkd.li/i/16556555",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"ms_skipView\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/cd89ffb7-6cd3-4978-b3d6-ef5ece2769d0",
          "snapshotUrls": "https://i.gkd.li/i/23742641",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/f03b3648-757a-48e3-bd3b-098f8293edbf",
          "snapshotUrls": "https://i.gkd.li/i/16556555",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "activityIds": [
        "com.baidu.mapframework.widget.BMBaseDialog",
        "com.baidu.baidumaps.MapsActivity"
      ],
      "rules": [
        {
          "matches": "[text^=\"开启位置服务\"] + RelativeLayout > [vid=\"tv_notip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660884",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.baidu.mapframework.widget.BMBaseDialog",
            "com.baidu.baidumaps.MapsActivity"
          ]
        },
        {
          "matches": "[text=\"需开启系统定位服务开关\"] +2 [vid=\"ll_dialog_btn\"] > [vid=\"tv_dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660883",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "activityIds": [
            "com.baidu.mapframework.widget.BMBaseDialog",
            "com.baidu.baidumaps.MapsActivity"
          ]
        },
        {
          "matches": "ImageView[vid=\"location_dialog_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/12909299",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "activityIds": [
            "com.baidu.mapframework.widget.BMBaseDialog",
            "com.baidu.baidumaps.MapsActivity"
          ]
        },
        {
          "matches": "[text^=\"开启位置服务\"] + RelativeLayout > [id=\"com.baidu.BaiduMap:id/tv_notip_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660884",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.baidu.mapframework.widget.BMBaseDialog",
            "com.baidu.baidumaps.MapsActivity"
          ],
          "actionMaximumKey": 0
        },
        {
          "matches": "[text=\"需开启系统定位服务开关\"] +2 [id=\"com.baidu.BaiduMap:id/ll_dialog_btn\"] > [id=\"com.baidu.BaiduMap:id/tv_dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/12660883",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 3,
          "activityIds": [
            "com.baidu.mapframework.widget.BMBaseDialog",
            "com.baidu.baidumaps.MapsActivity"
          ]
        },
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/location_dialog_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/12909299",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 3,
          "activityIds": [
            "com.baidu.mapframework.widget.BMBaseDialog",
            "com.baidu.baidumaps.MapsActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12909385",
      "rules": [
        {
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "ImageView[vid=\"cancel_update\"]",
          "snapshotUrls": "https://i.gkd.li/i/12909385",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/cancel_update\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/15284736",
      "rules": [
        {
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "[vid=\"push_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15284736",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"push_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-通勤卡添加至桌面",
      "desc": "点击取消",
      "fastQuery": true,
      "actionMaximum": 1,
      "rules": [
        {
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": [
            "[text=\"添加至桌面\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13439258",
            "https://i.gkd.li/i/16920986"
          ],
          "fastQuery": true,
          "actionMaximum": 1
        },
        {
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "TextView[id=\"com.baidu.BaiduMap:id/tv_dialog_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13439258",
          "fastQuery": true,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "[vid=\"img_close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/22616256"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "[vid=\"banner_ad_close_icon\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/22656085"
        },
        {
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "ImageView[childCount=0] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] + ViewGroup > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/22616267"
        },
        {
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity",
          "matches": "ImageView[vid=\"yellow_banner_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/24633179"
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-地图上方黄页横幅",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.baidu.baidumaps.MapsActivity",
        "com.android.packageinstaller.permission.ui.GrantPermissionsActivity",
        "com.lbe.security.ui.CountdownDialogActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12642301",
        "https://i.gkd.li/i/12801465",
        "https://i.gkd.li/i/12909281"
      ],
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/yellow_banner_close\"]",
          "fastQuery": true,
          "activityIds": [
            "com.baidu.baidumaps.MapsActivity",
            "com.android.packageinstaller.permission.ui.GrantPermissionsActivity",
            "com.lbe.security.ui.CountdownDialogActivity"
          ]
        }
      ]
    },
    {
      "key": 8,
      "name": "局部广告-打车界面右侧悬浮球",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.baidu.baidumaps.MapsActivity",
      "snapshotUrls": "https://i.gkd.li/i/12642307",
      "rules": [
        {
          "matches": "RelativeLayout[id=\"com.baidu.BaiduMap:id/rl_close_content\"]",
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity"
        }
      ]
    },
    {
      "key": 9,
      "name": "全屏广告-美食大礼包弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.baidu.baidumaps.MapsActivity",
      "snapshotUrls": "https://i.gkd.li/i/12642310",
      "rules": [
        {
          "matches": "[text=\"美食大礼包\"] +(6) TextView[id=null][clickable=true]",
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity"
        }
      ]
    },
    {
      "key": 10,
      "name": "全屏广告-酒店提前订弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.baidu.baidumaps.MapsActivity",
      "snapshotUrls": "https://i.gkd.li/i/12642319",
      "rules": [
        {
          "matches": "[id=\"lottie_box\"] + TextView[id=null][clickable=true]",
          "fastQuery": true,
          "activityIds": "com.baidu.baidumaps.MapsActivity"
        }
      ]
    },
    {
      "key": 11,
      "name": "全屏广告-打车界面弹窗广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": [
        "com.baidu.baidumaps.MapsActivity",
        "com.android.packageinstaller.permission.ui.GrantPermissionsActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12909300",
        "https://i.gkd.li/i/12930699"
      ],
      "rules": [
        {
          "matches": "ImageView[id=\"com.baidu.BaiduMap:id/operational_activities_content_close\"]",
          "fastQuery": true,
          "activityIds": [
            "com.baidu.baidumaps.MapsActivity",
            "com.android.packageinstaller.permission.ui.GrantPermissionsActivity"
          ]
        }
      ]
    }
  ]
});

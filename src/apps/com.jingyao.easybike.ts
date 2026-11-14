// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jingyao.easybike",
  "name": "哈啰",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "点击关闭",
      "order": -9,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.hellobike.atlas.business.portal.PortalActivity",
          "matches": "@ImageView + [vid=\"contentContainer\"] >2 [text*=\"新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/16108173",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-悬浮窗权限",
      "desc": "点击[下次再说]",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.hellobike.business.hitch.common.home.HLPHHomeActivity",
          "matches": [
            "[text*=\"悬浮窗\"]",
            "[vid=\"btnCancel\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/29299377",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "snapshotUrls": [
        "https://i.gkd.li/i/13228735",
        "https://i.gkd.li/i/13402675"
      ],
      "rules": [
        {
          "activityIds": [
            "com.yanzhenjie.permission.PermissionActivity",
            "com.hellobike.atlas.business.portal.PortalActivity"
          ],
          "matches": [
            "[text*=\"开启通知\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13228735",
            "https://i.gkd.li/i/13402675"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text*=\"开启通知\"] < FrameLayout + FrameLayout >2 [text=\"取消\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-定位权限",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.hellobike.atlas.business.portal.PortalActivity",
      "snapshotUrls": "https://i.gkd.li/i/13228677",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": "com.hellobike.atlas.business.portal.PortalActivity",
          "matches": [
            "[text=\"系统定位服务已关闭\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13228677",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"系统定位服务已关闭\"] < FrameLayout +n FrameLayout >2 [text=\"取消\"]",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.hellobike.atlas.business.portal.PortalActivity",
          "matchTime": 10000
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.hellobike.ads.widget.insert.dialog.HBAdvertDialog",
            "com.hellobike.atlas.business.portal.PortalActivity",
            "com.hellobike.hitch.business.homenew.HitchHomeActivity",
            "com.hellobike.business.hitch.common.home.HLPHHomeActivity"
          ],
          "matches": "[vid=\"actionDialogClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12650090",
            "https://i.gkd.li/i/16503613",
            "https://i.gkd.li/i/23407810",
            "https://i.gkd.li/i/29299383"
          ]
        },
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity",
          "matches": "[vid=\"lottie_view\"] < ViewGroup + [vid=\"btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12650163"
        },
        {
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "matches": "[text=\"订单完成\"] >(2) View[childCount=2] > Image[id=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12684673"
        },
        {
          "activityIds": "com.hellobike.atlas.business.portal.PortalActivity",
          "matches": "[desc=\"去使用\"] + Button[text=null][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12739316"
        },
        {
          "fastQuery": true,
          "activityIds": "com.hellobike.moped.platform.offline.web.OhoRealmWebActivity",
          "matches": "@Image[childCount=0][text!=null] - View[childCount=1] > Image[childCount=0][text!=null] <<n [vid=\"webContainer\"]",
          "exampleUrls": "https://e.gkd.li/c6364646-6d3c-4b2e-80b9-0b356d4cd8b7",
          "snapshotUrls": "https://i.gkd.li/i/23415363"
        },
        {
          "activityIds": [
            "com.hellobike.ads.widget.insert.dialog.HBAdvertDialog",
            "com.hellobike.atlas.business.portal.PortalActivity"
          ],
          "matches": "[vid=\"actionDialogClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12650090",
            "https://i.gkd.li/i/16503613"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity",
          "matches": "[id=\"com.jingyao.easybike:id/lottie_view\"] < ViewGroup + [id=\"com.jingyao.easybike:id/btn_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12650163"
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-关闭公众号提醒",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.hellobike.hitch.business.match.temp.HitchDriverTempMatchActivity",
          "matches": "[text*=\"公众号\"] - [vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/30827751",
          "exampleUrls": "https://e.gkd.li/84f6f033-7686-439a-b50e-87a2c8409ddf"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-右侧悬浮广告",
      "fastQuery": true,
      "activityIds": "com.hellobike.atlas.business.portal.PortalActivity",
      "snapshotUrls": "https://i.gkd.li/i/12650071",
      "rules": [
        {
          "matches": "@[vid=\"closeFloatArea\"] + [vid=\"floatADContainer\"]",
          "fastQuery": true,
          "activityIds": "com.hellobike.atlas.business.portal.PortalActivity"
        },
        {
          "matches": "@[id=\"com.jingyao.easybike:id/closeFloatArea\"] + [id=\"com.jingyao.easybike:id/floatADContainer\"]",
          "fastQuery": true,
          "activityIds": "com.hellobike.atlas.business.portal.PortalActivity"
        }
      ]
    },
    {
      "key": 7,
      "name": "其他-新人教学弹窗",
      "desc": "点击跳过",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.alipay.mobile.nebulacore.ui.H5Activity",
          "matches": "@View[text=\"跳过\"] <2 View <2 View <<n FrameLayout[vid=\"h5_pc_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13837543",
          "fastQuery": true
        }
      ]
    }
  ]
});

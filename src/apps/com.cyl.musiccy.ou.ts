// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cyl.musiccy.ou",
  "name": "OMOFUN",
  "groups": [
    {
      "key": 0,
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
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775918",
            "https://i.gkd.li/i/12775926",
            "https://i.gkd.li/i/13063151",
            "https://i.gkd.li/i/13063246",
            "https://i.gkd.li/i/13071599"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[vid=\"ksad_splash_root_container\"] [childCount=3] > @ImageView[clickable=true] - [text=\"|\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775919",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "matches": "[id=\"com.cyl.musiccy.ou:id/ksad_splash_root_container\"] [childCount=3] > @ImageView[clickable=true] - [text=\"|\"]",
          "snapshotUrls": "https://i.gkd.li/i/12775919",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "通知提示-公告弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13063206",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13063206",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-弹窗广告",
      "actionDelay": 300,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".MainActivity",
            "com.ksf.yyx.MainActivity"
          ],
          "name": "快手广告-1",
          "matches": "[id$=\"ksad_container\"] >n @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775922",
            "https://i.gkd.li/i/13063222"
          ],
          "actionDelay": 300
        },
        {
          "name": "快手广告-2",
          "fastQuery": true,
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            ".MainActivity"
          ],
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775923",
            "https://i.gkd.li/i/13800051"
          ],
          "actionDelay": 300
        },
        {
          "name": "Sigmob广告",
          "activityIds": [
            ".MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ],
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775925",
            "https://i.gkd.li/i/12775924",
            "https://i.gkd.li/i/13759345"
          ],
          "actionDelay": 300
        },
        {
          "name": "腾讯广告-1",
          "fastQuery": true,
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.android.internal.app.ResolverActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775921",
            "https://i.gkd.li/i/12776903",
            "https://i.gkd.li/i/12789928",
            "https://i.gkd.li/i/13215476",
            "https://i.gkd.li/i/13071595",
            "https://i.gkd.li/i/13063249"
          ],
          "actionDelay": 300
        },
        {
          "name": "腾讯广告-2",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/13422363",
          "actionDelay": 300
        },
        {
          "activityIds": [
            "com.cyl.musiccy.ou.MainActivity",
            "com.ksf.yyx.MainActivity"
          ],
          "name": "快手广告-1 (2)",
          "matches": "[id$=\"ksad_container\"] >n @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775922",
            "https://i.gkd.li/i/13063222"
          ],
          "actionDelay": 300
        },
        {
          "name": "快手广告-2 (2)",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.cyl.musiccy.ou.MainActivity"
          ],
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup > @ViewGroup[clickable=true] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775923",
            "https://i.gkd.li/i/13800051"
          ],
          "actionDelay": 300
        },
        {
          "name": "Sigmob广告 (2)",
          "activityIds": [
            "com.cyl.musiccy.ou.MainActivity",
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ],
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13759345",
            "https://i.gkd.li/i/12775925",
            "https://i.gkd.li/i/12775924"
          ],
          "actionDelay": 300
        },
        {
          "name": "腾讯广告-1 (2)",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.android.internal.app.ResolverActivity"
          ],
          "matches": "ImageView <n FrameLayout > FrameLayout[index=1] > FrameLayout[index=2] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775921",
            "https://i.gkd.li/i/12776903",
            "https://i.gkd.li/i/12789928",
            "https://i.gkd.li/i/13215476",
            "https://i.gkd.li/i/13071595"
          ],
          "actionDelay": 300
        },
        {
          "name": "腾讯广告-2 (2)",
          "activityIds": "com.cyl.musiccy.ou.MainActivity",
          "matches": "ImageView <n FrameLayout - FrameLayout > FrameLayout[index=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13063249",
          "actionDelay": 300
        },
        {
          "name": "腾讯广告-3",
          "activityIds": "com.cyl.musiccy.ou.MainActivity",
          "matches": "ImageView <n FrameLayout > FrameLayout[index=0] > FrameLayout FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13422363",
          "actionDelay": 300
        },
        {
          "name": "腾讯SDK",
          "activityIds": [
            "com.ksf.yyx.MainActivity",
            "com.android.internal.app.ResolverActivity",
            "com.cyl.musiccy.ou.MainActivity"
          ],
          "matches": "FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12775921",
            "https://i.gkd.li/i/12776903",
            "https://i.gkd.li/i/12789928",
            "https://i.gkd.li/i/13215476",
            "https://i.gkd.li/i/13071595",
            "https://i.gkd.li/i/13063249",
            "https://i.gkd.li/i/13422363",
            "https://i.gkd.li/i/13936028"
          ],
          "actionDelay": 300
        }
      ]
    },
    {
      "key": 3,
      "name": "通知提示-首页通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.cyl.musiccy.ou.MainActivity"
      ],
      "rules": [
        {
          "matches": "[desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13063206",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.cyl.musiccy.ou.MainActivity"
          ]
        }
      ]
    }
  ]
});

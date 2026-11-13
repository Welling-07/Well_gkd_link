// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.viva.note",
  "name": "囧次元",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "[desc=\"不再显示\"]",
          "snapshotUrls": "https://i.gkd.li/i/12888361",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "View[desc^=\"APP最新版本\"] > Button[desc=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888361",
            "https://i.gkd.li/i/12888389"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "activityIds": [
        "com.sigmob.sdk.base.common.TransparentAdActivity",
        "com.baidu.mobads.sdk.api.MobRewardVideoActivity"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.sigmob.sdk.base.common.TransparentAdActivity",
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888388",
            "https://i.gkd.li/i/12888419",
            "https://i.gkd.li/i/12888578",
            "https://i.gkd.li/i/12888647"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "matches": "TextView[text=\"反馈\"] + @ImageView[clickable=true] + TextView",
          "snapshotUrls": "https://i.gkd.li/i/12888945",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text$=\"第三方应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\" || text=\"下载应用\" || text=\"打开快应用\"]",
          "snapshotUrls": "https://i.gkd.li/i/13213661",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity"
          ]
        },
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888388",
            "https://i.gkd.li/i/12888419",
            "https://i.gkd.li/i/12888578",
            "https://i.gkd.li/i/12888647"
          ],
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "TextView[text=\"反馈\"] + @ImageView[clickable=true] + TextView",
          "snapshotUrls": "https://i.gkd.li/i/12888945",
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text=\"查看详情\"]",
            "ImageView < FrameLayout[childCount=1]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13213661",
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-应用内通知",
      "enable": false,
      "activityIds": [
        "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
        "com.maoyun.guoguo.MainActivity"
      ],
      "rules": [
        {
          "matches": "View[desc^=\"APP最新版本\"] > Button[desc=\"关闭\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888361",
            "https://i.gkd.li/i/12888389"
          ],
          "activityIds": [
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
            "com.maoyun.guoguo.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-应用内弹窗",
      "enable": false,
      "activityIds": [
        "com.sigmob.sdk.base.common.TransparentAdActivity",
        "com.baidu.mobads.sdk.api.MobRewardVideoActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"ad_area\"] [id=\"close_btn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888388",
            "https://i.gkd.li/i/12888419",
            "https://i.gkd.li/i/12888578",
            "https://i.gkd.li/i/12888647"
          ],
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity"
          ]
        },
        {
          "matches": "TextView[text=\"反馈\"] + @ImageView[clickable=true] + TextView",
          "snapshotUrls": "https://i.gkd.li/i/12888945",
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity"
          ]
        },
        {
          "matches": [
            "[text=\"查看详情\"]",
            "ImageView < FrameLayout[childCount=1]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13213661",
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity",
            "com.baidu.mobads.sdk.api.MobRewardVideoActivity"
          ]
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.feicui.vdhelper",
  "name": "翡翠视频",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "com.ys.resemble.ui.MainActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700749",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ys.resemble.ui.MainActivity"
        },
        {
          "matches": [
            "ImageView + [id=null][text=\"广告\"]",
            "ImageView + [id=null][text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12700759",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ys.resemble.ui.MainActivity"
        },
        {
          "fastQuery": true,
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12700800",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.ys.resemble.ui.MainActivity"
        },
        {
          "activityIds": "com.sigmob.sdk.base.common.TransparentAdActivity",
          "matches": "[id=\"close_btn\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700837",
            "https://i.gkd.li/i/12700848"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView - FrameLayout >(2) ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700749"
          ],
          "activityIds": [
            "com.ys.resemble.ui.MainActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "ImageView + [id=null][text=\"广告\"]",
            "ImageView + [id=null][text=\"跳过\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12700759"
          ],
          "activityIds": [
            "com.ys.resemble.ui.MainActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"广告\"] - ImageView < ViewGroup -(2) ViewGroup >(2) ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700800"
          ],
          "activityIds": [
            "com.ys.resemble.ui.MainActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ],
          "matches": "[id=\"close_btn\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700837",
            "https://i.gkd.li/i/12700848"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "activityIds": [
        "com.ys.resemble.ui.MainActivity"
      ],
      "rules": [
        {
          "matches": "ImageView - FrameLayout >(2) ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700749"
          ],
          "activityIds": [
            "com.ys.resemble.ui.MainActivity"
          ]
        },
        {
          "matches": [
            "ImageView + [id=null][text=\"广告\"]",
            "ImageView + [id=null][text=\"跳过\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12700759"
          ],
          "activityIds": [
            "com.ys.resemble.ui.MainActivity"
          ]
        },
        {
          "matches": "[text=\"广告\"] - ImageView < ViewGroup -(2) ViewGroup >(2) ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700800"
          ],
          "activityIds": [
            "com.ys.resemble.ui.MainActivity"
          ]
        },
        {
          "activityIds": [
            "com.sigmob.sdk.base.common.TransparentAdActivity"
          ],
          "matches": "[id=\"close_btn\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12700837",
            "https://i.gkd.li/i/12700848"
          ]
        }
      ]
    }
  ]
});

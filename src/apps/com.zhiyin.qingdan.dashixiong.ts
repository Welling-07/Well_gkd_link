// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.zhiyin.qingdan.dashixiong",
  "name": "大师兄影视",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "name": "快手广告-1",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12843281"
        },
        {
          "name": "快手广告-2",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@ImageView[clickable=true] <3 * -2 * >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13521143"
        },
        {
          "fastQuery": true,
          "name": "快手广告-3",
          "activityIds": ".MainActivity",
          "matches": [
            "[text=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13521140"
        },
        {
          "name": "腾讯广告-1",
          "fastQuery": true,
          "activityIds": [
            ".MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12843282",
            "https://i.gkd.li/i/12843345",
            "https://i.gkd.li/i/12843333",
            "https://i.gkd.li/i/13400656"
          ]
        },
        {
          "name": "字节广告",
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@Image < View +n View > View > View > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12843323"
        },
        {
          "activityIds": "com.sigmob.sdk.base.common.TransparentAdActivity",
          "matches": "[id=\"close_btn\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13887500"
        },
        {
          "name": "快手广告-1 (2)",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "fastQuery": true,
          "matches": "@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12843281"
        },
        {
          "name": "快手广告-2 (2)",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "matches": "@ImageView[clickable=true] <3 * -2 * >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13521143"
        },
        {
          "name": "快手广告-3 (2)",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "matches": [
            "[text=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13521140"
        },
        {
          "name": "腾讯广告-1 (2)",
          "activityIds": [
            "com.zhiyin.qingdan.dashixiong.MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView",
          "snapshotUrls": [
            "https://i.gkd.li/i/12843282",
            "https://i.gkd.li/i/12843345",
            "https://i.gkd.li/i/12843333",
            "https://i.gkd.li/i/13400656"
          ]
        },
        {
          "name": "字节广告 (2)",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "fastQuery": true,
          "matches": "@Image < View +n View > View > View > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12843323"
        }
      ]
    },
    {
      "key": 1,
      "name": "通知提示-公告弹窗",
      "desc": "点击[我知道了]",
      "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/12843280",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[desc^=\"必读通告\"] +n [desc=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/12843280",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[desc^=\"必读通告\"] +n [desc=\"我知道了\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "WebView[text=\"快手\"] >3 View[childCount=5] >2 @TextView[clickable=true][text=\"\"] <<n [vid=\"ksad_container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/122d8544-ccdd-42df-8618-f98f4433ee50",
          "snapshotUrls": "https://i.gkd.li/i/15371800"
        },
        {
          "fastQuery": true,
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "matches": "WebView[text=\"快手\"] >3 View[childCount=5] >2 @TextView[clickable=true][text=\"\"] <<n [vid=\"ksad_container\"]",
          "exampleUrls": "https://m.gkd.li/57941037/122d8544-ccdd-42df-8618-f98f4433ee50",
          "snapshotUrls": "https://i.gkd.li/i/15371800"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告",
      "enable": false,
      "rules": [
        {
          "name": "快手广告-2",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "matches": [
            "ViewGroup[childCount=2] > ImageView + [text=\"广告\"]",
            "ViewGroup[childCount=1] > @ViewGroup[childCount=1][clickable=true] > ImageView"
          ],
          "snapshotUrls": "https://i.gkd.li/i/13521143"
        },
        {
          "name": "快手广告-3",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "matches": "[text=\"广告\"] <2 ViewGroup -3 ViewGroup >2 [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13521140"
        },
        {
          "name": "腾讯广告-1",
          "activityIds": "com.zhiyin.qingdan.dashixiong.MainActivity",
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/12843282"
        },
        {
          "name": "腾讯广告-2",
          "activityIds": [
            "com.zhiyin.qingdan.dashixiong.MainActivity",
            "com.qq.e.ads.ADActivity"
          ],
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12843345",
            "https://i.gkd.li/i/12843333",
            "https://i.gkd.li/i/13400656"
          ]
        }
      ]
    }
  ]
});

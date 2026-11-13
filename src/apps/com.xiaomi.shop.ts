// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.shop",
  "name": "小米商城",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "activityIds": [
        "com.xiaomi.shop2.activity.MainActivity",
        "com.xiaomi.shop.plugin.homepage.utils.AdDialog"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12649330",
        "https://i.gkd.li/i/14393039"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.xiaomi.shop2.activity.MainActivity",
            ".plugin.homepage.utils.AdDialog"
          ],
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 LinearLayout[childCount=2] < RelativeLayout < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12649330",
            "https://i.gkd.li/i/14393039"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": "com.xiaomi.shop2.activity.MainActivity",
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 FrameLayout[childCount=2] < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/22550140",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": [
            "com.xiaomi.shop2.activity.MainActivity",
            "com.xiaomi.shop.plugin.homepage.utils.AdDialog"
          ],
          "matches": "[id=\"android:id/content\"] > RelativeLayout > LinearLayout[childCount=2] > ImageView[index=1][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12649330",
            "https://i.gkd.li/i/14393039"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-悬浮广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.xiaomi.shop2.activity.MainActivity",
          "matches": "[id=\"com.xiaomi.shop.plugin.homepage:id/home_bottom_float_close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/15528092",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "position": {
            "left": "width * 0.3509",
            "top": "width * 1.4046"
          },
          "activityIds": ".lib.ForceUpdateActivity",
          "matches": "@LinearLayout[childCount=0] < [id=\"android:id/content\"][childCount=1] < [vid=\"action_bar_root\"]",
          "snapshotUrls": "https://i.gkd.li/i/19547338",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 3,
      "name": "评价提示-客服",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.xiaomi.miot.store.mirn.RNMainActivity",
          "matches": "ImageView < @ViewGroup[clickable=true] - [text^=\"请对\"][text$=\"进行评价\"]",
          "snapshotUrls": "https://i.gkd.li/i/23206873"
        }
      ]
    }
  ]
});

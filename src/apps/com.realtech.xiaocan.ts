// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.realtech.xiaocan",
  "name": "小蚕霸王餐",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "actionCd": 300,
      "activityIds": ".MainActivity",
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"box_custom\"] >2 [vid=\"ivClose\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/31689742",
            "https://i.gkd.li/i/31689746"
          ],
          "actionCd": 300,
          "activityIds": ".MainActivity"
        },
        {
          "matches": "View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/13694864",
          "actionCd": 300,
          "activityIds": ".MainActivity"
        },
        {
          "activityIds": "com.realtech.xiaocan.MainActivity",
          "matches": "View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/13694864",
          "actionCd": 300
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-签到成功弹窗",
      "desc": "点击[关闭]按钮",
      "activityIds": "com.realtech.xiaocan.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14290847",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[id=\"android:id/content\"] >5 View[childCount=6] > ImageView[index=5][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14290847",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"android:id/content\"] >5 View[childCount=6] > ImageView[index=5][clickable=true]",
          "activityIds": "com.realtech.xiaocan.MainActivity",
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "View[childCount=6][desc!=\"\"] > View[index=4] + ImageView[index=5][clickable=true]",
          "activityIds": "com.realtech.xiaocan.MainActivity",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-定位权限",
      "desc": "底部横幅/全屏, 点击x掉",
      "fastQuery": true,
      "activityIds": ".MainActivity",
      "rules": [
        {
          "name": "横幅",
          "matches": "[vid=\"location_layout\"] > [vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/31689754",
          "exampleUrls": "https://e.gkd.li/6dd4b544-85b4-455d-9f27-0b83a95305de",
          "fastQuery": true,
          "activityIds": ".MainActivity"
        },
        {
          "name": "全屏弹窗",
          "matches": "[vid=\"tvTitle\"] + [vid=\"tvMessage\"][text^=\"APP需要您的同意\"][text*=\"访问您的位置\"] + [childCount=2] > [vid=\"tvNegative\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/33924001",
          "exampleUrls": "https://e.gkd.li/a068a642-d226-43f5-8eb7-43e6351e0d24",
          "fastQuery": true,
          "activityIds": ".MainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "其他-点击1次[只看可抢]",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".MainActivity",
          "matches": "@[vid=\"switchBtn\"] - [text=\"只看可抢\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/31689754",
          "exampleUrls": "https://e.gkd.li/d856c10c-b772-423a-a740-73be7cc7e091"
        }
      ]
    },
    {
      "key": 4,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 1,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text^=\"跳过\"][text.length<=10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12843368",
            "https://i.gkd.li/i/13363222",
            "https://i.gkd.li/i/13363246"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 1
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13694858",
            "https://i.gkd.li/i/13794403",
            "https://i.gkd.li/i/12854728"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "@[id$=\"tt_splash_skip_btn\"] <<n [id=\"com.realtech.xiaocan:id/splash_ad_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/12854728",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 1,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "@View[visibleToUser=true][clickable=true] <n FrameLayout[childCount=4||childCount=3] <<n [id=\"com.realtech.xiaocan:id/splash_ad_container\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13694858",
            "https://i.gkd.li/i/13794403"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 1,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 5,
      "name": "权限提示-通知权限",
      "enable": false,
      "resetMatch": "app",
      "activityIds": "com.realtech.xiaocan.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14196198",
      "rules": [
        {
          "matches": "[desc=\"开启提醒\"] - ImageView[clickable=true]",
          "resetMatch": "app",
          "activityIds": "com.realtech.xiaocan.MainActivity"
        }
      ]
    },
    {
      "key": 6,
      "name": "全屏广告-优惠券弹窗",
      "enable": false,
      "activityIds": "com.realtech.xiaocan.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/14196232",
      "rules": [
        {
          "matches": "[desc*=\"今日最新红包已更新\"] > ImageView[index=4]",
          "activityIds": "com.realtech.xiaocan.MainActivity"
        }
      ]
    }
  ]
});

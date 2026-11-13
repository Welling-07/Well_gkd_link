// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.dianping.v1",
  "name": "大众点评",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-主页推荐关注弹窗",
      "activityIds": [
        "com.dianping.main.guide.SplashActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/12727011",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.dianping.main.guide.SplashActivity",
          "matches": "FrameLayout[id=\"android:id/content\"] >2 FrameLayout > ImageView + FrameLayout[id=null][desc=\"关闭\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12727011",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "FrameLayout[id=\"android:id/content\"] >2 FrameLayout > ImageView + FrameLayout[id=null][desc=\"关闭\"][clickable=true]",
          "activityIds": [
            "com.dianping.main.guide.SplashActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12727070",
      "rules": [
        {
          "matches": "[text=\"去开启\"][clickable=true] +2 @FrameLayout[clickable=true] > ImageView",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12727070",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-关闭[签到开红包]",
      "desc": "点击右下角悬浮图片右上角的x图标",
      "activityIds": [
        ".NovaMainActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/12727366",
      "rules": [
        {
          "matches": "[vid=\"float_image\"] + [vid=\"close\"][clickable=true]",
          "activityIds": [
            ".NovaMainActivity"
          ]
        },
        {
          "matches": "[id=\"com.dianping.v1:id/float_image\"] + [id=\"com.dianping.v1:id/close\"][clickable=true]",
          "activityIds": [
            "com.dianping.v1.NovaMainActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": ".NovaMainActivity",
          "fastQuery": true,
          "matches": "[vid=\"operate_cross_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538340"
        },
        {
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "fastQuery": true,
          "matches": "[id=\"com.dianping.v1:id/operate_cross_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538340"
        }
      ]
    },
    {
      "key": 4,
      "name": "分段广告-推荐页卡片广告",
      "rules": [
        {
          "activityIds": ".NovaMainActivity",
          "matches": "@[desc=\"reculike_delete\"][clickable=true][visibleToUser=true] +3 [childCount=2]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13759369",
            "https://i.gkd.li/i/14332054"
          ]
        },
        {
          "preKeys": 0,
          "action": "clickCenter",
          "activityIds": ".NovaMainActivity",
          "matches": "@[clickable=true] > [text=\"重复出现\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14238381",
            "https://i.gkd.li/i/14269115"
          ]
        },
        {
          "preKeys": 0,
          "fastQuery": true,
          "activityIds": ".NovaMainActivity",
          "matches": "[text$=\"重复出现\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/010c0314-e89b-468f-8143-691925a308a6",
          "snapshotUrls": "https://i.gkd.li/i/14393256"
        },
        {
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "matches": "@[desc=\"reculike_delete\"][clickable=true][visibleToUser=true] +3 [childCount=2]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13759369",
            "https://i.gkd.li/i/14332054"
          ]
        },
        {
          "preKeys": 3,
          "action": "clickCenter",
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "matches": "@[clickable=true] > [text=\"重复出现\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14238381",
            "https://i.gkd.li/i/14269115"
          ]
        },
        {
          "preKeys": 3,
          "fastQuery": true,
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "matches": "[text$=\"重复出现\"][clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/010c0314-e89b-468f-8143-691925a308a6",
          "snapshotUrls": "https://i.gkd.li/i/14393256"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-选择地图时自动点击[更多]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.dianping.nova.picasso.DPPicassoBoxActivity",
          "matches": [
            "[text=\"请选择地图\"][visibleToUser=true]",
            "@[clickable=true] > [text^=\"更多\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/ce751918-dab2-4670-a608-9edbcb3bdc0e",
          "snapshotUrls": "https://i.gkd.li/i/23289239"
        }
      ]
    },
    {
      "key": 6,
      "name": "通知提示-消息页上方开启系统通知提醒",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "com.dianping.main.guide.SplashActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/12727070",
      "rules": [
        {
          "matches": "[text=\"去开启\"][clickable=true] +2 @FrameLayout[clickable=true] > ImageView",
          "action": "clickCenter",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.dianping.main.guide.SplashActivity"
          ]
        }
      ]
    },
    {
      "key": 7,
      "name": "分段广告-推荐页卡片式广告",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "matches": "@[desc=\"reculike_delete\"][clickable=true][visibleToUser=true] +3 [childCount=2]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13759369",
            "https://i.gkd.li/i/14332054"
          ]
        },
        {
          "fastQuery": true,
          "action": "clickCenter",
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "matches": "[text*=\"重复出现\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14238381",
            "https://i.gkd.li/i/14269115",
            "https://i.gkd.li/i/14393253"
          ]
        }
      ]
    }
  ]
});

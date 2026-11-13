// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.vmall",
  "name": "荣耀商城",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-应用内弹窗广告",
      "activityIds": [
        "com.vmall.client.base.fragment.VmallWapActivity",
        "com.vmall.client.splash.fragment.SplashActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/13060881",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.vmall.client.base.fragment.VmallWapActivity",
            "com.vmall.client.splash.fragment.SplashActivity"
          ],
          "matches": "[vid=\"gift_close_iv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13060881",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.hihonor.vmall:id/gift_close_iv\"]",
          "activityIds": [
            "com.vmall.client.base.fragment.VmallWapActivity",
            "com.vmall.client.splash.fragment.SplashActivity"
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
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            "com.vmall.client.messageCenter.fragment.MessageCenterActivity",
            "com.vmall.client.base.fragment.VmallWapActivity"
          ],
          "matches": [
            "[text=\"开启消息通知\"]",
            "[vid=\"notification_close\" || vid=\"iv_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13959029",
            "https://i.gkd.li/i/16776398"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-应用内广告弹窗",
      "enable": false,
      "activityIds": [
        "com.vmall.client.base.fragment.VmallWapActivity",
        "com.vmall.client.splash.fragment.SplashActivity"
      ],
      "snapshotUrls": "https://i.gkd.li/i/13060881",
      "rules": [
        {
          "matches": "[id=\"com.hihonor.vmall:id/gift_close_iv\"]",
          "activityIds": [
            "com.vmall.client.base.fragment.VmallWapActivity",
            "com.vmall.client.splash.fragment.SplashActivity"
          ]
        }
      ]
    }
  ]
});

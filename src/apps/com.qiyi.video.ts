// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.qiyi.video",
  "name": "爱奇艺",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/13160866",
        "https://i.gkd.li/i/13379565"
      ],
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@[clickable=true] >(1,2) [text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13160866",
            "https://i.gkd.li/i/13379565",
            "https://i.gkd.li/i/18135566"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@LinearLayout > [text=\"关闭\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-顶部卡片广告",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            "org.qiyi.android.video.MainActivity",
            "org.qiyi.video.PhoneCloudRecordActivity",
            ".qysplashscreen.hotlaunch.HotSplashScreenActivity"
          ],
          "anyMatches": [
            "@[vid=\"unused_res_a\"][clickable=true] > [vid=\"close\"][visibleToUser=true]",
            "@[vid=\"unused_res_a\"][clickable=true] - [text=\"广告\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/69dd60a4-3038-4a8c-8501-33a2d36b3283",
          "snapshotUrls": [
            "https://i.gkd.li/i/12495050",
            "https://i.gkd.li/i/16301287",
            "https://i.gkd.li/i/24312658",
            "https://i.gkd.li/i/24314237",
            "https://i.gkd.li/i/24364968"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/24324750",
          "fastQuery": true
        },
        {
          "activityIds": [
            "org.qiyi.android.video.MainActivity",
            "org.qiyi.video.PhoneCloudRecordActivity"
          ],
          "matches": "@[vid=\"unused_res_a\"][clickable=true] > [vid=\"close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12495050",
            "https://i.gkd.li/i/16301287"
          ],
          "fastQuery": true
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
      "snapshotUrls": "https://i.gkd.li/i/12838152",
      "rules": [
        {
          "activityIds": "org.qiyi.android.video.MainActivity",
          "matches": "[vid=\"cancel_btn\"][text=\"暂时不要\"]",
          "snapshotUrls": "https://i.gkd.li/i/12838152",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.qiyi.video:id/cancel_btn\"][text=\"暂时不要\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12838158",
        "https://i.gkd.li/i/13684912"
      ],
      "rules": [
        {
          "activityIds": [
            "org.qiyi.android.video.MainActivity",
            "org.qiyi.android.search.view.PhoneSearchActivity",
            ".qysplashscreen.hotlaunch.HotSplashScreenActivity"
          ],
          "matches": "[text=\"暂不升级\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12838158",
            "https://i.gkd.li/i/13684912",
            "https://i.gkd.li/i/19049372"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.qiyi.video:id/cancel_btn\"][text=\"暂不升级\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-播放页-插入广告",
      "desc": "视频播放前或播放中途插入的广告",
      "activityIds": "org.iqiyi.video.activity.PlayerActivity",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "org.iqiyi.video.activity.PlayerActivity",
          "matches": "@[clickable=true] > [text^=\"关闭广告\"]",
          "exampleUrls": "https://e.gkd.li/04622996-5a6d-4577-a1cb-adcae37f62b6",
          "snapshotUrls": "https://i.gkd.li/i/18134230"
        },
        {
          "fastQuery": true,
          "activityIds": "org.iqiyi.video.activity.PlayerActivity",
          "matches": "[vid=\"btn_ads_img_pause_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/2cc7688b-f802-4ebe-9eb6-6b9bc6ed5633",
          "snapshotUrls": "https://i.gkd.li/i/18135562"
        },
        {
          "matches": "@RelativeLayout[id=\"com.qiyi.video:id/unused_res_a\"] > TextView[text=\"关闭广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13536669",
            "https://i.gkd.li/i/13536703"
          ],
          "activityIds": "org.iqiyi.video.activity.PlayerActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/confirm_btn\"][text=\"我知道了\"]",
          "exampleUrls": "https://m.gkd.li/6328439/d69e92f8-8304-4296-909a-11730e408a16",
          "snapshotUrls": "https://i.gkd.li/i/13546555",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "未分类-青少年弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "org.qiyi.android.video.MainActivity",
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/confirm_btn\"][text=\"我知道了\"]",
          "exampleUrls": "https://m.gkd.li/6328439/d69e92f8-8304-4296-909a-11730e408a16",
          "snapshotUrls": "https://i.gkd.li/i/13546555",
          "fastQuery": true,
          "activityIds": "org.qiyi.android.video.MainActivity"
        }
      ]
    },
    {
      "key": 7,
      "name": "未分类-我的-顶部广告",
      "enable": false,
      "fastQuery": true,
      "activityIds": "org.qiyi.android.video.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12495050",
      "rules": [
        {
          "matches": "@[id=\"com.qiyi.video:id/unused_res_a\"][clickable=true] > [id=\"com.qiyi.video:id/close\"]",
          "fastQuery": true,
          "activityIds": "org.qiyi.android.video.MainActivity"
        }
      ]
    },
    {
      "key": 8,
      "name": "未分类-开启推送通知弹窗",
      "enable": false,
      "fastQuery": true,
      "activityIds": "org.qiyi.android.video.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12838152",
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/cancel_btn\"][text=\"暂时不要\"]",
          "fastQuery": true,
          "activityIds": "org.qiyi.android.video.MainActivity"
        }
      ]
    },
    {
      "key": 9,
      "name": "未分类-版本更新",
      "enable": false,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        "org.qiyi.android.video.MainActivity",
        "org.qiyi.android.search.view.PhoneSearchActivity"
      ],
      "snapshotUrls": [
        "https://i.gkd.li/i/12838158",
        "https://i.gkd.li/i/13684912"
      ],
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/cancel_btn\"][text=\"暂不升级\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "org.qiyi.android.video.MainActivity",
            "org.qiyi.android.search.view.PhoneSearchActivity"
          ]
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ylmf.androidclient",
  "name": "115生活",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动签到",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": [
        ".UI.MainBossActivity",
        "com.main.world.equity.activity.SignInActivity",
        "com.main.world.equity.activity.SignInRewardActivity"
      ],
      "rules": [
        {
          "name": "点击[签到]-1",
          "matches": "@[clickable=true] >2 [text=\"签到\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738911",
            "https://i.gkd.li/i/14738906"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".UI.MainBossActivity",
            "com.main.world.equity.activity.SignInActivity",
            "com.main.world.equity.activity.SignInRewardActivity"
          ]
        },
        {
          "preKeys": 0,
          "name": "点击[签到]-2",
          "matches": "[vid=\"iv_sign_in_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/15510753",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".UI.MainBossActivity",
            "com.main.world.equity.activity.SignInActivity",
            "com.main.world.equity.activity.SignInRewardActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1
          ],
          "name": "点击[我知道了]",
          "matches": "[text=\"我知道了\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738909",
            "https://i.gkd.li/i/15510873"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".UI.MainBossActivity",
            "com.main.world.equity.activity.SignInActivity",
            "com.main.world.equity.activity.SignInRewardActivity"
          ]
        },
        {
          "preKeys": 2,
          "name": "返回",
          "action": "back",
          "matches": "[text=\"签到规则\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738907",
            "https://i.gkd.li/i/15509322"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".UI.MainBossActivity",
            "com.main.world.equity.activity.SignInActivity",
            "com.main.world.equity.activity.SignInRewardActivity"
          ]
        },
        {
          "name": "点击[签到]-1 (2)",
          "matches": "@[clickable=true] >2 [text=\"签到\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738911",
            "https://i.gkd.li/i/14738906"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.ylmf.androidclient.UI.MainBossActivity",
            "com.main.world.equity.activity.SignInActivity",
            "com.main.world.equity.activity.SignInRewardActivity"
          ]
        },
        {
          "preKeys": 4,
          "name": "点击[签到]-2 (2)",
          "matches": "[vid=\"iv_sign_in_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/15510753",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.ylmf.androidclient.UI.MainBossActivity",
            "com.main.world.equity.activity.SignInActivity",
            "com.main.world.equity.activity.SignInRewardActivity"
          ]
        },
        {
          "preKeys": [
            4,
            5
          ],
          "name": "点击[我知道了] (2)",
          "matches": "[text=\"我知道了\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738909",
            "https://i.gkd.li/i/15510873"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.ylmf.androidclient.UI.MainBossActivity",
            "com.main.world.equity.activity.SignInActivity",
            "com.main.world.equity.activity.SignInRewardActivity"
          ]
        },
        {
          "preKeys": 6,
          "name": "返回 (2)",
          "action": "back",
          "matches": "[text=\"签到规则\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738907",
            "https://i.gkd.li/i/15509322"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.ylmf.androidclient.UI.MainBossActivity",
            "com.main.world.equity.activity.SignInActivity",
            "com.main.world.equity.activity.SignInRewardActivity"
          ]
        },
        {
          "name": "点击[签到]",
          "activityIds": "com.ylmf.androidclient.UI.MainBossActivity",
          "matches": "@[clickable=true] >2 [text=\"签到\"]",
          "exampleUrls": "https://m.gkd.li/57941037/09c2ac32-9364-4a1f-9f49-c05c5695d5a0",
          "snapshotUrls": [
            "https://i.gkd.li/i/14738911",
            "https://i.gkd.li/i/14738906"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 8,
          "name": "点击[我知道了] (3)",
          "activityIds": "com.main.world.equity.activity.SignInActivity",
          "matches": "[text=\"我知道了\"]",
          "exampleUrls": "https://m.gkd.li/57941037/fd597dc2-b926-44fa-acaf-ec7cfa41813a",
          "snapshotUrls": "https://i.gkd.li/i/14738909",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 9,
          "name": "返回 (3)",
          "action": "back",
          "activityIds": "com.main.world.equity.activity.SignInActivity",
          "matches": "[text=\"签到规则\"]",
          "exampleUrls": "https://m.gkd.li/57941037/9d445e18-91dc-4e6c-a765-3a1593230d7b",
          "snapshotUrls": "https://i.gkd.li/i/14738907",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击[返回]关闭页面",
      "order": -9,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".UI.UpdateVersionActivity",
          "matches": "@[desc=\"转到上一层级\"] + [text=\"更新版本\"]",
          "exampleUrls": "https://m.gkd.li/57941037/43d4fa0c-789c-4cf7-aa12-7232e9d23e6d",
          "snapshotUrls": "https://i.gkd.li/i/14738944",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.ylmf.androidclient.UI.UpdateVersionActivity",
          "matches": "@[desc=\"转到上一层级\"] + [text=\"更新版本\"]",
          "exampleUrls": "https://m.gkd.li/57941037/43d4fa0c-789c-4cf7-aa12-7232e9d23e6d",
          "snapshotUrls": "https://i.gkd.li/i/14738944",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

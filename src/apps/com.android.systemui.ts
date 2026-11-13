// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.systemui",
  "name": "系统界面",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动允许网易云音乐共享整个屏幕",
      "fastQuery": true,
      "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity",
      "rules": [
        {
          "matches": [
            "[text=\"要与“网易云音乐”共享屏幕吗？\"]",
            "[vid=\"screen_share_mode_spinner\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23451390",
          "fastQuery": true,
          "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"共享整个屏幕\"]",
          "snapshotUrls": "https://i.gkd.li/i/23451403",
          "fastQuery": true,
          "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity"
        },
        {
          "preKeys": 1,
          "matches": "Button[text=\"共享屏幕\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/23451416",
          "fastQuery": true,
          "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-自动允许白描共享整个屏幕",
      "fastQuery": true,
      "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity",
      "rules": [
        {
          "matches": [
            "[text=\"要与“白描”共享屏幕吗？\"]",
            "[vid=\"screen_share_mode_spinner\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23451390",
          "fastQuery": true,
          "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"共享整个屏幕\"]",
          "snapshotUrls": "https://i.gkd.li/i/23451403",
          "fastQuery": true,
          "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity"
        },
        {
          "preKeys": 1,
          "matches": "Button[text=\"共享屏幕\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/23451416",
          "fastQuery": true,
          "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-自动允许QQ音乐共享整个屏幕",
      "fastQuery": true,
      "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity",
      "rules": [
        {
          "matches": [
            "[text=\"要与“QQ音乐”共享屏幕吗？\"]",
            "[vid=\"screen_share_mode_spinner\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23451390",
          "fastQuery": true,
          "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity"
        },
        {
          "preKeys": 0,
          "matches": "@[clickable=true] > [text=\"共享整个屏幕\"]",
          "snapshotUrls": "https://i.gkd.li/i/23451403",
          "fastQuery": true,
          "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity"
        },
        {
          "preKeys": 1,
          "matches": "Button[text=\"共享屏幕\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/23451416",
          "fastQuery": true,
          "activityIds": ".mediaprojection.permission.MediaProjectionPermissionActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-自动允许USB调试",
      "desc": "点击 ①✅一律允许 ②确定",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text$=\"这台计算机进行调试\"][clickable=true][checked=false]",
          "exampleUrls": "https://e.gkd.li/124fdf00-8901-463e-bb0b-ed6e8aadf3f7",
          "snapshotUrls": [
            "https://i.gkd.li/i/25254577",
            "https://i.gkd.li/i/25256690",
            "https://i.gkd.li/i/25256846",
            "https://i.gkd.li/i/25257004",
            "https://i.gkd.li/i/25619878",
            "https://i.gkd.li/i/25619884"
          ],
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "matches": "[text=\"允许\" || text=\"确定\"][clickable=true]",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-自动允许无线调试(真我📱)",
      "desc": "点击 ①✅始终允许 ②允许",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text$=\"通过此网络进行调试\"][clickable=true][checked=false]",
          "exampleUrls": "https://e.gkd.li/7e2c5172-1b35-4ddf-8a4c-b19d25330d64",
          "snapshotUrls": "https://i.gkd.li/i/25256451",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "matches": "[text=\"允许\" || text=\"确定\"][clickable=true]",
          "fastQuery": true
        }
      ]
    }
  ]
});

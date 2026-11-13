// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.permissioncontroller",
  "name": "权限控制器",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-定位权限",
      "desc": "点击[不允许/禁止]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".permission.ui.GrantPermissionsActivity",
            "com.android.packageinstaller.permission.ui.GrantPermissionsActivity"
          ],
          "matches": [
            "[text*=\"位置信息\"]",
            "[text=\"不允许\" || text=\"禁止\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/24759204",
            "https://i.gkd.li/i/30746977"
          ],
          "exampleUrls": "https://e.gkd.li/801303af-ac30-4d06-b2f8-cfea98aa847a"
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-vivo-指定媒体内容",
      "desc": "app最小权限原则授予指定图片/视频",
      "fastQuery": true,
      "actionMaximum": 1,
      "actionDelay": 400,
      "forcedTime": 6000,
      "activityIds": ".permission.ui.GrantPermissionsActivity",
      "rules": [
        {
          "name": "下拉菜单",
          "matches": "[vid=\"picture_control_layout\"] > @[vid=\"control_picture_click_view\"][clickable=true] > [vid=\"access_title\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26150081",
          "exampleUrls": "https://e.gkd.li/13fa7148-f101-4bbd-a1dd-9fbae4dea109",
          "fastQuery": true,
          "actionMaximum": 1,
          "actionDelay": 400,
          "forcedTime": 6000,
          "activityIds": ".permission.ui.GrantPermissionsActivity"
        },
        {
          "preKeys": 0,
          "name": "照片访问范围",
          "excludeMatches": "[vid=\"vivo_pictures_control_view\"][childCount=2]",
          "matches": "[vid=\"control_picture_click_view\"] + [vid=\"picture_control_view\"] >2 @[vid=\"picture_control\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26150082",
          "exampleUrls": "https://e.gkd.li/95f09c34-546b-436a-ac93-a5aa1cad687b",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26150524",
          "fastQuery": true,
          "actionMaximum": 1,
          "actionDelay": 400,
          "forcedTime": 6000,
          "activityIds": ".permission.ui.GrantPermissionsActivity"
        },
        {
          "preKeys": 1,
          "name": "指定照片",
          "matches": "ListView > * + @* > [vid=\"item_content_with_dot\"] > [vid=\"item_content\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26150084",
          "exampleUrls": "https://e.gkd.li/2b275e04-ae32-4e0e-80c9-411a15fc1f1a",
          "fastQuery": true,
          "actionMaximum": 1,
          "actionDelay": 400,
          "forcedTime": 6000,
          "activityIds": ".permission.ui.GrantPermissionsActivity"
        },
        {
          "preKeys": 0,
          "name": "管理指定照片",
          "matches": "@[vid=\"picture_set\"][clickable=true] <2 [vid=\"vivo_pictures_control_view\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/26150524",
          "exampleUrls": "https://e.gkd.li/434e23e3-ed97-4815-8896-aa0e50833cdd",
          "fastQuery": true,
          "actionMaximum": 1,
          "actionDelay": 400,
          "forcedTime": 6000,
          "activityIds": ".permission.ui.GrantPermissionsActivity"
        }
      ]
    }
  ]
});

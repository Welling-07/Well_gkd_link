// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.facebook.katana",
  "name": "Facebook",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动点击[查看翻译]",
      "activityIds": [
        ".immersiveactivity.ImmersiveActivity",
        ".activity.FbMainTabActivity"
      ],
      "rules": [
        {
          "fastQuery": true,
          "matches": "@ViewGroup[clickable=true] > [visibleToUser=true][text=\"查看翻译\"] <<n [id=\"android:id/list\"]",
          "exampleUrls": "https://e.gkd.li/8801f1f5-ddcb-45b2-9f19-c82e9d1271f1",
          "snapshotUrls": "https://i.gkd.li/i/21955231",
          "activityIds": [
            ".immersiveactivity.ImmersiveActivity",
            ".activity.FbMainTabActivity"
          ]
        },
        {
          "matchRoot": true,
          "actionCd": 300,
          "matches": "[text=\"查看翻译\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/a111f9dc-8604-45f5-ba0c-22606890c338",
          "snapshotUrls": [
            "https://i.gkd.li/i/24712867",
            "https://i.gkd.li/i/24717051"
          ],
          "activityIds": [
            ".immersiveactivity.ImmersiveActivity",
            ".activity.FbMainTabActivity"
          ]
        }
      ]
    }
  ]
});

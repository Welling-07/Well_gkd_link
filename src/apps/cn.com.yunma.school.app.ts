// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.yunma.school.app",
  "name": "易校园",
  "groups": [
    {
      "key": 2,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "matches": "[vid=\"anythink_myoffer_btn_close_id\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/3ddc6da8-7bbf-43f8-8d79-1fabe1180fea",
          "snapshotUrls": "https://i.gkd.li/i/23475779"
        }
      ]
    },
    {
      "key": 3,
      "name": "更新提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.yunma.baseextend.appupdate.view.UpdateDialogActivity",
          "matches": [
            "[text^=\"发现新版本\"]",
            "[vid=\"ib_close\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/24336659"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.yunma.app.ui.main.MainActivity",
          "matches": [
            "[text*=\"将系统通知权限开启\"]",
            "[text=\"拒绝\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/25608212"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tmall.campus.and",
  "name": "天猫校园",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".main.MainActivity",
            "com.tmall.campus.bizwebview.ui.CampusWebActivity"
          ],
          "matches": "[vid=\"close_btn\" || vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22399316",
            "https://i.gkd.li/i/22425649"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.tmall.campus.scancode.activity.ToolsCaptureActivity",
            "com.tmall.campus.bizwebview.ui.CampusWebActivity"
          ],
          "matches": "[vid=\"iv_close_ad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22558370",
            "https://i.gkd.li/i/22871032"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".main.MainActivity",
            "com.tmall.campus.launcher.SplashActivity"
          ],
          "matches": [
            "[text=\"获取通知权限\"]",
            "[text=\"再想想\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/23124558",
            "https://i.gkd.li/i/23254348"
          ]
        }
      ]
    }
  ]
});

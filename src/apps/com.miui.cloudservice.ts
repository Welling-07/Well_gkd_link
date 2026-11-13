// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.miui.cloudservice",
  "name": "小米云服务",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "云存储空间不足弹窗",
          "activityIds": ".hybrid.SignDeductDialogHybridActivity",
          "matches": "[text=\"以后再说\"]",
          "exampleUrls": "https://m.gkd.li/57941037/df5f7c28-a1fa-4d1b-87b8-2f592e5a8423",
          "snapshotUrls": "https://i.gkd.li/i/12847374"
        },
        {
          "name": "会员打折弹窗",
          "fastQuery": true,
          "activityIds": ".ad.AdPopupActivity",
          "matches": "[vid=\"ad_popup_close_iv\"]",
          "exampleUrls": "https://m.gkd.li/57941037/fbb8a877-4e69-4d72-b31d-85ad87ab34af",
          "snapshotUrls": "https://i.gkd.li/i/14320937"
        },
        {
          "name": "云存储空间不足弹窗 (2)",
          "activityIds": "com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity",
          "matches": "[text=\"以后再说\"]",
          "exampleUrls": "https://m.gkd.li/57941037/df5f7c28-a1fa-4d1b-87b8-2f592e5a8423",
          "snapshotUrls": "https://i.gkd.li/i/12847374"
        },
        {
          "name": "会员打折弹窗 (2)",
          "fastQuery": true,
          "activityIds": "com.miui.cloudservice.ad.AdPopupActivity",
          "matches": "[vid=\"ad_popup_close_iv\"]",
          "exampleUrls": "https://m.gkd.li/57941037/fbb8a877-4e69-4d72-b31d-85ad87ab34af",
          "snapshotUrls": "https://i.gkd.li/i/14320937"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击[以后再说]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".ui.MiCloudMainActivity",
          "matches": "@[text=\"以后再说\"] + [text=\"立即升级\"]",
          "exampleUrls": "https://m.gkd.li/57941037/789b4472-f989-4d32-aff2-6b657b6e0deb",
          "snapshotUrls": "https://i.gkd.li/i/14476801",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[text=\"以后再说\"] + [text=\"立即升级\"]",
          "exampleUrls": "https://m.gkd.li/57941037/789b4472-f989-4d32-aff2-6b657b6e0deb",
          "snapshotUrls": "https://i.gkd.li/i/14476801",
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".ui.MiCloudMainActivity",
          "matches": [
            "[text$=\"开启“通知”权限。\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23165486"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-相册-云存储空间不足",
      "enable": false,
      "activityIds": "com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity",
      "snapshotUrls": "https://i.gkd.li/i/12847374",
      "rules": [
        {
          "matches": "View > [text=\"以后再说\"]",
          "activityIds": "com.miui.cloudservice.hybrid.SignDeductDialogHybridActivity"
        }
      ]
    }
  ]
});

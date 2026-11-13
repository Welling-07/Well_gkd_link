// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sfexpress.sfim",
  "name": "丰声",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动确认登录",
      "desc": "自动点击[登录]按钮",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".scan.view.SfScanActivity",
            ".microservice.commonservice.ui.MicroAppContainerActivity",
            ".sdkuikit.widget.dialog.NoticeDialog"
          ],
          "matches": "@[visibleToUser=true][text=\"登录\"] <<n [vid=\"flContainer\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12745239",
            "https://i.gkd.li/i/12745240",
            "https://i.gkd.li/i/12745241",
            "https://i.gkd.li/i/14830687"
          ],
          "fastQuery": true
        },
        {
          "activityIds": ".middleplatform.ui.SFMiddlePlatformLoginActivity",
          "matches": "[text=\"登录\"]",
          "snapshotUrls": "https://i.gkd.li/i/14830682",
          "fastQuery": true
        },
        {
          "activityIds": [
            "com.sfexpress.sfim.scan.view.SfScanActivity",
            "com.sfexpress.sfim.microservice.commonservice.ui.MicroAppContainerActivity",
            "com.sfexpress.sfim.sdkuikit.widget.dialog.NoticeDialog"
          ],
          "matches": "@[visibleToUser=true][text=\"登录\"] <<n [vid=\"flContainer\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12745239",
            "https://i.gkd.li/i/12745240",
            "https://i.gkd.li/i/12745241",
            "https://i.gkd.li/i/14830687"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.sfexpress.sfim.middleplatform.ui.SFMiddlePlatformLoginActivity",
          "matches": "[text=\"登录\"]",
          "snapshotUrls": "https://i.gkd.li/i/14830682",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-登录确认",
      "desc": "自动点击 \"登录\" 按钮",
      "enable": false,
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            "com.sfexpress.sfim.scan.view.SfScanActivity",
            "com.sfexpress.sfim.microservice.commonservice.ui.MicroAppContainerActivity",
            "com.sfexpress.sfim.sdkuikit.widget.dialog.NoticeDialog"
          ],
          "matches": "@[text=\"登录\"] <<n [vid=\"flContainer\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12745239",
            "https://i.gkd.li/i/12745240",
            "https://i.gkd.li/i/12745241",
            "https://i.gkd.li/i/14830687"
          ],
          "fastQuery": true
        }
      ]
    }
  ]
});

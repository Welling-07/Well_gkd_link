// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.cmri.universalapp",
  "name": "移动爱家",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "matchTime": 10000,
      "forcedTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".appupdate.view.UpdateDialogActivity",
          "matches": "@[vid=\"tvCancel\"] + * >3 [text*=\"新版本\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/29660021",
          "matchTime": 10000,
          "forcedTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "matchTime": 10000,
      "forcedTime": 10000,
      "rules": [
        {
          "activityIds": [
            ".SmartMainProxyActivity",
            ".SmartMainActivity"
          ],
          "matches": "[vid=\"ivCancelDlg\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30352091",
            "https://i.gkd.li/i/28761589"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "forcedTime": 10000
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告",
      "fastQuery": true,
      "rules": [
        {
          "name": "横幅式",
          "activityIds": ".SmartMainProxyActivity",
          "matches": "[vid=\"close_banner\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/17872961",
          "fastQuery": true
        },
        {
          "name": "卡片信息流式",
          "actionCd": 120,
          "activityIds": [
            ".SmartMainProxyActivity",
            ".SmartMainActivity"
          ],
          "matches": "[vid=\"iv_close\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/30197268",
            "https://i.gkd.li/i/32419081"
          ],
          "fastQuery": true
        },
        {
          "name": "横幅式2",
          "activityIds": [
            ".smarthome.control.view.CameraControlActivity",
            ".smarthome.control.view.NewCameraControlActivity"
          ],
          "matches": "[vid=\"iv_item_banner_close\" || vid=\"iv_close\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25209084",
            "https://i.gkd.li/i/34723502"
          ],
          "fastQuery": true
        }
      ]
    }
  ]
});

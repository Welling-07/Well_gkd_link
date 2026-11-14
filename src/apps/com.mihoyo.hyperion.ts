// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mihoyo.hyperion",
  "name": "米游社",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-游戏版本活动",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.popup.HomePopupDialogActivity",
          "matches": "[vid=\"closeIv\"]",
          "exampleUrls": "https://e.gkd.li/5c54c1cc-95ae-420d-b3af-37e8553a6327",
          "snapshotUrls": "https://i.gkd.li/i/16818949",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-游戏版本活动",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": ".main.HyperionMainActivity",
      "exampleUrls": "https://e.gkd.li/197dfb66-6b42-4fbd-b60c-4d801a8c729c",
      "rules": [
        {
          "name": "点击关闭",
          "matches": "[vid=\"bottomBarBgIv\"] + * > [vid=\"close\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/16996311",
          "fastQuery": true,
          "activityIds": ".main.HyperionMainActivity"
        },
        {
          "preKeys": 0,
          "name": "点击确定",
          "matches": "[vid=\"rootLayout\"] > [vid=\"confirmTv\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/16996319",
          "fastQuery": true,
          "activityIds": ".main.HyperionMainActivity"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".main.HyperionMainActivity",
          "matches": [
            "[text^=\"开启通知提醒\"]",
            "@[clickable=true] > [text$=\"拒绝\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/24489020"
        }
      ]
    },
    {
      "key": 6,
      "name": "青少年模式",
      "desc": "点击[我知道了]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "exampleUrls": "https://e.gkd.li/db8bb97e-f0f0-4f85-a262-14dd760f812b",
      "snapshotUrls": [
        "https://i.gkd.li/i/17002129",
        "https://i.gkd.li/i/12775850"
      ],
      "rules": [
        {
          "matches": "[vid=\"tv_dialog_go_to_teenage_mode\"] + [vid=\"tv_dialog_i_know\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 7,
      "name": "更新提示",
      "desc": "关闭版本更新提示弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12675513",
      "rules": [
        {
          "matches": "TextView[id=\"com.mihoyo.hyperion:id/mUpgradeDialogCancel\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

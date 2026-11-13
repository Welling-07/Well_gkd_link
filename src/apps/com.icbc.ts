// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.icbc",
  "name": "中国工商银行",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.icbc.activity.main.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/13330431",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".activity.main.MainActivity",
          "matches": "[vid=\"tv_time\"][text*=\"跳过\"][text.length<=6]",
          "snapshotUrls": "https://i.gkd.li/i/13330431",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.icbc:id/tv_time\"][text*=\"跳过\"][text.length<=6]",
          "activityIds": "com.icbc.activity.main.MainActivity",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "评价提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[text^=\"觉得“中国工商银行”好用吗\"]",
            "[text=\"下次再说\"][clickable=true]"
          ],
          "exampleUrls": "https://e.gkd.li/85e48265-4269-4122-a70f-5361698954c0",
          "snapshotUrls": [
            "https://i.gkd.li/i/18296892",
            "https://i.gkd.li/i/24981859"
          ],
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-右下角浮标广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.web.ICBCWebView",
            ".activity.main.MainActivity",
            ".mydetail.MyDetailMainActivity"
          ],
          "matches": "[vid=\"iv_close_task_center\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22616307",
            "https://i.gkd.li/i/23227312"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-未登录时自动点击登录",
      "desc": "仅限老年版和英文版可用",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.main.MainActivity",
          "matches": "[vid=\"rl_remit_login_button_background\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23227516",
            "https://i.gkd.li/i/23227551"
          ],
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "权限提示-通知权限",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".oisc.UI.mainPage.OISCMainActivity",
          "matches": [
            "[text=\"开启推送通知\"]",
            "[vid=\"close_iv\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/25356505"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-第一次启动提示",
      "enable": false,
      "activityIds": "com.icbc.activity.init.SplashActivity",
      "rules": [
        {
          "matches": "[id=\"com.icbc:id/close_btn\"]",
          "activityIds": "com.icbc.activity.init.SplashActivity"
        }
      ]
    }
  ]
});

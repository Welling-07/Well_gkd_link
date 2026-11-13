// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.newcapec.mobile.ncp",
  "name": "完美校园",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "新版本提示弹窗，点击右上角\"X\"按钮",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/12843377",
      "rules": [
        {
          "activityIds": "com.wanxiao.basebusiness.activity.SplashActivity",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12843377",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/iv_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-密码过期提示弹窗",
      "desc": "点击\"取消\"按钮",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.wanxiao.ui.activity.IndexActivity",
          "matches": "[vid=\"dialog_oppotion\"]",
          "snapshotUrls": "https://i.gkd.li/i/12843399",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-密码过期提示弹窗",
      "desc": "点击\"取消\"按钮",
      "enable": false,
      "activityIds": "com.wanxiao.ui.activity.IndexActivity",
      "snapshotUrls": "https://i.gkd.li/i/12843399",
      "rules": [
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/dialog_oppotion\"]",
          "activityIds": "com.wanxiao.ui.activity.IndexActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-新版本提示",
      "desc": "新版本提示弹窗，点击右上角【X】按钮。（需手动开启）",
      "enable": false,
      "activityIds": "com.wanxiao.basebusiness.activity.SplashActivity",
      "snapshotUrls": "https://i.gkd.li/i/12843377",
      "rules": [
        {
          "matches": "[id=\"com.newcapec.mobile.ncp:id/iv_close\"]",
          "activityIds": "com.wanxiao.basebusiness.activity.SplashActivity"
        }
      ]
    }
  ]
});

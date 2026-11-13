// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.byyoung.setting",
  "name": "爱玩机工具箱",
  "groups": [
    {
      "key": 0,
      "name": "功能类-忽略授权提示",
      "desc": "初始授权欢迎界面,点击上方暂时忽略授权",
      "activityIds": "com.byyoung.setting.Welcome.PermissionActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "actionDelay": 200,
          "activityIds": ".Welcome.PermissionActivity",
          "matches": "@[clickable=true] >2 [text*=\"忽略授权\"]",
          "snapshotUrls": "https://i.gkd.li/i/34113480",
          "exampleUrls": "https://e.gkd.li/3685c49e-516e-4e15-b33a-419459cc311a",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.byyoung.setting:id/tv_name\"][text*=\"忽略授权\"]",
          "snapshotUrls": "https://i.gkd.li/i/12829909",
          "activityIds": "com.byyoung.setting.Welcome.PermissionActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-每日自动签到",
      "desc": "延时3秒触发, 仅点击1次[签到]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "actionDelay": 3000,
          "activityIds": ".HomePage.activitys.MainActivity",
          "matches": "ImageView - Button[text=\"签到\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/27209865",
            "https://i.gkd.li/i/34144831"
          ],
          "exampleUrls": "https://e.gkd.li/febcaadd-d766-4970-b8ee-edbccf4022ac",
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

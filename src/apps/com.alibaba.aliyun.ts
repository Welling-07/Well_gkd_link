// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.alibaba.aliyun",
  "name": "阿里云",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13446162",
      "rules": [
        {
          "activityIds": ".biz.home.mine.activity.KFeeCenterActivity",
          "matches": "[text^=\"打开手机消息通知\"] + * >2 [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13446162",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"打开手机消息通知\"] + * >2 [text=\"以后再说\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "其他-关闭[添加小组件提示]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".biz.home.MainV5Activity",
          "matches": "[vid=\"iv_close_tip\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/26159018"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-请求开启通知权限弹窗",
      "enable": false,
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13446162",
      "rules": [
        {
          "matches": "[text^=\"打开手机消息通知\"] + * >2 [text=\"以后再说\"]",
          "fastQuery": true
        }
      ]
    }
  ]
});

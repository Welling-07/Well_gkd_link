// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.com.spdb.mobilebank.per",
  "name": "浦发银行",
  "groups": [
    {
      "key": 0,
      "name": "权限提示-通知权限",
      "desc": "自动点击关闭。",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13458535",
      "rules": [
        {
          "activityIds": ".activity.web.stage.StageCommonWebActivity",
          "matches": "[text=\"去开启\"] + View > Image[text.length=0]",
          "snapshotUrls": "https://i.gkd.li/i/13458535",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"去开启\"] + View > Image[text.length=0]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-消息中心-系统通知请求",
      "desc": "自动点击关闭。",
      "enable": false,
      "activityIds": "cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity",
      "snapshotUrls": "https://i.gkd.li/i/13458535",
      "rules": [
        {
          "matches": "[text=\"去开启\"] + View > Image[text.length=0]",
          "activityIds": "cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity"
        }
      ]
    }
  ]
});

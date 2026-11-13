// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.baidu.homework",
  "name": "作业帮",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".activity.index.IndexActivity",
          "matches": "[vid=\"ad_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15374440"
        },
        {
          "fastQuery": true,
          "activityIds": ".activity.index.IndexActivity",
          "matches": [
            "[text^=\"小组件\"]",
            "[text=\"以后再说\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/23567064"
        },
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.baidu.homework.activity.index.IndexActivity",
          "matches": "[vid=\"ad_dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15374440"
        }
      ]
    }
  ]
});

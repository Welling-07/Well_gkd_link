// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.crirp.zhipu",
  "name": "智谱",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "[text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13725305",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-今日要闻弹窗",
      "desc": "点击不再提示",
      "fastQuery": true,
      "activityIds": "com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity",
          "matches": "[text=\"今日不再提示\"]",
          "snapshotUrls": "https://i.gkd.li/i/13725337",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id$=\"/cancel_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13725337",
          "fastQuery": true,
          "activityIds": "com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-首页-今日要闻-不再提示",
      "desc": "【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity",
      "rules": [
        {
          "matches": "[id$=\"/cancel_tv\"]",
          "snapshotUrls": "https://i.gkd.li/i/13725337",
          "fastQuery": true,
          "activityIds": "com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-首页-今日要闻-关闭",
      "desc": "【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity",
      "rules": [
        {
          "matches": "[id$=\"/tv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13725337",
          "fastQuery": true,
          "activityIds": "com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity"
        }
      ]
    }
  ]
});

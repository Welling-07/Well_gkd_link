// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xueqiu.fund",
  "name": "雪球基金",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-基金页面弹窗广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".commonlib.FundHomeActivityV2",
          "matches": "[vid=\"image_cancel\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c43d58ab-a18c-4249-bc35-1c7aeab4c3ff",
          "snapshotUrls": "https://i.gkd.li/i/14163901"
        },
        {
          "fastQuery": true,
          "activityIds": "com.xueqiu.fund.commonlib.FundHomeActivityV2",
          "matches": "[id=\"com.xueqiu.fund:id/image_cancel\"]",
          "exampleUrls": "https://m.gkd.li/57941037/c43d58ab-a18c-4249-bc35-1c7aeab4c3ff",
          "snapshotUrls": "https://i.gkd.li/i/14163901"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-春节闲钱放哪里弹窗",
      "desc": "有误触风险",
      "enable": false,
      "fastQuery": true,
      "resetMatch": "app",
      "actionMaximum": 1,
      "activityIds": "com.xueqiu.fund.commonlib.FundHomeActivityV2",
      "snapshotUrls": "https://i.gkd.li/i/14163901",
      "rules": [
        {
          "matches": "[vid=\"image_cancel\"]",
          "fastQuery": true,
          "resetMatch": "app",
          "actionMaximum": 1,
          "activityIds": "com.xueqiu.fund.commonlib.FundHomeActivityV2"
        }
      ]
    }
  ]
});

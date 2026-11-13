// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huodao.hdphone",
  "name": "找靓机",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-超级补贴日弹窗",
      "desc": "点击关闭",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13927567",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[vid=\"iv_adv\"] + [vid=\"dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13927567",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"android:id/content\"] >2 [id=\"com.huodao.hdphone:id/dialog_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13927567",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "fastQuery": true,
      "activityIds": "com.huodao.hdphone.mvp.view.main.NewMainActivity",
      "exampleUrls": "https://m.gkd.li/57941037/dc1534ca-9ab1-4d7b-8da4-6c7992882c94",
      "snapshotUrls": "https://i.gkd.li/i/15052025",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".mvp.view.main.NewMainActivity",
          "matches": "[vid=\"iv_recycle_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/dc1534ca-9ab1-4d7b-8da4-6c7992882c94",
          "snapshotUrls": "https://i.gkd.li/i/15052025"
        },
        {
          "fastQuery": true,
          "activityIds": "com.huodao.hdphone.mvp.view.main.NewMainActivity",
          "matches": "[vid=\"iv_recycle_close\"]",
          "exampleUrls": "https://m.gkd.li/57941037/dc1534ca-9ab1-4d7b-8da4-6c7992882c94",
          "snapshotUrls": "https://i.gkd.li/i/15052025"
        }
      ]
    }
  ]
});

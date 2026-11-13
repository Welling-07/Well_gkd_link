// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.karaoke",
  "name": "全民K歌",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "name": "动态页面-卡片广告",
          "fastQuery": true,
          "activityIds": ".module.main.ui.MainTabActivity",
          "matches": "@ImageView[clickable=true] - [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13334798"
        },
        {
          "name": "动态页面-卡片广告 (2)",
          "activityIds": "com.tencent.karaoke.module.main.ui.MainTabActivity",
          "matches": "RelativeLayout > [text=\"广告\"] + ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13334798"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "活动弹窗",
          "activityIds": ".module.splash.ui.SplashBaseActivity",
          "matches": "ViewGroup[childCount=0] < @ViewGroup[clickable=true][childCount=1] - ViewGroup > [desc*=\"双十一\"]",
          "snapshotUrls": "https://i.gkd.li/i/13363281"
        },
        {
          "name": "活动弹窗 (2)",
          "activityIds": "com.tencent.karaoke.module.splash.ui.SplashBaseActivity",
          "matches": "[desc$=\"霸屏的按钮\"] < ViewGroup + ViewGroup[childCount=1] > ViewGroup[childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/13363281"
        }
      ]
    }
  ]
});

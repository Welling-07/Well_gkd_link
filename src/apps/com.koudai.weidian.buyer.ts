// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.koudai.weidian.buyer",
  "name": "微店",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页红包弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "activityIds": "com.vdian.android.wdb.main.ui.activity.MainTabsActivity",
      "snapshotUrls": "https://i.gkd.li/i/13646151",
      "rules": [
        {
          "activityIds": "com.vdian.android.wdb.main.ui.activity.MainTabsActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <2 RelativeLayout[childCount=2] < FrameLayout <2 [parent=null]",
          "snapshotUrls": "https://i.gkd.li/i/13646151",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "FrameLayout > FrameLayout > RelativeLayout > ImageView[clickable=true][index=1]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.vdian.android.wdb.main.ui.activity.MainTabsActivity"
        }
      ]
    }
  ]
});

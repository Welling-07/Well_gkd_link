// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.babytree.apps.pregnancy",
  "name": "宝宝树孕育",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12614757",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@View[childCount=0][clickable=true][visibleToUser=true] < RelativeLayout < FrameLayout + RelativeLayout >2 [text^=\"摇一摇\"]",
          "snapshotUrls": "https://i.gkd.li/i/15566228",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        },
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12614757",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        },
        {
          "matches": "[id=\"android:id/content\"] >3 FrameLayout[childCount=5] > FrameLayout > RelativeLayout > View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/15566228",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 2,
          "priorityTime": 10000,
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "activityIds": ".activity.SailfishActivity",
      "rules": [
        {
          "matches": "ImageView[vid=\"bb_referenced_active_dialog_img_2\"] + ImageView[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12614834",
          "activityIds": ".activity.SailfishActivity"
        },
        {
          "matches": "ImageView[id=\"com.babytree.apps.pregnancy:id/bb_referenced_active_dialog_img_2\"] + ImageView[id!=null][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12614834",
          "activityIds": "com.babytree.apps.pregnancy.activity.SailfishActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-首页右侧悬浮广告",
      "activityIds": ".activity.SailfishActivity",
      "rules": [
        {
          "matches": "ImageView[id!=null][clickable=false] + @ImageView[id!=null][clickable=true] + FrameLayout[id=null] > TextView[text=null][id!=null]",
          "snapshotUrls": "https://i.gkd.li/i/12614838",
          "activityIds": ".activity.SailfishActivity"
        },
        {
          "matches": "ImageView[id!=null][clickable=false] + @ImageView[id!=null][clickable=true] + FrameLayout[id=null] > TextView[text=null][id!=null]",
          "snapshotUrls": "https://i.gkd.li/i/12614838",
          "activityIds": "com.babytree.apps.pregnancy.activity.SailfishActivity"
        }
      ]
    }
  ]
});

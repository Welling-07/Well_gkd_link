// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.yuque.mobile.android.app",
  "name": "语雀",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-[用语雀公众号]横幅提示",
      "desc": "点x取消提示",
      "rules": [
        {
          "activityIds": ".rn.activity.ReactNativeMainActivity",
          "matches": "TextView[text=\"了解更多\"] + ViewGroup[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12911014"
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-自动原图",
      "desc": "如果没有勾选原图, 则勾选",
      "activityIds": "com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity",
      "rules": [
        {
          "activityIds": ".rn.activity.ReactNativeMainActivity",
          "matches": "ViewGroup[desc=\"原图未勾选\"][clickable=true][childCount=2]",
          "snapshotUrls": "https://i.gkd.li/i/12911013"
        },
        {
          "matches": "ViewGroup[desc=\"原图未勾选\"][clickable=true][childCount=2]",
          "snapshotUrls": "https://i.gkd.li/i/12911013",
          "activityIds": "com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-\"用语雀公众号\"横幅提示",
      "desc": "点x取消提示",
      "enable": false,
      "activityIds": "com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity",
      "rules": [
        {
          "matches": "TextView[text=\"了解更多\"] + ViewGroup[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12911014",
          "activityIds": "com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity"
        }
      ]
    }
  ]
});

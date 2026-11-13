// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tongcheng.android",
  "name": "同程旅行",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".TongchengMainActivity",
          "matches": "[vid=\"iv_home_ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/25369e74-1527-4ca5-9f39-77930ee84d1e",
          "snapshotUrls": "https://i.gkd.li/i/20921290",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "评价提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".TongchengMainActivity",
          "matches": [
            "[text=\"给个好评鼓励下吧\"][visibleToUser=true]",
            "[vid=\"iv_close\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/60949e51-3d07-4eda-ab2d-9ff561d8b58c",
          "snapshotUrls": "https://i.gkd.li/i/20921292",
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    },
    {
      "key": 2,
      "name": "分段广告-卡片广告",
      "enable": false,
      "activityIds": "com.tongcheng.android.TongchengMainActivity",
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView + ViewGroup[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13167070",
          "activityIds": "com.tongcheng.android.TongchengMainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@* > * > [id=\"com.tongcheng.android:id/tv_home_banner_pop_up\"][text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13167149",
          "activityIds": "com.tongcheng.android.TongchengMainActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-应用内卡片广告",
      "enable": false,
      "activityIds": "com.tongcheng.android.TongchengMainActivity",
      "rules": [
        {
          "matches": "ViewGroup[childCount=2] > ImageView + ViewGroup[childCount=1] > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13167070",
          "activityIds": "com.tongcheng.android.TongchengMainActivity"
        },
        {
          "preKeys": 0,
          "matches": "@* > * > [id=\"com.tongcheng.android:id/tv_home_banner_pop_up\"][text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13167149",
          "activityIds": "com.tongcheng.android.TongchengMainActivity"
        }
      ]
    }
  ]
});

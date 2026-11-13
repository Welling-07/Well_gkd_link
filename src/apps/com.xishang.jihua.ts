// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xishang.jihua",
  "name": "加班",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "@ImageView[childCount=0][width<100 && height<100] < ViewGroup < ViewGroup < ViewGroup < ViewGroup +2 ViewGroup >3 [text=\"广告\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/5a9d8d4c-a638-46d9-ab67-9b3b115b96e1",
          "snapshotUrls": [
            "https://i.gkd.li/i/21480268",
            "https://i.gkd.li/i/21487176"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": ".MainActivity",
          "matches": "@Image[childCount=0][width<80 && height<80] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/22092803",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

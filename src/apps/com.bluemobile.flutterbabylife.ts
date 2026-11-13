// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.bluemobile.flutterbabylife",
  "name": "宝宝生活记录",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "rules": [
        {
          "name": "字节SDK",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[childCount=0][text=\"\"][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13632639",
          "matchTime": 10000,
          "actionMaximum": 1
        },
        {
          "name": "字节SDK (2)",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "View[childCount=7] > View[index=1]",
          "snapshotUrls": "https://i.gkd.li/i/13632639",
          "matchTime": 10000,
          "actionMaximum": 1
        }
      ]
    }
  ]
});

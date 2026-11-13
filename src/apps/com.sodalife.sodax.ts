// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sodalife.sodax",
  "name": "苏打校园",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "字节广告",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image < View +3 View > View > TextView[text$=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13400643"
        },
        {
          "name": "双十一广告",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": ".libraries.ads.gromore.GroMoreSplashActivity",
          "matches": "ViewGroup[childCount=2] > ViewGroup + ViewGroup[clickable=true][childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/13400653"
        },
        {
          "name": "双十一广告 (2)",
          "activityIds": "com.sodalife.sodax.libraries.ads.gromore.GroMoreSplashActivity",
          "matches": "ViewGroup[childCount=2] > ViewGroup + ViewGroup[clickable=true][childCount=1]",
          "snapshotUrls": "https://i.gkd.li/i/13400653"
        }
      ]
    }
  ]
});

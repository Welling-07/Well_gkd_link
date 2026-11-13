// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.chinarainbow.tft",
  "name": "天府通",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "Image[text=\"\"] < @View +4 [text=\"反馈\"]",
          "snapshotUrls": "https://i.gkd.li/i/13269854",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "activityIds": ".mvp.ui.activity.QrcodeScanCompletedActivity",
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13468554",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down_after_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13468554",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sqsp.movie",
  "name": "视趣",
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
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] -(2,4) @View[visibleToUser=true][childCount=1] > Image[text=\"\"]",
          "exampleUrls": "https://m.gkd.li/57941037/640c42bf-5279-4ab5-a3bc-e264a99af2ac",
          "snapshotUrls": [
            "https://i.gkd.li/i/15342445",
            "https://i.gkd.li/i/15374240"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

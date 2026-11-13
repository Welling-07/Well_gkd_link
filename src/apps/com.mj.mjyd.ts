// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mj.mjyd",
  "name": "追漫大全",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
          "matches": "@ImageView < FrameLayout[childCount=1] <3 FrameLayout[childCount=5] <3 FrameLayout[childCount=5] >3 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/12895086"
        },
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <2 FrameLayout[childCount=6] >3 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/12877729",
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T"
        }
      ]
    }
  ]
});

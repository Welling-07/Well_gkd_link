// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.ms.pages",
  "name": "飞鸟听书",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "name": "字节广告",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[text=\"\"] < View +n View > View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13450787"
        },
        {
          "fastQuery": true,
          "activityIds": ".ActivityLingPai",
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/16136277"
        },
        {
          "fastQuery": true,
          "activityIds": ".ActivityLingPai",
          "matches": [
            "[text=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/16136271"
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] +3 View > [text$=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/16136260"
        },
        {
          "fastQuery": true,
          "activityIds": "cn.ms.pages.ActivityLingPai",
          "matches": "ImageView < @ViewGroup[clickable=true] < ViewGroup +n ViewGroup [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/16136277"
        },
        {
          "fastQuery": true,
          "activityIds": "cn.ms.pages.ActivityLingPai",
          "matches": [
            "[text=\"广告\"]",
            "[text=\"跳过\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/16136271"
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-看视频得奖励广告",
      "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
      "fastQuery": true,
      "rules": [
        {
          "matches": "@RelativeLayout[childCount=0][clickable=true] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "exampleUrls": "https://m.gkd.li/57941037/fd1ff96e-6d17-4738-a2f1-3648169ce53c",
          "snapshotUrls": "https://i.gkd.li/i/16136235",
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"坚持退出\"]",
          "exampleUrls": "https://m.gkd.li/57941037/f09986f3-6dc6-4067-9136-ac6aa0afad3f",
          "snapshotUrls": "https://i.gkd.li/i/16136240",
          "fastQuery": true,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
        },
        {
          "matches": "[id=\"android:id/content\"] >2 FrameLayout[childCount=3] >2 FrameLayout[childCount=3] >3 RelativeLayout[clickable=true]",
          "exampleUrls": "https://m.gkd.li/57941037/fd1ff96e-6d17-4738-a2f1-3648169ce53c",
          "snapshotUrls": "https://i.gkd.li/i/16136235",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "fastQuery": true,
          "matches": "[text=\"坚持退出\"]",
          "exampleUrls": "https://m.gkd.li/57941037/f09986f3-6dc6-4067-9136-ac6aa0afad3f",
          "snapshotUrls": "https://i.gkd.li/i/16136240",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
        }
      ]
    }
  ]
});

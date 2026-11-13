// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "npgl.jsitcx.xlpqi",
  "name": "NP管理器",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text$=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12799926"
        },
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "@Image[id=null][text=\"\"] < View + View +n [text=\"反馈\"] +n View > View > TextView[text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12799942",
            "https://i.gkd.li/i/12800095"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-卡片广告",
      "activityIds": [
        "flc.ast.HomeActivity",
        "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
      ],
      "rules": [
        {
          "matches": "@Image[childCount=0][visibleToUser=true][width<80 && height<80] < View[childCount=1] +n View[childCount=2] >(2,3) [text=\"广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12799977",
            "https://i.gkd.li/i/12800107"
          ],
          "activityIds": [
            "flc.ast.HomeActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "matches": "@Image[childCount=0][visibleToUser=true][width<80 && height<80] < View[childCount=1] -3 View >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12800034",
          "excludeSnapshotUrls": "https://i.gkd.li/i/12800162",
          "activityIds": [
            "flc.ast.HomeActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "preKeys": [
            0,
            1
          ],
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12799995",
          "activityIds": [
            "flc.ast.HomeActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "matches": "@Image < View + View >2 Image",
          "snapshotUrls": [
            "https://i.gkd.li/i/12799977",
            "https://i.gkd.li/i/12800107"
          ],
          "activityIds": [
            "flc.ast.HomeActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "matches": "Image < View < View +n View > Image[visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12800034",
            "https://i.gkd.li/i/12800162"
          ],
          "activityIds": [
            "flc.ast.HomeActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        },
        {
          "preKeys": [
            3,
            4
          ],
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12799995",
          "activityIds": [
            "flc.ast.HomeActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ]
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.firebear.androil",
  "name": "小熊油耗",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "desc": "来自第三方SDK\"穿山甲\"",
      "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
      "rules": [
        {
          "name": "点击右上角x",
          "matches": "[text=\"反馈\"] +2 View > Image",
          "snapshotUrls": [
            "https://i.gkd.li/i/12754919",
            "https://i.gkd.li/i/13324698"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
        },
        {
          "name": "点击右上角[数字s|跳过]",
          "matches": "[text=\"广告\"] + View >4 [text=\"| 跳过\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12864214"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
        },
        {
          "name": "点击右上角x (2)",
          "matches": "[id=\"com.byted.pangle.m:id/tt_reward_full_count_down\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13175439"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "activityIds": "com.firebear.androil.app.home.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12755032",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".app.home.MainActivity",
          "matches": "@[vid=\"dismissNtfImgView\"] < RelativeLayout - [vid=\"contentLay\"] >3 TextView[text^=\"升级\"]",
          "snapshotUrls": "https://i.gkd.li/i/12755032",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[id=\"com.firebear.androil:id/dismissNtfImgView\"] < RelativeLayout - [id=\"com.firebear.androil:id/contentLay\"] >3 TextView[text^=\"升级\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.firebear.androil.app.home.MainActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionCdKey": 0,
      "actionMaximumKey": 0,
      "fastQuery": true,
      "priorityTime": 10000,
      "rules": [
        {
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/12712742",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13088169",
            "https://i.gkd.li/i/12855707",
            "https://i.gkd.li/i/13927561"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000,
          "actionCdKey": 0,
          "fastQuery": true
        },
        {
          "matches": "@View <2 * <2 * < [id=\"com.firebear.androil:id/adContainerLay\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13088169",
            "https://i.gkd.li/i/12855707",
            "https://i.gkd.li/i/13927561"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "priorityTime": 10000
        }
      ]
    }
  ]
});

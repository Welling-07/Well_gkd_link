// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.pleasure.trace_wechat",
  "name": "微拾",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-我的页面卡片广告",
      "desc": "需点击二次弹窗确认",
      "fastQuery": true,
      "activityIds": "com.camellia.trace.activity.MainActivity",
      "rules": [
        {
          "name": "点击关闭",
          "matches": "View < @FrameLayout[desc^=\"dislike\"] <<n [vid=\"adsuyi_id_view_response\"]",
          "snapshotUrls": "https://i.gkd.li/i/13479466",
          "fastQuery": true,
          "activityIds": "com.camellia.trace.activity.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "关闭原因\"不感兴趣\"",
          "matches": "@LinearLayout > [id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13479469",
          "fastQuery": true,
          "activityIds": "com.camellia.trace.activity.MainActivity"
        },
        {
          "name": "点击\"x\"",
          "matches": "View < @FrameLayout[desc^=\"dislike\"] <<n [id=\"com.pleasure.trace_wechat:id/adsuyi_id_view_response\"]",
          "snapshotUrls": "https://i.gkd.li/i/13479466",
          "fastQuery": true,
          "activityIds": "com.camellia.trace.activity.MainActivity"
        },
        {
          "preKeys": 2,
          "name": "关闭原因\"不感兴趣\" (2)",
          "matches": "@LinearLayout > [id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13479469",
          "fastQuery": true,
          "activityIds": "com.camellia.trace.activity.MainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "matches": "[text=\"反馈\"] -2 @View > Image",
          "snapshotUrls": "https://i.gkd.li/i/13479468"
        }
      ]
    },
    {
      "key": 2,
      "name": "未分类-我的-卡片式广告",
      "desc": "需点击二次弹窗确认",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.camellia.trace.activity.MainActivity",
      "rules": [
        {
          "name": "点击【x】",
          "matches": "View < @FrameLayout[desc^=\"dislike\"] <<n [id=\"com.pleasure.trace_wechat:id/adsuyi_id_view_response\"]",
          "snapshotUrls": "https://i.gkd.li/i/13479466",
          "fastQuery": true,
          "activityIds": "com.camellia.trace.activity.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "关闭原因【不感兴趣】",
          "matches": "@LinearLayout > [id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13479469",
          "fastQuery": true,
          "activityIds": "com.camellia.trace.activity.MainActivity"
        }
      ]
    }
  ]
});

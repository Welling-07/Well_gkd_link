// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.wework",
  "name": "企业微信",
  "groups": [
    {
      "key": 1,
      "name": "分段广告-顶部卡片广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".launch.WwMainActivity",
          "matches": "ImageView[clickable=true][childCount=0] < ViewFlipper[childCount=1] + @ImageView[clickable=true][visibleToUser=true][width<140 && height<140] <n RelativeLayout <<n RecyclerView[childCount>10] <n FrameLayout <n ViewGroup - RelativeLayout >4 [text=\"工作台\"]",
          "exampleUrls": "https://e.gkd.li/e0c4aa4a-fd8b-4440-920b-f96eec60baa1",
          "snapshotUrls": [
            "https://i.gkd.li/i/16977927",
            "https://i.gkd.li/i/24099806"
          ]
        },
        {
          "preKeys": 0,
          "fastQuery": true,
          "activityIds": ".launch.WwMainActivity",
          "matches": "[text=\"关闭\"]",
          "exampleUrls": "https://e.gkd.li/e4a71c0c-c0ce-4822-ae69-4a3330a28a84",
          "snapshotUrls": "https://i.gkd.li/i/16977929"
        },
        {
          "fastQuery": true,
          "activityIds": "com.tencent.wework.launch.WwMainActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] - ViewFlipper < RelativeLayout < LinearLayout < LinearLayout < RecyclerView < FrameLayout <2 ViewGroup - RelativeLayout >4 [text=\"工作台\"]",
          "exampleUrls": "https://e.gkd.li/e0c4aa4a-fd8b-4440-920b-f96eec60baa1",
          "snapshotUrls": "https://i.gkd.li/i/16977927"
        },
        {
          "preKeys": 2,
          "fastQuery": true,
          "activityIds": "com.tencent.wework.launch.WwMainActivity",
          "matches": "[text=\"关闭\"]",
          "exampleUrls": "https://e.gkd.li/e4a71c0c-c0ce-4822-ae69-4a3330a28a84",
          "snapshotUrls": "https://i.gkd.li/i/16977929"
        }
      ]
    },
    {
      "key": 2,
      "name": "权限提示-悬浮窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".common.controller.DialogActivityUtil",
          "matches": [
            "[text^=\"请开启悬浮窗\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/24230054"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xingluo.allcolor",
  "name": "一起来涂色",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-底部穿山甲广告",
      "desc": "点击卡片广告x关闭按钮-关闭反馈理由弹窗",
      "activityIds": [
        "com.cccgame.android.MainActivity",
        "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
      ],
      "rules": [
        {
          "matches": "@Image[childCount=0][visibleToUser=true] < View[childCount=1] + View[childCount=2] >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12640359",
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        },
        {
          "matches": "@Image[id=null] < View -2 View > View > View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12640362",
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] + FrameLayout >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12640374",
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        },
        {
          "matches": "@Image[id=null] < View - View > View + View > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12640406",
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2
          ],
          "name": "穿山甲广告-反馈理由",
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12640358",
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        },
        {
          "matches": [
            "[text=\"广告\"] < * - View < * - View > Image[id=null]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12640359"
          ],
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        },
        {
          "matches": [
            "@Image[id=null] < View -(2) View > View > View > TextView[text=\"广告\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12640362"
          ],
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        },
        {
          "matches": [
            "@View[id=null] < FrameLayout[desc^=\"dislike\"] + FrameLayout >(2) TextView[text=\"广告\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12640374"
          ],
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        },
        {
          "matches": [
            "@Image[id=null] < View - View > View + View > TextView[text=\"广告\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12640406"
          ],
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        },
        {
          "preKeys": [
            5,
            6,
            7
          ],
          "name": "穿山甲广告-反馈理由 (2)",
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12640358",
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        },
        {
          "preKeys": [
            5,
            6,
            7,
            8
          ],
          "name": "穿山甲广告-反馈理由 (3)",
          "matches": "[id=\"com.byted.pangle:id/tt_item_tv\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12640358",
          "activityIds": [
            "com.cccgame.android.MainActivity",
            "com.bytedance.sdk.openadsdk.core.dislike.ui.c"
          ]
        }
      ]
    }
  ]
});

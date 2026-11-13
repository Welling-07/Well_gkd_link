// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "org.gushiwen.gushiwen",
  "name": "古诗文网",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-弹窗广告",
      "rules": [
        {
          "actionDelay": 500,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "@Image < View[width<100] <n View > [text=\"反馈\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12837225",
            "https://i.gkd.li/i/12876086",
            "https://i.gkd.li/i/12876067",
            "https://i.gkd.li/i/12837225",
            "https://i.gkd.li/i/12912911",
            "https://i.gkd.li/i/13171930"
          ]
        },
        {
          "actionDelay": 500,
          "activityIds": ".HomeActivity",
          "matches": "@FrameLayout  +2 FrameLayout > LinearLayout > LinearLayout > [text^=\"摇动\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13266879"
          ]
        },
        {
          "actionDelay": 500,
          "fastQuery": true,
          "activityIds": ".HomeActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "exampleUrls": "https://e.gkd.li/71e9b352-e2a9-427e-bcbb-71510ed066b2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813618",
            "https://i.gkd.li/i/18047950"
          ]
        },
        {
          "actionDelay": 500,
          "fastQuery": true,
          "activityIds": ".HomeActivity",
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "exampleUrls": "https://e.gkd.li/f6d34c18-e426-48dd-8030-4471cded8208",
          "snapshotUrls": "https://i.gkd.li/i/18047949"
        },
        {
          "actionDelay": 500,
          "fastQuery": true,
          "activityIds": "com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity",
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "exampleUrls": "https://e.gkd.li/012f64ec-b3ed-4472-8d07-8ed3b4ad6c07",
          "snapshotUrls": "https://i.gkd.li/i/13059294"
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3,
            4
          ],
          "name": "打赏页面-点击返回按钮",
          "activityIds": [
            "local.z.androidshared.vip.RewardActivity",
            "local.z.androidshared.pay.RewardActivity"
          ],
          "matches": "[vid=\"btn_back\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813638",
            "https://i.gkd.li/i/13111042"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3,
            4
          ],
          "name": "荣誉会员-点击返回按钮",
          "activityIds": [
            "local.z.androidshared.vip.member.VipActivity",
            "local.z.androidshared.pay.vip.VipActivity"
          ],
          "matches": "[vid=\"backBtn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12837229",
            "https://i.gkd.li/i/13111057"
          ]
        },
        {
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "matches": "@[width>1 && width<65] < FrameLayout - [name=\"android.widget.ImageView\"||name=\"android.widget.FrameLayout\"||name=\"android.widget.LinearLayout\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813618",
            "https://i.gkd.li/i/12903835",
            "https://i.gkd.li/i/12903885",
            "https://i.gkd.li/i/12876077",
            "https://i.gkd.li/i/13059294"
          ]
        },
        {
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "matches": "@FrameLayout  +2 FrameLayout > LinearLayout > LinearLayout > [text^=\"摇动\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13266879"
          ]
        },
        {
          "preKeys": [
            7,
            0,
            8
          ],
          "name": "打赏页面-点击返回按钮 (2)",
          "activityIds": [
            "local.z.androidshared.vip.RewardActivity",
            "local.z.androidshared.pay.RewardActivity"
          ],
          "matches": "[id=\"org.gushiwen.gushiwen:id/btn_back\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813638",
            "https://i.gkd.li/i/13111042"
          ]
        },
        {
          "preKeys": [
            7,
            0,
            8
          ],
          "name": "荣誉会员-点击返回按钮 (2)",
          "activityIds": [
            "local.z.androidshared.vip.member.VipActivity",
            "local.z.androidshared.pay.vip.VipActivity"
          ],
          "matches": "[id=\"org.gushiwen.gushiwen:id/backBtn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12837229",
            "https://i.gkd.li/i/13111057"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-应用内广告弹窗",
      "enable": false,
      "rules": [
        {
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "matches": "@[width>1 && width<65] < FrameLayout - [name=\"android.widget.ImageView\"||name=\"android.widget.FrameLayout\"||name=\"android.widget.LinearLayout\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813618",
            "https://i.gkd.li/i/12903835",
            "https://i.gkd.li/i/12903885",
            "https://i.gkd.li/i/12876077",
            "https://i.gkd.li/i/13059294"
          ]
        },
        {
          "actionDelay": 500,
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "matches": "@Image < View[width<100] <n View > [text=\"反馈\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12837225",
            "https://i.gkd.li/i/12876086",
            "https://i.gkd.li/i/12876067",
            "https://i.gkd.li/i/12837225",
            "https://i.gkd.li/i/12912911",
            "https://i.gkd.li/i/13171930"
          ]
        },
        {
          "actionDelay": 500,
          "activityIds": "org.gushiwen.gushiwen.HomeActivity",
          "matches": "@FrameLayout  +2 FrameLayout > LinearLayout > LinearLayout > [text^=\"摇动\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13266879"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2
          ],
          "name": "打赏页面-点击返回按钮",
          "activityIds": [
            "local.z.androidshared.vip.RewardActivity",
            "local.z.androidshared.pay.RewardActivity"
          ],
          "matches": "[id=\"org.gushiwen.gushiwen:id/btn_back\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813638",
            "https://i.gkd.li/i/13111042"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2
          ],
          "name": "荣誉会员-点击返回按钮",
          "activityIds": [
            "local.z.androidshared.vip.member.VipActivity",
            "local.z.androidshared.pay.vip.VipActivity"
          ],
          "matches": "[id=\"org.gushiwen.gushiwen:id/backBtn\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12837229",
            "https://i.gkd.li/i/13111057"
          ]
        }
      ]
    }
  ]
});

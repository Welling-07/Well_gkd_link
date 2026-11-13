// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.taobao.etao",
  "name": "一淘",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "activityIds": ".app.homev4.HomeV4Activity",
      "rules": [
        {
          "matches": "@ImageView[width<150 && height<150] <2 FrameLayout < [vid=\"dialog_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/30859236",
          "fastQuery": true,
          "activityIds": ".app.homev4.HomeV4Activity"
        },
        {
          "matches": "ImageView[width<150 && height<150] < @[clickable=true] + [vid=\"dialog_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/30859577",
          "fastQuery": true,
          "activityIds": ".app.homev4.HomeV4Activity"
        },
        {
          "matches": "@View[id=null][visibleToUser=true][width<150 && height<150][parent.childCount=3] <<n [vid=\"dialog_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/30859628",
          "fastQuery": true,
          "activityIds": ".app.homev4.HomeV4Activity"
        },
        {
          "activityIds": ".app.home.view.NewHomeActivity",
          "matches": "ImageView[width<150 && height<150] < @RelativeLayout[clickable=true][childCount=1] <2 [childCount=2] < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/30859526",
          "fastQuery": true
        },
        {
          "activityIds": [
            "com.taobao.etao.app.home.view.NewHomeActivity",
            "com.taobao.etao.app.homev4.HomeV4Activity"
          ],
          "matches": "LinearLayout[childCount=2] > @RelativeLayout[clickable=true][childCount=1] > ImageView[childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12739581",
            "https://i.gkd.li/i/13670025"
          ],
          "fastQuery": true
        },
        {
          "activityIds": "com.taobao.etao.app.homev4.HomeV4Activity",
          "matches": "[text=\"一淘-首页红包升级-2312wf\"] >5 View[childCount=3] > View[index=0][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/db5c7761-3a8b-4bc6-a61c-65dd30f61b9f",
          "snapshotUrls": "https://i.gkd.li/i/14622468",
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "点击x掉",
      "matchTime": 10000,
      "actionMaximum": 3,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            "com.taobao.sns.app.message.MessageActivity",
            ".mine.MetaXMineActivity",
            ".app.homev4.HomeV4Activity"
          ],
          "matches": "@[text=null][clickable=true][width<150][childCount=0] -(1,2) [text*=\"开\"][text*=\"通知\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12684278",
            "https://i.gkd.li/i/12684351",
            "https://i.gkd.li/i/30634250"
          ],
          "actionMaximum": 3,
          "resetMatch": "app",
          "matchTime": 10000
        },
        {
          "matches": "[text^=\"打开消息通知\"] + [text=\"去开启\"] + ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12684278",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"打开消息通知\"] + FrameLayout > [text=\"去开启\"] < FrameLayout + ImageView[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12684351",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": [
        "https://i.gkd.li/i/12684250",
        "https://i.gkd.li/i/12727457",
        "https://i.gkd.li/i/12684244"
      ],
      "rules": [
        {
          "matches": "@[text=\"取消\"] < * > [text=\"好,升级\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

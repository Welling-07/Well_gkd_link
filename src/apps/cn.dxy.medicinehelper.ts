// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.dxy.medicinehelper",
  "name": "用药助手",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".activity.MainComposeActivity",
            "cn.dxy.drugscomm.business.medadviser.detail.MedAdviserDetailComposeActivity"
          ],
          "matches": [
            "[text*=\"新版本\" || text$=\"更新\"][visibleToUser=true]",
            "[vid=\"iv_close\"][clickable=true]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/25292995",
            "https://i.gkd.li/i/25459354"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "cn.dxy.drugscomm.business.guide.detail.GuideDetailComposeActivity",
          "matches": "[text^=\"开通会员后\"] -n @ImageView[clickable=true][width<100] <2 View <<4 [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/25247659"
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "cn.dxy.drugscomm.business.ebm.EbmContentComposeActivity",
          "matches": "@ImageView[clickable=true] - View[text=null] < View[index=parent.childCount.minus(1)] <n View <<2 ComposeView < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/25247624",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26222550",
          "exampleUrls": "https://e.gkd.li/8d879578-6ac6-4252-ab40-5a1101082538"
        },
        {
          "fastQuery": true,
          "activityIds": "cn.dxy.drugscomm.business.guide.simple.GuideSimpleComposeActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] - ImageView -n * < View < * < ComposeView < [id=\"android:id/content\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/25460814",
            "https://i.gkd.li/i/25460845"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": ".user.biz.subscribe.list.SubscriptionCenterListComposeActivity",
          "matches": "@ImageView[clickable=true][visibleToUser=true] - [text=\"去添加\"] <3 View -2 [text=\"我的订阅\"] <(1,2) View <2 * < * < ComposeView < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/25460862"
        },
        {
          "fastQuery": true,
          "activityIds": "cn.dxy.drugscomm.business.drug.detail.DrugDetailComposeActivity",
          "matches": "@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] - View[text=null] < View[childCount=2] -n * < View < * < ComposeView < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26178988",
          "excludeSnapshotUrls": "https://i.gkd.li/i/26222375",
          "exampleUrls": "https://e.gkd.li/3795ef23-bcb4-48ac-a60b-52c49c6a3d67"
        },
        {
          "fastQuery": true,
          "activityIds": ".activity.MainComposeActivity",
          "matches": "@ImageView[index=parent.childCount.minus(1)] -2 * < View < ScrollView < * < ComposeView <2 ScrollView < * < View < * < * < ComposeView < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/26179229",
          "exampleUrls": "https://e.gkd.li/f2ac7d23-43a1-4729-b6fa-f45584afb395"
        }
      ]
    },
    {
      "key": 6,
      "name": "评价提示",
      "desc": "问是否有帮助 x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "cn.dxy.drugscomm.business.medadviser.detail.MedAdviserDetailComposeActivity",
          "matches": "@ImageView[clickable=true] -n TextView[text*=\"有帮助吗\"] <2 View <<3 ComposeView < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/25247634"
        }
      ]
    }
  ]
});

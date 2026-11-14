// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.alicloud.databox",
  "name": "阿里云盘",
  "groups": [
    {
      "key": 1,
      "name": "全屏广告-活动弹窗",
      "activityIds": "com.alicloud.databox.MainActivity",
      "snapshotUrls": [
        "https://i.gkd.li/i/13228610",
        "https://i.gkd.li/i/14235204"
      ],
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@TextView[clickable=true][visibleToUser=true] - Image[text!=null] < View < View < View < WebView < WebView < [vid=\"webContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/14235204",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[id=\"com.alicloud.databox:id/webContainer\"] >5 View[childCount=3] > TextView[index=1]",
          "activityIds": "com.alicloud.databox.MainActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"好运盲盒\"] >n View > Image + TextView[clickable=true]",
          "activityIds": "com.alicloud.databox.MainActivity",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "更新提示",
      "order": -9,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": "com.alicloud.databox.MainActivity",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "[text*=\"新版本\"] -n @[clickable=true][getChild(0).name$=\"Image\"] <<4 [id=\"root\"] <<3 [vid=\"webContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806865",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text^=\"立即了解\"] -3 @View[clickable=true] <<n [vid=\"webContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/13806865",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.alicloud.databox.MainActivity"
        },
        {
          "matches": "[text^=\"立即了解\"] -3 View[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13806865",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": "com.alicloud.databox.MainActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "全屏广告-[容量使用超限]提示",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": [
            "[text=\"容量使用超限\"]",
            "[vid=\"layout_close\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/a219a480-c0a3-4064-832d-533f66995fed",
          "snapshotUrls": "https://i.gkd.li/i/15158788"
        },
        {
          "fastQuery": true,
          "activityIds": "com.alicloud.databox.MainActivity",
          "matches": [
            "[text=\"容量使用超限\"]",
            "[vid=\"layout_close\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/a219a480-c0a3-4064-832d-533f66995fed",
          "snapshotUrls": "https://i.gkd.li/i/15158788"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".transferpage.TransferListActivity",
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15433289",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.alicloud.databox.transferpage.TransferListActivity",
          "matches": "[vid=\"close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15433289",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.alicloud.databox.MainActivity",
          "matches": "[vid=\"ivTitleAction\"]",
          "snapshotUrls": "https://i.gkd.li/i/15524767",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 8,
      "name": "全屏广告-签到任务完成弹窗",
      "desc": "点击x",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.alicloud.databox.navigation.NavigationFragmentContainerActivity",
      "exampleUrls": "https://m.gkd.li/101449500/9f0fb5fb-cb5a-4a11-9a6c-595b8795baad",
      "snapshotUrls": "https://i.gkd.li/i/14895886",
      "rules": [
        {
          "matches": "[vid=\"layoutLuckyBottle\"] >3 [vid=\"ivClose\"]",
          "fastQuery": true,
          "activityIds": "com.alicloud.databox.navigation.NavigationFragmentContainerActivity"
        }
      ]
    }
  ]
});

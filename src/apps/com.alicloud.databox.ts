// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.alicloud.databox",
  "name": "阿里云盘",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动签到",
      "fastQuery": true,
      "activityIds": [
        ".MainActivity",
        ".navigation.NavigationFragmentContainerActivity"
      ],
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text=\"领取\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15573070",
            "https://i.gkd.li/i/15573233"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".MainActivity",
            ".navigation.NavigationFragmentContainerActivity"
          ]
        },
        {
          "preKeys": 0,
          "action": "back",
          "matches": "[vid=\"ivCardBackBackground\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15144565",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            ".MainActivity",
            ".navigation.NavigationFragmentContainerActivity"
          ]
        },
        {
          "matches": "[text=\"领取\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/15573070",
            "https://i.gkd.li/i/15573233"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.alicloud.databox.MainActivity",
            "com.alicloud.databox.navigation.NavigationFragmentContainerActivity"
          ]
        },
        {
          "preKeys": 2,
          "action": "back",
          "matches": "[vid=\"ivCardBackBackground\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15144565",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": [
            "com.alicloud.databox.MainActivity",
            "com.alicloud.databox.navigation.NavigationFragmentContainerActivity"
          ]
        },
        {
          "name": "自动点击签到",
          "matches": "[id=\"com.alicloud.databox:id/tvTaskAction\"][text=\"领取\"]",
          "snapshotUrls": "https://i.gkd.li/i/12929318",
          "fastQuery": true,
          "activityIds": [
            "com.alicloud.databox.MainActivity",
            "com.alicloud.databox.navigation.NavigationFragmentContainerActivity"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "preKeys": 4,
          "name": "关闭弹窗",
          "actionMaximum": 2,
          "matches": "[vid=\"ivClose\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13038304",
            "https://i.gkd.li/i/14235221",
            "https://i.gkd.li/i/15119433"
          ],
          "fastQuery": true,
          "activityIds": [
            "com.alicloud.databox.MainActivity",
            "com.alicloud.databox.navigation.NavigationFragmentContainerActivity"
          ],
          "matchTime": 10000,
          "resetMatch": "app"
        }
      ]
    },
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
      "key": 3,
      "name": "功能类-[开启相册自动备份功能]弹窗",
      "desc": "关闭弹窗",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@TextView[childCount=0][clickable=true][visibleToUser=true] <4 View[childCount=4] < View < View < WebView < WebView < [vid=\"webContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/14414446"
        },
        {
          "activityIds": "com.alicloud.databox.MainActivity",
          "matches": "[vid=\"webContainer\"] >5 View[childCount=4] > TextView[index=3][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14414446"
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-扫描二维码登录时自动点击登录",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": "com.taobao.login4android.scan.QrScanActivity",
          "matches": "[text=\"确认并登录\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14414503",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
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
      "key": 7,
      "name": "功能类-时光设备间页面自动点击“开心收下”",
      "enable": false,
      "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
      "actionMaximum": 1,
      "resetMatch": "activity",
      "matchTime": 10000,
      "snapshotUrls": "https://i.gkd.li/i/13596924",
      "rules": [
        {
          "matches": "View[childCount=9] > @Image -2 View[childCount=5]",
          "activityIds": "com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main",
          "actionMaximum": 1,
          "resetMatch": "activity",
          "matchTime": 10000
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

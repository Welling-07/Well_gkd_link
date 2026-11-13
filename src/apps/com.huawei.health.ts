// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huawei.health",
  "name": "华为运动健康",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "priorityTime": 10000,
      "rules": [
        {
          "action": "clickCenter",
          "matches": "[vid=\"hiad_skip_text\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13215012",
            "https://i.gkd.li/i/13228290"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[id$=\"hiad_skip_text\"]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12667766",
            "https://i.gkd.li/i/13215012",
            "https://i.gkd.li/i/13228290"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": "com.huawei.watchface.api.WebViewActivity",
          "matches": "View[childCount=2] > View + View[childCount=1] > Image[childCount=0]",
          "snapshotUrls": "https://i.gkd.li/i/13546292"
        }
      ]
    },
    {
      "key": 2,
      "name": "其他-个性化推荐弹窗",
      "rules": [
        {
          "activityIds": "com.huawei.watchface.api.WebViewActivity",
          "matches": "[text=\"开启个性化推荐\"] +2 [text=\"开启\"] + Button[clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/13546292"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "[vid=\"marketing_close_icon\" || vid=\"close_button_layout\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13587206",
            "https://i.gkd.li/i/23763115"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "其他-请求开启[实时推送步数]弹窗",
      "desc": "点击取消",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": [
            "[text*=\"实时推送步数\" || text*=\"通知栏实时显示步数\"][visibleToUser=true]",
            "[text*=\"取消\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/12af7c3a-3d53-43f0-880e-130135bad1a3",
          "snapshotUrls": [
            "https://i.gkd.li/i/14321121",
            "https://i.gkd.li/i/16494762"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": [
            "[text*=\"是否开启计步功能\"][visibleToUser=true]",
            "[text*=\"取消\"][visibleToUser=true]"
          ],
          "exampleUrls": "https://e.gkd.li/ab4e3797-40e6-4d1e-96b2-c098e78cf848",
          "snapshotUrls": "https://i.gkd.li/i/20499245",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 5,
      "name": "更新提示",
      "order": -9,
      "fastQuery": true,
      "actionMaximum": 1,
      "matchTime": 10000,
      "resetMatch": "app",
      "rules": [
        {
          "action": "back",
          "activityIds": "com.huawei.hwversionmgr.activity.AppUpdateDialogActivity",
          "matches": "[text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/15521811",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "action": "back",
          "matches": "[text=\"发现新版本\"]",
          "snapshotUrls": "https://i.gkd.li/i/15521811",
          "fastQuery": true,
          "actionMaximum": 1,
          "matchTime": 10000,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "局部广告-“我的”页会员广告",
      "enable": false,
      "activityIds": [
        "com.huawei.health.MainActivity"
      ],
      "rules": [
        {
          "matches": "[id=\"com.huawei.health:id/item_banner_ad_close_icon\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12667814"
          ],
          "activityIds": [
            "com.huawei.health.MainActivity"
          ]
        }
      ]
    },
    {
      "key": 7,
      "name": "功能类-请求开启个性化推荐弹窗",
      "enable": false,
      "activityIds": "com.huawei.watchface.api.WebViewActivity",
      "snapshotUrls": "https://i.gkd.li/i/13546292",
      "rules": [
        {
          "matches": "[text=\"开启个性化推荐\"] +2 [text=\"开启\"] + Button",
          "activityIds": "com.huawei.watchface.api.WebViewActivity"
        }
      ]
    },
    {
      "key": 8,
      "name": "局部广告-底部横幅广告",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.huawei.health.MainActivity",
          "matches": "[id=\"com.huawei.health:id/marketing_close_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13587206"
        }
      ]
    },
    {
      "key": 9,
      "name": "功能类-请求开启[实时推送步数]弹窗",
      "desc": "点击取消",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.huawei.health.MainActivity",
          "matches": [
            "[text*=\"实时推送步数\" || text*=\"通知栏实时显示步数\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/7e9b7131-35ae-49dd-badf-13b6dae3aa96",
          "snapshotUrls": [
            "https://i.gkd.li/i/14321121",
            "https://i.gkd.li/i/16494762"
          ]
        }
      ]
    }
  ]
});

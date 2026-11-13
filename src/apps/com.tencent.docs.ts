// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.tencent.docs",
  "name": "腾讯文档",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13198082",
      "priorityTime": 10000,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] - [text^=\"互动广告\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13198082",
            "https://i.gkd.li/i/23557410"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "@LinearLayout > [id=\"com.tencent.docs:id/tv_gdt_ad_text\"]",
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
      "name": "更新提示",
      "order": -9,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13198091",
      "matchTime": 10000,
      "rules": [
        {
          "activityIds": ".DocsFlutterActivity",
          "matches": "@[desc=\"暂不更新\"] + [desc=\"现在更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/13198091",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[desc=\"暂不更新\"] + [desc=\"现在更新\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "activityIds": "com.tencent.docs.DocsFlutterActivity",
      "snapshotUrls": "https://i.gkd.li/i/13198097",
      "rules": [
        {
          "activityIds": ".DocsFlutterActivity",
          "matches": "@ImageView[clickable=true] - [desc=\"限时购买\"]",
          "snapshotUrls": "https://i.gkd.li/i/13198097"
        },
        {
          "matches": "[desc=\"限时购买\"] + ImageView[clickable=true]",
          "activityIds": "com.tencent.docs.DocsFlutterActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "全屏广告-弹窗广告",
      "actionDelay": 200,
      "activityIds": "com.tencent.docs.DocsFlutterActivity",
      "snapshotUrls": "https://i.gkd.li/i/13242404",
      "rules": [
        {
          "actionDelay": 200,
          "activityIds": ".DocsFlutterActivity",
          "matches": "View[childCount=2] > @TextView[id=null][clickable=true] + View",
          "snapshotUrls": "https://i.gkd.li/i/13242404"
        },
        {
          "matches": "View[childCount=2] > @TextView[id=null][clickable=true] + View",
          "actionDelay": 200,
          "activityIds": "com.tencent.docs.DocsFlutterActivity"
        }
      ]
    }
  ]
});

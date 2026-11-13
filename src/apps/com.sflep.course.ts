// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.sflep.course",
  "name": "WE Learn",
  "groups": [
    {
      "key": 0,
      "name": "功能类-离开考试页面弹窗",
      "desc": "点击确定",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.ClassActivity",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "matches": "@[text=\"确认\"][clickable=true] < * - [text^=\"系统检查到你离开了考试页面\"] <n Dialog <n * <<3 [vid=\"pp_about_content\"]",
          "snapshotUrls": "https://i.gkd.li/i/23150673"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "[text^=\"最新版本\"]",
            "[text=\"以后再说\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/23452864",
            "https://i.gkd.li/i/23452891"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-中断考试弹窗",
      "desc": "点击确定",
      "rules": [
        {
          "activityIds": ".activity.ClassActivity",
          "matches": "@[text=\"确认\"][clickable=true] <n * - [text=\"系统将自动保存已答题记录，确认中断本次考试？\"] <<n Dialog",
          "snapshotUrls": "https://i.gkd.li/i/23923998"
        }
      ]
    }
  ]
});

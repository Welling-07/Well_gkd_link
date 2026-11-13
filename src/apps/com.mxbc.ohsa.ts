// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.mxbc.ohsa",
  "name": "蜜雪冰城鸿蒙版",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".modules.main.MainAbilityShellActivity",
          "matches": "@UIComponent[id=\"Id_close\"] <2 UIComponentContainer < UIComponentContainer < UIComponentContainer < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/13728113",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.mxbc.ohsa.modules.main.MainAbilityShellActivity",
          "matches": "UIComponentContainer > [id=\"Id_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13728113",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

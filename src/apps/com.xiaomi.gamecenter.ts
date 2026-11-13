// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.gamecenter",
  "name": "小米游戏中心",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-首页右侧悬浮广告",
      "activityIds": "com.xiaomi.gamecenter.ui.MainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/12715800",
      "rules": [
        {
          "activityIds": ".ui.MainTabActivity",
          "matches": "[vid=\"ad_view\"] + [vid=\"close_btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/12715800"
        },
        {
          "matches": "[id=\"com.xiaomi.gamecenter:id/ad_view\"] + [id=\"com.xiaomi.gamecenter:id/close_btn\"]",
          "activityIds": "com.xiaomi.gamecenter.ui.MainTabActivity"
        }
      ]
    }
  ]
});

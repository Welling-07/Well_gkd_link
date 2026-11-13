// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.movie.store",
  "name": "影视仓",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "rules": [
        {
          "name": "快手广告",
          "activityIds": "com.github.tvbox.osc.ui.activity.mobile.MobileHomeActivity",
          "matches": "[text=\"广告\"] +2 View > View + TextView",
          "snapshotUrls": "https://i.gkd.li/i/13476107"
        },
        {
          "activityIds": "com.github.tvbox.osc.ui.activity.mobile.MobileHomeActivity",
          "matches": "[desc$=\"dislike\"][clickable=true][visibleToUser=true]",
          "exampleUrls": "https://m.gkd.li/57941037/df960a4d-764d-4a9e-bb1e-f0ab325e4cb0",
          "snapshotUrls": "https://i.gkd.li/i/14396706"
        }
      ]
    }
  ]
});

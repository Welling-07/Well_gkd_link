// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.hm.health",
  "name": "Zepp Life",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-首页-底部广告",
      "fastQuery": true,
      "activityIds": "com.xiaomi.hm.health.activity.ChannelMainTabActivity",
      "snapshotUrls": "https://i.gkd.li/i/13695424",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.ChannelMainTabActivity",
          "matches": "ImageView[vid=\"close_icon\"]",
          "snapshotUrls": "https://i.gkd.li/i/13695424"
        },
        {
          "matches": "ImageView[id=\"com.xiaomi.hm.health:id/close_icon\"]",
          "fastQuery": true,
          "activityIds": "com.xiaomi.hm.health.activity.ChannelMainTabActivity"
        }
      ]
    }
  ]
});

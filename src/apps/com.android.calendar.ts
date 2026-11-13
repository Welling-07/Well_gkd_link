// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.calendar",
  "name": "小米日历",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-卡片广告",
      "desc": "注意⚠️：该广告需开启[智能服务]的对应规则才能关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".homepage.AllInOneActivity",
          "matches": "[vid=\"close\"][desc=\"关闭广告卡片\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/23619245"
        }
      ]
    }
  ]
});

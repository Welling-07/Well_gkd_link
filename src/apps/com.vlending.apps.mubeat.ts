// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.vlending.apps.mubeat",
  "name": "Mubeat",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".activity.LauncherActivity",
          "matches": "@[desc=\"Close Ad\"][visibleToUser=true] > [text*=\"Ad\"]",
          "exampleUrls": "https://e.gkd.li/86c7a56e-190d-4063-9b38-e8cfd71381e2",
          "snapshotUrls": "https://i.gkd.li/i/18053470"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.hihonor.servicecenter",
  "name": "荣耀快服务",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.hihonor.servicecardcenter.activity.LauncherActivity",
          "matches": "[vid=\"float_cancel\"]",
          "exampleUrls": "https://m.gkd.li/57941037/b4c18338-c330-4deb-9689-3e7f2e2f32a8",
          "snapshotUrls": "https://i.gkd.li/i/14887872"
        }
      ]
    }
  ]
});

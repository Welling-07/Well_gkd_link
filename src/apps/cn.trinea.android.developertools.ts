// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.trinea.android.developertools",
  "name": "开发助手",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "c.b.a",
          "matches": "View[childCount=2] > View[childCount=1] + @Button[childCount=0] <<n [vid=\"alayout\"]",
          "exampleUrls": "https://m.gkd.li/57941037/6236d6de-c4e1-44d1-b6ff-f472996464a1",
          "snapshotUrls": "https://i.gkd.li/i/15140643"
        }
      ]
    }
  ]
});

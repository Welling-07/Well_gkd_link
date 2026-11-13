// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.at.a552360580763717",
  "name": "安心加速器",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "rules": [
        {
          "activityIds": "com.ft.movie.project_speed.MainActivity",
          "matches": "View[childCount=29 || childCount=30] > View[childCount=2] > ImageView[clickable=true][visibleToUser=true][index=0]",
          "exampleUrls": "https://e.gkd.li/089c780e-e37a-4c25-a375-ba7f67b5ae9b",
          "snapshotUrls": [
            "https://i.gkd.li/i/16784443",
            "https://i.gkd.li/i/16797995"
          ]
        }
      ]
    }
  ]
});

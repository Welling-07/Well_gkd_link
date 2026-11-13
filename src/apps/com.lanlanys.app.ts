// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lanlanys.app",
  "name": "懒懒视频",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": ".view.BaseActivity",
          "matches": "@ImageView[index=3][childCount=0][clickable=true][visibleToUser=true][text=null][id=null] <4 RelativeLayout[childCount>7] < RelativeLayout[childCount=1] < [parent=null]",
          "exampleUrls": "https://e.gkd.li/42ac7c76-362c-4f47-b4d8-ab9677246165",
          "snapshotUrls": [
            "https://i.gkd.li/i/17632595",
            "https://i.gkd.li/i/18699720"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

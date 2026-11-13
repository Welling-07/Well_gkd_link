// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "by.green.tuber",
  "name": "YouTube",
  "groups": [
    {
      "key": 0,
      "name": "功能类-关闭底部播放横条",
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "ImageButton[desc=\"预览缩略图\"] +2 LinearLayout > ImageButton + ImageButton[visibleToUser=true][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/24590682"
        }
      ]
    }
  ]
});

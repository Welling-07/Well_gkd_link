// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaofeiji.app.disk",
  "name": "小飞机网盘",
  "groups": [
    {
      "key": 0,
      "name": "分段广告",
      "desc": "点击关闭-点击不感兴趣",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": ".MainActivity",
          "matches": "@Image[visibleToUser=true] < View + View >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13857392",
          "fastQuery": true
        },
        {
          "preKeys": 0,
          "fastQuery": true,
          "activityIds": ".MainActivity",
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13857537"
        },
        {
          "activityIds": "com.xiaofeiji.app.disk.MainActivity",
          "matches": "@Image[visibleToUser=true] < View + View >2 [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13857392",
          "fastQuery": true
        },
        {
          "preKeys": 2,
          "activityIds": "com.xiaofeiji.app.disk.MainActivity",
          "matches": "[id=\"android:id/content\"] >5 [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/13857537",
          "fastQuery": true
        }
      ]
    }
  ]
});

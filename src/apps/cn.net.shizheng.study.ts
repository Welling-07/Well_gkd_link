// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.net.shizheng.study",
  "name": "365时政",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-首页弹窗广告",
      "activityIds": "cn.dingwei.cloud_classroom.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12708731",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": "cn.dingwei.cloud_classroom.MainActivity",
          "matches": "View[childCount=2] > ImageView[id=\"\"] + Button[id=\"\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/12708731",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 1,
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "activityIds": "cn.dingwei.cloud_classroom.MainActivity",
      "snapshotUrls": "https://i.gkd.li/i/12708731",
      "rules": [
        {
          "matches": "View[childCount=2] > ImageView[id=\"\"] + Button[id=\"\"][clickable=true]",
          "activityIds": "cn.dingwei.cloud_classroom.MainActivity"
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "cn.lezhi.speedtest",
  "name": "网速管家",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "actionMaximumKey": 0,
      "priorityTime": 10000,
      "rules": [
        {
          "name": "字节SDK",
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13544242",
            "https://i.gkd.li/i/13885906"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "name": "腾讯SDK",
          "fastQuery": true,
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13626049",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "actionMaximumKey": 0,
          "priorityTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "order": -9,
      "enable": false,
      "activityIds": "cn.lezhi.speedtest.main5.MainV5Activity",
      "snapshotUrls": "https://i.gkd.li/i/12727619",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[id=\"cn.lezhi.speedtest:id/rl_update_dialog_layout\"] >n [id=\"cn.lezhi.speedtest:id/iv_close\"]",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "cn.lezhi.speedtest.main5.MainV5Activity"
        }
      ]
    }
  ]
});

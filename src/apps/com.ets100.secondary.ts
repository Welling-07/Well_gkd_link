// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.ets100.secondary",
  "name": "E听说中学",
  "groups": [
    {
      "key": 0,
      "name": "更新提示",
      "desc": "不再提示-含泪拒绝",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "activityIds": ".ui.main.MainActivity",
      "rules": [
        {
          "name": "勾选不再提示",
          "matches": "[vid=\"tv_update_version\"] +2 @[vid=\"check_update_ignore\"][checked=false][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25992177",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": ".ui.main.MainActivity"
        },
        {
          "preKeys": 0,
          "name": "点击拒绝",
          "matches": "[vid=\"tv_update_version\"] +2 [vid=\"check_update_ignore\"][checked=true] +2 LinearLayout > [vid=\"btn_cancel\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/25992177",
          "exampleUrls": "https://e.gkd.li/4661aac2-0a7e-4ecf-9aae-a018cfe148b4",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true,
          "activityIds": ".ui.main.MainActivity"
        }
      ]
    }
  ]
});

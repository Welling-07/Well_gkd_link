// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jingcai.apps.qualitydev",
  "name": "到梦空间",
  "groups": [
    {
      "key": 0,
      "name": "功能类-学习活动",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.jingcai.apps.qualitydev.qualitync.activity_home.ActivityMainTab",
      "snapshotUrls": "https://i.gkd.li/i/14054117",
      "rules": [
        {
          "matches": "[text=\"立即参与\"][vid=\"tv_next\"] -2 [text=\"关闭\"][vid=\"tv_step\"]",
          "fastQuery": true,
          "activityIds": "com.jingcai.apps.qualitydev.qualitync.activity_home.ActivityMainTab"
        }
      ]
    }
  ]
});

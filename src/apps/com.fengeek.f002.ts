// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.fengeek.f002",
  "name": "fiil+",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动连接耳机",
      "desc": "点击连接耳机按钮,点击扫描到的第一个设备",
      "activityIds": ".MainActivity",
      "rules": [
        {
          "name": "点击连接耳机按钮",
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[vid=\"av_elc\"]",
          "snapshotUrls": "https://i.gkd.li/i/13161277",
          "activityIds": ".MainActivity"
        },
        {
          "preKeys": 0,
          "name": "点击扫描到的设备",
          "fastQuery": true,
          "matches": "[vid=\"device_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13161365",
          "activityIds": ".MainActivity"
        },
        {
          "name": "点击连接耳机按钮 (2)",
          "fastQuery": true,
          "action": "clickCenter",
          "matches": "[clickable=true][id=\"com.fengeek.f002:id/av_elc\"]",
          "snapshotUrls": "https://i.gkd.li/i/13161277",
          "activityIds": [
            "com.fengeek.f002.MainActivity"
          ]
        },
        {
          "preKeys": 2,
          "name": "点击扫描到的设备 (2)",
          "fastQuery": true,
          "action": "clickNode",
          "matches": "[clickable=true][id=\"com.fengeek.f002:id/device_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13161365",
          "activityIds": [
            "com.fengeek.f002.MainActivity"
          ]
        }
      ]
    }
  ]
});

// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xiaomi.smarthome",
  "name": "米家",
  "groups": [
    {
      "key": 0,
      "name": "局部广告-卡片广告",
      "activityIds": "com.xiaomi.smarthome.SmartHomeMainActivity",
      "rules": [
        {
          "activityIds": ".SmartHomeMainActivity",
          "matches": "RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]",
          "snapshotUrls": "https://i.gkd.li/i/12639658"
        },
        {
          "matches": "RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12639658"
          ],
          "activityIds": "com.xiaomi.smarthome.SmartHomeMainActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示-设备固件升级提示弹窗",
      "activityIds": "com.xiaomi.smarthome.framework.plugin.rn.PluginRNActivity",
      "snapshotUrls": "https://i.gkd.li/i/12639671",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "matches": "[text*=\"检测到\"&&text*=\"升级\"] < ViewGroup + ViewGroup > Button > [text = \"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/12639671",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "activityIds": "com.xiaomi.smarthome.framework.plugin.rn.PluginRNActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-顶部横幅",
      "desc": "点击x掉",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".framework.plugin.rn.PluginRNActivity",
          "matches": "@[desc=\"关闭\"] <3 ViewGroup < [visibleToUser=true] <2 [childCount=2] < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/29299389"
        }
      ]
    }
  ]
});

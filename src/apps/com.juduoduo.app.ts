// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.juduoduo.app",
  "name": "剧多多",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "rules": [
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/13705650",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[vid=\"ksad_tk_view\"] @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13705662",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "ImageView[width<90][height<90] < @ViewGroup[clickable=true] <<n [id=\"com.juduoduo.app:id/ksad_tk_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/13705650",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        },
        {
          "matches": "[id=\"com.juduoduo.app:id/ksad_tk_view\"] @ViewGroup[clickable=true] > [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/13705662",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "fastQuery": true
        }
      ]
    }
  ]
});

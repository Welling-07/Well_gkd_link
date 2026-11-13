// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.lemon.lv",
  "name": "剪映",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-导出界面底部广告",
      "desc": "点击[关闭]-点击[不感兴趣]",
      "fastQuery": true,
      "activityIds": "com.vega.export.edit.view.ExportActivity",
      "rules": [
        {
          "name": "点击[关闭]",
          "matches": "LynxAdComponentView < * > @FlattenUIImage <<n [vid=\"exportAdContainer\"]",
          "snapshotUrls": "https://i.gkd.li/i/14648627",
          "fastQuery": true,
          "activityIds": "com.vega.export.edit.view.ExportActivity"
        },
        {
          "preKeys": 0,
          "name": "点击[不感兴趣]",
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/14648626",
          "fastQuery": true,
          "activityIds": "com.vega.export.edit.view.ExportActivity"
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-选择素材界面上方广告",
      "activityIds": "com.vega.libcutsame.select.view.CutSameSelectMediaActivity",
      "snapshotUrls": "https://i.gkd.li/i/14122865",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.vega.libcutsame.select.view.CutSameSelectMediaActivity",
          "matches": "@LynxFlattenUI[clickable=true][visibleToUser=true] +6 [text=\"立即下载\"]",
          "snapshotUrls": "https://i.gkd.li/i/14122865"
        },
        {
          "matches": "[vid=\"gallery_layout_below_category_view\"] >3 [text=\"立即下载\"] -n LynxFlattenUI[clickable=true]",
          "activityIds": "com.vega.libcutsame.select.view.CutSameSelectMediaActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-恢复创作",
      "desc": "自动点击[立即恢复]按钮",
      "activityIds": "com.vega.main.MainActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/14292755",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.vega.main.MainActivity",
          "matches": "[vid=\"tv_title_resume_design\"] +2 [vid=\"tvResumeNow\"]",
          "snapshotUrls": "https://i.gkd.li/i/14292755"
        }
      ]
    }
  ]
});

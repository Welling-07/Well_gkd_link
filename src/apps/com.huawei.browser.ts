// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.huawei.browser",
  "name": "华为浏览器",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "rules": [
        {
          "action": "clickCenter",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13403785",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "matches": "[id$=\"/hiad_skip_text\"]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12681995",
            "https://i.gkd.li/i/13403785"
          ],
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "权限提示-通知权限",
      "desc": "关闭资讯通知后，总是弹窗让打开",
      "rules": [
        {
          "fastQuery": true,
          "matches": "[vid=\"close_push_guide_window\"]",
          "exampleUrls": "https://m.gkd.li/87047583/3982b64a-15a7-4c0c-b179-2ed82d6ea18e",
          "snapshotUrls": "https://i.gkd.li/i/13692404"
        },
        {
          "matches": "[id=\"com.huawei.browser:id/close_push_guide_window\"]",
          "exampleUrls": "https://m.gkd.li/87047583/3982b64a-15a7-4c0c-b179-2ed82d6ea18e",
          "snapshotUrls": "https://i.gkd.li/i/13692404"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".customtab.EmuiBrowserCustomTabActivity",
          "matches": "View[id=\"root\"] > View[index=1] > @View[visibleToUser=true][id=\"logo-close-btn\"] <<n [vid=\"web_view_container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13997759"
        },
        {
          "fastQuery": true,
          "activityIds": ".download.DownloadRecordsActivity",
          "matches": "[vid=\"group_header_close_button\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/f5b1576c-372d-4376-b122-129cd0249d85",
          "snapshotUrls": "https://i.gkd.li/i/20852584"
        },
        {
          "activityIds": "com.huawei.browser.customtab.EmuiBrowserCustomTabActivity",
          "matches": "View[id=\"root\"] > View[index=1] > View[id=\"logo-close-btn\"]",
          "snapshotUrls": "https://i.gkd.li/i/13997759"
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-开启资讯通知弹窗",
      "desc": "关闭资讯通知后，总是弹窗让打开",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.huawei.browser.BrowserMainActivity",
          "matches": "[id=\"com.huawei.browser:id/close_push_guide_window\"]",
          "exampleUrls": "https://m.gkd.li/87047583/3982b64a-15a7-4c0c-b179-2ed82d6ea18e",
          "snapshotUrls": "https://i.gkd.li/i/13692404"
        }
      ]
    }
  ]
});

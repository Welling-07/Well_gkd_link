// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.finshell.wallet",
  "name": "钱包",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.finshell.homepage.WalletNativeActionActivity",
          "matches": "[vid=\"ivClose\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/b5a04cd0-2f5a-4161-838b-422552f1ba9e",
          "snapshotUrls": "https://i.gkd.li/i/16451563",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

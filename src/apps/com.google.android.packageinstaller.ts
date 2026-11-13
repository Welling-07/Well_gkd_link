// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.google.android.packageinstaller",
  "name": "软件包安装程序",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动安装/更新软件",
      "fastQuery": true,
      "rules": [
        {
          "matches": "[text=\"安装\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14046939",
          "fastQuery": true
        },
        {
          "matches": "[text=\"更新\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14047571",
            "https://i.gkd.li/i/14047854"
          ],
          "fastQuery": true
        },
        {
          "matches": "[text=\"完成\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14047514",
            "https://i.gkd.li/i/14047969",
            "https://i.gkd.li/i/16435556"
          ],
          "fastQuery": true
        },
        {
          "position": {
            "left": "width * 1.4975",
            "top": "height * 0.5"
          },
          "excludeMatches": [
            "[text=\"更新\"][clickable=true]",
            "[text=\"安装\"][clickable=true]"
          ],
          "matches": [
            "[text=\"要更新此应用吗？\" || text=\"要安装此应用吗？\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/16406316",
            "https://i.gkd.li/i/16435642"
          ],
          "fastQuery": true
        },
        {
          "matches": "LinearLayout[childCount=2] > [text=\"安装\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14046939",
          "fastQuery": true
        },
        {
          "matches": "LinearLayout[childCount=2] > [text=\"更新\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14047571",
            "https://i.gkd.li/i/14047854"
          ],
          "fastQuery": true
        },
        {
          "matches": "LinearLayout[childCount=2] > [text=\"完成\"][clickable=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14047514",
            "https://i.gkd.li/i/14047969"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-安全警告弹窗",
      "desc": "点击[设置]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "matches": [
            "[text^=\"出于安全考虑\"]",
            "[text=\"设置\"]"
          ],
          "exampleUrls": "https://e.gkd.li/e501f0cf-c531-40eb-a747-31377d35c971",
          "snapshotUrls": "https://i.gkd.li/i/16406317"
        }
      ]
    },
    {
      "key": 2,
      "name": "其他-安全警告弹窗",
      "desc": "点击取消",
      "enable": false,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "matches": [
            "[text^=\"出于安全考虑\"]",
            "[text=\"取消\"]"
          ],
          "exampleUrls": "https://e.gkd.li/e501f0cf-c531-40eb-a747-31377d35c971",
          "snapshotUrls": "https://i.gkd.li/i/16406317"
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-安装未知应用设置",
      "enable": false,
      "fastQuery": true,
      "activityIds": "com.android.packageinstaller.InstallStaging",
      "rules": [
        {
          "matches": [
            "[text*=\"禁止您的手机安装来自此来源的未知应用\"]",
            "[text=\"设置\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/14080242",
          "fastQuery": true,
          "activityIds": "com.android.packageinstaller.InstallStaging"
        }
      ]
    }
  ]
});

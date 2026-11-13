// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.android.packageinstaller",
  "name": "软件包安装程序",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动安装应用",
      "desc": "点击[安装/继续安装/完成]",
      "fastQuery": true,
      "forcedTime": 10000,
      "activityIds": [
        ".PackageInstallerActivity",
        ".FlymePackageInstallerActivity",
        ".PackageInterceptActivity",
        ".NewInstallInstalling",
        ".InstallSuccess",
        ".oplus.InstallAppProgress",
        ".DeleteStagedFileOnResult"
      ],
      "rules": [
        {
          "name": "点击[继续安装]",
          "anyMatches": [
            "[text=\"继续安装\"][clickable=true][focusable=true]",
            "@[clickable=true][focusable=true] >(1,2,4) [text=\"继续安装\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13206444",
            "https://i.gkd.li/i/14046749",
            "https://i.gkd.li/i/16550275",
            "https://i.gkd.li/i/23621117",
            "https://i.gkd.li/i/34127356"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23621105",
            "https://i.gkd.li/i/22870985"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".PackageInstallerActivity",
            ".FlymePackageInstallerActivity",
            ".PackageInterceptActivity",
            ".NewInstallInstalling",
            ".InstallSuccess",
            ".oplus.InstallAppProgress",
            ".DeleteStagedFileOnResult"
          ]
        },
        {
          "name": "点击[完成]",
          "excludeMatches": "[text^=\"应用未安装\" || text*=\"安装失败\"]",
          "anyMatches": [
            "[text=\"完成\"][clickable=true][focusable=true]",
            "@[clickable=true][focusable=true] >(1,2,4) [text=\"完成\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13206476",
            "https://i.gkd.li/i/13766420",
            "https://i.gkd.li/i/13962438",
            "https://i.gkd.li/i/14138323",
            "https://i.gkd.li/i/14471862",
            "https://i.gkd.li/i/16550273",
            "https://i.gkd.li/i/25816401",
            "https://i.gkd.li/i/33746542",
            "https://i.gkd.li/i/34127373"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/26314449",
          "exampleUrls": "https://e.gkd.li/00166afa-f8cb-4389-87b0-948a5a75f3d5",
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".PackageInstallerActivity",
            ".FlymePackageInstallerActivity",
            ".PackageInterceptActivity",
            ".NewInstallInstalling",
            ".InstallSuccess",
            ".oplus.InstallAppProgress",
            ".DeleteStagedFileOnResult"
          ]
        },
        {
          "name": "点击[安装]",
          "matches": "[vid=\"confirm_bottom_button_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/14228348",
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".PackageInstallerActivity",
            ".FlymePackageInstallerActivity",
            ".PackageInterceptActivity",
            ".NewInstallInstalling",
            ".InstallSuccess",
            ".oplus.InstallAppProgress",
            ".DeleteStagedFileOnResult"
          ]
        },
        {
          "position": {
            "left": "width * 1.5394",
            "top": "height * 0.5"
          },
          "excludeMatches": "[text=\"继续安装\" || text=\"完成\"]",
          "matches": "LinearLayout[childCount=1] > Button[text=\"取消\"][childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14969116",
            "https://i.gkd.li/i/17158050"
          ],
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".PackageInstallerActivity",
            ".FlymePackageInstallerActivity",
            ".PackageInterceptActivity",
            ".NewInstallInstalling",
            ".InstallSuccess",
            ".oplus.InstallAppProgress",
            ".DeleteStagedFileOnResult"
          ]
        },
        {
          "name": "点击[继续安装] (2)",
          "activityIds": [
            "com.android.packageinstaller.PackageInstallerActivity",
            "com.android.packageinstaller.FlymePackageInstallerActivity"
          ],
          "matches": "[text=\"继续安装\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206444",
            "https://i.gkd.li/i/14046749",
            "https://i.gkd.li/i/16550275"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "name": "点击[完成] (2)",
          "activityIds": [
            "com.android.packageinstaller.NewInstallInstalling",
            "com.android.packageinstaller.InstallSuccess",
            "com.android.packageinstaller.oplus.InstallAppProgress",
            "com.android.packageinstaller.FlymePackageInstallerActivity"
          ],
          "matches": "[text=\"完成\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13206476",
            "https://i.gkd.li/i/13766420",
            "https://i.gkd.li/i/13962438",
            "https://i.gkd.li/i/14138323",
            "https://i.gkd.li/i/14471862",
            "https://i.gkd.li/i/16550273"
          ],
          "fastQuery": true,
          "forcedTime": 10000
        },
        {
          "name": "点击[安装] (2)",
          "fastQuery": true,
          "activityIds": "com.android.packageinstaller.DeleteStagedFileOnResult",
          "matches": "[vid=\"confirm_bottom_button_layout\"]",
          "snapshotUrls": "https://i.gkd.li/i/14228348",
          "forcedTime": 10000
        },
        {
          "name": "勾选[已了解此应用未经检测，可能存在风险]",
          "fastQuery": true,
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "matches": "[vid=\"checkbox\"][checked=false]",
          "snapshotUrls": "https://i.gkd.li/i/14595443",
          "forcedTime": 10000
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 1.5394",
            "top": "height * 0.5"
          },
          "activityIds": [
            ".PackageInstallerActivity",
            ".DeleteStagedFileOnResult"
          ],
          "excludeMatches": "[text=\"继续安装\" || text=\"完成\"]",
          "matches": "LinearLayout[childCount=1] > Button[text=\"取消\"][childCount=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14969116",
            "https://i.gkd.li/i/17158050"
          ],
          "forcedTime": 10000
        },
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.7185",
            "top": "width * 0.1157"
          },
          "activityIds": "com.android.packageinstaller.PackageInstallerActivity",
          "excludeMatches": [
            "[text=\"继续安装\"]",
            "[text=\"完成\"]"
          ],
          "matches": "[vid=\"buttons_panel\"]",
          "snapshotUrls": "https://i.gkd.li/i/14969116",
          "forcedTime": 10000
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-授权本次安装",
      "rules": [
        {
          "fastQuery": true,
          "position": {
            "left": "width * 0.4609",
            "top": "height * 0.75"
          },
          "activityIds": ".PackageInterceptActivity",
          "matches": "[vid=\"tv_install_guide\"][text*=\"授权本次安装\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/6ad6e4c6-3cb7-41b2-a37b-bcaa3c06de34",
          "snapshotUrls": "https://i.gkd.li/i/24465121"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-继续安装高风险应用",
      "desc": "点击[仍要继续/无视风险安装]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".PackageInterceptActivity",
          "matches": [
            "[text*=\"风险\"][text*=\"发现\" || text*=\"存在\"][visibleToUser=true]",
            "@[clickable=true][focusable=true] >2 [text=\"仍要继续\" || text=\"无视风险安装\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/24540505",
            "https://i.gkd.li/i/31602264"
          ],
          "exampleUrls": [
            "https://e.gkd.li/2961e749-6aac-4f74-b7f7-268ecc0e14f4",
            "https://e.gkd.li/f23d301b-22d0-4c9f-b208-c1d9b6425b9d"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "功能类-勾选[已了解应用风险检测结果]",
      "desc": "配合 自动安装应用 规则使用",
      "order": -1,
      "rules": [
        {
          "fastQuery": true,
          "forcedTime": 10000,
          "activityIds": [
            ".PackageInstallerActivity",
            ".PackageInterceptActivity",
            ".NewInstallInstalling",
            ".InstallStart"
          ],
          "matches": "CheckBox[vid=\"checkbox\" || vid=\"deleted_file_state_cb\"][checked=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14595443",
            "https://i.gkd.li/i/22870985"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/23621117",
          "exampleUrls": [
            "https://e.gkd.li/8ebedfcf-9d68-485c-b4b1-e8e2dc42bbd8",
            "https://e.gkd.li/d197b6ad-a931-498f-b817-fb90c911d67b"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "功能类-InstallerX自动安装",
      "desc": "InstallerX无特权情况下自动确认",
      "rules": [
        {
          "name": "点击[安装/更新]",
          "fastQuery": true,
          "matches": "[id=\"android:id/button1\"][text=\"更新\" || text=\"安装\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/29594607",
            "https://i.gkd.li/i/29594599"
          ],
          "activityIds": ".PackageInstallerActivity"
        }
      ]
    },
    {
      "key": 5,
      "name": "功能类-确认[未查询到此应用的 ICP 核准信息]",
      "matchTime": 10000,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "matches": [
            "TextView[text*=\"未查询到此应用的 ICP 核准信息\"]",
            "@Button[text=\"知道了\"] -n Button[text=\"取消安装\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/34431696",
          "activityIds": ".PackageInstallerActivity",
          "matchTime": 10000,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 6,
      "name": "功能类-[开启安全模式]提示弹窗",
      "desc": "点击[取消]",
      "matchTime": 10000,
      "resetMatch": "app",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".InstallSuccess",
          "matches": [
            "TextView[text*=\"开启安全模式\"]",
            "Button[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/34540653",
          "exampleUrls": "https://e.gkd.li/0f96ada2-22a5-4220-9e8a-54a5d43df254",
          "matchTime": 10000,
          "resetMatch": "app"
        }
      ]
    }
  ]
});

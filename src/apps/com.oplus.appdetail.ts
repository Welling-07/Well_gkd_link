// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.oplus.appdetail",
  "name": "OPPO/一加应用安装器",
  "groups": [
    {
      "key": 0,
      "name": "功能类-自动安装应用",
      "desc": "点击 ①已知悉风险 ②[仍然安装] ③[继续安装] ④[完成]",
      "fastQuery": true,
      "activityIds": [
        ".model.guide.ui.InstallGuideActivity",
        ".modelv2.parsing.PackageParsingV2Activity"
      ],
      "rules": [
        {
          "name": "①[勾选]已知悉风险",
          "matches": "[text^=\"已知悉\"][text*=\"风险\"][checkable=true][checked=false]",
          "snapshotUrls": [
            "https://i.gkd.li/i/22377327",
            "https://i.gkd.li/i/33898132"
          ],
          "exampleUrls": "https://e.gkd.li/509a2a45-c9bd-4b7e-9496-ced36ebdaaf6",
          "fastQuery": true,
          "activityIds": [
            ".model.guide.ui.InstallGuideActivity",
            ".modelv2.parsing.PackageParsingV2Activity"
          ]
        },
        {
          "name": "②点击[仍然安装]",
          "excludeMatches": "[text^=\"已知悉\"][text*=\"风险\"][checked=false]",
          "matches": "[text=\"仍然安装\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/34736203",
          "fastQuery": true,
          "activityIds": [
            ".model.guide.ui.InstallGuideActivity",
            ".modelv2.parsing.PackageParsingV2Activity"
          ]
        },
        {
          "name": "③点击[继续安装]",
          "excludeMatches": "[vid=\"view_scanning_and_tip_view_tv_title\"][text^=\"正在扫描\"]",
          "matches": "[vid=\"view_bottom_guide_continue_install_btn\" || text=\"继续安装\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13054204",
            "https://i.gkd.li/i/13038570",
            "https://i.gkd.li/i/23146291",
            "https://i.gkd.li/i/23146289"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/13038560",
          "fastQuery": true,
          "activityIds": [
            ".model.guide.ui.InstallGuideActivity",
            ".modelv2.parsing.PackageParsingV2Activity"
          ]
        },
        {
          "name": "③坐标点击[继续安装]",
          "position": {
            "left": "width * 0.6078",
            "top": "height * 0.7742"
          },
          "matches": "[text$=\"继续安装\"][text*=\"未通过\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/34736192",
          "fastQuery": true,
          "activityIds": [
            ".model.guide.ui.InstallGuideActivity",
            ".modelv2.parsing.PackageParsingV2Activity"
          ]
        },
        {
          "name": "④点击[完成]",
          "activityIds": ".model.finish.InstallFinishActivity",
          "matches": "[text=\"完成\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13038664",
            "https://i.gkd.li/i/13054849"
          ],
          "fastQuery": true
        },
        {
          "name": "点击[继续安装]",
          "activityIds": "com.oplus.appdetail.model.guide.ui.InstallGuideActivity",
          "matches": "[id=\"com.oplus.appdetail:id/view_bottom_guide_continue_install_btn\"]",
          "excludeMatches": "[id=\"com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title\"][text^=\"正在扫描\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13038560",
            "https://i.gkd.li/i/13054204",
            "https://i.gkd.li/i/13038570"
          ],
          "fastQuery": true
        },
        {
          "name": "点击[完成]",
          "activityIds": "com.oplus.appdetail.model.finish.InstallFinishActivity",
          "matches": "[text=\"完成\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13038664",
            "https://i.gkd.li/i/13054849"
          ],
          "fastQuery": true
        }
      ]
    },
    {
      "key": 1,
      "name": "功能类-安装中高风险应用",
      "fastQuery": true,
      "activityIds": ".model.guide.ui.InstallGuideActivity",
      "rules": [
        {
          "position": {
            "left": "width * 0.726",
            "top": "height * 0.5"
          },
          "matches": "[text=\"不建议安装此应用；若仍需安装，可查看详情\"]",
          "exampleUrls": "https://e.gkd.li/8697d1e8-fa9c-4b5b-92b9-559f55672047",
          "snapshotUrls": "https://i.gkd.li/i/22377287",
          "fastQuery": true,
          "activityIds": ".model.guide.ui.InstallGuideActivity"
        },
        {
          "preKeys": 0,
          "matches": "[text=\"已知悉应用风险\"][checked=false]",
          "exampleUrls": "https://e.gkd.li/45246cef-1ef5-49bf-8b7f-09377bde823a",
          "snapshotUrls": "https://i.gkd.li/i/22377327",
          "fastQuery": true,
          "activityIds": ".model.guide.ui.InstallGuideActivity"
        },
        {
          "preKeys": 1,
          "matches": "[text=\"仍然安装\"]",
          "exampleUrls": "https://e.gkd.li/45246cef-1ef5-49bf-8b7f-09377bde823a",
          "snapshotUrls": "https://i.gkd.li/i/22377327",
          "fastQuery": true,
          "activityIds": ".model.guide.ui.InstallGuideActivity"
        }
      ]
    },
    {
      "key": 2,
      "name": "功能类-自动安装",
      "enable": false,
      "rules": [
        {
          "name": "点击【继续安装】",
          "activityIds": "com.oplus.appdetail.model.guide.ui.InstallGuideActivity",
          "matches": "[id=\"com.oplus.appdetail:id/view_bottom_guide_continue_install_btn\"]",
          "excludeMatches": "[id=\"com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title\"][text^=\"正在扫描\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13038560",
            "https://i.gkd.li/i/13054204",
            "https://i.gkd.li/i/13038570"
          ]
        },
        {
          "name": "点击【完成】",
          "activityIds": "com.oplus.appdetail.model.finish.InstallFinishActivity",
          "matches": "[text=\"完成\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13038664",
            "https://i.gkd.li/i/13054849"
          ]
        }
      ]
    }
  ]
});

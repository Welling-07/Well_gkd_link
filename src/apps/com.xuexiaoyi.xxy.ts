// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.xuexiaoyi.xxy",
  "name": "学小易",
  "groups": [
    {
      "key": 0,
      "name": "分段广告-首页-底部广告",
      "activityIds": [
        "com.xuexiaoyi.entrance.main.MainActivity",
        "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
      ],
      "rules": [
        {
          "name": "点击在下方的X",
          "matches": "View[text=\"广告\"&&longClickable=null] < View <n View <n View > View > Image[text.length=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068836",
            "https://i.gkd.li/i/13375502",
            "https://i.gkd.li/i/13375559"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "name": "点击在上方的X-类型1",
          "matches": "Image[text.length>=20] < View < View + View > Image[text.length=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068811",
            "https://i.gkd.li/i/13202990",
            "https://i.gkd.li/i/13266356",
            "https://i.gkd.li/i/13266362",
            "https://i.gkd.li/i/13457114",
            "https://i.gkd.li/i/13457204"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "name": "点击在上方的X-类型2",
          "matches": "[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View",
          "snapshotUrls": "https://i.gkd.li/i/13266689",
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "name": "点击在内部的X",
          "matches": "View[text.length=4] - View > View > Image[text.length=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13457210",
            "https://i.gkd.li/i/13457302"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "name": "点击不感兴趣",
          "matches": "TextView[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068819",
            "https://i.gkd.li/i/13457380"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        }
      ]
    },
    {
      "key": 1,
      "name": "更新提示",
      "desc": "点击以后再说",
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "snapshotUrls": "https://i.gkd.li/i/13203105",
      "rules": [
        {
          "activityIds": "com.xuexiaoyi.entrance.main.MainActivity",
          "matches": "[text=\"立即体验\"] + [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13203105",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "[text=\"立即体验\"] + [text=\"以后再说\"]",
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-首页-底部广告",
      "enable": false,
      "activityIds": [
        "com.xuexiaoyi.entrance.main.MainActivity",
        "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
      ],
      "rules": [
        {
          "name": "点击在下方的X",
          "matches": [
            "View[text=\"广告\"&&longClickable=null] < View <n View <n View > View > Image[text.length=0]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13068836",
            "https://i.gkd.li/i/13375502",
            "https://i.gkd.li/i/13375559"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "name": "点击在上方的X-类型1",
          "matches": [
            "Image[text.length>=20] < View < View + View > Image[text.length=0]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13068811",
            "https://i.gkd.li/i/13202990",
            "https://i.gkd.li/i/13266356",
            "https://i.gkd.li/i/13266362",
            "https://i.gkd.li/i/13457114",
            "https://i.gkd.li/i/13457204"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "name": "点击在上方的X-类型2",
          "matches": [
            "[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13266689"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "name": "点击在内部的X",
          "matches": "View[text.length=4] - View > View > Image[text.length=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13457210",
            "https://i.gkd.li/i/13457302"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "name": "点击不感兴趣",
          "matches": "TextView[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068819",
            "https://i.gkd.li/i/13457380"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        }
      ]
    },
    {
      "key": 3,
      "name": "未分类-首页-底部广告",
      "enable": false,
      "activityIds": [
        "com.xuexiaoyi.entrance.main.MainActivity",
        "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
      ],
      "rules": [
        {
          "name": "点击在下方的X",
          "matches": [
            "View[text=\"广告\"&&longClickable=null] < View <n View <n View > View > Image[text.length=0]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13068836",
            "https://i.gkd.li/i/13375502",
            "https://i.gkd.li/i/13375559"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "name": "点击在上方的X-类型1",
          "matches": [
            "Image[text.length>=20] < View < View + View > Image[text.length=0]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13068811",
            "https://i.gkd.li/i/13202990",
            "https://i.gkd.li/i/13266356",
            "https://i.gkd.li/i/13266362",
            "https://i.gkd.li/i/13457114",
            "https://i.gkd.li/i/13457204"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "name": "点击在上方的X-类型2",
          "matches": [
            "[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13266689"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "name": "点击在内部的X",
          "matches": "View[text.length=4] - View > View > Image[text.length=0]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13457210",
            "https://i.gkd.li/i/13457302"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        },
        {
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "name": "点击不感兴趣",
          "matches": "TextView[text=\"不感兴趣\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13068819",
            "https://i.gkd.li/i/13457380"
          ],
          "activityIds": [
            "com.xuexiaoyi.entrance.main.MainActivity",
            "com.xuexiaoyi.platform.base.arch.RouterFragmentActivity"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "未分类-升级弹窗",
      "desc": "自动点击以后再说。",
      "enable": false,
      "activityIds": "com.xuexiaoyi.entrance.main.MainActivity",
      "fastQuery": true,
      "snapshotUrls": "https://i.gkd.li/i/13203105",
      "rules": [
        {
          "matches": "[text=\"立即体验\"] + [text=\"以后再说\"]",
          "activityIds": "com.xuexiaoyi.entrance.main.MainActivity",
          "fastQuery": true
        }
      ]
    }
  ]
});

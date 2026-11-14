// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jingdong.app.mall",
  "name": "京东",
  "groups": [
    {
      "key": 0,
      "name": "开屏广告",
      "order": -10,
      "fastQuery": true,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "actionMaximumKey": 0,
      "rules": [
        {
          "fastQuery": true,
          "excludeActivityIds": "com.jd.lib.search.view.Activity.SearchActivity",
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16323111",
          "excludeSnapshotUrls": "https://i.gkd.li/i/16323115",
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000
        },
        {
          "excludeActivityIds": "com.jd.lib.search.view.Activity.SearchActivity",
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16323111",
            "https://i.gkd.li/i/16323115"
          ],
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "priorityTime": 10000,
          "actionMaximumKey": 0
        }
      ]
    },
    {
      "key": 1,
      "name": "局部广告-购物车页面砸金蛋",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": ".MainFrameActivity",
          "matches": "[id=\"com.jd.lib.cart.feature:id/iv_egg_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14731003"
        },
        {
          "fastQuery": true,
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "matches": "[id=\"com.jd.lib.cart.feature:id/iv_egg_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/14731003"
        }
      ]
    },
    {
      "key": 2,
      "name": "局部广告-悬浮广告",
      "activityIds": ".MainFrameActivity",
      "rules": [
        {
          "matches": "FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc=null][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642270",
            "https://i.gkd.li/i/12774910"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/15110548",
          "activityIds": ".MainFrameActivity"
        },
        {
          "matches": "@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView",
          "snapshotUrls": "https://i.gkd.li/i/13242002",
          "activityIds": ".MainFrameActivity"
        },
        {
          "matches": "[desc=\"关闭浮层icon\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13165659",
            "https://i.gkd.li/i/12837870",
            "https://i.gkd.li/i/13072091",
            "https://i.gkd.li/i/12837870",
            "https://i.gkd.li/i/15077913"
          ],
          "activityIds": ".MainFrameActivity"
        },
        {
          "matches": "FrameLayout + RelativeLayout > RelativeLayout > ImageView + ImageView[desc=null][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642270",
            "https://i.gkd.li/i/12774910",
            "https://i.gkd.li/i/15110548"
          ],
          "activityIds": "com.jingdong.app.mall.MainFrameActivity"
        },
        {
          "matches": "@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView",
          "snapshotUrls": "https://i.gkd.li/i/13242002",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity"
        },
        {
          "matches": "[desc=\"关闭浮层icon\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13165659",
            "https://i.gkd.li/i/12837870",
            "https://i.gkd.li/i/13072091",
            "https://i.gkd.li/i/12837870",
            "https://i.gkd.li/i/15077913"
          ],
          "activityIds": "com.jingdong.app.mall.MainFrameActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "fastQuery": true,
      "actionMaximum": 1,
      "resetMatch": "app",
      "rules": [
        {
          "activityIds": [
            ".MainFrameActivity",
            "com.jd.lib.message.messagecenter"
          ],
          "matches": "@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] -n [text=\"开启消息通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13917163",
            "https://i.gkd.li/i/13463618",
            "https://i.gkd.li/i/14692570",
            "https://i.gkd.li/i/18060234"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "activityIds": "com.jd.lib.message.messagecenter",
          "matches": "@[clickable=true] + [text^=\"打开系统通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/12839865",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] <n * > [text=\"开启消息通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13917163",
            "https://i.gkd.li/i/13463618",
            "https://i.gkd.li/i/14692570"
          ],
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        },
        {
          "matches": "@[clickable=true] + [text^=\"打开系统通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/12839865",
          "fastQuery": true,
          "actionMaximum": 1,
          "resetMatch": "app"
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-弹窗广告",
      "rules": [
        {
          "activityIds": ".MainFrameActivity",
          "matches": "@FrameLayout[clickable=true] > [desc=\"关闭\"]",
          "excludeMatches": "[text=\"确定\" || text=\"加入购物车\" || text*=\"购买\" || text*=\"下单\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13165721",
            "https://i.gkd.li/i/15364514"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18455760"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.jd.lib.cashier.complete.view.CashierCompleteActivity",
            "com.jd.lib.jshop.jshop.JshopMainShopActivity"
          ],
          "matches": "[vid=\"close\"][desc=\"关闭页面\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218034",
            "https://i.gkd.li/i/14927060"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            ".MainFrameActivity",
            "com.jd.lib.jshop.jshop.JshopMainShopActivity"
          ],
          "excludeMatches": [
            "ImageView[desc=\"关闭页面\"] - [text=\"优惠券\"]",
            "TextView[text=\"退换/售后\"][id=null]",
            "[text=\"立即购买\"][visibleToUser=true]"
          ],
          "matches": "[desc=\"关闭页面\" || desc=\"关闭按钮\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13241883",
            "https://i.gkd.li/i/13258996",
            "https://i.gkd.li/i/13336847",
            "https://i.gkd.li/i/15416926",
            "https://i.gkd.li/i/15862131",
            "https://i.gkd.li/i/16818580",
            "https://i.gkd.li/i/24170046"
          ]
        },
        {
          "fastQuery": true,
          "matchTime": 10000,
          "actionMaximum": 1,
          "resetMatch": "app",
          "action": "back",
          "activityIds": ".MainFrameActivity",
          "matches": "[text^=\"惊喜福利来袭\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/580d3cb5-503e-47a9-ba88-056e91c2f084",
          "snapshotUrls": "https://i.gkd.li/i/17974166"
        },
        {
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "matches": "@FrameLayout[clickable=true] > [desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13165721",
            "https://i.gkd.li/i/15364514"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.jingdong.app.mall.MainFrameActivity",
            "com.jd.lib.jshop.jshop.JshopMainShopActivity"
          ],
          "excludeMatches": [
            "ImageView[desc=\"关闭页面\"] - [text=\"优惠券\"]",
            "TextView[text=\"退换/售后\"][id=null]"
          ],
          "matches": "[desc=\"关闭页面\" || desc=\"关闭按钮\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13241883",
            "https://i.gkd.li/i/13258996",
            "https://i.gkd.li/i/13336847",
            "https://i.gkd.li/i/15416926",
            "https://i.gkd.li/i/15862131",
            "https://i.gkd.li/i/16818580"
          ]
        }
      ]
    },
    {
      "key": 5,
      "name": "局部广告-横幅广告",
      "activityIds": ".MainFrameActivity",
      "rules": [
        {
          "matches": "ImageView < FrameLayout - FrameLayout > ImageView[desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13258973",
            "https://i.gkd.li/i/13258980",
            "https://i.gkd.li/i/13258981"
          ],
          "activityIds": ".MainFrameActivity"
        },
        {
          "fastQuery": true,
          "matches": "@ViewGroup[clickable=true] - * > [text=\"去续费\"]",
          "snapshotUrls": "https://i.gkd.li/i/15047238",
          "activityIds": ".MainFrameActivity"
        },
        {
          "matches": "[desc=\"吸顶楼层\"] > [desc=\"关闭按钮\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15112953",
          "activityIds": ".MainFrameActivity"
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.jd.lib.cart.feature:id/plus_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15229577",
          "activityIds": ".MainFrameActivity"
        },
        {
          "matches": "ImageView < FrameLayout - FrameLayout > ImageView[desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13258973",
            "https://i.gkd.li/i/13258980",
            "https://i.gkd.li/i/13258981"
          ],
          "activityIds": "com.jingdong.app.mall.MainFrameActivity"
        },
        {
          "fastQuery": true,
          "matches": "@ViewGroup[clickable=true] - * > [text=\"去续费\"]",
          "snapshotUrls": "https://i.gkd.li/i/15047238",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity"
        },
        {
          "matches": "[desc=\"吸顶楼层\"] > [desc=\"关闭按钮\"][clickable=true][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/15112953",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity"
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.jd.lib.cart.feature:id/plus_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/15229577",
          "activityIds": "com.jingdong.app.mall.MainFrameActivity"
        }
      ]
    },
    {
      "key": 7,
      "name": "局部广告-支付页面产品推荐",
      "desc": "自动点击右上角\"x\"",
      "activityIds": "com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity",
      "snapshotUrls": "https://i.gkd.li/i/13191146",
      "rules": [
        {
          "matches": "ImageView[clickable=true && desc=\"关闭\"]",
          "activityIds": "com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity"
        }
      ]
    },
    {
      "key": 8,
      "name": "全屏广告-购物车页面支付成功弹窗广告",
      "desc": "自动点击正下方的\"x\"",
      "fastQuery": true,
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.jd.lib.cart.ShoppingCartNewActivity",
          "matches": "@ImageView - ViewGroup >2 TextView[text=\"查看订单\"]",
          "snapshotUrls": "https://i.gkd.li/i/13446362"
        }
      ]
    },
    {
      "key": 9,
      "name": "全屏广告-加入购物车后出现的弹窗",
      "desc": "点击[继续逛]",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": "com.jd.lib.productdetail.ProductDetailActivity",
          "matches": "[text=\"继续逛\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/15047243"
        },
        {
          "fastQuery": true,
          "activityIds": "com.jd.lib.productdetail.ProductDetailActivity",
          "matches": "[text=\"继续逛\"]",
          "snapshotUrls": "https://i.gkd.li/i/15047243"
        }
      ]
    },
    {
      "key": 15,
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "rules": [
        {
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "matches": "FrameLayout > [desc=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13165721"
        },
        {
          "fastQuery": true,
          "activityIds": [
            "com.jd.lib.cashier.complete.view.CashierCompleteActivity",
            "com.jd.lib.jshop.jshop.JshopMainShopActivity"
          ],
          "matches": "[vid=\"webview\"] + [vid=\"close\"][desc=\"关闭页面\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13218034",
            "https://i.gkd.li/i/14927060"
          ]
        },
        {
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "matches": "@[desc=\"关闭按钮\"] <n * >n [desc=\"弹窗\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13241883",
            "https://i.gkd.li/i/132599029"
          ]
        },
        {
          "fastQuery": true,
          "activityIds": "com.jingdong.app.mall.MainFrameActivity",
          "matches": "RelativeLayout > ImageView[desc=\"关闭页面\"]",
          "excludeMatches": "ImageView[desc=\"关闭页面\"] - [text=\"优惠券\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13258996",
            "https://i.gkd.li/i/13336847"
          ]
        }
      ]
    }
  ]
});

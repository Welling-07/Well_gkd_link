// 此文件由 scripts/generate.ts 从 data/merged.json5 自动生成，请勿手工修改。
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "id": "com.jdd.motorfans",
  "name": "摩托范",
  "groups": [
    {
      "key": 0,
      "name": "全屏广告-弹窗广告",
      "fastQuery": true,
      "rules": [
        {
          "activityIds": [
            ".modules.detail.DetailActivity2",
            ".search.SearchMainActivity",
            ".modules.base.FragmentContainerActivity",
            ".message.ChatDetailActivity",
            ".MTMainActivity"
          ],
          "matches": "[vid=\"ad_content\"] >n [vid=\"iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798654",
            "https://i.gkd.li/i/12878843",
            "https://i.gkd.li/i/12913956",
            "https://i.gkd.li/i/13188861",
            "https://i.gkd.li/i/14546613"
          ],
          "fastQuery": true
        },
        {
          "activityIds": [
            ".MTMainActivity",
            ".modules.detail.DetailActivity2"
          ],
          "matches": "[vid=\"iv_right_top_close\" || vid=\"ad_close\"][visibleToUser=true]",
          "exampleUrls": "https://e.gkd.li/0f4b8d7d-fda4-43ee-b892-3a85d6dae278",
          "snapshotUrls": [
            "https://i.gkd.li/i/12826288",
            "https://i.gkd.li/i/17002101",
            "https://i.gkd.li/i/17078108",
            "https://i.gkd.li/i/20918047"
          ],
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "matches": "[id=\"com.jdd.motorfans:id/ad_content\"] >n [id=\"com.jdd.motorfans:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733646",
            "https://i.gkd.li/i/12798654",
            "https://i.gkd.li/i/12878843",
            "https://i.gkd.li/i/12913956",
            "https://i.gkd.li/i/13188861",
            "https://i.gkd.li/i/12840710",
            "https://i.gkd.li/i/13188928",
            "https://i.gkd.li/i/14546613"
          ]
        },
        {
          "matches": "@ImageView - RelativeLayout > TextView[text=\"广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/12826288",
          "fastQuery": true
        },
        {
          "fastQuery": true,
          "activityIds": "com.jdd.motorfans.MTMainActivity",
          "matches": "[vid=\"iv_right_top_close\"]",
          "exampleUrls": "https://e.gkd.li/0f4b8d7d-fda4-43ee-b892-3a85d6dae278",
          "snapshotUrls": "https://i.gkd.li/i/17002101"
        },
        {
          "fastQuery": true,
          "activityIds": "com.jdd.motorfans.MTMainActivity",
          "matches": "[vid=\"ad_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/17078108"
        }
      ]
    },
    {
      "key": 1,
      "name": "分段广告-信息流广告",
      "activityIds": ".MTMainActivity",
      "rules": [
        {
          "name": "点关闭按钮",
          "matches": "[vid=\"recyclerView\"] > FrameLayout[vid=\"container\"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]",
          "snapshotUrls": "https://i.gkd.li/i/12826382",
          "activityIds": ".MTMainActivity"
        },
        {
          "preKeys": 0,
          "name": "点击不感兴趣",
          "matches": "TextView[vid=\"beizi_dislike_item_multi_one_title\"][text*=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12829069",
          "activityIds": ".MTMainActivity"
        },
        {
          "name": "点x按钮",
          "matches": "[id=\"com.jdd.motorfans:id/recyclerView\"] > FrameLayout[id=\"com.jdd.motorfans:id/container\"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]",
          "snapshotUrls": "https://i.gkd.li/i/12826382",
          "activityIds": "com.jdd.motorfans.MTMainActivity"
        },
        {
          "preKeys": 2,
          "name": "点击不感兴趣 (2)",
          "matches": "TextView[id=\"com.jdd.motorfans:id/beizi_dislike_item_multi_one_title\"][text*=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12829069",
          "activityIds": "com.jdd.motorfans.MTMainActivity"
        },
        {
          "name": "点x按钮 (2)",
          "matches": "[id=\"com.jdd.motorfans:id/recyclerView\"] > FrameLayout[id=\"com.jdd.motorfans:id/container\"] > FrameLayout[childCount=3] > ImageView[clickable=true][id=null] + ImageView[clickable=true][id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12826382"
          ],
          "activityIds": [
            "com.jdd.motorfans.MTMainActivity"
          ]
        },
        {
          "name": "点击不感兴趣 (3)",
          "preKeys": 4,
          "matches": [
            "TextView[id=\"com.jdd.motorfans:id/beizi_dislike_item_multi_one_title\"][text*=\"不感兴趣\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12829069"
          ],
          "activityIds": [
            "com.jdd.motorfans.MTMainActivity"
          ]
        }
      ]
    },
    {
      "key": 2,
      "name": "全屏广告-文章内容页面弹窗广告",
      "activityIds": ".modules.zone.search.ZoneInsideSearchActivity",
      "rules": [
        {
          "name": "点x按钮",
          "matches": "[vid=\"iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12888087",
          "activityIds": ".modules.zone.search.ZoneInsideSearchActivity"
        },
        {
          "name": "点x按钮 (2)",
          "matches": "[id=\"com.jdd.motorfans:id/iv_close\"]",
          "snapshotUrls": "https://i.gkd.li/i/12888087",
          "activityIds": "com.jdd.motorfans.modules.zone.search.ZoneInsideSearchActivity"
        }
      ]
    },
    {
      "key": 3,
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "rules": [
        {
          "fastQuery": true,
          "activityIds": [
            ".MTMainActivity",
            ".modules.detail.DetailActivity2",
            ".cars.MotorDetailActivity2",
            ".modules.carbarn.brand.detail.MBrandDetailActivity"
          ],
          "matches": "[vid=\"close_b_t_a_i_b_no_compliance\"]",
          "exampleUrls": "https://e.gkd.li/daf8ea52-a935-4e58-9e27-c5cb28fa9cf0",
          "snapshotUrls": [
            "https://i.gkd.li/i/16685033",
            "https://i.gkd.li/i/16859608",
            "https://i.gkd.li/i/17162753",
            "https://i.gkd.li/i/17533553"
          ]
        }
      ]
    },
    {
      "key": 4,
      "name": "全屏广告-文章内容弹窗",
      "enable": false,
      "activityIds": [
        "com.jdd.motorfans.modules.zone.search.ZoneInsideSearchActivity"
      ],
      "rules": [
        {
          "name": "点x按钮",
          "matches": "[id=\"com.jdd.motorfans:id/iv_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888087"
          ],
          "activityIds": [
            "com.jdd.motorfans.modules.zone.search.ZoneInsideSearchActivity"
          ]
        }
      ]
    }
  ]
});

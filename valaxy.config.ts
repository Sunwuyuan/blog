import type { UserThemeConfig } from "valaxy-theme-yun";
import { defineValaxyConfig } from "valaxy";
import { addonWaline } from "valaxy-addon-waline";

// add icons what you will need
const safelist = ["i-ri-home-line"];

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",
  siteConfig: {
    // 启用评论
    comment: {
      enable: true,
    },
  },
  themeConfig: {
    banner: {
      enable: true,
      title: "孙悟元的小站",
    },

    pages: [
      {
        name: "我的小伙伴们",
        url: "/links/",
        icon: "i-ri-genderless-line",
        color: "dodgerblue",
      },
      {
        name: "喜欢的女孩子",
        url: "/girls/",
        icon: "i-ri-women-line",
        color: "hotpink",
      },
    ],

    footer: {
      since: 2020,
      beian: {
        enable: false,
        icp: "苏ICP备17038157号",
        police: "苏公网安备xxxxxx号",
      },
    },
  },
  addons: [
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: "https://api.zcservice.houlang.cloud/comment/93859e68991080cd2ac237c44066de53",
    }),
  ],
  unocss: { safelist },
});

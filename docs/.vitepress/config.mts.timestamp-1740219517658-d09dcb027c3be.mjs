// docs/.vitepress/config.mts
import { defineConfig } from "file:///workspaces/vitepress/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///workspaces/vitepress/node_modules/@sugarat/theme/node.mjs";
var baseUrl = "https://louaq.github.io";
var RSS = {
  title: "Louaq",
  baseUrl,
  copyright: "Copyright (c) 2018-present, Louaq",
  description: "\u4F60\u7684\u6307\u5C16,\u62E5\u6709\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF\uFF08\u5927\u524D\u7AEF\u76F8\u5173\u6280\u672F\u5206\u4EAB\uFF09",
  language: "zh-cn",
  image: "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
  favicon: "https://sugarat.top/favicon.ico"
};
var blogTheme = getThemeConfig({
  formatShowDate(date) {
    return new Date(date).toLocaleString();
  },
  comment: {
    type: "giscus",
    options: {
      repo: "Louaq/vitepress",
      repoId: "R_kgDONndMrw",
      category: "Announcements",
      categoryId: "DIC_kwDONndMr84Cl3Sb",
      inputPosition: "top"
    },
    // 自定义展示内容
    label: "\u53D1\u8868\u610F\u89C1",
    icon: `<svg width="512" height="512" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path fill="#fbbf67" d="M63.962 31.979c0 17.665-14.318 31.979-31.981 31.979C14.319 63.958 0 49.644 0 31.979C0 14.315 14.319 0 31.981 0c17.663 0 31.981 14.315 31.981 31.979"/>
      <path fill="#633d19" d="M39.512 47.925c-.624-1.461-1.959-2.202-3.97-2.202c-1.568 0-3.271.45-4.515.78l-.727.185c-.32.079-1.979 1.012-1.868 1.914l.193.727h.671c.111 0 .229-.016.37-.049l.602-.152c1.361-.342 2.643-.666 3.983-.666c.788 0 1.46.305 2 .905c.442.487.371.773.348.868c-.118.494-.889 1.085-1.916 1.476c0 0-1.594.658-1.663 1.574l.052.622l.415.237c2.326 1.333 2.278 2.194 1.979 2.796c-.332.664-1.275.805-2.01.805c-1.019 0-2.121-.273-2.765-.542l-.427-.083c-.806 0-2.105.97-2.248 1.673l-.071.716l.573.238a8.03 8.03 0 0 0 3.128.628h.004c1.896 0 3.831-.663 5.442-1.866c1.431-1.066 1.713-2.18 1.699-2.929c-.02-.938-.506-1.882-1.391-2.728c2.23-1.332 2.939-2.986 2.112-4.927"/>
      <ellipse cx="11.242" cy="42.42" fill="#ed307c" opacity=".48" rx="7.928" ry="6.462"/>
      <path fill="#ed307c" d="M60.65 43.24c0 3.571-3.549 6.462-7.927 6.462c-4.379 0-7.93-2.891-7.93-6.462c0-3.572 3.551-6.466 7.93-6.466c4.378 0 7.927 2.894 7.927 6.466" opacity=".48"/>
      <path fill="#633d19" d="M25.23 12.968c-5.951-.411-11.346 2.028-15.08 6.66c-1.622 2.01 1.223 4.89 2.86 2.86c3.134-3.887 7.215-5.822 12.221-5.475c2.605.179 2.588-3.867 0-4.045m14.079 0c5.95-.411 11.346 2.028 15.08 6.66c1.621 2.01-1.223 4.89-2.86 2.86c-3.134-3.887-7.215-5.822-12.221-5.475c-2.605.179-2.587-3.867 0-4.045M28.886 32.33c-.225 0-4.333-1.576-8.48-1.576c-3.705 0-7.442 1.576-8.481 1.576c-.9 0-1.236-1.043-.691-1.667c4.961-5.728 13.378-5.728 18.344 0c.541.624.205 1.667-.692 1.667m25.019 0c-.226 0-4.333-1.576-8.48-1.576c-3.705 0-7.441 1.576-8.48 1.576c-.9 0-1.236-1.043-.691-1.667c4.961-5.728 13.379-5.728 18.344 0c.54.624.204 1.667-.693 1.667"/>
  </svg>`,
    mobileMinify: true
  },
  oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: "https://registry.npmmirror.com/oml2d-models/latest/files/models/HK416-1-normal/model.json"
      }
    ]
  },
  // 开启RSS支持
  RSS,
  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,
  // markdown 图表支持（会增加一定的构建耗时）
  // mermaid: true
  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: "MIT License | Louaq"
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },
  // 主题色修改
  themeColor: "el-blue",
  search: false,
  // 文章默认作者
  author: "Louaq",
  // 友链
  friend: [
    {
      nickname: "\u7CA5\u91CC\u6709\u52FA\u7CD6",
      des: "\u4F60\u7684\u6307\u5C16\u7528\u4E8E\u6539\u53D8\u4E16\u754C\u7684\u529B\u91CF",
      avatar: "https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030",
      url: "https://sugarat.top"
    },
    {
      nickname: "Vitepress",
      des: "Vite & Vue Powered Static Site Generator",
      avatar: "https://vitepress.dev/vitepress-logo-large.webp",
      url: "https://vitepress.dev/"
    }
  ],
  // 公告
  popover: {
    title: "\u8D44\u6599\u6E90\u7801",
    body: [
      {
        type: "button",
        content: "\u70B9\u51FB\u4E0B\u8F7D",
        props: {
          type: "success"
        },
        link: "https://yangyang666.oss-cn-chengdu.aliyuncs.com/files/YOLOv8.2.zip"
      }
    ],
    duration: 0
  }
});

// docs/.vitepress/config.mts
var base = "/vitepress/";
var config_default = defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base,
  sitemap: {
    hostname: "https://louaq.github.io/vitepress/"
  },
  lang: "zh-cn",
  title: "Louaq lab",
  description: "Louaq\u7684\u535A\u5BA2\u5206\u4EAB\u7F51\u7AD9, \u57FA\u4E8E vitepress \u5B9E\u73B0",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}/docs/public/favicon.ico` }], // 修改了 base 这里也需要同步修改
    ["link", { rel: "icon", href: "/vitepress/favicon.svg" }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "\u76EE\u5F55"
    },
    search: {
      provider: "local"
    },
    // 默认文案修改
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u76F8\u5173\u6587\u7AE0",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
    // 设置logo
    logo: "/logo.png",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u5173\u4E8E", link: "/about" }
    ],
    socialLinks: []
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy92aXRlcHJlc3MvZG9jcy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvd29ya3NwYWNlcy92aXRlcHJlc3MvZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3dvcmtzcGFjZXMvdml0ZXByZXNzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuLy8gXHU1QkZDXHU1MTY1XHU0RTNCXHU5ODk4XHU3Njg0XHU5MTREXHU3RjZFXG5pbXBvcnQgeyBibG9nVGhlbWUgfSBmcm9tICcuL2Jsb2ctdGhlbWUnXG4vLyBcdTU5ODJcdTY3OUNcdTRGN0ZcdTc1MjggR2l0SHViL0dpdGVlIFBhZ2VzIFx1N0I0OVx1NTE2Q1x1NTE3MVx1NUU3M1x1NTNGMFx1OTBFOFx1N0Y3MlxuLy8gXHU5MDFBXHU1RTM4XHU5NzAwXHU4OTgxXHU0RkVFXHU2NTM5IGJhc2UgXHU4REVGXHU1Rjg0XHVGRjBDXHU5MDFBXHU1RTM4XHU0RTNBXHUyMDFDL1x1NEVEM1x1NUU5M1x1NTQwRC9cdTIwMURcbi8vIFx1NTk4Mlx1Njc5Q1x1OTg3OVx1NzZFRVx1NTQwRFx1NURGMlx1N0VDRlx1NEUzQSBuYW1lLmdpdGh1Yi5pbyBcdTU3REZcdTU0MERcdUZGMENcdTUyMTlcdTRFMERcdTk3MDBcdTg5ODFcdTRGRUVcdTY1MzlcdUZGMDFcbmNvbnN0IGJhc2UgPSAnL3ZpdGVwcmVzcy8nXG4vLyBWaXRlcHJlc3MgXHU5RUQ4XHU4QkE0XHU5MTREXHU3RjZFXG4vLyBcdThCRTZcdTg5QzFcdTY1ODdcdTY4NjNcdUZGMUFodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL3NpdGUtY29uZmlnXG4vLyBjb25zdCBiYXNlID0gJy92aXRlcHJlc3MvJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLy8gXHU3RUU3XHU2MjdGXHU1MzVBXHU1QkEyXHU0RTNCXHU5ODk4KEBzdWdhcmF0L3RoZW1lKVxuICBleHRlbmRzOiBibG9nVGhlbWUsXG4gIGJhc2UsXG4gIHNpdGVtYXA6IHtcbiAgICBob3N0bmFtZTogJ2h0dHBzOi8vbG91YXEuZ2l0aHViLmlvL3ZpdGVwcmVzcy8nXG4gIH0sXG4gIGxhbmc6ICd6aC1jbicsXG4gIHRpdGxlOiAnTG91YXEgbGFiJyxcbiAgZGVzY3JpcHRpb246ICdMb3VhcVx1NzY4NFx1NTM1QVx1NUJBMlx1NTIwNlx1NEVBQlx1N0Y1MVx1N0FEOSwgXHU1N0ZBXHU0RThFIHZpdGVwcmVzcyBcdTVCOUVcdTczQjAnLFxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgLy8gXHU4QkU2XHU4OUMxXHVGRjFBaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3poL3JlZmVyZW5jZS9zaXRlLWNvbmZpZyNoZWFkXG4gIGhlYWQ6IFtcbiAgICAvLyBcdTkxNERcdTdGNkVcdTdGNTFcdTdBRDlcdTc2ODRcdTU2RkVcdTY4MDdcdUZGMDhcdTY2M0VcdTc5M0FcdTU3MjhcdTZENEZcdTg5QzhcdTU2NjhcdTc2ODQgdGFiIFx1NEUwQVx1RkYwOVxuICAgIC8vIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6IGAke2Jhc2V9L2RvY3MvcHVibGljL2Zhdmljb24uaWNvYCB9XSwgLy8gXHU0RkVFXHU2NTM5XHU0RTg2IGJhc2UgXHU4RkQ5XHU5MUNDXHU0RTVGXHU5NzAwXHU4OTgxXHU1NDBDXHU2QjY1XHU0RkVFXHU2NTM5XG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy92aXRlcHJlc3MvZmF2aWNvbi5zdmcnIH1dXG4gIF0sXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gXHU1QzU1XHU3OTNBIDIsMyBcdTdFQTdcdTY4MDdcdTk4OThcdTU3MjhcdTc2RUVcdTVGNTVcdTRFMkRcbiAgICBvdXRsaW5lOiB7XG4gICAgICBsZXZlbDogWzIsIDNdLFxuICAgICAgbGFiZWw6ICdcdTc2RUVcdTVGNTUnXG4gICAgfSxcbiAgICBzZWFyY2g6IHtcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnXG4gICAgfSxcbiAgICAvLyBcdTlFRDhcdThCQTRcdTY1ODdcdTY4NDhcdTRGRUVcdTY1MzlcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4JyxcbiAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU3NkY4XHU1MTczXHU2NTg3XHU3QUUwJyxcbiAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcdTRFOEUnLFxuXG4gICAgLy8gXHU4QkJFXHU3RjZFbG9nb1xuICAgIGxvZ286ICcvbG9nby5wbmcnLFxuICAgIC8vIGVkaXRMaW5rOiB7XG4gICAgLy8gICBwYXR0ZXJuOlxuICAgIC8vICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0FUUVEvc3VnYXItYmxvZy90cmVlL21hc3Rlci9wYWNrYWdlcy9ibG9ncHJlc3MvOnBhdGgnLFxuICAgIC8vICAgdGV4dDogJ1x1NTNCQiBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU1MTg1XHU1QkI5J1xuICAgIC8vIH0sXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHsgdGV4dDogJ1x1NTE3M1x1NEU4RScsIGxpbms6ICcvYWJvdXQnIH0sXG4gICAgXSxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgIF1cbiAgfVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3dvcmtzcGFjZXMvdml0ZXByZXNzL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3dvcmtzcGFjZXMvdml0ZXByZXNzL2RvY3MvLnZpdGVwcmVzcy9ibG9nLXRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy93b3Jrc3BhY2VzL3ZpdGVwcmVzcy9kb2NzLy52aXRlcHJlc3MvYmxvZy10aGVtZS50c1wiOy8vIFx1NEUzQlx1OTg5OFx1NzJFQ1x1NjcwOVx1OTE0RFx1N0Y2RVxuaW1wb3J0IHsgZ2V0VGhlbWVDb25maWcgfSBmcm9tICdAc3VnYXJhdC90aGVtZS9ub2RlJ1xuXG4vLyBcdTVGMDBcdTU0MkZSU1NcdTY1MkZcdTYzMDFcdUZGMDhSU1NcdTkxNERcdTdGNkVcdUZGMDlcbmltcG9ydCB0eXBlIHsgVGhlbWUgfSBmcm9tICdAc3VnYXJhdC90aGVtZSdcblxuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2xvdWFxLmdpdGh1Yi5pbydcbmNvbnN0IFJTUzogVGhlbWUuUlNTT3B0aW9ucyA9IHtcbiAgIHRpdGxlOiAnTG91YXEnLFxuICAgYmFzZVVybCxcbiAgIGNvcHlyaWdodDogJ0NvcHlyaWdodCAoYykgMjAxOC1wcmVzZW50LCBMb3VhcScsXG4gICBkZXNjcmlwdGlvbjogJ1x1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNixcdTYyRTVcdTY3MDlcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0ZcdUZGMDhcdTU5MjdcdTUyNERcdTdBRUZcdTc2RjhcdTUxNzNcdTYyODBcdTY3MkZcdTUyMDZcdTRFQUJcdUZGMDknLFxuICAgbGFuZ3VhZ2U6ICd6aC1jbicsXG4gICBpbWFnZTogJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFkzTkRrNU5URTJOekF6TUE9PTY3NDk5NTE2NzAzMCcsXG4gICBmYXZpY29uOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcC9mYXZpY29uLmljbycsXG59XG4vLyBcdTYyNDBcdTY3MDlcdTkxNERcdTdGNkVcdTk4NzlcdUZGMENcdThCRTZcdTg5QzFcdTY1ODdcdTY4NjM6IGh0dHBzOi8vdGhlbWUuc3VnYXJhdC50b3AvXG5jb25zdCBibG9nVGhlbWUgPSBnZXRUaGVtZUNvbmZpZyh7XG4gICBmb3JtYXRTaG93RGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKClcbiAgfSxcbiAgY29tbWVudDoge1xuICAgIHR5cGU6ICdnaXNjdXMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHJlcG86ICdMb3VhcS92aXRlcHJlc3MnLFxuICAgICAgcmVwb0lkOiAnUl9rZ0RPTm5kTXJ3JyxcbiAgICAgIGNhdGVnb3J5OiAnQW5ub3VuY2VtZW50cycsXG4gICAgICBjYXRlZ29yeUlkOiAnRElDX2t3RE9ObmRNcjg0Q2wzU2InLFxuICAgICAgaW5wdXRQb3NpdGlvbjogJ3RvcCdcbiAgICB9LFxuICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NUM1NVx1NzkzQVx1NTE4NVx1NUJCOVxuICAgIGxhYmVsOiAnXHU1M0QxXHU4ODY4XHU2MTBGXHU4OUMxJyxcbiAgICBpY29uOiBgPHN2ZyB3aWR0aD1cIjUxMlwiIGhlaWdodD1cIjUxMlwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICA8cGF0aCBmaWxsPVwiI2ZiYmY2N1wiIGQ9XCJNNjMuOTYyIDMxLjk3OWMwIDE3LjY2NS0xNC4zMTggMzEuOTc5LTMxLjk4MSAzMS45NzlDMTQuMzE5IDYzLjk1OCAwIDQ5LjY0NCAwIDMxLjk3OUMwIDE0LjMxNSAxNC4zMTkgMCAzMS45ODEgMGMxNy42NjMgMCAzMS45ODEgMTQuMzE1IDMxLjk4MSAzMS45NzlcIi8+XG4gICAgICA8cGF0aCBmaWxsPVwiIzYzM2QxOVwiIGQ9XCJNMzkuNTEyIDQ3LjkyNWMtLjYyNC0xLjQ2MS0xLjk1OS0yLjIwMi0zLjk3LTIuMjAyYy0xLjU2OCAwLTMuMjcxLjQ1LTQuNTE1Ljc4bC0uNzI3LjE4NWMtLjMyLjA3OS0xLjk3OSAxLjAxMi0xLjg2OCAxLjkxNGwuMTkzLjcyN2guNjcxYy4xMTEgMCAuMjI5LS4wMTYuMzctLjA0OWwuNjAyLS4xNTJjMS4zNjEtLjM0MiAyLjY0My0uNjY2IDMuOTgzLS42NjZjLjc4OCAwIDEuNDYuMzA1IDIgLjkwNWMuNDQyLjQ4Ny4zNzEuNzczLjM0OC44NjhjLS4xMTguNDk0LS44ODkgMS4wODUtMS45MTYgMS40NzZjMCAwLTEuNTk0LjY1OC0xLjY2MyAxLjU3NGwuMDUyLjYyMmwuNDE1LjIzN2MyLjMyNiAxLjMzMyAyLjI3OCAyLjE5NCAxLjk3OSAyLjc5NmMtLjMzMi42NjQtMS4yNzUuODA1LTIuMDEuODA1Yy0xLjAxOSAwLTIuMTIxLS4yNzMtMi43NjUtLjU0MmwtLjQyNy0uMDgzYy0uODA2IDAtMi4xMDUuOTctMi4yNDggMS42NzNsLS4wNzEuNzE2bC41NzMuMjM4YTguMDMgOC4wMyAwIDAgMCAzLjEyOC42MjhoLjAwNGMxLjg5NiAwIDMuODMxLS42NjMgNS40NDItMS44NjZjMS40MzEtMS4wNjYgMS43MTMtMi4xOCAxLjY5OS0yLjkyOWMtLjAyLS45MzgtLjUwNi0xLjg4Mi0xLjM5MS0yLjcyOGMyLjIzLTEuMzMyIDIuOTM5LTIuOTg2IDIuMTEyLTQuOTI3XCIvPlxuICAgICAgPGVsbGlwc2UgY3g9XCIxMS4yNDJcIiBjeT1cIjQyLjQyXCIgZmlsbD1cIiNlZDMwN2NcIiBvcGFjaXR5PVwiLjQ4XCIgcng9XCI3LjkyOFwiIHJ5PVwiNi40NjJcIi8+XG4gICAgICA8cGF0aCBmaWxsPVwiI2VkMzA3Y1wiIGQ9XCJNNjAuNjUgNDMuMjRjMCAzLjU3MS0zLjU0OSA2LjQ2Mi03LjkyNyA2LjQ2MmMtNC4zNzkgMC03LjkzLTIuODkxLTcuOTMtNi40NjJjMC0zLjU3MiAzLjU1MS02LjQ2NiA3LjkzLTYuNDY2YzQuMzc4IDAgNy45MjcgMi44OTQgNy45MjcgNi40NjZcIiBvcGFjaXR5PVwiLjQ4XCIvPlxuICAgICAgPHBhdGggZmlsbD1cIiM2MzNkMTlcIiBkPVwiTTI1LjIzIDEyLjk2OGMtNS45NTEtLjQxMS0xMS4zNDYgMi4wMjgtMTUuMDggNi42NmMtMS42MjIgMi4wMSAxLjIyMyA0Ljg5IDIuODYgMi44NmMzLjEzNC0zLjg4NyA3LjIxNS01LjgyMiAxMi4yMjEtNS40NzVjMi42MDUuMTc5IDIuNTg4LTMuODY3IDAtNC4wNDVtMTQuMDc5IDBjNS45NS0uNDExIDExLjM0NiAyLjAyOCAxNS4wOCA2LjY2YzEuNjIxIDIuMDEtMS4yMjMgNC44OS0yLjg2IDIuODZjLTMuMTM0LTMuODg3LTcuMjE1LTUuODIyLTEyLjIyMS01LjQ3NWMtMi42MDUuMTc5LTIuNTg3LTMuODY3IDAtNC4wNDVNMjguODg2IDMyLjMzYy0uMjI1IDAtNC4zMzMtMS41NzYtOC40OC0xLjU3NmMtMy43MDUgMC03LjQ0MiAxLjU3Ni04LjQ4MSAxLjU3NmMtLjkgMC0xLjIzNi0xLjA0My0uNjkxLTEuNjY3YzQuOTYxLTUuNzI4IDEzLjM3OC01LjcyOCAxOC4zNDQgMGMuNTQxLjYyNC4yMDUgMS42NjctLjY5MiAxLjY2N20yNS4wMTkgMGMtLjIyNiAwLTQuMzMzLTEuNTc2LTguNDgtMS41NzZjLTMuNzA1IDAtNy40NDEgMS41NzYtOC40OCAxLjU3NmMtLjkgMC0xLjIzNi0xLjA0My0uNjkxLTEuNjY3YzQuOTYxLTUuNzI4IDEzLjM3OS01LjcyOCAxOC4zNDQgMGMuNTQuNjI0LjIwNCAxLjY2Ny0uNjkzIDEuNjY3XCIvPlxuICA8L3N2Zz5gLFxuICAgIG1vYmlsZU1pbmlmeTogdHJ1ZVxuICB9LFxuICBvbWwyZDoge1xuICAgIG1vYmlsZURpc3BsYXk6IHRydWUsXG4gICAgbW9kZWxzOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdodHRwczovL3JlZ2lzdHJ5Lm5wbW1pcnJvci5jb20vb21sMmQtbW9kZWxzL2xhdGVzdC9maWxlcy9tb2RlbHMvSEs0MTYtMS1ub3JtYWwvbW9kZWwuanNvbidcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIC8vIFx1NUYwMFx1NTQyRlJTU1x1NjUyRlx1NjMwMVxuICAgUlNTLFxuXG4gIC8vIFx1NjQxQ1x1N0QyMlxuICAvLyBcdTlFRDhcdThCQTRcdTVGMDBcdTU0MkZwYWdlZmluZFx1NzlCQlx1N0VCRlx1NzY4NFx1NTE2OFx1NjU4N1x1NjQxQ1x1N0QyMlx1NjUyRlx1NjMwMVx1RkYwOFx1NTk4Mlx1NEY3Rlx1NzUyOFx1NTE3Nlx1NUI4M1x1NzY4NFx1NTNFRlx1NEVFNVx1OEJCRVx1N0Y2RVx1NEUzQWZhbHNlXHVGRjA5XG4gIC8vIHNlYXJjaDogZmFsc2UsXG5cbiAgLy8gbWFya2Rvd24gXHU1NkZFXHU4ODY4XHU2NTJGXHU2MzAxXHVGRjA4XHU0RjFBXHU1ODlFXHU1MkEwXHU0RTAwXHU1QjlBXHU3Njg0XHU2Nzg0XHU1RUZBXHU4MDE3XHU2NUY2XHVGRjA5XG4gIC8vIG1lcm1haWQ6IHRydWVcblxuICAvLyBcdTk4NzVcdTgxMUFcbiAgZm9vdGVyOiB7XG4gICAgLy8gbWVzc2FnZSBcdTVCNTdcdTZCQjVcdTY1MkZcdTYzMDFcdTkxNERcdTdGNkVcdTRFM0FIVE1MXHU1MTg1XHU1QkI5XHVGRjBDXHU5MTREXHU3RjZFXHU1OTFBXHU2NzYxXHU1M0VGXHU0RUU1XHU5MTREXHU3RjZFXHU0RTNBXHU2NTcwXHU3RUM0XG4gICAgLy8gbWVzc2FnZTogJ1x1NEUwQlx1OTc2MiBcdTc2ODRcdTUxODVcdTVCQjlcdTU0OENcdTU2RkVcdTY4MDdcdTkwRkRcdTY2MkZcdTUzRUZcdTRFRTVcdTRGRUVcdTY1MzlcdTc2ODRcdTU2NjJcdUZGMDhcdTVGNTNcdTcxMzZcdTY3MkNcdTY3NjFcdTUxODVcdTVCQjlcdTRFNUZcdTY2MkZcdTUzRUZcdTRFRTVcdTk2OTBcdTg1Q0ZcdTc2ODRcdUZGMDknLFxuICAgIGNvcHlyaWdodDogJ01JVCBMaWNlbnNlIHwgTG91YXEnLFxuICAgIC8vIGljcFJlY29yZDoge1xuICAgIC8vICAgbmFtZTogJ1x1ODcwMElDUFx1NTkwNzE5MDExNzI0XHU1M0Y3JyxcbiAgICAvLyAgIGxpbms6ICdodHRwczovL2JlaWFuLm1paXQuZ292LmNuLydcbiAgICAvLyB9LFxuICAgIC8vIHNlY3VyaXR5UmVjb3JkOiB7XG4gICAgLy8gICBuYW1lOiAnXHU1MTZDXHU3RjUxXHU1Qjg5XHU1OTA3eHh4eHgnLFxuICAgIC8vICAgbGluazogJ2h0dHBzOi8vd3d3LmJlaWFuLmdvdi5jbi9wb3J0YWwvaW5kZXguZG8nXG4gICAgLy8gfSxcbiAgfSxcblxuICAvLyBcdTRFM0JcdTk4OThcdTgyNzJcdTRGRUVcdTY1MzlcbiAgdGhlbWVDb2xvcjogJ2VsLWJsdWUnLFxuICBzZWFyY2g6IGZhbHNlLFxuXG4gIC8vIFx1NjU4N1x1N0FFMFx1OUVEOFx1OEJBNFx1NEY1Q1x1ODAwNVxuICBhdXRob3I6ICdMb3VhcScsXG5cbiAgLy8gXHU1M0NCXHU5NEZFXG4gIGZyaWVuZDogW1xuICAgIHtcbiAgICAgIG5pY2tuYW1lOiAnXHU3Q0E1XHU5MUNDXHU2NzA5XHU1MkZBXHU3Q0Q2JyxcbiAgICAgIGRlczogJ1x1NEY2MFx1NzY4NFx1NjMwN1x1NUMxNlx1NzUyOFx1NEU4RVx1NjUzOVx1NTNEOFx1NEUxNlx1NzU0Q1x1NzY4NFx1NTI5Qlx1OTFDRicsXG4gICAgICBhdmF0YXI6XG4gICAgICAgICdodHRwczovL2ltZy5jZG4uc3VnYXJhdC50b3AvbWRJbWcvTVRZM05EazVOVEUyTnpBek1BPT02NzQ5OTUxNjcwMzAnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9zdWdhcmF0LnRvcCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuaWNrbmFtZTogJ1ZpdGVwcmVzcycsXG4gICAgICBkZXM6ICdWaXRlICYgVnVlIFBvd2VyZWQgU3RhdGljIFNpdGUgR2VuZXJhdG9yJyxcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgJ2h0dHBzOi8vdml0ZXByZXNzLmRldi92aXRlcHJlc3MtbG9nby1sYXJnZS53ZWJwJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vdml0ZXByZXNzLmRldi8nLFxuICAgIH0sXG4gIF0sXG5cbiAgLy8gXHU1MTZDXHU1NDRBXG4gIHBvcG92ZXI6IHtcbiAgICB0aXRsZTogJ1x1OEQ0NFx1NjU5OVx1NkU5MFx1NzgwMScsXG4gICAgYm9keTogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY29udGVudDogJ1x1NzBCOVx1NTFGQlx1NEUwQlx1OEY3RCcsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgICAgIH0sXG4gICAgICAgIGxpbms6ICdodHRwczovL3lhbmd5YW5nNjY2Lm9zcy1jbi1jaGVuZ2R1LmFsaXl1bmNzLmNvbS9maWxlcy9ZT0xPdjguMi56aXAnLFxuICAgICAgfVxuICAgIF0sXG4gICAgZHVyYXRpb246IDBcbiAgfSxcbn0pXG5cbmV4cG9ydCB7IGJsb2dUaGVtZSB9XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlSLFNBQVMsb0JBQW9COzs7QUNDdFQsU0FBUyxzQkFBc0I7QUFLL0IsSUFBTSxVQUFVO0FBQ2hCLElBQU0sTUFBd0I7QUFBQSxFQUMzQixPQUFPO0FBQUEsRUFDUDtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1gsYUFBYTtBQUFBLEVBQ2IsVUFBVTtBQUFBLEVBQ1YsT0FBTztBQUFBLEVBQ1AsU0FBUztBQUNaO0FBRUEsSUFBTSxZQUFZLGVBQWU7QUFBQSxFQUM5QixlQUFlLE1BQU07QUFDcEIsV0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFLGVBQWU7QUFBQSxFQUN2QztBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osZUFBZTtBQUFBLElBQ2pCO0FBQUE7QUFBQSxJQUVBLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU9OLGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVVELFFBQVE7QUFBQTtBQUFBO0FBQUEsSUFHTixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBU2I7QUFBQTtBQUFBLEVBR0EsWUFBWTtBQUFBLEVBQ1osUUFBUTtBQUFBO0FBQUEsRUFHUixRQUFRO0FBQUE7QUFBQSxFQUdSLFFBQVE7QUFBQSxJQUNOO0FBQUEsTUFDRSxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxRQUNFO0FBQUEsTUFDRixLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0E7QUFBQSxNQUNFLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLFFBQ0U7QUFBQSxNQUNGLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLEVBQ1o7QUFDRixDQUFDOzs7QUQ1R0QsSUFBTSxPQUFPO0FBSWIsSUFBTyxpQkFBUSxhQUFhO0FBQUE7QUFBQSxFQUUxQixTQUFTO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGFBQWE7QUFBQTtBQUFBLEVBRWIsTUFBTTtBQUFBO0FBQUE7QUFBQSxJQUdKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLHlCQUF5QixDQUFDO0FBQUEsRUFDMUQ7QUFBQSxFQUNBLGFBQWE7QUFBQTtBQUFBLElBRVgsU0FBUztBQUFBLE1BQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUFBLE1BQ1osT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUE7QUFBQSxJQUVBLGtCQUFrQjtBQUFBLElBQ2xCLGtCQUFrQjtBQUFBLElBQ2xCLGlCQUFpQjtBQUFBO0FBQUEsSUFHakIsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1OLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxnQkFBTSxNQUFNLElBQUk7QUFBQSxNQUN4QixFQUFFLE1BQU0sZ0JBQU0sTUFBTSxTQUFTO0FBQUEsSUFDL0I7QUFBQSxJQUNBLGFBQWEsQ0FDYjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

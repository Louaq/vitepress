import { defineConfig } from 'vitepress'
import { La51Plugin } from 'vitepress-plugin-51la'
// 导入主题的配置
import { blogTheme } from './blog-theme'
// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
const base = '/vitepress/'
// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
// const base = '/vitepress/'
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base,
  sitemap: {
    hostname: 'https://louaq.github.io/vitepress/'
  },
  vite: {
    plugins: [
      La51Plugin({
        id: '3LPXKWn8yDWHfIIJ',
        ck: '3LPXKWn8yDWHfIIJ'
      })
    ]
  },
  lang: 'zh-cn',
  title: 'Louaq lab',
  description: 'Louaq的博客分享网站, 基于 vitepress 实现',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}/docs/public/favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/vitepress/favicon.svg' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    search: {
      provider: 'local'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    
    // 设置logo
    logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
    ],
    socialLinks: [
    ]
  }
})

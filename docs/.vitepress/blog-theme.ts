// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
import type { Theme } from '@sugarat/theme'

const baseUrl = 'https://louaq.github.io'
const RSS: Theme.RSSOptions = {
   title: 'Louaq',
   baseUrl,
   copyright: 'Copyright (c) 2018-present, Louaq',
   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
   language: 'zh-cn',
   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
   favicon: 'https://sugarat.top/favicon.ico',
}
// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
   formatShowDate(date) {
    return new Date(date).toLocaleString()
  },
   comment: {
    type: 'giscus',
    options: {
      repo: 'Louaq/vitepress',
      repoId: 'R_kgDONndMrw',
      category: 'Announcements',
      categoryId: 'DIC_kwDONndMr84Cl3Sb',
      inputPosition: 'bottom'
    },
    mobileMinify: true
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
    copyright: 'MIT License | Louaq',
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
  themeColor: 'el-blue',
  search: false,

  // 文章默认作者
  author: 'Louaq',

  // 友链
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],

  // 公告
  popover: {
    title: '公告',
    body: [
      { type: 'text', content: '<a href="https://yangyang666.oss-cn-chengdu.aliyuncs.com/files/YOLOv8.2.zip" style="color: red">资料源码(点击立即下载)</a>' },
    ],
    duration: 0
  },
})

export { blogTheme }

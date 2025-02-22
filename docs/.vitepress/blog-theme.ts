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
      inputPosition: 'top'
    },
    // 自定义展示内容
    label: '发表意见',
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
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json'
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
    title: '资料源码',
    body: [
      {
        type: 'button',
        content: '点击下载',
        props: {
          type: 'success'
        },
        link: 'https://yangyang666.oss-cn-chengdu.aliyuncs.com/files/YOLOv8.2.zip',
      }
    ],
    duration: 0
  },
})

export { blogTheme }

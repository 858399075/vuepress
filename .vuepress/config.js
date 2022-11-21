module.exports = {
  title: "星月前端博客",
  description: 'The top of the mountain is not the end, nor is the other mountain.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      // { text: '随记', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: '生活日记', link: '/docs/theme-reco/' }
      //   ]
      // },
      { text: '随记', link: '/docs/theme-reco/', icon: 'reco-message' },
      { text: '联系方式', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/858399075', icon: 'reco-github' },
          { text: 'Gitee', link: 'https://gitee.com/xingyueqianduan', icon: 'reco-github' },
          { text: 'QQ:76120220', link: 'http://blog.yhxweb.top/', icon: '' },
          { text: 'WX:15237156071', link: 'http://blog.yhxweb.top/', icon: '' }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': [
        '',
        '1',
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '博客' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    // friendLink: [
    //   {
    //     title: '午后南杂',
    //     desc: 'Enjoy when you can, and endure when you must.',
    //     email: '1156743527@qq.com',
    //     link: 'https://www.recoluan.com'
    //   },
    //   {
    //     title: 'vuepress-theme-reco',
    //     desc: 'A simple and beautiful vuepress Blog & Doc theme.',
    //     avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     link: 'https://vuepress-theme-reco.recoluan.com'
    //   },
    // ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '星月',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: '滇ICP备2022006526',
    // 项目开始时间
    startYear: '2022'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    // 页面滚动时自动激活侧边栏链接的插件
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    // 一个基于 nprogress (opens new window)的进度条插件。
    ["@vuepress/nprogress"],
    // 看板娘
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['haru1']
      }
    ],
    // 修改光标效果
    ['cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }]
  ],
}  

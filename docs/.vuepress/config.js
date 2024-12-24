const moment = require('moment');

module.exports = {
  description:"浩浩的博客",
  title:"浩浩的博客",
  head: [
    ['mate', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['mate', { name: 'keywords', content: '浩浩的博客' }],
    ['mate', { name: 'author', content: '浩浩' }],
    ['mate', { name: 'description', content: '浩浩的博客' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  /* 侧边栏 */
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale("zh-cn");
          return moment(timestamp).format('lll');
        }
      }
    ]
  ],
  /* 侧边栏 */
  themeConfig: {
    /* git提交最后的更新时间 */
  lastUpdated:"最后更新时间",

    /* 是否禁用导航 */
    // navbar: false,
    /* 图标 */
    logo: "/assets/img/hero.png",
    /* 标题默认全部展开还是选中展开 */
    // displayAllHeaders:true,
    /* 导航栏自定义 */
    sidebar: [
        '', 
        "about",
      {
        /* 自定义标题 */
        title: '美丽的foo',
        /* 标明path 就可以点击标题并跳转到他下面的README.md 文件 */
        path: '/foo/',
        /* 标题是下拉（true）还是标题形式（false） */
        collapsable: false,
        /* 选中以后是否有下拉的标题 0是没有 1是二级标题 2有二级和三级标题 */
        sidebarDepth:0,
        /* 他们的子元素 */
        children: [
          '/foo/one',
          '/foo/two',
        ]
      },
    ],
    // sidebar: {
    //   '/foo/': [
    //     '',     /* /foo/ */
    //     'one',  /* /foo/one.html */
    //     'two'   /* /foo/two.html */
    //   ],

    //   '/bar/': [
    //     '',      /* /bar/ */
    //     'three', /* /bar/three.html */
    //     'four'   /* /bar/four.html */
    //   ],

    //   // fallback
    //   '': [
    //     '',        /* / */
    //     'REMADE', /* /contact.html */
    //     'about'    /* /about.html */
    //   ]
    // },
    /* 横向导航栏自定义 */
    nav: [
      /* 单个的 */
        { text: 'Home', link: '/' },
        { text: 'about', link: '/about' },
        { text: 'about2', link: '/about2' },
        // 多个下拉
        {
          text: 'Languages',
          items: [
            { text: 'Home', link: '/' },
            { text: 'about', link: '/about' }
          ]
        },
        /* 多组下拉 */
      {
        text: "foo|bar",
        items: [
          {
            text: "foo",
            items: [
              { text: "one", link: "/foo/one" },
              { text: "two", link: "/foo/two" },
            ],
          },
          {
            text: "bar",
            items: [
              { text: "three", link: "/bar/three" },
              { text: "four", link: "/bar/four" },
            ],
          },
        ],
      },
      { text: "External", link: "https://google.com" },
    ],
  },
};

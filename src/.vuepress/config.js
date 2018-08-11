module.exports = {
  title: 'CrowdLingo',
  description: 'speak with your friends',
  base: "/course/",

  themeConfig: {
    // displayAllHeaders: true,
    // lastUpdated: 'Last Updated',
    evergreen: true,
    // sidebar: 'auto',
    sidebar: {
      '/speaking/': [
        'movies',
        'free-time'
      ],

      // fallback
      // '/': [
      //   '',        /* / */
      //   'contact', /* /contact.html */
      //   'about'    /* /about.html */
      // ]
    },

    // sidebar: [
    //   {
    //     title: 'Site',
    //     collapsible: false,
    //     children: [
    //       '/',
    //       '/guide',
    //     ]
    //   },
    //   {
    //     title: 'Speaking',
    //     children: [
    //       '/movies',
    //       ['/free-time', 'Free time'],
    //      ]
    //   }
    // ]

    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },

    repo: 'https://github.com/dcsan/crowdlingo/tree/master/press/docs/guide',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    configureWebpack: {
      resolve: {
        alias: {
          '@assets': './assets/'
        }
      }
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Speaking', link: '/speaking/' },
      { text: 'Grammar', link: '/grammar/' },
      { text: 'Guide', link: '/guide/' },

      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/' }
        ]
      },
      // { text: 'Github', link: 'https://github.com/dcsan/crowdlingo' }
    ],

    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'en-US', // this will be set as the lang attribute on <html>
        title: 'CrowdLingo',
        description: 'Crowd Powered Language Study'
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'CrowdLingo',
        description: '人群动力语言研究'
      }
    },

  }

}
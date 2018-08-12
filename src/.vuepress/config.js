
let config = {
  // title: 'CrowdLingo',
  title: '英语AI老师|',
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
        'free-time',

        "accomodation",
        "being-alone",
        "being-in-a-hurry",
        "clothes",
        "colours",
        "countryside",
        "film",
        "friends",
        "handwriting",
        "hanging-out-with-friends",
        "helping-people",
        "history",
        "holidays",
        "hometown",
        "leisure-time",
        "letters-or-emails",
        "maths",
        "memorising",
        "museum",
        "music",
        "name",
        "newspapers",
        "photography",
        "punctuality",
        "reading",
        "sky",
        "sleep",
        "snacks",
        "social-network",
        "sports",
        "study-and-work",
        "swimming",
        "teachers",
        "teamwork",
        "television",
        "text-messages",
        "transportation",
        "travelling",
        "tree",
        "vegetables-and-fruits",
        "weather",
        "weekend"

    ]

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
          // '@assets': '/public/assets/'
          '@assets': '/course/assets/'
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

// gets removed from $site so has to go into themeConfig
let appConfig = require('./appConfig.js')
config.themeConfig.appConfig = appConfig

module.exports = config

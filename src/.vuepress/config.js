const { description } = require('../../package')

console.log(process.env.GA_TRACKING);

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'FLSUN Community HUB',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png', sizes: '180x180' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileImage', content: '/mstile-150x150.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'blackfyre/flsun.community',
    editLinks: true,
    repoLabel: 'Contribute!',
    editLinkText: 'Help us improve this page!',
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    smoothScroll: true,
    nav: [
      { text: 'Social Media', link: '/social-media/' },
      { text: 'Firmware', link: '/firmware/' },
    ],
    sidebar: {
      '/firmware/': [
        {
          title: 'Firmware',
          collapsable: false
        }
      ],
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false
        }
      ],
      '/social-media/': [
        {
          title: 'Social Media',
          collapsable: false
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': process.env.GA_TRACKING || '' 
      }
    ]
  ]
}

const { description } = require("../../package");

console.log("tracking", process.env.GA_TRACKING || "");
console.log("build-env", process.env.NODE_ENV);

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "FLSUN Community HUB",
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
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/icons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/mstile-150x150.png" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#2b5797" }],
    [
      "script",
      {
        async: "",
        src:
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
            process.env.GA_ADSENSE_ID || "",
        crossorigin: "anonymous",
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "blackfyre/flsun.community",
    editLinks: true,
    repoLabel: "Contribute!",
    editLinkText: "Help us improve this page!",
    logo: "/logo.png",
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    smoothScroll: true,
    sidebarDepth: 2,
    nav: [
      {
        text: "Forum",
        link: "https://github.com/blackfyre/flsun.community/discussions",
      },
      { text: "Social Media", link: "/guide/social-media.html" },
      { text: "Firmware", link: "/guide/firmware.html" },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [
            "",
            "calibration",
            "troubleshooting",
            "upgrades",
            "firmware",
            "social-media",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ["check-md"],
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "vuepress-plugin-google-tag-manager",
      { gtm: process.env.GA_TRACKING || "" },
    ],
    [
      "sitemap",
      {
        hostname: "https://flsun.community",
        exclude: ["/404.html"],
      },
    ],
    [
      "robots",
      {
        host: "https://flsun.community",
        disallowAll: false,
        allowAll: true,
        policies: [
          {
            userAgent: "*",
          },
        ],
      },
    ],
    ["seo", { type: () => "article" }],
    ["vuepress-plugin-code-copy", true],
    ["authors"],
    [
      "qrcode",
      {
        labelText: "QR Code",
        size: "small",
        channel: true,
      },
    ],
    ["flowchart"],
  ],
};

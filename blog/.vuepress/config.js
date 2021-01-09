module.exports = {
  title: "christiantola.me",
  description: "This is a blog example built by VuePress",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Pacifico|Roboto&display=swap",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ["meta", { name: "viewport", content: "width=device-width, user-scalable=no"}],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: `/icons/icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/icons/icon-144x144.png" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    [
      "script",
      {
        src:
          "https://www.google.com/recaptcha/api.js?render=6LcCmNEUAAAAABtpW4cic7ehTh_aCpyFQWiiSZQM",
      },
    ],
  ],
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "Sobre Mi",
        link: "/about/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
      {
        text: "Contacto",
        link: "/contact/",
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/ulivz",
        },
        {
          type: "twitter",
          link: "https://twitter.com/_ulivz",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: "",
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-135140895-1",
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "Nuevo contenido disponible.",
          buttonText: "Recargar",
        },
      },
    ],
  ],
};

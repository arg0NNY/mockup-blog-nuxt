// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseURL: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work'
    }
  },
  app: {
    head: {
      script: [
        { src: '/js/jquery.js', defer: true },
        { src: '/js/plugins.js', defer: true },
        { src: '/js/scripts.js', defer: true },
        { src: '/js/masonry.pkgd.min.js', defer: true }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:400,500,700%7CRoboto:400,500,700%7CHerr+Von+Muellerhoff:400,500,700%7CQuattrocento+Sans:400,500,700' }
      ]
    }
  },
  css: [
    '~/assets/css/woocommerce-layout.css',
    '~/assets/css/woocommerce-smallscreen.css',
    '~/assets/css/woocommerce.css',
    '~/assets/css/font-awesome.min.css',
    '~/assets/css/style.css',
    '~/assets/css/easy-responsive-shortcodes.css'
  ]
})

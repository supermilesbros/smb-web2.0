export default {
  generate: {
    fallback: true,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'SuperMilesBros',
    titleTemplate: '%s SuperMilesBros Web Development Services',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/smb-favicon.png' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/style.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vue-awesome-swiper.js',
    '~/plugins/Mixitup.client.js',
    /* {
            src: "~/plugins/aos", 
            ssr: false 
        }, */
    {
      src: '~plugins/vue-backtotop.js',
      ssr: false,
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    [
      'nuxt-fontawesome',
      {
        component: 'fa', //customize component name
        imports: [
          { set: '@fortawesome/free-brands-svg-icons', icons: ['faTiktok'] },
          { set: '@fortawesome/free-solid-svg-icons', icons: ['faLightbulb'] },
        ],
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['~/assets/scss/common/_variables.scss'],
  },

  router: {
    linkExactActiveClass: 'active',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    extend(config, ctx) {},
  },
};

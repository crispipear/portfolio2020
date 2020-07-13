import CONFIG from './site-config';
export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: CONFIG.siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: CONFIG.description },
      { name: 'keywords', content: CONFIG.keywords},
      { property: 'og:title', content: CONFIG.siteTitle },
      { property: 'og:description', content: CONFIG.description}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;600&display=swap' }
    ]
  },
  components: true,
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/prismic'
  ],
  prismic: {
    endpoint: process.env.NUXT_ENV_PRISMIC_ENDPOINT,
    apiOptions: { accessToken: process.env.NUXT_ENV_PRISMIC_TOKEN },
    preview: false
  },
  styleResources: {
    scss: [
        '~/assets/variables.scss',
        '~/assets/mixins.scss'
    ]
  }
}

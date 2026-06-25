// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  typescript: {
    strict: true,
    typeCheck: false
  },

  css: ['~/assets/styles/main.css'],

  app: {
    head: {
      title: '李明洋 | Web 前端工程师',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '李明洋的个人网站，展示前端开发、Vue、TypeScript、数据可视化、组件化、微前端、小程序和技术博客内容。'
        },
        {
          name: 'keywords',
          content: '李明洋, 前端工程师, Vue, TypeScript, ECharts, GIS, Three.js, 微前端, 组件库, 技术博客'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})

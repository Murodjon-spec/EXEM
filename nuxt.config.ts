// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    css: [
      '@/assets/css/main.css',
    ],
    app: {
        head: {
          title: "Brand Market",

          link: [
            {rel: "stylesheet", href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"},
            {rel: "icon", href: "Logo.png"},
            {rel: "preconnect", href: "https://fonts.googleapis.com"},
            {rel: "preconnect", href: "https://fonts.gstatic.com"},
            {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron&family=Roboto&display=swap"}
          ],


          meta: [{
            name: "description", content: "Brand Market App in NuxtJS"
          },
          {
            name: "author", content: "Azizkhon"
          }]
        }
      }
})

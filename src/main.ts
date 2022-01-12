import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next'
import vuetify from './plugins/vuetify'
import Particles from 'particles.vue3'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(VueGtag, {
    property: {
      id: 'G-HC4SYJNWCV',
      router
    }
  })
  .use(vuetify)
  .use(Particles)
  .mount('#app')

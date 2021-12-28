import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag-next'
import vuetify from './plugins/vuetify'
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
  .mount('#app')

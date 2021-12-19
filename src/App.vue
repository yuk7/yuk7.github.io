<template>
  <v-app>
      <v-app-bar elevation="4">
        <v-toolbar-title>yuk7.github.io</v-toolbar-title>
        <v-spacer />
        <v-btn class="mr-3" to="/">Home</v-btn>
        <v-btn class="mr-3" to="/works">Works</v-btn>
        <v-btn class="mr-3" to="/blog">Blog</v-btn>
        <v-btn class="mr-3" to="/repos">Repositories</v-btn>
      </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>

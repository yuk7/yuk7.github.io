<template>
  <v-app id="app" :theme="theme">
    <v-app-bar elevation="4">
      <v-toolbar-title>yuk7.github.io</v-toolbar-title>
      <v-spacer />
      <v-btn class="mr-3" to="/">Home</v-btn>
      <v-btn class="mr-3" to="/works">Works</v-btn>
      <v-btn class="mr-3" href="/blog">Blog</v-btn>
      <v-btn class="mr-3" to="/repos">Repositories</v-btn>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export type DataType = {
    theme: string
  }

  export default defineComponent({
    name: 'App',
    data(): DataType {
      return {
        theme: "light"
      }
    },
    methods: {
      toggleTheme() {
        this.theme = this.theme === "light" ? "dark" : "light";
      }
    },
    created() {
      const darkMedia = window.matchMedia('(prefers-color-scheme: dark)')
      if (darkMedia.matches == true) {
        this.theme = "dark"
      }
      darkMedia.addEventListener("change", event => {
        if (event.matches) {
          this.theme = "dark"
        } else {
          this.theme = "light"
        }
      })
    }
  })
</script>
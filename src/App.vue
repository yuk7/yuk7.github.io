<template>
  <v-app id="app" :theme="theme">
    <v-app-bar elevation="4">
      <ParticleBackground id="appbar-background"/>
      <v-toolbar-title>yuk7.github.io</v-toolbar-title>
      <v-spacer />
      <div class="d-none d-sm-flex">
        <v-btn class="mr-3" to="/" @click.stop="drawer = false">Home</v-btn>
        <v-btn class="mr-3" to="/works" @click.stop="drawer = false">Works</v-btn>
        <v-btn class="mr-3" href="/blog" @click.stop="drawer = false">Blog</v-btn>
        <v-btn class="mr-3" to="/repos" @click.stop="drawer = false">Repositories</v-btn>
      </div>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ParticleBackground id="background" class="d-none d-sm-flex" />
      <router-view />
    </v-main>

    <v-bottom-navigation class="d-flex d-sm-none">
      <ParticleBackground id="bottomnav-background"/>
      <v-btn to="/">
        <v-icon>mdi mdi-home</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn to="/works">
        <v-icon>mdi mdi-briefcase</v-icon>
        <span>Works</span>
      </v-btn>

      <v-btn href="/blog">
        <v-icon>mdi mdi-post</v-icon>
        <span>Blog</span>
      </v-btn>

      <v-btn to="/repos">
        <v-icon>mdi mdi-github</v-icon>
        <span>Repos</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ParticleBackground from "@/components/ParticleBackground.vue";

  export type DataType = {
    theme: string,
    drawer: boolean
  }

  export default defineComponent({
    name: 'App',
    components: {
      ParticleBackground
    },
    data(): DataType {
      return {
        theme: "light",
        drawer: false
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
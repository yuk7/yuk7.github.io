<template>
  <v-app id="app" :theme="theme">
    <v-app-bar elevation="4">
      <v-toolbar-title>yuk7.is-a.dev</v-toolbar-title>
      <v-spacer />
      <div class="d-none d-sm-flex">
        <v-btn class="mr-3" to="/">Home</v-btn>
        <v-btn class="mr-3" to="/works">Works</v-btn>
        <v-btn class="mr-3" href="/blog">Blog</v-btn>
        <v-btn class="mr-3" to="/repos">Repositories</v-btn>
      </div>
      <v-btn icon @click="toggleTheme">
        <v-icon>mdi mdi-brightness-6</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <ParticleSnowBackground id="background" class="d-none d-sm-flex" />
      <router-view />
    </v-main>

    <v-bottom-navigation class="d-flex d-sm-none">
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

<style scoped>
  #app {
    min-height: 100vh;
    background-image: url("@/assets/img/night_building_blur.jpg");
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
</style>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ParticleSnowBackground from "@/components/ParticleSnowBackground.vue";

  export type DataType = {
    theme: string
  }

  export default defineComponent({
    name: 'App',
    components: {
      ParticleSnowBackground
    },
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
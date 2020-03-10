<template>
<v-app id="app">
  <v-card>
    <v-toolbar flat>
      <v-toolbar-title>yuk7.github.io</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs
          fixed-tabs
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab  to="/">
            Home
            <v-icon>mdi-home</v-icon>
          </v-tab>

          <v-tab  to="/repos">
            Repositories
            <v-icon>mdi-github</v-icon>
          </v-tab>

          <v-tab href="https://yuk7.github.io/StartPage">
            Start Page
            <v-icon>mdi-console</v-icon>
          </v-tab>
        </v-tabs>

      </template>
    </v-toolbar>
  </v-card>

  <router-view></router-view>
</v-app>
</template>
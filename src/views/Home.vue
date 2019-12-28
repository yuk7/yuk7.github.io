<template>
  <v-container>
    <v-card class="mx-auto" outlined max-width="800px">
      <v-list-item three-line>
        <v-list-item-content>
          <h2>yuk7</h2>
          <p>
            <v-icon>mdi-cake-variant</v-icon> Jan. 2000 / 19y.o.
          </p>
          <p>
            <v-icon>mdi-city</v-icon> Japan
          </p>
          <p>
            <v-icon>mdi-heart</v-icon> Linux/Android Udon/Chocolate/Mint
          </p>
          <p>
            <v-icon>mdi-code-braces</v-icon> C#/Java/Kotlin/PHP/JavaScript
          </p>
        </v-list-item-content>

        <v-avatar class="profile" color="grey" size="20%">
          <v-img src="https://avatars2.githubusercontent.com/u/29954265" max-width="200px"></v-img>
        </v-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn icon href="mailto:yukx00@gmail.com">
          <v-icon>mdi-email</v-icon>
        </v-btn>
        <v-btn icon href="https://twitter.com/yukx7">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon href="https://keybase.io/yuk7">
          <v-icon>fab fa-keybase</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/yuk7">
          <v-icon>mdi-github-circle</v-icon>
        </v-btn>
        <v-btn icon href="bitcoin:1BJMbHUM1nf7RvbouNfjVcrbgRm7CoYnzx">
          <v-icon>fab fa-bitcoin</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style>
    .mx-auto {
        margin: 10px auto;
    }
</style>
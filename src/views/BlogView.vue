<template>
  <v-container class="py-8 d-flex align-center justify-center" style="min-height: 70vh">
    <v-card max-width="700" rounded="xl" elevation="8" class="pa-3 blog-card">
      <v-card-item>
        <v-icon size="48" color="primary" class="mb-2">mdi-post-outline</v-icon>
        <v-card-title class="text-h4 font-weight-bold">Blog Lives at /blog/</v-card-title>
        <v-card-subtitle class="text-body-1 mt-2">
          Posts are hosted separately on GitHub Pages for simpler publishing.
        </v-card-subtitle>
      </v-card-item>
      <v-card-text class="text-medium-emphasis">
        Use the button below to open the live blog directly.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" size="large" href="/blog/" append-icon="mdi-open-in-new">
          Open Blog
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
.blog-card {
  background: linear-gradient(160deg, rgba(21, 101, 192, 0.12), rgba(0, 188, 212, 0.1));
  backdrop-filter: blur(6px);
}
</style>

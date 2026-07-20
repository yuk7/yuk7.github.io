<template>
  <v-container class="d-flex align-center justify-center" min-height="60vh">
    <v-card max-width="500" elevation="4" rounded="lg">
      <v-card-title class="text-h5 pt-4">
        Page Not Found <span class="text-medium-emphasis">:(</span>
      </v-card-title>
      <v-card-text>
        <p>The page you're looking for can't be found.</p>
        <p>You may have mistyped the address or the page may have moved.</p>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="tonal" to="/">Go to Top</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

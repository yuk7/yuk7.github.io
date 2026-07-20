<template>
  <v-container class="links-wrap py-6 py-md-9">
    <v-row class="mb-4" align="end">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold">Friendly Links</h1>
      </v-col>
      <v-col cols="12" md="4" class="d-flex justify-md-end">
        <v-chip variant="tonal" prepend-icon="mdi-account-group">{{ links.length }} links</v-chip>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="link in links" :key="link.title" cols="12" sm="6" lg="4">
        <v-card class="h-100" color="surface" rounded="lg" elevation="6" border hover>
          <v-card-text class="pa-5 d-flex align-center ga-4">
            <v-avatar size="56">
              <v-img :src="link.avatar" :alt="link.title" />
            </v-avatar>
            <div>
              <div class="text-subtitle-1 font-weight-bold mb-1">{{ link.title }}</div>
              <div class="text-caption text-medium-emphasis">{{ link.domain }}</div>
            </div>
          </v-card-text>
          <v-card-actions class="px-5 pb-4 pt-0">
            <v-btn
              :href="link.href"
              target="_blank"
              rel="noopener"
              variant="tonal"
              append-icon="mdi-open-in-new"
            >
              Visit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const links = [
  {
    title: "justforlxz",
    href: "https://blog.justforlxz.com",
    avatar: "https://avatars.githubusercontent.com/u/12298476",
    domain: "blog.justforlxz.com",
  },
  {
    title: "hwdef",
    href: "http://www.hwdef.org/",
    avatar: "https://avatars.githubusercontent.com/u/13084946",
    domain: "www.hwdef.org",
  },
  {
    title: "LapisApple",
    href: "https://laple.me/",
    avatar: "https://avatars.githubusercontent.com/u/62464927",
    domain: "laple.me",
  },
  {
    title: "AzureZeng",
    href: "https://azurezeng.com/",
    avatar: "https://avatars.githubusercontent.com/u/19504193",
    domain: "azurezeng.com",
  },
  {
    title: "joexyz",
    href: "https://joexyz.online/",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WYVq2Nb9fDK1hr0ch8w2--iR1WVVoxYdfK-Rm34q90sIR3fc",
    domain: "joexyz.online",
  },
  {
    title: "hdk5",
    href: "https://hdk5.xyz/",
    avatar: "https://avatars.githubusercontent.com/u/2550010",
    domain: "hdk5.xyz",
  },
  {
    title: "bagussona",
    href: "http://bagussona.github.io/",
    avatar: "https://avatars.githubusercontent.com/u/76040821",
    domain: "bagussona.github.io",
  },
  {
    title: "jaycedotbin",
    href: "http://jaycedotbin.github.io/",
    avatar: "https://avatars.githubusercontent.com/u/64476715",
    domain: "jaycedotbin.github.io",
  },
];
</script>

<style scoped>
.links-wrap {
  max-width: 1080px;
}
</style>

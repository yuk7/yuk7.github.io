<template>
  <v-container class="py-6">
    <v-row class="mb-3" align="center">
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold">Repositories</h1>
        <p class="text-medium-emphasis mb-0">GitHub projects and recent updates.</p>
      </v-col>
    </v-row>

    <v-card class="translucent-card mb-4" rounded="lg" color="surface" elevation="2" border>
      <v-card-text>
        <v-row align="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="search"
              prepend-inner-icon="mdi-magnify"
              label="Search repos"
              variant="outlined"
              density="comfortable"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="language"
              :items="languages"
              label="Language"
              variant="outlined"
              density="comfortable"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="sortBy"
              :items="sortOptions"
              item-title="title"
              item-value="value"
              label="Sort"
              variant="outlined"
              density="comfortable"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="3" class="d-flex align-center ga-2">
            <v-btn variant="text" class="flex-grow-1" @click="reposStore.resetFilters()">
              Reset
            </v-btn>
            <v-btn
              color="primary"
              variant="tonal"
              icon="mdi-refresh"
              aria-label="Refresh repositories"
              @click="reposStore.fetchRepos(true)"
            />
          </v-col>
        </v-row>
        <div class="d-flex flex-wrap ga-4 mt-3">
          <v-switch
            v-model="includeForks"
            label="Include forks"
            color="primary"
            hide-details
            density="compact"
          />
          <v-switch
            v-model="includeArchived"
            label="Include archived"
            color="primary"
            hide-details
            density="compact"
          />
        </div>
      </v-card-text>
    </v-card>

    <v-alert v-if="error" type="error" variant="tonal" class="mb-4">
      {{ error }}
    </v-alert>
    <v-progress-linear v-if="loading" indeterminate color="primary" class="mb-4" />

    <v-alert v-if="!loading && orderedRepos.length === 0" type="info" variant="tonal" class="mb-4">
      No repositories matched your filters.
    </v-alert>

    <v-row>
      <v-col v-for="repo in orderedRepos" :key="repo.id" cols="12" sm="6" lg="4">
        <v-card
          class="translucent-card d-flex flex-column"
          color="surface"
          elevation="3"
          rounded="lg"
          height="100%"
          border
        >
          <v-card-item>
            <v-card-title>{{ repo.name }}</v-card-title>
          </v-card-item>
          <v-card-text class="flex-grow-1">{{
            repo.description ?? "No description provided."
          }}</v-card-text>
          <v-card-actions class="d-flex flex-column align-stretch ga-2 pt-0">
            <v-btn
              variant="outlined"
              block
              :href="repo.html_url"
              target="_blank"
              rel="noopener"
            >
              View on GitHub
            </v-btn>

            <div class="d-flex flex-wrap ga-3">
              <div class="d-inline-flex align-center ga-1">
                <v-icon size="small">mdi-star</v-icon>
                <span class="text-caption">{{ repo.stargazers_count }}</span>
              </div>
              <div class="d-inline-flex align-center ga-1">
                <v-icon size="small">mdi-source-fork</v-icon>
                <span class="text-caption">{{ repo.forks_count }}</span>
              </div>
              <template v-if="repo.language">
                <div class="d-inline-flex align-center ga-1">
                  <v-icon size="small">mdi-xml</v-icon>
                  <span class="text-caption">{{ repo.language }}</span>
                </div>
              </template>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useReposStore } from "@/stores/repos";

const reposStore = useReposStore();
const {
  orderedRepos,
  loading,
  error,
  search,
  language,
  sortBy,
  languages,
  includeForks,
  includeArchived,
} = storeToRefs(reposStore);

const sortOptions = [
  { title: "Stars", value: "stars" },
  { title: "Updated", value: "updated" },
  { title: "Name", value: "name" },
];

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(value));
}

onMounted(() => {
  reposStore.fetchRepos();
});
</script>

<style scoped>
.v-card.translucent-card {
  background-color: rgba(var(--v-theme-surface), 0.66) !important;
  background-image: none !important;
  backdrop-filter: blur(14px);
}
</style>

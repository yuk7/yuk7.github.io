<template>
  <v-container class="py-6">
    <v-row class="mb-3" align="center">
      <v-col cols="12" md="6">
        <h1 class="text-h4 font-weight-bold">Repositories</h1>
        <p class="text-medium-emphasis mb-0">Filter and scan recent work faster.</p>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-md-end">
        <v-btn variant="tonal" prepend-icon="mdi-refresh" @click="reposStore.fetchRepos(true)">
          Refresh
        </v-btn>
      </v-col>
    </v-row>

    <v-card class="mb-4" rounded="lg" variant="tonal">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="5">
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
          <v-col cols="12" md="2" class="d-flex align-center">
            <v-btn variant="text" block @click="reposStore.resetFilters()">Reset</v-btn>
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
        <v-card class="repo-card" elevation="3" rounded="lg" height="100%">
          <v-card-item>
            <v-card-title>{{ repo.name }}</v-card-title>
            <v-card-subtitle>{{ formatDate(repo.updated_at) }}</v-card-subtitle>
          </v-card-item>
          <v-card-text class="repo-description">{{
            repo.description ?? "No description provided."
          }}</v-card-text>
          <v-card-actions class="repo-actions">
            <v-btn
              class="repo-link-btn"
              variant="outlined"
              :href="repo.html_url"
              target="_blank"
              rel="noopener"
            >
              View on GitHub
            </v-btn>

            <div class="repo-meta">
              <div class="repo-meta-item">
                <v-icon size="small">mdi-star</v-icon>
                <span class="text-caption">{{ repo.stargazers_count }}</span>
              </div>
              <div class="repo-meta-item">
                <v-icon size="small">mdi-source-fork</v-icon>
                <span class="text-caption">{{ repo.forks_count }}</span>
              </div>
              <template v-if="repo.language">
                <div class="repo-meta-item">
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
.repo-card {
  display: flex;
  flex-direction: column;
}

.repo-description {
  flex: 1;
}

.repo-actions {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.65rem;
  padding-top: 0;
}

.repo-link-btn {
  align-self: flex-start;
}

.repo-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.repo-meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

@media (max-width: 600px) {
  .repo-link-btn {
    width: 100%;
  }
}
</style>

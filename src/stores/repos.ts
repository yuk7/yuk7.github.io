import { computed, ref } from "vue";
import { defineStore } from "pinia";

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

export const useReposStore = defineStore("repos", () => {
  const repos = ref<Repo[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const loaded = ref(false);
  const search = ref("");
  const language = ref("all");
  const sortBy = ref<"stars" | "updated" | "name">("stars");
  const includeForks = ref(false);
  const includeArchived = ref(false);

  const languages = computed(() => {
    const unique = new Set<string>();
    repos.value.forEach((repo) => {
      if (repo.language) unique.add(repo.language);
    });
    return ["all", ...Array.from(unique).sort((a, b) => a.localeCompare(b))];
  });

  const filteredRepos = computed(() => {
    const q = search.value.trim().toLowerCase();

    return repos.value.filter((repo) => {
      if (!includeForks.value && repo.fork) return false;
      if (!includeArchived.value && repo.archived) return false;
      if (language.value !== "all" && repo.language !== language.value) return false;

      if (!q) return true;
      const haystack =
        `${repo.name} ${repo.description ?? ""} ${repo.language ?? ""}`.toLowerCase();
      return haystack.includes(q);
    });
  });

  const orderedRepos = computed(() => {
    const items = [...filteredRepos.value];

    if (sortBy.value === "name") {
      return items.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy.value === "updated") {
      return items.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at));
    }

    return items.sort((a, b) => b.stargazers_count - a.stargazers_count);
  });

  async function fetchRepos(force = false) {
    if (loaded.value && !force) return;

    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(
        "https://api.github.com/users/yuk7/repos?sort=updated&per_page=100",
      );
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      const data = (await response.json()) as Repo[];
      repos.value = data;
      loaded.value = true;
    } catch (e) {
      error.value = e instanceof Error ? e.message : "Failed to load repositories.";
    } finally {
      loading.value = false;
    }
  }

  function resetFilters() {
    search.value = "";
    language.value = "all";
    sortBy.value = "stars";
    includeForks.value = false;
    includeArchived.value = false;
  }

  return {
    repos,
    orderedRepos,
    languages,
    search,
    language,
    sortBy,
    includeForks,
    includeArchived,
    loading,
    error,
    fetchRepos,
    resetFilters,
  };
});

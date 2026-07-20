<template>
  <v-app id="app" :theme="theme">
    <div class="aurora aurora-a" :class="{ 'aurora-light': theme === 'light' }" />
    <div class="aurora aurora-b" :class="{ 'aurora-light': theme === 'light' }" />

    <v-app-bar class="topbar" :class="{ 'topbar-light': theme === 'light' }" flat>
      <v-app-bar-title class="brand">
        <span class="brand-dot" />
        yuk7.dev
      </v-app-bar-title>
      <v-spacer />
      <div class="d-none d-sm-flex align-center ga-1">
        <v-btn variant="text" class="nav-pill" to="/">Home</v-btn>
        <v-btn variant="text" class="nav-pill" href="https://yuk7.dev/blog/">Blog</v-btn>
        <v-btn variant="text" class="nav-pill" to="/repos/">Repos</v-btn>
        <v-btn variant="text" class="nav-pill" to="/links/">Links</v-btn>
      </div>
      <v-btn
        :icon="theme === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
        class="theme-switch"
        variant="tonal"
        @click="toggleTheme"
      />
    </v-app-bar>

    <v-main class="main-shell">
      <ParticleSnowBackground id="background" class="d-none d-sm-flex" />
      <router-view class="page-content" />
    </v-main>

    <v-bottom-navigation
      class="mobile-nav d-flex d-sm-none"
      :class="{ 'mobile-nav-light': theme === 'light' }"
      bg-color="transparent"
      grow
    >
      <v-btn to="/">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>
      <v-btn href="https://yuk7.dev/blog/">
        <v-icon>mdi-post</v-icon>
        <span>Blog</span>
      </v-btn>
      <v-btn to="/repos/">
        <v-icon>mdi-github</v-icon>
        <span>Repos</span>
      </v-btn>
      <v-btn to="/links/">
        <v-icon>mdi-link</v-icon>
        <span>Links</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style>
/* Dark theme defaults (also serves as dark overrides) */
.v-application {
  --accent-a: #30d5c8;
  --accent-b: #00a3ff;
  --accent-c: #ff7b54;
  --text: #e8f6ff;
  --glass: rgba(10, 18, 40, 0.56);
  /* card */
  --card-bg: linear-gradient(150deg, rgba(7, 16, 38, 0.75), rgba(20, 30, 66, 0.55));
  --card-border: rgba(255, 255, 255, 0.14);
  --card-hover-shadow: 0 12px 24px rgba(3, 10, 30, 0.45);
  /* text */
  --subtitle-color: rgba(232, 246, 255, 0.82);
  /* avatar ring */
  --avatar-ring-border: rgba(255, 255, 255, 0.16);
  --avatar-ring-glow: rgba(0, 163, 255, 0.12);
  --friend-avatar-glow: rgba(48, 213, 200, 0.12);

  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 20%, rgba(0, 163, 255, 0.24), transparent 30%),
    radial-gradient(circle at 85% 10%, rgba(255, 123, 84, 0.22), transparent 28%),
    radial-gradient(circle at 40% 85%, rgba(48, 213, 200, 0.2), transparent 36%),
    linear-gradient(140deg, #060b1b 0%, #0a1028 50%, #120a1f 100%);
  font-family: "Space Grotesk", sans-serif;
}

/* Light theme overrides */
.v-application.v-theme--light {
  --text: #1e293b;
  --glass: rgba(255, 255, 255, 0.86);
  --card-bg: linear-gradient(150deg, rgba(255, 255, 255, 0.93), rgba(242, 247, 255, 0.87));
  --card-border: rgba(15, 23, 42, 0.12);
  --card-hover-shadow: 0 10px 20px rgba(15, 23, 42, 0.18);
  --subtitle-color: rgba(30, 41, 59, 0.82);
  --avatar-ring-border: rgba(15, 23, 42, 0.12);
  --avatar-ring-glow: rgba(0, 163, 255, 0.08);
  --friend-avatar-glow: rgba(0, 163, 255, 0.1);

  background:
    radial-gradient(circle at 15% 20%, rgba(0, 163, 255, 0.1), transparent 30%),
    radial-gradient(circle at 85% 10%, rgba(255, 123, 84, 0.09), transparent 28%),
    radial-gradient(circle at 40% 85%, rgba(48, 213, 200, 0.08), transparent 36%),
    linear-gradient(140deg, #f3f7ff 0%, #edf3ff 50%, #f7f9ff 100%);
}
</style>

<style scoped>
/* ── Aurora blobs ── */
.aurora {
  position: fixed;
  inset: auto;
  z-index: 0;
  width: 34rem;
  height: 34rem;
  border-radius: 9999px;
  filter: blur(70px);
  opacity: 0.28;
  pointer-events: none;
  animation: drift 12s ease-in-out infinite alternate;
  transition: opacity 0.4s ease;
}

.aurora-a {
  top: -10rem;
  right: -7rem;
  background: linear-gradient(130deg, var(--accent-a), var(--accent-b));
}

.aurora-b {
  bottom: -12rem;
  left: -8rem;
  background: linear-gradient(130deg, var(--accent-c), var(--accent-b));
}

/* ── Top bar ── */
.topbar {
  position: sticky;
  top: 0.7rem;
  margin: 0.7rem auto 0;
  width: min(96vw, 1120px);
  border-radius: 18px;
  background: var(--glass);
  backdrop-filter: blur(14px);
  z-index: 4;
  /* dark default */
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(2, 8, 24, 0.4);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: linear-gradient(160deg, var(--accent-a), var(--accent-b));
  box-shadow: 0 0 0 6px rgba(48, 213, 200, 0.15);
}

.nav-pill {
  border-radius: 9999px;
  padding-inline: 1.05rem;
  text-transform: none;
  font-weight: 600;
}

.theme-switch {
  border-radius: 9999px;
}

/* ── Main / page ── */
.main-shell {
  position: relative;
  z-index: 1;
  padding-top: 1.6rem;
  padding-bottom: 0.6rem;
}

.page-content {
  width: min(96vw, 1120px);
  margin: 0 auto;
}

/* ── Mobile nav ── */
.mobile-nav {
  width: calc(100% - 1rem);
  margin: 0 0.5rem 0.55rem;
  border-radius: 16px;
  background: var(--glass);
  backdrop-filter: blur(10px);
  /* dark default */
  border: 1px solid rgba(255, 255, 255, 0.12);
}

/* ── Light theme overrides for scoped elements ── */
.topbar-light {
  border: 1px solid rgba(15, 23, 42, 0.14) !important;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.12) !important;
}

.mobile-nav-light {
  border: 1px solid rgba(15, 23, 42, 0.14) !important;
}

.aurora-light {
  opacity: 0.18 !important;
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .topbar {
    top: 0.45rem;
    width: calc(100vw - 0.7rem);
    margin-top: 0.45rem;
    border-radius: 14px;
  }

  .main-shell {
    padding-top: 1rem;
    padding-bottom: 4.9rem;
  }

  .mobile-nav {
    margin-bottom: 0.35rem;
  }
}

@keyframes drift {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(20px, -12px, 0) scale(1.06);
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ParticleSnowBackground from "@/components/ParticleSnowBackground.vue";

const theme = ref<"light" | "dark">("light");

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

onMounted(() => {
  const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkMedia.matches) theme.value = "dark";
  darkMedia.addEventListener("change", (e) => {
    theme.value = e.matches ? "dark" : "light";
  });
});
</script>

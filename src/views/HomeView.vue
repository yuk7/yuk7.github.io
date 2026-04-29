<template>
  <v-container class="home-wrap py-6 py-md-9">
    <v-row class="mb-5" justify="center">
      <v-col cols="12" sm="10" md="7" lg="5">
        <v-card class="identity-card" rounded="xl" elevation="8">
          <v-card-text class="pa-8 text-center d-flex flex-column align-center">
            <v-avatar :size="160" class="mb-5 profile-ring">
              <v-img src="https://avatars.githubusercontent.com/u/29954265?v=4" />
            </v-avatar>
            <h1 class="text-h3 font-weight-bold mb-1">yuk7</h1>
            <p class="text-medium-emphasis mb-6">Jan 2000 · Tokyo, Japan</p>

            <div class="social-row d-flex justify-center ga-3 flex-wrap">
              <v-btn
                icon
                variant="tonal"
                size="large"
                @click="dialog_email = true"
                aria-label="email"
              >
                <v-icon>mdi-email-outline</v-icon>
              </v-btn>
              <v-btn
                icon
                variant="tonal"
                size="large"
                href="https://t.me/yuk_7"
                target="_blank"
                rel="noopener"
                aria-label="telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"
                  />
                </svg>
              </v-btn>
              <v-btn
                icon
                variant="tonal"
                size="large"
                href="https://github.com/yuk7"
                target="_blank"
                rel="noopener"
                aria-label="github"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                icon
                variant="tonal"
                size="large"
                href="https://keybase.io/yuk7"
                target="_blank"
                rel="noopener"
                aria-label="keybase"
              >
                <v-icon>mdi-key-chain-variant</v-icon>
              </v-btn>
              <v-btn
                icon
                variant="tonal"
                size="large"
                href="https://paypal.me/yuk77"
                target="_blank"
                rel="noopener"
                aria-label="paypal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-paypal"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12.5 2c3.113 0 5.309 1.785 5.863 4.565c1.725 1.185 2.637 3.152 2.637 5.435c0 2.933 -2.748 5.384 -5.783 5.496l-.217 .004h-1.754l-.466 2.8a1.998 1.998 0 0 1 -1.823 1.597l-.157 .003h-2.68a1.5 1.5 0 0 1 -1.182 -.54a1.495 1.495 0 0 1 -.348 -1.07l.042 -.29h-1.632c-1.004 0 -1.914 -.864 -1.994 -1.857l-.006 -.143l.01 -.141l1.993 -13.954l.003 -.048c.072 -.894 .815 -1.682 1.695 -1.832l.156 -.02l.143 -.005h5.5zm5.812 7.35l-.024 .087c-.706 2.403 -3.072 4.436 -5.555 4.557l-.233 .006h-2.503v.05l-.025 .183l-1.2 5a1.007 1.007 0 0 1 -.019 .07l-.088 .597h2.154l.595 -3.564a1 1 0 0 1 .865 -.829l.121 -.007h2.6c2.073 0 4 -1.67 4 -3.5c0 -1.022 -.236 -1.924 -.688 -2.65z"
                  />
                </svg>
              </v-btn>
              <v-btn
                icon
                variant="tonal"
                size="large"
                @click="dialog_btc = true"
                aria-label="bitcoin"
              >
                <v-icon>mdi-currency-btc</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-5">
      <v-col cols="12" md="4" v-for="item in quickStats" :key="item.label">
        <v-card class="stat-card" rounded="lg" elevation="4">
          <v-card-text>
            <div class="d-flex align-center ga-2 mb-1">
              <v-icon>{{ item.icon }}</v-icon>
              <span class="mono text-caption text-medium-emphasis">{{ item.label }}</span>
            </div>
            <div class="text-h6 font-weight-bold">{{ item.value }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-5">
      <v-col cols="12" md="6">
        <v-card class="panel-card h-100" rounded="lg" elevation="6">
          <v-card-title class="font-weight-bold">Core Stack</v-card-title>
          <v-card-text>
            <div class="d-flex flex-wrap ga-2">
              <v-chip
                v-for="skill in stackSkills"
                :key="skill"
                variant="elevated"
                color="indigo-lighten-1"
                >{{ skill }}</v-chip
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="panel-card h-100" rounded="lg" elevation="6">
          <v-card-title class="font-weight-bold">What I enjoy building</v-card-title>
          <v-list bg-color="transparent" density="compact" lines="two">
            <v-list-item
              prepend-icon="mdi-cellphone-link"
              title="Mobile-first experiences"
              subtitle="Android apps with practical UX and stable delivery"
            />
            <v-list-item
              prepend-icon="mdi-server-network"
              title="Systems that stay healthy"
              subtitle="Monitoring, automation, and low-maintenance deployments"
            />
            <v-list-item
              prepend-icon="mdi-rocket-launch-outline"
              title="Fast iteration loops"
              subtitle="Tooling and architecture that keeps teams shipping"
            />
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-card class="panel-card" rounded="xl" elevation="6" title="Life Experience">
      <HistoryTimeLine :items="history" />
    </v-card>

    <v-dialog v-model="dialog_email">
      <v-card title="Email">
        <v-card-text> yukx00@gmail.com </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn href="mailto:yukx00@gmail.com"> Open in App </v-btn>
          <v-btn variant="text" @click="dialog_email = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog_btc">
      <v-card title="Bitcoin">
        <v-card-text> 1GepqF7fxX1Z2jJsF2tQQNGAvoVYx6syDK </v-card-text>
        <div class="d-flex justify-center">
          <v-img src="@/assets/img/btc.png" max-width="200px" />
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn href="bitcoin:1GepqF7fxX1Z2jJsF2tQQNGAvoVYx6syDK"> Open in App </v-btn>
          <v-btn variant="text" @click="dialog_btc = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HistoryTimeLine from "@/components/HistoryTimeLine.vue";

const dialog_email = ref(false);
const dialog_btc = ref(false);

const quickStats = [
  {
    label: "Primary Focus",
    value: "Mobile + Web Product Engineering",
    icon: "mdi-lightning-bolt-outline",
  },
  { label: "Ops Comfort Zone", value: "Linux Servers, Docker, WSL", icon: "mdi-server" },
  { label: "Fav Flavors", value: "Udon / Chocolate / Mint", icon: "mdi-food-variant" },
];

const stackSkills = ["Kotlin", "Java", "TypeScript", "Vue", "Go", "PHP", "Linux", "Docker", "WSL"];

const history = [
  {
    year: "2013~2015",
    title: "Robotics Contest at JHS Club Activities",
    content:
      "Participated in some robotics contests as a club activity. Our team won a special award in a area tournament.",
    env: "C, C#, Hardware",
  },
  {
    year: "2015~2018",
    title: "Teaching Assistant in SHS",
    content: "Teaching Assistant in C language and JavaScript classes.",
    env: "C, JavaScript",
  },
  {
    year: "2018~2022",
    title: "Computer Science Student in a College",
    content:
      "Learned programming and computer science in a college. Joined a programming club and some hackathon. My research & production work won a special incentive award on campus.",
    env: "C#, Java, PHP, Python, R, WPF, Servlet, JSP, Spring",
  },
  {
    year: "2019~2021",
    title: "Part-time backend and frontend developer in a Web company",
    content:
      "Joined a web company and some project. Developed some hybrid apps, web apps and sites.",
    env: "PHP, JavaScript, Cordova, Bash, Python",
  },
  {
    year: "2022~",
    title: "Full-time mobile app developer in a Web company",
    content: "Joined a web company and some project. Developed some apps.",
    env: "Java, Kotlin, JavaScript, Bash",
  },
];
</script>

<style scoped>
.home-wrap {
  max-width: 1080px;
}

.identity-card,
.panel-card,
.stat-card {
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  backdrop-filter: blur(10px);
}

.profile-ring {
  border: 2px solid var(--avatar-ring-border);
  box-shadow: 0 0 0 10px var(--avatar-ring-glow);
}

.mono {
  font-family: "JetBrains Mono", monospace;
}

.social-row {
  max-width: 340px;
}

.social-row .v-btn {
  border-radius: 9999px;
}

@media (max-width: 600px) {
  .identity-card > :deep(.v-card-text),
  .panel-card > :deep(.v-card-text) {
    padding: 1rem !important;
  }
}
</style>

<template>
  <v-container class="py-6 py-md-9" max-width="1080">
    <v-row class="mb-5" justify="center">
      <v-col cols="12" sm="10" md="7" lg="5">
        <v-card class="home-card" color="surface" rounded="xl" elevation="8" border>
          <v-card-text class="pa-4 pa-sm-8 text-center d-flex flex-column align-center">
            <v-avatar :size="160" class="mb-5">
              <v-img src="https://avatars.githubusercontent.com/u/29954265?v=4" />
            </v-avatar>
            <h1 class="text-h3 font-weight-bold mb-1">yuk7</h1>
            <p class="text-medium-emphasis mb-2">Software Engineer</p>
            <p class="text-medium-emphasis mb-5">Tokyo, Japan</p>

            <v-sheet class="d-flex justify-center ga-3 flex-wrap" color="transparent" max-width="340">
              <v-btn
                icon
                rounded="pill"
                variant="tonal"
                size="large"
                @click="dialog_email = true"
                aria-label="email"
              >
                <v-icon>mdi-email-outline</v-icon>
              </v-btn>
              <v-btn
                icon
                rounded="pill"
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
                rounded="pill"
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
                rounded="pill"
                variant="tonal"
                size="large"
                href="https://keybase.io/yuk7"
                target="_blank"
                rel="noopener"
                aria-label="keybase"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10.445 21.372a.953.953 0 1 1-.955-.954c.524 0 .951.43.951.955m5.923-.001a.953.953 0 1 1-.958-.954c.526 0 .954.43.954.955m4.544-9.16l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.06-.094-.113-.141-.169-.104-.12-.21-.239-.32-.359l-.075-.08-.091-.099-.135-.13c-.015-.019-.032-.035-.05-.054a10.87 10.87 0 0 0-3.955-2.504l-.23-.078.035-.083a4.109 4.109 0 0 0-.12-3.255 4.11 4.11 0 0 0-2.438-2.16c-.656-.216-1.23-.319-1.712-.305-.033-.105-.1-.577.496-1.848L10.662 0l-.287.399c-.33.455-.648.895-.945 1.328a1.857 1.857 0 0 0-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003a1.876 1.876 0 0 0 1.755 1.98l1.002.06c-.065.84.073 1.62.405 2.306a11.28 11.28 0 0 0-3.66 2.484C.912 14.392.912 18.052.912 20.995v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06a9.197 9.197 0 0 1-1.68-3.848l1.913-2.03-.985 3.09 1.74-1.267c3.075-2.234 6.745-2.75 10.91-1.53 1.806.533 3.56.04 4.474-1.256l.104-.165c.09.498.14.998.14 1.496 0 1.563-.254 3.687-1.38 5.512h1.612c.776-1.563 1.181-3.432 1.181-5.512-.001-2.2-.786-4.421-2.184-6.274zM8.894 6.192c.122-1.002.577-1.949 1.23-2.97a1.36 1.36 0 0 0 1.283.749c.216-.008.604.025 1.233.232a2.706 2.706 0 0 1 1.608 1.425c.322.681.349 1.442.079 2.15a2.69 2.69 0 0 1-.806 1.108l-.408-.502-.002-.003a1.468 1.468 0 0 0-2.06-.205c-.334.27-.514.66-.534 1.058-1.2-.54-1.8-1.643-1.628-3.04zm4.304 5.11l-.52.425a.228.228 0 0 1-.323-.032l-.11-.135a.238.238 0 0 1 .034-.334l.51-.42-1.056-1.299a.307.307 0 0 1 .044-.436.303.303 0 0 1 .435.041l2.963 3.646a.309.309 0 0 1-.168.499.315.315 0 0 1-.31-.104l-.295-.365-1.045.854a.244.244 0 0 1-.154.055.237.237 0 0 1-.186-.09l-.477-.58a.24.24 0 0 1 .035-.335l1.05-.858-.425-.533zM7.752 4.866l-1.196-.075a.463.463 0 0 1-.435-.488l.09-1.4a.462.462 0 0 1 .461-.437h.024l1.401.091a.459.459 0 0 1 .433.488l-.007.101a9.27 9.27 0 0 0-.773 1.72zm12.525 11.482c-.565.805-1.687 1.08-2.924.718-3.886-1.141-7.397-.903-10.469.7l1.636-5.122-5.29 5.609c.098-3.762 2.452-6.967 5.757-8.312.471.373 1.034.66 1.673.841.16.044.322.074.48.102a1.41 1.41 0 0 0 .21 1.408l.075.09c-.172.45-.105.975.221 1.374l.476.582a1.39 1.39 0 0 0 1.079.513c.32 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113a1.45 1.45 0 0 0 .928-.326c.623-.51.72-1.435.209-2.06l-1.67-2.057a4.07 4.07 0 0 0 .408-.38c.135.036.27.077.4.12.266.096.533.197.795.314a9.55 9.55 0 0 1 2.77 1.897c.03.03.06.055.086.083l.17.176c.038.039.076.079.11.12.08.085.16.175.24.267l.126.15c.045.053.086.104.13.16l.114.15c.04.05.079.102.117.154.838 1.149.987 2.329.404 3.157v.005zM7.718 4.115l-.835-.05.053-.836.834.051z"
                  />
                </svg>
              </v-btn>
              <v-btn
                icon
                rounded="pill"
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
                rounded="pill"
                variant="tonal"
                size="large"
                @click="dialog_btc = true"
                aria-label="bitcoin"
              >
                <v-icon>mdi-currency-btc</v-icon>
              </v-btn>
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-5">
      <v-col cols="12" md="4" v-for="item in quickStats" :key="item.label">
        <v-card class="home-card" color="surface" rounded="lg" elevation="4" border>
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
        <v-card class="home-card h-100" color="surface" rounded="lg" elevation="6" border>
          <v-card-title class="font-weight-bold">Core Stack</v-card-title>
          <v-card-text>
            <div class="d-flex flex-wrap ga-2">
              <v-chip
                v-for="skill in stackSkills"
                :key="skill"
                variant="tonal"
                >{{ skill }}</v-chip
              >
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="home-card h-100" color="surface" rounded="lg" elevation="6" border>
          <v-card-title class="font-weight-bold">Focus Areas</v-card-title>
          <v-list bg-color="transparent" density="compact" lines="two">
            <v-list-item
              v-for="item in focusAreas"
              :key="item.title"
              :prepend-icon="item.icon"
              :title="item.title"
              :subtitle="item.subtitle"
            />
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-5">
      <v-col cols="12">
        <v-card class="home-card" color="surface" rounded="lg" elevation="6" border>
          <v-card-title class="font-weight-bold">Skills</v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="group in skillGroups" :key="group.title" cols="12" md="6">
                <v-sheet
                  class="h-100 pa-4"
                  color="transparent"
                  rounded="lg"
                  border
                >
                  <div class="d-flex align-center ga-2 mb-2">
                    <v-icon>{{ group.icon }}</v-icon>
                    <div class="text-h6 font-weight-bold">{{ group.title }}</div>
                  </div>
                  <p class="text-body-2 text-medium-emphasis mb-3">{{ group.description }}</p>
                  <div class="d-flex ga-2 flex-wrap">
                    <v-chip
                      v-for="tag in group.tags"
                      :key="`${group.title}-${tag}`"
                      size="small"
                      variant="tonal"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-sheet>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-5">
      <v-col cols="12" md="7">
        <v-card class="home-card h-100" color="surface" rounded="lg" elevation="6" border>
          <v-card-title class="font-weight-bold">Background</v-card-title>
          <v-list bg-color="transparent" density="compact" lines="two">
            <v-list-item
              v-for="item in background"
              :key="item.period"
              prepend-icon="mdi-circle-small"
              :title="`${item.period} - ${item.title}`"
              :subtitle="item.subtitle"
            />
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12" md="5">
        <v-card class="home-card h-100" color="surface" rounded="lg" elevation="6" border>
          <v-card-title class="font-weight-bold">Current Signals</v-card-title>
          <v-list bg-color="transparent" density="compact" lines="two">
            <v-list-item
              v-for="item in currentSignals"
              :key="item.title"
              :prepend-icon="item.icon"
              :title="item.title"
              :subtitle="item.subtitle"
            />
          </v-list>
        </v-card>
      </v-col>
    </v-row>

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
          <v-sheet :color="theme.current.value.dark ? 'white' : 'transparent'" rounded="lg" class="pa-3">
            <v-img :src="btcQr" width="200" height="200" eager />
          </v-sheet>
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
import { useTheme } from "vuetify";
import btcQr from "@/assets/img/btc.png";

const dialog_email = ref(false);
const dialog_btc = ref(false);
const theme = useTheme();

const quickStats = [
  {
    label: "Main Field",
    value: "Mobile + Web Development",
    icon: "mdi-lightning-bolt-outline",
  },
  { label: "Comfort Zone", value: "Linux, Servers, WSL", icon: "mdi-linux" },
  { label: "Daily Drive OS", value: "Arch Linux / Windows 11", icon: "mdi-monitor" },
];

const stackSkills = [
  "C#",
  "Kotlin",
  "Java",
  "Go",
  "Shell",
  "TypeScript",
  "Vue",
  "Flutter",
  "PHP",
  "Linux",
  "WSL",
  "Docker",
];

const focusAreas = [
  {
    title: "Mobile app development",
    subtitle: "Android apps, hybrid apps, and practical UI flows",
    icon: "mdi-cellphone-link",
  },
  {
    title: "Web development",
    subtitle: "Frontend, backend, and small tools that support everyday workflows",
    icon: "mdi-web",
  },
  {
    title: "Systems and operations",
    subtitle: "Linux, containers, servers, and automation for maintainable environments",
    icon: "mdi-server-network",
  },
];

const skillGroups = [
  {
    title: "Linux",
    description: "Kernel builds, user-side tooling, server settings, and daily desktop use.",
    icon: "mdi-linux",
    tags: ["Arch Linux", "Shell", "Servers"],
  },
  {
    title: "Virtualization + Containers",
    description: "Local development and runtime environments across lightweight system layers.",
    icon: "mdi-package-variant-closed",
    tags: ["Docker", "LXC", "WSL"],
  },
  {
    title: "Android + Mobile Apps",
    description: "Native and hybrid app development with attention to practical delivery.",
    icon: "mdi-android",
    tags: ["Java", "Kotlin", "Flutter", "Cordova"],
  },
  {
    title: "Web + Desktop Apps",
    description: "Web apps, backend work, and desktop application experiments.",
    icon: "mdi-application-braces",
    tags: ["TypeScript", "PHP", "Go", "C#"],
  },
];

const background = [
  {
    period: "2013-2015",
    title: "Robotics club contests",
    subtitle: "Built contest robots and learned programming through hands-on hardware work",
  },
  {
    period: "2018-2022",
    title: "Computer science college student",
    subtitle: "Studied computer science, joined hackathons, and built practical software projects",
  },
  {
    period: "2019-2021",
    title: "Part-time web developer",
    subtitle: "Developed hybrid apps, web services, websites, and automation tools for production use",
  },
  {
    period: "2022-",
    title: "Full-time mobile app developer",
    subtitle: "Developing mobile apps while continuing work on systems, tooling, and developer environments",
  },
];

const currentSignals = [
  {
    title: "Daily environments",
    subtitle: "Linux, Windows, Android, VS Code, IntelliJ IDEA, and KDE",
    icon: "mdi-monitor-dashboard",
  },
  {
    title: "Also interested in",
    subtitle: "WSL distributions, containers, dotfiles, and small developer tools",
    icon: "mdi-tools",
  },
  {
    title: "Contact",
    subtitle: "Email, Keybase, Telegram, GitHub, and PayPal are linked above",
    icon: "mdi-send-outline",
  },
];
</script>

<style scoped>
.mono {
  font-family: "JetBrains Mono", monospace;
}

.home-card {
  background: rgba(var(--v-theme-surface), 0.66) !important;
  backdrop-filter: blur(14px);
}

</style>

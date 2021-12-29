<template>
  <v-container>
    <v-card class="mx-auto" elevation="4" max-width="500">
      <v-list-item>
        <v-list-item-content>
          <h2>yuk7</h2>
          <p>
            <v-icon>mdi mdi-cake-variant</v-icon> Jan. 2000
          </p>
          <p>
            <v-icon>mdi mdi-city</v-icon> Japan
          </p>
          <p>
            <v-icon>mdi mdi-heart</v-icon> Linux/Android Udon/Chocolate/Mint
          </p>
          <p>
            <v-icon>mdi mdi-code-braces</v-icon> C#/Go/Java/Kotlin/PHP/JavaScript
          </p>
        </v-list-item-content>

        <v-spacer />

        <v-avatar class="profile" color="grey" size="20%">
          <v-img src="https://avatars2.githubusercontent.com/u/29954265" max-width="200px"></v-img>
        </v-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn icon @click="dialog_email = true">
          <v-icon>fas fa-envelope</v-icon>
        </v-btn>
        <v-btn icon href="https://t.me/yuk_7">
          <v-icon>fab fa-telegram</v-icon>
        </v-btn>
        <v-btn icon href="https://keybase.io/yuk7">
          <v-icon>fab fa-keybase</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/yuk7">
          <v-icon>fab fa-github</v-icon>
        </v-btn>
        <v-btn icon @click="dialog_btc = true">
          <v-icon>fab fa-bitcoin</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto" elevation="4" max-width="500" title="Skills">
      <v-list lines="two">
        <v-list-item prependIcon="mdi mdi-linux" title="Linux" subtitle="kernel build, userland, server settings" />
        <v-list-item prependIcon="mdi mdi-package-variant" title="Container Techs" subtitle="Docker, LXC" />
        <v-list-item prependIcon="mdi mdi-web" title="Web Development" subtitle="JavaScript, PHP, Java" />
        <v-list-item prependIcon="mdi mdi-android" title="Android App Development" subtitle="Java, Kotlin" />
        <v-list-item prependIcon="mdi mdi-dot-net" title=".NET Development"
          subtitle="C#, VB.NET, WinForms, WPF" />
      </v-list>
    </v-card>


    <v-card class="mx-auto" elevation="4" max-width="500" title="Life Experience">
      <HistoryTimeLine :items="history" />
    </v-card>

    <v-dialog v-model="dialog_email">
      <v-card title="Email">
        <v-card-text>
          yukx00@gmail.com
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn href="mailto:yukx00@gmail.com">
            Open in App
          </v-btn>
          <v-btn text @click="dialog_email = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog_btc">
      <v-card title="Bitcoin">
        <v-card-text>
          1GepqF7fxX1Z2jJsF2tQQNGAvoVYx6syDK
        </v-card-text>
        <v-layout justify-center>
          <v-img src="@/assets/img/btc.png" max-width="200px"></v-img>
        </v-layout>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn href="bitcoin:1GepqF7fxX1Z2jJsF2tQQNGAvoVYx6syDK">
            Open in App
          </v-btn>
          <v-btn text @click="dialog_btc = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HistoryTimeLine from "@/components/HistoryTimeLine.vue";

  export default defineComponent({
    components: {
      HistoryTimeLine
    },
    data() {
      return {
        dialog_email: false,
        dialog_btc: false,
        history: [
          {
            year: '2013~2015',
            title: 'Robotics Contest Club in JHS',
            content: 'Participated in some robotics contests as a club activity. Experienced as the technical leader and programmer in the team. Our team won a special award in a tournament.',
            env: 'C, C#, AVR, STM32'
          }, {
            year: '2013~2015',
            title: 'Science Club Experience',
            content: 'Learned science in science club. Developed software that displays artificial satellite data in 3D in C++.',
            env: 'C++'
          },
          {
            year: '2015~2018',
            title: 'Teaching Assistant in SHS',
            content: 'Teaching Assistant in C language and JavaScript classes.',
            env: 'C, JavaScript'
          },
          {
            year: '2018~',
            title: 'Computer Science Student in a College',
            content: 'Learned programming and computer science in college. Joined a programming club and some hackathon.',
            env: 'C#, Java, PHP, Python, R, WPF, Servlet, JSP, Spring'
          },
          {
            year: '2019~2021',
            title: 'Part-time backend and frontend engineer in a Web company',
            content: 'Joined a web company and some project. Developed some hybrid apps, web apps and sites.',
            env: 'PHP, JavaScript, Bash, Python'
          }
        ],
      }
    }
  });
</script>

<style>
  .mx-auto {
    margin: 10px auto;
  }
</style>
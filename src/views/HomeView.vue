<template>
  <v-container>
    <v-card class="mx-auto" elevation="4" max-width="500">
      <v-card-title class="text-h5">yuk7</v-card-title>
      <v-card-text class="py-0">
        <v-row align="center" hide-gutters no-gutters>
          <v-col cols="9">
            <p>
              <v-icon>mdi mdi-cake-variant</v-icon> Jan. 2000
            </p>
            <p>
              <v-icon>mdi mdi-city</v-icon> Tokyo, Japan
            </p>
            <p>
              <v-icon>mdi mdi-heart</v-icon> Linux/Android Udon/Chocolate/Mint
            </p>
            <p>
              <v-icon>mdi mdi-code-braces</v-icon> C#/Go/Java/Kotlin/PHP/JavaScript
            </p>
          </v-col>
          <v-col class="text-right">
            <v-avatar class="profile" color="grey" size="60%">
              <v-img src="https://avatars2.githubusercontent.com/u/29954265" max-width="200px"></v-img>
            </v-avatar>
          </v-col>
        </v-row>
      </v-card-text>

      <v-spacer />



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
        <v-btn icon href="https://paypal.me/yuk77">
          <v-icon>fab fa-paypal</v-icon>
        </v-btn>
        <v-btn icon @click="dialog_btc = true">
          <v-icon>fab fa-bitcoin</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto" elevation="4" max-width="500" title="Skills">
      <v-list lines="two">
        <v-list-item prependIcon="mdi mdi-linux" title="Linux" subtitle="Kernel build, User side, Server settings" />
        <v-list-item prependIcon="mdi mdi-package-variant" title="Virtualization + Container Techs" subtitle="Docker, LXC, WSL" />
        <v-list-item prependIcon="mdi mdi-android" title="Android + Mobile App Development" subtitle="Java, Kotlin, KMP, Cordova" />
        <v-list-item prependIcon="mdi mdi-web" title="Web Development" subtitle="JavaScript, PHP, Java, Go" />
        <v-list-item prependIcon="mdi mdi-dot-net" title=".NET Development" subtitle="C#, VB.NET, WinForms, WPF" />
        <v-list-item prependIcon="mdi mdi-server" title="IT Operations" subtitle="Computer and Server Operations" />
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
          title: 'Robotics Contest at JHS Club Activities',
          content: 'Participated in some robotics contests as a club activity. Our team won a special award in a area tournament.',
          env: 'C, C#, Hardware'
        },
        {
          year: '2015~2018',
          title: 'Teaching Assistant in SHS',
          content: 'Teaching Assistant in C language and JavaScript classes.',
          env: 'C, JavaScript'
        },
        {
          year: '2018~2022',
          title: 'Computer Science Student in a College',
          content: 'Learned programming and computer science in a college. Joined a programming club and some hackathon. My research&production work won a special incentive award on campus.',
          env: 'C#, Java, PHP, Python, R, WPF, Servlet, JSP, Spring'
        },
        {
          year: '2019~2021',
          title: 'Part-time backend and frontend developer in a Web company',
          content: 'Joined a web company and some project. Developed some hybrid apps, web apps and sites.',
          env: 'PHP, JavaScript, Cordova, Bash, Python'
        },
        {
          year: '2022~',
          title: 'Full-time mobile app developer in a Web company',
          content: 'Joined a web company and some project. Developed some apps.',
          env: 'Java, Kotlin, JavaScript, Bash'
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

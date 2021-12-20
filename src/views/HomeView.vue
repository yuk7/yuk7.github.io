<template>
  <v-container>
      <v-card class="mx-auto" max-width="500">
        <v-list-item three-line>
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

      <v-card class="mx-auto" max-width="500">
        <v-list-item three-line>
          <v-list-item-content>
            <h2>Life History</h2>

            <v-timeline density="end">
              <v-timeline-item v-for="(item, i) in history" :key="i" size="8px" iconColor="blue">
            <v-container class="fill-height">
              <p>{{ item.year }}</p>
              <div>
                <h2 :class="title">{{ item.title }}</h2>
                <div>
                    {{ item.content }}
                </div>
                <p style="color: gray"><small>{{ item.env }}</small></p>
              </div>
            </v-container>
              </v-timeline-item>
            </v-timeline>
          </v-list-item-content>
        </v-list-item>
      </v-card>

      <v-dialog v-model="dialog_email">
        <v-card>
          <v-card-title class="headline">Email</v-card-title>
          <v-card-text>
            yukx00@gmail.com
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn href="mailto:yukx00@gmail.com">
              Open App
            </v-btn>
            <v-btn text @click="dialog_email = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-row justify="center">
      <v-dialog v-model="dialog_btc" max-width="100%">
        <v-card>
          <v-card-title class="headline">Bitcoin</v-card-title>
          <v-card-text>
            1GepqF7fxX1Z2jJsF2tQQNGAvoVYx6syDK
            <v-layout justify-center>
              <v-img src="img/btc.png" max-width="200px"></v-img>
            </v-layout>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn href="bitcoin:1GepqF7fxX1Z2jJsF2tQQNGAvoVYx6syDK">
              Open App
            </v-btn>
            <v-btn text @click="dialog_btc = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        dialog_email: false,
        dialog_btc: false,
        history: [
        {
          year: '2013~2015',
          title: 'Robot Contest club in JHS',
          content: 'Participated in some robot contests as a club activity. Experienced as the technical leader and programmer in the team. Our team won a special award in a tournament.',
          env: 'C, C#, AVR, STM32'
        },{
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
  }
</script>

<style>
  .mx-auto {
      margin: 10px auto;
  }
</style>
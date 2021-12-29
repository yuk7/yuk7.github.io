<template>
  <v-container>
    <v-card class="mx-auto" elevation="4" max-width="600" title="Works">
      <HistoryTimeLine :items="history" />
    </v-card>
    <v-spacer />
  </v-container>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import HistoryTimeLine from "@/components/HistoryTimeLine.vue";

  export default defineComponent({
    components: {
      HistoryTimeLine
    },
    data() {
      return {
        history: [
          {
            year: '2019~',
            title: 'Developed and Operated of an Aesthetic salon website.',
            content: 'Worked/Assigned as a frontend and backend engineer of an aesthetic salon web site.',
            env: 'PHP, JavaScript'
          },
          {
            year: '2019~',
            title: 'Renovation of the local government website.',
            content: 'Worked/Assigned as a frontend and backend engineer of an local government web site.',
            env: 'PHP, JavaScript'
          },
          {
            year: '2019~',
            title: 'Operation of a smartphone hybrid app backend of local government.',
            content: 'Worked/Assigned as a backend engineer of an local government app.',
            env: 'PHP, JavaScript'
          },
          {
            year: '2019~2021',
            title: 'Renovation of the website of a pharmaceutical company',
            content: 'Worked/Assigned as a frontend engineer of pharmaceutical company renovation team.',
            env: 'JavaScript'
          },
          {
            year: '2020',
            title: 'Developed English composition book hybrid application',
            content: 'Worked/Assigned as a application engineer of an English composition book app of an educational company.',
            env: 'JavaScript, Cordova'
          },
          {
            year: '2020',
            title: 'Developed Job Matching Site',
            content: 'Worked/Assigned as a backend and frontend engineer of a job matching site development team.',
            env: 'PHP, JavaScript'
          }
        ],
      }
    }
  });
</script>
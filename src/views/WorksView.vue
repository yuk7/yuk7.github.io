<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-list-item three-line>
        <v-list-item-content>
          <h2>Works</h2>
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
    <v-spacer />
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
            year: '2019~2021',
            title: 'Renovation of the website of a pharmaceutical company',
            content: 'Worked/Assigned as a frontend engineer of pharmaceutical company renovation team.',
            env: 'JavaScript'
          },
          {
            year: '2020',
            title: 'English word book hybrid application',
            content: 'Worked as a frontend engineer of an English composition app of an educational company.',
            env: 'JavaScript'
          },
          {
            year: '2020',
            title: 'Matching site',
            content: 'Worked/Assigned as a backend and frontend engineer of matching site development team.',
            env: 'PHP, JavaScript'
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
<template>
  <div id="repos">
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex v-for="repo in orderedRepos" v-bind:key="repo.id" xs12 sm6 md3>
          <v-card>
            <v-card-title primary class="title" v-html="repo.name"></v-card-title>
            <v-card-text v-html="repo.description"></v-card-text>
            <v-card-actions>
              <v-btn outlined :href="repo.html_url">View On GitHub</v-btn>
              <v-spacer></v-spacer>
              <v-icon>mdi-star</v-icon><span v-html="repo.stargazers_count"></span>&nbsp;
              <v-icon v-if="repo.language!==null">mdi-xml</v-icon><span v-html="repo.language"></span>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";
  export default {
    data() {
      return {
        repos: null,
      }
    },
    computed: {
      orderedRepos: function () {
        return _.orderBy(this.repos, 'stargazers_count','desc');
      }
    },
    created() {
      axios
        .get('https://api.github.com/users/yuk7/repos?sort=updated')
        .then(response => {
          this.repos = response.data;
        });
    }
  }
</script>

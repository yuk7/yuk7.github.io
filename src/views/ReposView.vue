<template>
    <v-container>
      <v-row>
        <v-col v-for="repo in orderedRepos" v-bind:key="repo.id">
          <v-card elevation="4" height="100%" min-width="350" :title="repo.name" :text="repo.description">
            <v-card-actions class="card-actions">
              <v-btn outlined :href="repo.html_url">View On GitHub</v-btn>
              <v-spacer />
              <v-icon>mdi mdi-star</v-icon><span v-html="repo.stargazers_count"></span>&nbsp;
              <v-icon v-if="repo.language!==null">mdi mdi-xml</v-icon><span v-html="repo.language"></span>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
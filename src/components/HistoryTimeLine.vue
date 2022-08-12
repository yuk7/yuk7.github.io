<template>
    <v-timeline density="comfotable">
        <v-timeline-item v-for="(item, i) in items" :key="i" size="8" dotColor="black" fill-dot>
          <v-container class="fill-height">
            <div>{{ item.year }}</div>
            <div>
              <div class="text-h5">{{ item.title }}</div>
              <div class="text-body-1">
                {{ item.content }}
              </div>
              <p style="color: gray"><small>{{ item.env }}</small></p>
            </div>
          </v-container>
        </v-timeline-item>
      </v-timeline>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        props: ["items"]
    })
</script>
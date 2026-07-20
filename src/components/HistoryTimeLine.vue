<template>
  <v-timeline density="comfortable">
    <v-timeline-item v-for="(item, i) in items" :key="i" size="8" dot-color="primary" fill-dot>
      <div>
        <div class="text-caption text-medium-emphasis">{{ item.year }}</div>
        <div class="text-subtitle-1 font-weight-medium">{{ item.title }}</div>
        <div class="text-body-2">{{ item.content }}</div>
        <div class="text-caption text-disabled mt-1">{{ item.env }}</div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
defineProps<{ items: { year: string; title: string; content: string; env: string }[] }>();
</script>

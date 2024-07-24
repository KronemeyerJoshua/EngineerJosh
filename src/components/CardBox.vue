<script setup lang="ts">
import type { Project } from '@/lib/types/project'
import { RouterLink, RouterView } from 'vue-router'

defineProps<{
  projects: Array<Project>
}>()
</script>

<template>
  <div class="row">
    <q-card v-for="p in projects" :key="p.name" dark bordered class="col p-card bg-primary">
      <q-card-section class="q-pb-xs">
        <div class="text-h6">{{ p.name }}</div>
        <div class="text-subtitle2">{{ p.company }}</div>
      </q-card-section>

      <q-separator dark inset class="q-mt-none" />

      <q-card-section class="">
        {{ p.description }}
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.p-card {
  min-width: 300px;
  margin: 5px;
}

.p-card:hover {
  box-shadow:
    0 1px 5px rgba(255, 255, 255, 0.2),
    0 2px 2px rgba(255, 255, 255, 0.973),
    0 3px 1px -2px rgb(255, 255, 255);
}

.p-card:hover .text-h6 {
  text-decoration: underline;
}
</style>

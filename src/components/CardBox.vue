<script setup lang="ts">
import type { Project } from '@/lib/types/project'
import { RouterLink, RouterView } from 'vue-router'

defineProps<{
  projects: Array<Project>
}>()
</script>

<template>
  <div class="row">
    <q-card v-for="p in projects" dark bordered class="col p-card bg-primary">
      <q-card-section>
        <div class="text-h6">{{ p.name }}</div>
        <div class="text-subtitle2">{{ p.company }}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ p.description }}
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ p.techstack }}
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.p-card {
  min-width: 300px;
  margin: 5px;
}
</style>

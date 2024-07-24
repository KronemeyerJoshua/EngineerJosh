<script setup lang="ts">
import type { Project } from '@/lib/types/project'

defineProps<{
  projects: Array<Project>
}>()
</script>

<template>
  <div class="row">
    <RouterLink
      class="col-12 col-sm-6 col-md-4 col-lg-3 q-pb-sm q-pl-xs q-pr-xs router-link"
      v-for="p in projects"
      :key="p.name"
      :to="'/projects/' + p.name"
    >
      <q-card dark bordered class="full-height bg-primary p-card">
        <q-card-section class="q-pb-xs">
          <div class="text-h6">{{ p.name }}</div>
          <div class="text-subtitle2">{{ p.company }}</div>
        </q-card-section>

        <q-separator dark inset class="q-mt-none" />

        <q-card-section class="">
          {{ p.description }}
        </q-card-section>
      </q-card>
    </RouterLink>
  </div>
</template>

<style scoped>
.router-link {
  text-decoration: none;
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

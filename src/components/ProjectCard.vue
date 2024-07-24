<script setup lang="ts">
import type { Project } from '@/lib/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <q-card class="p-card bg-primary" dark>
    <q-card-section horizontal>
      <q-card-section class="col-2">
        <div class="text-h6">{{ project.name }}</div>
        <div class="text-subtitle2">{{ project.company }}</div>
      </q-card-section>

      <q-card-section class="col-8 text-center">
        <p>{{ project.description }}</p>
      </q-card-section>

      <q-card-section class="col-2 text-center">
        <p>{{ project.techstack }}</p>
      </q-card-section>

      <!-- Maybe images in future? <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax2.jpg" /> -->
    </q-card-section>
  </q-card>
</template>

<style scoped></style>

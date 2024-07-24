<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { allprojects } from '@/lib/projects'
</script>

<template>
  <RouterLink v-for="p in allprojects" :key="p.name" :to="'/projects/' + p.name">
    <ProjectCard :project="p" class="q-mb-sm"></ProjectCard>
  </RouterLink>
</template>

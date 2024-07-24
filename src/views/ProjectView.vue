<script setup lang="ts">
import { allprojects } from '@/lib/projects'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import type { Project } from '@/lib/types/project'

const projectSelected = ref<Project>()

// Determining Project via Params instead of props ensures that
// User will always get the project, regardless of where they are coming from
onBeforeMount(() => {
  const route = useRoute()
  allprojects.forEach((p) => {
    if (p.name === route.params.project) {
      projectSelected.value = p
    }
  })
})
</script>

<template>
  <div>{{ projectSelected?.name }}</div>
  <div>{{ projectSelected?.company }}</div>
  <div>{{ projectSelected?.description }}</div>
</template>

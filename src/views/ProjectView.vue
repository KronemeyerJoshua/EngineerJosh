<script setup lang="ts">
import { allprojects } from '@/lib/projects'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import type { Project } from '@/lib/types/project'

const projectSelected = ref<Project>()
const tab = ref('summary')
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
  <q-card class="bg-primary">
    <q-tabs
      v-model="tab"
      class="bg-deep-purple-10"
      active-color="accent"
      indicator-color="accent"
      active-bg-color="deep-purple-8"
      align="justify"
    >
      <q-tab name="summary" label="Summary" />
      <q-tab name="images" label="Images" />
      <q-tab name="techstack" label="Tech Stack" />
    </q-tabs>
    <p class="text-h3 text-center q-pt-md">{{ projectSelected?.name }}</p>
    <p class="text-h5 text-center">{{ projectSelected?.company }}</p>
    <q-separator />
    <q-tab-panels class="bg-primary" v-model="tab" animated>
      <q-tab-panel name="summary">
        <div class="text-h6 text-center">High Level</div>
        <p class="text-center">{{ projectSelected?.description }}</p>

        <div class="text-h6 text-center">Detailed Description</div>
        <p class="text-center">{{ projectSelected?.detailedDescription }}</p>

        <div class="text-h6 text-center">My Contributions</div>
        <p class="text-center">{{ projectSelected?.contributions }}</p>

        <div class="text-h6 text-center">Challenges</div>
        <p class="text-center">{{ projectSelected?.challenges }}</p>
      </q-tab-panel>

      <q-tab-panel name="images">
        <img v-for="(item, index) in projectSelected?.images" :key="index" src="i" />
        <h4 v-if="!projectSelected?.images" class="text-center">
          Sorry, this project doesn't have any images
        </h4>
      </q-tab-panel>

      <q-tab-panel name="techstack">
        <div class="text-h6 text-center">Tech Stack</div>
        <p class="text-center">{{ projectSelected?.techstack }}</p>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

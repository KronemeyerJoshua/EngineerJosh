<script setup lang="ts">
import type { ResumeEntry } from '@/lib/types/resume'
defineProps<{
  resumeEntries: Array<ResumeEntry>
}>()

function formatDate(date: Date | undefined): string {
  if (!date) {
    return 'Current'
  }
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
</script>

<template>
  <div class="q-px-lg q-py-md timeline-box">
    <q-timeline color="secondary">
      <q-timeline-entry heading>Joshua Kronemeyer</q-timeline-entry>

      <q-timeline-entry v-for="item in resumeEntries" :key="item.company">
        <template v-slot:title>
          {{ item.title }} <br />
          <p class="text-subtitle2 q-pt-xs">{{ item.company }}</p>
        </template>
        <template v-slot:subtitle>
          {{ formatDate(item.startDate) + '-' + formatDate(item.endDate) }}
        </template>

        <div class="list" v-html="item.description"></div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<style scoped lang="scss">
@import '../quasar-variables.sass';

.list ul li {
  color: white;
}
</style>

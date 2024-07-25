<script setup lang="ts">
import { allResumeEntries } from '@/lib/resumeEntries'
import ResumeTimeline from '@/components/ResumeTimeline.vue'
</script>

<template>
  <div class="container">
    <ResumeTimeline :resumeEntries="allResumeEntries" />
  </div>
</template>

<style scoped lang="scss">
@import '../quasar-variables.sass';
</style>

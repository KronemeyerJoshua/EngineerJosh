<script setup lang="ts">
import { allResumeEntries } from '@/lib/resumeEntries'
import ResumeTimeline from '@/components/ResumeTimeline.vue'
import HorizontalList from '@/components/HorizontalList.vue'
import type { Image } from '@/components/HorizontalList.vue'
const resumes: Array<Image> = [
  { imgUrl: 'fa-regular fa-file-word', extUrl: '/resume/Kronemeyer_SE_Resume_24.docx', icon: true },
  { imgUrl: 'fa-regular fa-file-pdf', extUrl: '/resume/Kronemeyer_SE_Resume_24.pdf', icon: true }
]
</script>

<template>
  <div class="container">
    <HorizontalList
      style="max-width: 100px; margin: 0 auto; border: none; box-shadow: none"
      :items="resumes"
    />
    <h3 class="text-center">Joshua Kronemeyer</h3>
    <ResumeTimeline :resumeEntries="allResumeEntries" />
  </div>
</template>

<style scoped lang="scss">
@import '../quasar-variables.sass';
</style>

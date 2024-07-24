<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Contact from '@/components/Contact.vue'
import HorizontalList from '@/components/HorizontalList.vue'
import CardBox from '@/components/CardBox.vue'
import type { Image } from '@/components/HorizontalList.vue'
import msLogo from '@/assets/img/ms-logo.png'
import wellsLogo from '@/assets/img/wells-logo.png'
import slalomLogo from '@/assets/img/slalom-logo.png'
import wabLogo from '@/assets/img/wab-logo.png'
import azdhsLogo from '@/assets/img/adhs-logo.png'
import { allprojects } from '@/lib/projects'
import { joshContact } from '@/lib/about'

const companies: Array<Image> = [
  { imgUrl: msLogo, extUrl: 'https://microsoft.com/' },
  { imgUrl: wellsLogo, extUrl: 'https://wellsfargo.com/' },
  { imgUrl: slalomLogo, extUrl: 'https://slalom.com/' },
  { imgUrl: wabLogo, extUrl: 'https://www.westernalliancebancorporation.com/' },
  { imgUrl: azdhsLogo, extUrl: 'https://www.azdhs.gov/' }
]
</script>

<template>
  <div class="about">
    <Contact
      class="q-mb-sm"
      :avatar="joshContact.avatar"
      :about="joshContact.about"
      :linkedin="joshContact.linkedin"
      :github="joshContact.github"
      :email="joshContact.email"
    />
    <HorizontalList class="q-mb-sm" :items="companies" />
    <CardBox :projects="allprojects" />
  </div>
</template>

<style scoped>
.about {
  width: 100%;
}
</style>

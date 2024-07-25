<script setup lang="ts">
defineProps<{
  avatar: string
  about: string
  linkedin: string
  github: string
  email: string
}>()
</script>

<template>
  <div class="row container">
    <div class="col-4">
      <q-avatar size="20rem">
        <img src="@/assets/img/avatar_main.jpg" />
      </q-avatar>
    </div>

    <div class="col-8 q-pl-xl">
      <div class="col-12">
        <p class="text-h4">About Me</p>
        <p>{{ about }}</p>
      </div>
      <div class="col-4">
        <p class="text-h4">Socials</p>
        <a :href="linkedin" class="q-pr-md"
          ><q-icon size="2rem" name="fa-brands fa-linkedin"></q-icon
        ></a>
        <a :href="github" class="q-pr-md"
          ><q-icon size="2rem" name="fa-brands fa-github"></q-icon
        ></a>
        <a :href="'mailto:' + email"><q-icon size="2rem" name="fa-regular fa-envelope"></q-icon></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/Contact.vue'
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>Engineer Josh </q-toolbar-title>

        <q-tabs inline-label>
          <q-route-tab name="about" icon="fa-solid fa-address-card" to="/" label="About" />
          <q-route-tab to="/resume" icon="fa-solid fa-file" label="Resume" />
          <q-route-tab to="/projects" icon="fa-solid fa-code" label="Projects" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <transition>
      <q-page-container>
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </q-page-container>
    </transition>

    <q-footer elevated class="bg-primary text-white text-center">
      <a href="https://github.com/KronemeyerJoshua/EngineerJosh">Full Source Code</a>
    </q-footer>
  </q-layout>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

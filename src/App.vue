<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/Contact.vue'
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Engineer Josh
        </q-toolbar-title>

        <q-tabs inline-label>
          <q-route-tab name="about" icon="mail" to="/" label="About" />
          <q-route-tab to="/resume" label="Resume" />
          <q-route-tab to="/projects" label="Projects" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </q-page-container>

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

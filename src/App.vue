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
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white text-center">
      <a href="https://github.com/KronemeyerJoshua/EngineerJosh">Full Source Code</a>
    </q-footer>
  </q-layout>
</template>

<!--<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
-->
<style scoped></style>

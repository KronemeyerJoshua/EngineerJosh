<script setup lang="ts">
defineProps<{
  avatar: string,
  about: string,
  linkedin: string,
  github: string
}>()
</script>

<template>
  <div class="row contact">
    <div class="col">
      <q-avatar size="20rem">
        <img src="@/assets/img/avatar_main.jpg" />
      </q-avatar>
    </div>

    <div class="col-8 column q-pl-xl">
      <div class="col-8">
        About Me
      </div>
      <div class="col">
        Socials
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../quasar-variables.sass';

.contact {
  background-color: $primary;
  border: 1px solid $accent;
  width: 100%;
  padding-left: 6rem;
  padding-right: 6rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

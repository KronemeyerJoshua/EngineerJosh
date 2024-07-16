<script setup lang="ts">

export interface Image {
    imgUrl: string,
    extUrl: string
}

defineProps<{
    items: Array<Image>
}>()
</script>

<template>
  <div class="row hz-list">
    <div class="col img-container items-center content-center " v-for="item in items">
        <a :href=item.extUrl>
          <div class="flex flex-center">
            <img class="logo" :src="item.imgUrl" />
          </div>
        </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../quasar-variables.sass';

.img-container {
  min-width: 250px;
}

.logo {
  height: 60px;
  padding: 5px;
  object-fit: contain;
  max-width: 250px;
}

.hz-list {
  background-color: $primary;
  border: 1px solid $accent;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-width: 600px;
}
</style>

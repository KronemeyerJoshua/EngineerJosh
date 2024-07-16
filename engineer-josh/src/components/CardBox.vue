<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="row">
    <q-card v-for="count in 10" dark bordered class="col p-card bg-primary">
      <q-card-section>
        <div class="text-h6">Information Assistant</div>
        <div class="text-subtitle2">Microsoft</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        This industry accelerator showcases integration between Azure and OpenAI's large language models. It leverages Azure AI Search for data retrieval and ChatGPT-style Q&A interactions. Using the Retrieval Augmented Generation (RAG) design pattern with Azure OpenAI's GPT models, it provides a natural language interaction to discover relevant responses to user queries. Azure AI Search simplifies data ingestion, transformation, indexing, and multilingual translation.
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.p-card {
    min-width: 300px;
    margin: 5px;
}
</style>

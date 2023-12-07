<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useAPI from '@/composables/useAPI';

const { getCharacter, currentCharacter } = useAPI()


const route = useRoute()

const character = ref('')
onMounted(async () => {
  await getCharacter(route.params.id)
  console.log(route.params.id)
})

onUnmounted(() => {
 currentCharacter.value = null
})

</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-b from-yellow-200 to-orange-300 font-poppins"
  >
    <div
      v-if="currentCharacter"
      class="flex flex-col items-center justify-center gap-6"
    >
      <img class="mx-auto rounded-full p-8 h-64 w-64"
        :src="currentCharacter.image"
        :alt="currentCharacter.name"
      />
      <h1 class="text-orange-800 text-6xl font-bold">
        {{ currentCharacter.name }}
      </h1>
      <h2 class="text-orange-600 text-2xl font-bold">List of Jutsu</h2>
      <div v-for="jutsu in currentCharacter.jutsus">
        <p class="text-orange-500 text-xl">{{ jutsu }}</p>
      </div>
    </div>
  </main>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})


const characterName = ref('')
const characterClan = ref('')
const characterVillage = ref('')
const characterJutsus = ref([])
const characterQuote = ref('')
const characterImage = ref('')
  
const addCharacter = async () => {
  const { data } = await api.post('/api/characters', {
    name: characterName.value,
    clan: characterClan.value,
    village: characterVillage.value,
    jutsus: [characterJutsus.value],
    quote: characterQuote.value,
    image: characterImage.value
  })
  resetForm()
}

const resetForm = () => {
  var element = document.getElementById("api_form");
  element.reset()
  characterName.value = ""
  characterClan.value = ""
  characterVillage.value = ""
  characterJutsus.value = ""
  characterQuote.value = ""
  characterImage.value = ""
}

</script>

<template>
  
  <form id="api_form" class="login-form" @submit.prevent="addCharacter" >
    <h1 class="title">Add Character Form</h1>
    <input v-model="characterName" type="text" placeholder="name" />
    <input v-model="characterClan" type="text" placeholder="clan" />
    <input v-model="characterVillage" type="text" placeholder="village" />
    <input v-model="characterJutsus" type="text" placeholder="jutsu" />
    <input v-model="characterQuote" type="text" placeholder="quote" />
    <input v-model="characterImage" type="text" placeholder="image" />
    <button type="submit" class="bg-green-500 px-4 py-2">submit</button>
  </form>
</template>

<style scoped lang="postcss">
.title {
    @apply mx-auto text-center text-orange-700 font-bold;
}  
.login-form {
    @apply mx-auto mt-20 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;
    & input {
      @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
    }
  }
</style>
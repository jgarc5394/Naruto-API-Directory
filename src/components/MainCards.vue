<script setup>
    import { ref, computed } from 'vue'
    import useAPI from '@/composables/useAPI'
    import MainCardsSingle from '@/components/MainCardsSingle.vue'
    import MainSearch from '@/components/MainSearch.vue'
   
    const { characters } = useAPI()
    const search = ref('')

    const filteredList = computed(() => {
    return characters.value.filter(character =>
    character.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
    <input type="text" placeholder="Search Character..." class="search" v-model="search" />
    
    <div class="sub-wrapper" v-if="characters">
        <Suspense>
            <MainCardsSingle v-for="character in filteredList" :key="character.characterId" :character="character"/>
            <template #fallback>
                <div>Loading...</div>
            </template>
        </Suspense>
    </div>
</template>

<style scoped lang="postcss">
    .search {
            @apply rounded-md border-0 px-8 py-4 placeholder-orange-300 text-orange-500 outline-none 
            focus:ring focus:ring-orange-300;
        }
    .sub-wrapper {
        @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
    }
</style>
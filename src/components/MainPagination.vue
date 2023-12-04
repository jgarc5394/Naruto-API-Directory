<script setup>
  import useAPI from '@/composables/useAPI'

  const { activePage, pages, getCharacters } = useAPI()
  
  const prevPage = async () => {
    if (activePage.value > 1) {
      activePage.value--
      await getCharacters()
    }
  }
  const nextPage = async () => {
    if (activePage.value < pages.value) {
      activePage.value++
      await getCharacters()
    }
  }
const jumpPage = async (page) => {
    activePage.value = page
    await getCharacters()
  }
</script>

<template>
  <div class="pagination">
    <button class="action" :disabled="activePage === 1" @click="prevPage">Prev</button>
    <button class="page" :key="page" v-for="page in pages" :class="page === activePage ? 'active' : ''" @click="jumpPage(page)">
      {{ page }}
    </button>
    <button class="action" :disabled="activePage === pages" @click="nextPage">Next</button>
  </div>
</template>

<style lang="postcss" scoped>
  .pagination {
    @apply flex justify-center gap-4;
    .action {
      @apply rounded-md bg-slate-100 p-2 font-medium text-orange-400 shadow-md hover:bg-slate-200 disabled:text-slate-400 hover:disabled:bg-slate-100;
    }
    .page {
      @apply rounded-md bg-slate-100 p-2 font-medium text-orange-400 shadow-md hover:bg-slate-200;
      &.active {
        @apply bg-yellow-400 text-slate-100 hover:bg-yellow-500;
      }
    }
  }
</style>
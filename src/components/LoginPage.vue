<script setup>
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    import { useAuth } from '@/composables/useAuth'
    const { login, logout } = useAuth()

    const router = useRouter()
    const route = useRoute()

    const username = ref('')
    const password = ref('')

    const logUserIn = async () => { 
        if (await login(username.value, password.value)) {
            if (route.query.redirect) {
                router.push(route.query.redirect)
            } else {
                router.push({ name: 'Home'})
            }
        } else {
            logout()
        }    
    }
</script>

<template>
    <form class="login-form" @submit.prevent="logUserIn">
        <input v-model="username" type="text" placeholder="username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit" class="bg-orange-300 px-4 py-2">Log In</button>
    </form>
</template>

<style scoped lang="postcss">
    .login-form {
        @apply mx-auto mt-40 flex max-w-md flex-col gap-4 bg-white p-8 rounded-md shadow-lg;
        & input {
            @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-300;
        }
        & button {
            @apply rounded-md hover:bg-green-400;
        }
    }   
</style>
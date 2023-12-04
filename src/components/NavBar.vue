<script setup>
    import { ref } from 'vue'
    import { useAuth } from '@/composables/useAuth'

    const { isAuthenticated, logout, user } = useAuth()

    const brand = ref(import.meta.env.VITE_APP_NAME)
</script>

<template>
    <nav>
        <div class="wrapper">
            <RouterLink :to="{name: 'Home'}" class="brand">
                <span class="brand-title">{{ brand }}</span>
            </RouterLink>
            <div class="menu">
                <p v-show="isAuthenticated" class="px-4 py-4">Welcome Back <strong><i>{{ user?.email }}</i></strong></p>
                <div v-if="isAuthenticated">
                    <RouterLink :to="{ name: 'Settings' }" href="#" class="menu-item">Settings</RouterLink>
                    <button href="#" class="menu-logout" @click="logout">Logout</button>
                </div> 
                <div v-else>
                    <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login">Login</RouterLink>
                </div>       
            </div>
        </div>
    </nav>
</template>

<style scoped lang="postcss">
    nav {
        @apply flex h-20 bg-red-700 text-white;
        .wrapper{
            @apply container mx-auto flex w-full items-center justify-between;
        }
            .brand {
                &-title {
                    @apply text-2xl font-extrabold text-orange-300;
                }
            }
            .menu {
                @apply flex gap-2;
                & div {
                    @apply py-2;
                }
                &-item {
                    @apply rounded-md font-bold px-4 py-2 hover:bg-orange-300 hover:text-slate-900;
                }
                &-login {
                    @apply rounded-md font-bold bg-orange-300 px-4 py-2 hover:bg-green-400 hover:text-slate-900 hover:font-bold;
                }
                &-logout {
                    @apply mx-2 rounded-md font-bold bg-orange-300 px-4 py-2 hover:bg-red-500 hover:text-slate-900 hover:font-bold;
                }
            }
    }       
</style>

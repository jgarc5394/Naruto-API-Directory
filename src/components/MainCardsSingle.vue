<script setup>
    import { ref } from 'vue'
    import { faker } from '@faker-js/faker'

    import useAPI from '@/composables/useAPI'
    const { getDepartment } = useAPI()

    const selectCard = () => {
        console.log(`${props.employee.name} selected`)
    }

    const props = defineProps({
        employee: {
            type: Object,
            required: true,
            default: () => {
                return {
                    createdAt: '2020-01-01',
                    departmentId: '123',
                    email: 'john.doe@example.com',
                    employeeId: '123',
                    name: 'John Doe',
                    quote: 'Really Cool quote',
                    title: 'Position',
                    updatedAt: '2022-01-01',
                }
            },    
        },
    })

    const departmentResponse = await getDepartment(props.employee.departmentId)
    const department = ref(departmentResponse)
</script>

<template>
    <div class="card" @clicked="selectCard">
        <div class="card-image">
            <img :src="faker.internet.avatar()" alt="" srcset="" />
        </div>
        <div class="card-details">
            <p class="card-details-name">{{ props.employee.name }}</p>
            <p class="card-details-job">{{ props.employee.title }}, {{ department.name }}</p>
            <p class="card-details-email">{{ faker.internet.exampleEmail(firstName, lastName) }}</p>
            <p class="card-details-quote">"{{ props.employee.quote }}"</p>
        </div>      
    </div>
</template>

<style scoped lang="postcss">
    .card {
        @apply cursor-pointer overflow-hidden rounded-md bg-orange-300 p-8 shadow-md
        transition duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-900;
        &-image {
            img {
                @apply mx-auto rounded-full object-contain;
            }
        }
        &-details {
            @apply flex flex-col gap-2 pt-6 text-center;
            &-name {
                @apply text-3xl font-thin tracking-wide text-orange-800;
            }
            &-job {
                @apply -mt-2 text-xs font-bold text-orange-600;
            }
            &-email {
                @apply text-sm text-orange-500;
            }
            &-quote {
                @apply pt-4 text-lg italic text-orange-800;
            }
        }
    }
</style>
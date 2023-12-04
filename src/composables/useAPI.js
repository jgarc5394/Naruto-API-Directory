import { ref } from "vue"
import axios from "axios"

const characters = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(8)

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    auth: {
        username: import.meta.env.VITE_API_USERNAME,
        password: import.meta.env.VITE_API_PASSWORD,
    },
})

const getCharacters = async () => {
    loading.value = true
    const { data, headers } = await api.get('/api/characters', {
        params: {
            page: activePage.value,
            size: pageSize.value,
        },
    })
    characters.value = data
    pages.value = Number(headers['x-total-pages']) || 1
    loading.value = false
}

const getCharacter = async (id) => {
    const { data } = await api.get(`/api/characters/${id}`)
    currentCharacter.value = data
    console.log(data)
  }

const useAPI = () => {
    return { characters, pages, activePage, loading, pageSize, getCharacters, getCharacter }
}

export default useAPI
import axios from "axios"

const api = axios.create({
    method: 'get',
    baseURL: "https://pokeapi.co/api/v2/pokemon?limit=1000",
    headers: {}
})
export default api
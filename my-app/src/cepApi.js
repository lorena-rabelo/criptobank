import axios from 'axios'

const apiUrl= 'https://viacep.com.br'

const cepApi = axios.create({
    baseURL: apiUrl
})

export default cepApi
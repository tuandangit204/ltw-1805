import axios from "axios"

const BASE_URL = 'https://d6lcqm-8081.csb.app'

const axiosInstance = axios.create({
    baseURL: BASE_URL + '/api',
})

export default axiosInstance
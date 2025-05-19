import axios from "axios"

const BASE_URL = 'https://photo-sharing-server-apyt.onrender.com'

const axiosInstance = axios.create({
    baseURL: BASE_URL + '/api',
})

export default axiosInstance
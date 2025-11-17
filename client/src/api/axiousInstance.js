import axios from "axios"
import {getToken} from "../utills/token.js"
export const api = axios.create({
    baseURL: "http://localhost:5001/api"
})

api.interceptors.request.use((config) => {
    const token = getToken();    
    if (token) {
        config.headers.Authorization = ` Beared ${token}`
    }
    return config
})
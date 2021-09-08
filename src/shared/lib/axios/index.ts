import axios from 'axios'
import { env } from 'shared/config'

export const instance = axios.create({
    baseURL: env.API_URL,
    timeout: 180000,
})

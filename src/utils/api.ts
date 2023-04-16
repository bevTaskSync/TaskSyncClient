import axios, { AxiosResponse } from 'axios'
import { AUTHENTICATE_URL } from './routes/routes'

export type LoginResponse = {
    token: string
}

export const login = async (username: string, password: string): Promise<string> =>{
    const response: AxiosResponse<LoginResponse> = await axios.post(AUTHENTICATE_URL, { username, password})
    return response.data.token
}
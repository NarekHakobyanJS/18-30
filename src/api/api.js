import axios from 'axios'


export const insatace = axios.create({
    baseURL : 'https://fakestoreapi.com'
})
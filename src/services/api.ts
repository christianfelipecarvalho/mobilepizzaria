import axios from "axios";


const api = axios.create({

    baseURL: 'https://backend-pizzaria.vercel.app'
})

export { api };

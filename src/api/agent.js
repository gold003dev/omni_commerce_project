import axios from 'axios';
import sleep from '@/utils/sleep';
import {parseFormData} from '@/utils/formData';

import {useAuthStore} from "@/stores/authStore";
import { toast } from "vue3-toastify";

// Base URL
// -- development: https://localhost:7250/api
// -- production: (your domain)
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

// Send up the token with every request, when there is a token
axios.interceptors.request.use(config => {
    let authStore = useAuthStore();
    const token = authStore.token;
    config.headers = {
        Tenant: authStore.tenant ?? '',
    };
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
})

// Axios reponse interceptors
axios.interceptors.response.use(async response => {
    if (import.meta.env.MODE === 'development') await sleep(1000); // artifical delay for development
    return response;
}, (error) => { // basic error handling for 400 and 500 type errors
    const { data, status } = error.response;
    switch (status) {
        case 400:
            toast.error("Error code 400: bad request");
            console.log(data);
            break;
        case 401:
            toast.error("Error code 401: unauthorized");
            console.log(data);
            useAuthStore().logout();
            break;
        case 500:
            toast.error('Error code 500: internal server error');
            console.log(data);
            break;
    }
    return Promise.reject(error);
})
const responseBody = (response) => response.data;

// Axios Base
const agent = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    postFormData: (url, body) => {
        const formData = parseFormData(body);
        return axios.post(url, formData, {headers: { 'Content-type': 'multipart/form-data' }}).then(responseBody)
    },
    put: (url, body, options) => axios.put(url, body, options).then(responseBody),
    putFormData: (url, body) => {
        const formData = parseFormData(body);
        return axios.put(url, formData, {headers: { 'Content-type': 'multipart/form-data' }}).then(responseBody)
    },
    delete: (url) => axios.delete(url).then(responseBody),
}

export default agent;

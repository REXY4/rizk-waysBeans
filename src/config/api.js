import axios from 'axios';

export const Api = axios.create({
    baseURL : "http://localhost:5000/api/v1"
})
   
export const setAuthToken = (token) => {
    console.log("ini ayuth",localStorage.token)
    if (token) {
        Api.defaults.headers.common["Authorization"] = `Bearer ${localStorage.token}`;
    } else {
        delete Api.defaults.headers.common["Authorization"]
    }
};
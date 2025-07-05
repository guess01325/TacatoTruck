import axios from 'axios'

const getToken = () => {
    return new Promise(resolve => {
        resolve(`Bearer ${localStorage.getItem('token') || null}`)
    })
}

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://tacatotruck.onrender.com/api' // or use the Heroku URL if preferred
        : 'http://localhost:3000/api'
})

api.interceptors.request.use(async function (config) {
    config.headers['Authorization'] = await getToken()
    return config
}, function (error) {
    console.log('Request error: ', error)
    return Promise.reject(error)
});

export default api

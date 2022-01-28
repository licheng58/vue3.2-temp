import axios from 'axios'

const service = axios.create({
    baseUrl: process.env.VUE_APP_BASE_API,
    timeout: 5000
})


service.interceptors.request.use(
    config => {
        config.headers.icode = `256C7B088E4531A6`
        return config
    }
)
export default service
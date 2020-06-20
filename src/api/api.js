import axios from 'axios'
import qs from 'qs'
import vue from 'vue'

const service = axios.create({
    baseURL: '/',
    timeout: 10000, // request timeout
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

service.interceptors.request.use(config => {
    // console.log(config)
    if(!config.multi){
        config.data = qs.stringify(config.data)
    }

    // config.headers.SsoId = getSsoId()

    // if (getToken()){
    //     config.headers.Token = getToken()
    // }

    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

service.interceptors.response.use(
    response => {
        console.log(response);
        // if(!isObject(response.data) || response.data.code <= 0){
        //     return Promise.reject(response.data)
        // }
        //
        // //登录失效
        // if (response.data.code === 205){
        //     Message({
        //         message: '登录失效，请重新登录',
        //         type: 'error',
        //         duration: 2 * 1000
        //     })
        //
        //     setTimeout(() => {
        //         const jupiterToken = getJupiterToken()
        //         const redirectUrl = window.location.protocol + '//' + window.location.host + '/?jupiter_token=' + jupiterToken
        //         window.location.href = 'https://test-sso.songshuai.com/login?redirect_url=' + encodeURIComponent(redirectUrl)
        //     }, 2000)
        //     return
        // }

        return response.data
    },
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.msg || '网络延迟，请刷新！',
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    })

export default service
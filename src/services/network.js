import axios from 'axios'

export const API_URL = 'https://developer-square-be.herokuapp.com/v1/'

class Api {
    constructor() {
        this.instance =  axios.create({
            baseURL: API_URL,
            timeout: 7000,
            headers: {
                Authorization: `Bearer ${this.getToken()}`,
            },
        })

        //Intercepting the response, if its okay then do nothing but if there's a 401
        //then resend it.
        this.instance.interceptors.response.use(response => {
            return response
        }, err => {
            return new Promise((resolve, reject) => {
                const originalReq = err.config;
                if (err.response !== undefined) {
                if (err.response.status === 401 && err.config) {
                    let res = fetch('https://developer-square-be.herokuapp.com/v1/auth/refresh-tokens', {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json',
                            'Token': `${this.getToken()}`
                        },
                        redirect: 'follow',
                        referrer: 'no-referrer',
                        body: JSON.stringify({
                            refreshToken: `${this.getRefreshToken()}`
                        }),
                    }).then(res => res.json())
                    .then(res => {
                        if (res.status === 200) {
                            localStorage.setItem('jwtToken', res.data.access.token)
                            localStorage.setItem('refreshToken', res.data.refresh.token)
                        }

                        return axios(originalReq)
                    })
                    resolve(res)
                }
            }
                return Promise.reject(err, "Function Error!!")
            })
        })
    }

    getToken() {
        return localStorage.getItem('jwtToken')
    }

    getRefreshToken() {
        return localStorage.getItem('refreshToken')
    }

    getUrl() {
        const url = window.location.href
        if (url.slice(0,5) === 'https') {
            let substring = url.slice(62)
            console.log(substring)
            return substring
        } else {
            let substring = url.slice(37)
            return substring
        }
    }

    auth() {
        return {
            login: (data) => this.instance.post(`auth/login/`, data),
            logout: (data) => this.instance.post(`auth/logout/`, data),
            registerUser: (data) => this.instance.post(`auth/register/`, data),
            forgotPassword: (data) => this.instance.post(`auth/forgot-password/`, data),
            resetPassword: (data) => this.instance({
                method: 'POST',
                url: 'auth/reset-password/',
                params: {
                    token: `${this.getUrl()}`
                },
                data,
            })
        }
    }
}

export default Api;
import axios from "axios"
import qs from "qs"

let baseUrl = 'http://localhost:8181'

const getRequest = (url) => {
    return axios({
        withCredentials:true,
        method: 'get',
        url: `${baseUrl}${url}`,
    })
}

const postRequestWithForm = (url, params) => {
    return axios({
        withCredentials:true,
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        method: 'post',
        url: `${baseUrl}${url}`,
        data: qs.stringify(params),
    })
}

const postRequest = (url, params) => {
    return axios({
        withCredentials:true,
        method: 'post',
        url: `${baseUrl}${url}`,
        data: params,
    })
}

export {getRequest, postRequest, postRequestWithForm}

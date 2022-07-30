import axios from 'axios'

const http = axios.create({
    // 初始信息
    timeout: 5000, //5秒之后超时
    baseURL: "http://toutiao.itheima.net/v1_0"  //请求基础地址
})

axios.interceptors.request.use(req => {
    // 在发送请求前要做的事儿---获取token然后
    
    return req
}, err => {
    // 在请求错误时要做的事儿
    ...
    // 该返回的数据则是axios.catch(err)中接收的数据
    return Promise.reject(err)
})
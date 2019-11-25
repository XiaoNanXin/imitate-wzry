import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
    baseURL:"http://localhost:3000/admin/api"
})
//使用拦截器把全部请求的异常错误进行拦截显示
http.interceptors.response.use((res)=>{
    return res
},(err)=>{
    if(err.response.data.message){
        Vue.prototype.$message({
            type:"error",
            message:err.response.data.message,
        })
    }
    return Promise.reject(err);
})

export default http
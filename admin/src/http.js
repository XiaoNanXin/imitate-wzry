import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
    baseURL:process.env.VUE_APP_API_URL || "/admin/api",
    // baseURL:"http://localhost:3000/admin/api"
})
//使用request拦截器向后端请求数据的时候加入token进行验证
http.interceptors.request.use((config)=> {
    // Do something before request is sent
    // let token = localStorage.token;
    // window.console.log(localStorage.token);
    if(localStorage.token != undefined){
        config.headers.Authorization = 'Bearer '+localStorage.token;
    }
    return config;
  }, (error)=> {
    // Do something with request error
    return Promise.reject(error);
  });

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
    if(err.response.status==401){
        router.push('/login');
    }
    return Promise.reject(err);
})

export default http
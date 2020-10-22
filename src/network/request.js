import axios from 'axios'
export function  request(config){
    // return new Promise((resolve, reject) => {
    //     //创建axios实例
    //     const instance = axios.create({
    //         baseURL:'http://123.207.32.32:8000',
    //         timeout:5000
    //     })
    //     //发送真正的网络请求
    //     instance(config)
    //         .then(res=>{
    //             resolve(res)
    //         })
    //         .catch(err=>{
    //             reject(err)
    //         })
    // })
    //创建axios实例
    const instance = axios.create({
        baseURL:'http://10.80.17.140:8081',
        timeout:5000,
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials:true
    })
    //请求拦截
    instance.interceptors.request.use(config=>{
        console.log(config)
        //拦截后 需要把配置信息返回去才能继续发送请求
        //1、拦截后，可以加配置信息，对信息转化
        //2、每次发送网络请求时，希望在界面显示请求图标，可以在这加
        //3、某些网络请求必须携带登陆信息，可在此检验并跳转
        return config
    },err=>{
        console.log(err)
    })
    //响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res)
        //拦截后，需要把信息返回去
        return res;
    },error => {
        console.log(error)
    })
    //发送真正的网络请求
    return instance(config)
}

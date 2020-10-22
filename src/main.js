import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {request} from "./network/request";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$http = request
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// axios.defaults.baseURL='http://123.207.32.32:8000'
// //5秒钟
// axios.defaults.timeout=5000
// //axios.defaults.headers
// //常见配置项 地址 类型 跟路径 数据处理 请求头 URL查询对象 请求体 超时设置 跨域是否带token
//
//
// // 默认get 请求
// axios({
//   // url:'httpbin.org'
//   url:'/home/multidata',
//   method:'get'
// }).then(res=>{
//   console.log(res)
// })
// axios({
//   url:'/home/data',
//   //专门针对get请求的参数拼接
//   params:{
//     type:'pop',
//     page:1
//   }
//
// }).then(res=>{
//   console.log(res)
// })
//
//
// //并发请求，同时返回结果再去处理结果
// axios.all([
//     axios({
//       url:'/home/multidata'
//     }),
//     axios({
//       url:'/home/data',
//       params:{
//         type:'pop',
//         page:1
//       }
//     })
// ]).then(axios.spread((res1,res2) =>{
//   console.log(res1)
//   console.log(res2)
// }))
//
// //创建对应的axios实例
// const ins = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
//
// ins({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// })



// axios封装模块
// import {request} from "./network/request";
// request({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })

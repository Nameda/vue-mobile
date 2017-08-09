// 重新封装axios
import axios from 'axios'
import router from '../router'
import store from '../store'

// axion请求拦截
axios.interceptors.request.use(
  config => {
    // if(store.state.loginInfo.token){
    //   if(!config.params) config.params = {}
    //   config.params.token = store.state.loginInfo.token
    // }
    return config;
  }, error => {
    return Promise.reject(error);
  }

)
export default axios
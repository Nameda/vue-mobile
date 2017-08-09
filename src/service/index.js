import axios from '../api'
export const test = () => axios.get('https://api.weibo.com/oauth2/authorize')
  .then(res => {
    console.log(res)
  })
  .catch(e=>{
    console.log(e)
  })
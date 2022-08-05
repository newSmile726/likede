// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'
import { getTokenTime } from '@/utils/auth'
// 定义一个处理token过期 方法
function istokenOut() {
  const currentTime = Date.now() //当前时间戳
  const tokenTime = getTokenTime() // 登录时存储在Cookies里面的时间戳
  const timeout = 2 * 60 * 60 * 1000 // 定义过期时间
  return currentTime - tokenTime > timeout //用当前时间减去登录的时间  判断是否过期
}
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
service.interceptors.request.use(async (config) => {
  if (store.state.user.token) {
    if (istokenOut()) {
      await store.dispatch('user/clearToken', '')
      router.push('/login')
      return Promise.reject(new Error('登录过期'))
    } else {
      config.headers.Authorization = store.state.user.token
    }
  }
  return config
}) // 请求拦截器
service.interceptors.response.use(
  (res) => {
    // console.log(res)
    if (res.config.responseType === 'arraybuffer') {
      return res
    }
    // const { data } = res.data
    if (res.status===200) {
      // console.log(data) 132
      return res.data
    }
    Message.error('服务器异常')
    return Promise.reject(new Error(res.statusText))
  },
  async function (error) {
    // 对响应错误做点什么
    // console.dir(error)
    if (error?.response?.status === 401) {
      await store.dispatch('user/clearToken')
      router.push('/login')
      Message.error('登录过期')
    } else {
      Message.error(error.message)
    }
    return Promise.reject(error)
  }
) // 响应拦截器
export default service // 导出axios实例

import { login, userInfo } from '@/api'
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: '', //token
    userId: '', //用户id
    userInfo: {}  // 用户信息
  },
  mutations: {
    getToken(state, payload) {
      state.token = payload
    },
    getuserId(state, payload) {
      state.userId = payload
    },
    getUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    //登录
    async setToken(context, payload) {
      const res = await login(payload)
      // console.log(res)
      context.commit('getToken', res.token)
      context.commit('getuserId', res.userId)
      setTokenTime() //存储时间戳
    },
    //获取用户信息
    async getUserInfo(context, payload) {
      const userInfoMessage = await userInfo(payload)
      // console.log(userInfoMessage)
      context.commit('getUserInfo', userInfoMessage)
    },
    //清空本地并退出
    clearToken(context, payload) {
      context.commit('getToken', payload)
    }
  },
  getters: {}
}

import { login, userInfo } from '@/api'
export default {
  namespaced: true,
  state: {
    token: '', //token
    userId: '', //用户id
    userInfo: {}
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
    async setToken(context, payload) {
      const res = await login(payload)
      // console.log(res)
      context.commit('getToken', res.token)
      context.commit('getuserId', res.userId)
    },
    async getUserInfo(context, payload) {
      const userInfoMessage = await userInfo(payload)
      // console.log(userInfoMessage)
      context.commit('getUserInfo',userInfoMessage)
    },
    clearToken(context,payload) {
      context.commit('getToken', payload)
    }
  },
  getters: {}
}

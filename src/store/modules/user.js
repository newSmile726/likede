import { login } from '@/api'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    token: '' //token
  },
  mutations: {
    getToken(state, payload) {
      state.token = payload
    },
    clearToken(state, payload) {
      state.token = payload
    }
  },
  actions: {
    async setToken(context, payload) {
      const res = await login(payload)
      if (res.data.msg === '登录成功') {
        router.push('/dashboard')
      }
      context.commit('getToken', res.data.token)
    },
    clearToken(context) {
      context.commit('clearToken', {})
    }
  },
  getters: {}
}

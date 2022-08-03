import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 使用Cookies存储登录时时间戳
export function setTokenTime(){
  Cookies.set('tokenTime',Date.now())
}

//获取存储的登录时间戳
export function getTokenTime(){
  return Cookies.get('tokenTime')
}
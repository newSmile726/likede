import router from '@/router'
import store from '@/store'
const Address = ['/dashboard']

router.beforeEach((to, from, next) => {
  const isShow = !!store.state.user.token
//   console.log(store.state.user.token)
//   console.log(isShow)
  const index = Address.indexOf(to.fullPath)
  if (index !== -1 && isShow === false) {
    next('/login')
  } else {
    next()
  }
})

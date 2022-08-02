<template>
  <div class="navbar">
    <!-- logo区域 -->
    <!-- <div class="navbar-logo"> -->
    <img class="navbar-logo" src="../../assets/logo.png" alt="" />
    <!-- </div> -->
    <!-- 用户信息 -->
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="../../assets/Snipaste.png" class="user-avatar" />
          <span>欢迎你，{{ $store.state.user.userInfo.userName }}</span>
          <el-tooltip
            class="item"
            effect="dark"
            content="退出登录"
            placement="bottom"
          >
            <span class="last-span" @click="goLogin">退出</span>
          </el-tooltip>

          <i class="el-icon-caret-bottom" />
        </div>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar'])
  },
  methods: {
    goLogin() {
      console.log(123)
      this.$store.dispatch('user/clearToken', '')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  width: 100%;
  overflow: hidden;
  position: fixed;
  background-image: url('~@/assets/navbar.png');
  background-repeat: no-repeat;
  z-index: 999;
  box-shadow: 0 1px 4px #00152914;
  .navbar-logo {
    width: 88px;
    height: 36px;
    margin: 6px 0 0 15px;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    &:focus {
      outline: none;
    }
    .avatar-container {
      margin-right: 30px;
      color: #fff;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        display: flex;
        align-items: center;
        span {
          margin: 0 8px;
          cursor: pointer;
        }
        .last-span {
          margin-right: -8px;
        }
        .user-avatar {
          border-radius: 50%;
          margin-bottom: 8px;
          cursor: pointer;
          width: 40px;
          height: 40px;
          // border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

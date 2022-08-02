<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="loginFormRules"
      ref="loginForm"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <img src="../../assets/Snipaste.png" alt="" class="login-logo" />
      </div>
<!-- 2313 -->
      <el-form-item prop="loginName">
        <span class="svg-container">
          <i class="el-icon-mobile"></i>
        </span>
        <el-input
          v-model="loginForm.loginName"
          ref="username"
          placeholder="请输入账号"
          type="text"
          @keyup.enter.native="keyupEnter"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-lock"></i>
        </span>
        <el-input
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          auto-complete="on"
          @keyup.enter.native="keyupEnter"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>

      <el-form-item prop="code">
        <i class="el-icon-circle-check svg-container" />
        <el-input
          v-model="loginForm.code"
          placeholder="请输入验证码"
          type="text"
          @keyup.enter.native="keyupEnter"
        >
          <template #suffix>
            <img :src="imgUrl" alt="" class="login-yzmimg" @click="newImgsrc" />
          </template>
        </el-input>
      </el-form-item>

      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        class="login-btn"
        @click="login"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { VerificationCodePicture } from '@/api'
import { createNamespacedHelpers } from 'vuex'
const{mapState:mapUserState}=createNamespacedHelpers('user')
import { nanoid } from 'nanoid'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        loginType: 0,
        clientToken: nanoid()
      },
      imgUrl: '',
      loginFormRules: {
        loginName: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            pattern: /^[a-z]+$/i,
            message: '请输入由英文字母组成的账号',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^[a-z]+$/i,
            message: '请输入正确的密码',
            trigger: 'blur'
          }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      },
      passwordType: 'password'
    }
  },
  computed: {
    ...mapUserState(['token'])
  },
  created() {
    this.newImgsrc()
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    //登录请求
    async login() {
      try {
        await this.$refs.loginForm.validate()
        this.$store.dispatch('user/setToken', this.loginForm)
      } catch (error) {
      }
    },
    //获取验证码图片
    async newImgsrc() {
      try {
        const res = await VerificationCodePicture(this.loginForm.clientToken)
        const res1 =
          'data:image/png;base64,' +
          window.btoa(String.fromCharCode(...new Uint8Array(res.data)))
        this.imgUrl = res1
      } catch (error) {}
    },
    keyupEnter(){
      this.login()
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #999999;
      height: 52px;
      caret-color: $cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid #e2e2e2;
    background-color: #fff;
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #000;
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  background: url('~@/assets/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }
  .login-yzmimg {
    margin-right: -42px;
    margin-top: -2px;
    border: 1px solid #80a07b;
  }
  .login-logo {
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .login-btn {
    width: 448px;
    height: 52px;
    background-color: #4965e6;
  }
}
</style>

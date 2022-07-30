<template>
  <div class="login-container">
    <div class="login-form">
      <img src="../../assets/Snipaste.png" alt="" class="login-logo">

      <el-form :model="ruleForm" :rules="rules" class="demo-ruleForm">

        <el-form-item prop="pass">
          <el-input v-model="ruleForm.pass" placeholder="请输入账号" type="text" autocomplete="off">
            <template #prefix>
              <i class="el-icon-mobile" />
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="checkPass">
          <el-input v-model="ruleForm.checkPass" placeholder="请输入密码" type="password" autocomplete="off">
            <template #prefix>
              <i class="el-icon-lock" />
            </template>
            <template #suffix>
              <i class="eles-right el-icon-view" />
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="age">
          <el-input v-model="ruleForm.age" placeholder="请输入验证码" type="text">
            <template #prefix>
              <i class="el-icon-circle-check" />
            </template>
            <template #suffix>
              <img src="https://likede2-java.itheima.net/api/user-service/user/imageCode/qm3uVG9oJC12jo6iyFp454MQMsKlqlqx" alt="" class="login-yzmimg">
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="login-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      }
    }
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
  }
}
</script>
<style  lang='scss'>
.login-container{
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
   background: url('~@/assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    .login-form{
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
    .login-logo{
      position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
    }
    .demo-ruleForm{
      i{
        display: inline-block;
        width: 30px;
        height: 52px;
        line-height: 52px;
        padding: 1px 5px 6px 15px;
        font-size: 16px;
      }
      .login-yzmimg{
        margin-right:-4px ;
        margin-top:1px ;
        border: 1px solid #80a07b;
      }
      .eles-right{
        margin-right: 10px;
      }
  .el-input__inner{
     height: 52px ;
     padding-left: 52px;
}

}
.login-btn{
  width: 448px;
  height: 52px;
  background-color: #4965e6;
}
}

</style>

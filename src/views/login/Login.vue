<template>
  <div class="login-wrap">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px"
      :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click="submit()">登录</el-button>
    </el-form>
  </div>
</template>

<script>

import {request} from "../../network/request";

export default {

  name: "Login",
  data() {
    return {
      loading: false,
      //vcUrl: '/verifyCode?time='+new Date(),
      formdata:{
        username: '',
        password: '',
        code:''
      }
    }
  },
  methods: {
    submit() {
      let postData = new FormData()
      postData.append("username",this.formdata.username)
      postData.append("password",this.formdata.password)
      request({
        url:'/login',
        method:'post',
        data:postData
      }).then(res=>{
         this.$router.push({path:'/home'})
         console.log(res)
      }).catch(err=>{
         console.log(err)
      })
    }
  }
}

</script>

<style>
.login-wrap {
  height: 100%;
  background: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 400px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-btn {
  width: 100%;
}
    .loginContainer {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .loginTitle {
        margin: 15px auto 20px auto;
        text-align: center;
        color: #505458;
    }
    .loginRemember {
        text-align: left;
        margin: 0px 0px 15px 0px;
    }
    .el-form-item__content{
        display: flex;
        align-items: center;
    }
</style>

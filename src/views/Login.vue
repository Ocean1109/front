<template>
    <el-form class="loginContainer"
             ref="loginForm"
             :model="loginForm"
             :rules="rules"
             status-icon
             label-width="100px"
             label-position="left">
      <el-form-item label="用户名" prop="userAccount">
        <el-input size="normal" type="text" v-model="loginForm.userAccount"></el-input>
      </el-form-item>
      <el-form-item label="密  码" prop="password">
        <el-input size="normal" type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-checkbox size="normal" class="rememberMe" v-model="loginForm.rememberMe">记住我</el-checkbox>
      <el-button size="normal" type="primary" style="width: 100%;" @click="submitForm">登录</el-button>
      <el-link class="register" @click="goRegister">还没有账号？快注册吧！</el-link>
    </el-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        userAccount: '',
        password:'',
        rememberMe:true,
      },
      rules: {
        userAccount: [
          {
            required:true,
            message:"请输入用户名",
            trigger:"change"
          }
        ],
        password: [
          {
            required:true,
            message:"请输入密码",
            trigger:"change"
          },
        ],
      },
    }
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.postRequestWithForm('/doLogin',this.loginForm).then(resp => {
            if(resp.data.errCode === 0){
              this.$store.commit("setUser",resp.data.data.username)
              this.$router.replace("/")
            } else {
              this.$message({
                showClose: true,
                message: resp.data.errMsg,
                type: 'error'
              });
            }
          }).catch(error => {
            console.log(error)
          })
        } else {
          return false
        }
      })
    },
    goRegister(){
      this.$router.replace("/register")
    },
  },
}
</script>

<style scoped>
.loginContainer {
  display: block;
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  height: 220px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.rememberMe {
  text-align: left;
  margin: 0px 0px 15px 0px;
  float: left;
}

.register {
  float: right;
  margin: 10px 0px 0px 0px;
}

</style>
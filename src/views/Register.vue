<template>
  <el-form class="loginContainer"
           ref="registerForm"
           :model="registerForm"
           :rules="rules"
           status-icon
           label-width="100px"
           label-position="left">
    <el-form-item label="用户名" prop="username">
      <el-input size="normal" type="text" v-model="registerForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密  码" prop="password">
      <el-input size="normal" type="password" v-model="registerForm.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirm">
      <el-input size="normal" type="password" v-model="registerForm.confirm"></el-input>
    </el-form-item>
    <el-button size="normal" type="primary" style="width: 100%;" @click="submitForm">注册</el-button>
    <el-link class="login" @click="goLogin">返回登录</el-link>
  </el-form>
</template>

<script>
export default {
  name: "Register",
  data() {
    const confirmPassword = (rule,value,callback)=>{
      if(value === ''){
        callback(new Error('请确认密码'))
      } else if (value !== this.registerForm.password){
        callback(new Error("两次密码不一致"))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        username: '',
        password:'',
        confirm:'',
      },
      rules: {
        username: [
          {
            required:true,
            message:"请输入用户名",
            trigger:"blur"
          }
        ],
        password: [
          {
            required:true,
            message:"请输入密码",
            trigger:"blur"
          },
          {
            min:6,
            max:16,
            message: "密码长度在6-16位",
            trigger: "blur"
          }
        ],
        confirm: [
          {
            required: true,
            validator: confirmPassword,
            trigger: "blur"
          }
        ]
      },
    }
  },
  methods: {
    submitForm() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
    goLogin(){
      this.$router.replace("/login")
    },
  },
}
</script>

<style scoped>
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  height: 250px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login {
  float: right;
  margin: 10px 0px 0px 0px;
}
</style>
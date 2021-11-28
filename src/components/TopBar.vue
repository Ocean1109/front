<template>
  <el-menu
      mode="horizontal"
      @select="handleSelect"
      background-color="#f9f1db"
      text-color="#373834"
      active-text-color="#87723e">
    <el-menu-item style="float: right" index="1" v-if="user !== ''">个人中心</el-menu-item>
    <span  v-if="user === ''" @click="goLogin">还未登录，请登录</span>
    <el-submenu style="float: right"  index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item style="float: right" index="3">消息中心</el-menu-item>
    <el-menu-item style="float: right" index="4">订单管理</el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "TopBar",
  methods: {
    handleSelect(key, keyPath) {
      if(key === "1"){
        this.$router.push("/person")
      }
    },
    goLogin(){
      this.$router.push("/login")
    }
  },
  computed: {
    user () {
      return this.$store.state.currentUser
    }
  }
}
</script>

<style scoped>
span{
  font-size: 14px;
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  float: right;
  cursor: pointer;
}
span:hover{ color:#f00;}
</style>
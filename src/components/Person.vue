<template>
  <div>
    <span>{{user}}</span>
    <el-button type="danger"
               round
               @click="logout">注销账号</el-button>
  </div>
</template>

<script>
export default {
  name: "Person",
  methods:{
    logout(){
      this.getRequest("/logout").then(resp => {
        console.log(resp)
        this.$store.commit("setUser","")
      }).catch(error => {
        console.log(error)
      })
    }
  },
  computed: {
    user () {
      return this.$store.state.currentUser
    },
  },
}
</script>

<style scoped>

</style>
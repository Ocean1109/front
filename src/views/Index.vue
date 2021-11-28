<template>
  <div style="position: relative">
    <TopBar></TopBar>
    <SideBar class="sidebar"></SideBar>
    <router-view class="mainBody"></router-view>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
export default {
  name: "Index",
  components: {TopBar, SideBar},
  beforeMount() {
    this.getRequest("/isLogin").then(resp => {
      console.log(resp)
      if(resp.data.errCode === 0){
        this.$store.commit("setUser",resp.data.data.username)
      }
    }).catch(error => {
      console.log(error)
    })
  },
}
</script>

<style scoped>

</style>
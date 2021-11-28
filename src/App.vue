<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.sidebar{
  width: 150px;
  float: left;
}
.mainBody{
  margin-left: 150px;
}
</style>

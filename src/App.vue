<template>
  <div id="app">
    <img src="./assets/logo.png" id="logo" alt="">
    <router-link to="/">首页</router-link>
    <router-link to="/equip-merge">装备合成</router-link>
    <router-link to="/chess">棋子数据</router-link>
    <router-link to="/detail">冷门知识</router-link>
    <router-view/>

  </div>
</template>

<script>

    // new Vue({
    //   el :'#app-1',
    //   components:Nav
    // })
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  a {
    font-size: 18px;
    text-decoration: none;
    margin-right: 30px;
    position: relative;
    bottom: 20px;
  }
  a:hover {
    color: #00ca4c;
  }
  #logo {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 150px;

  }
  body {
    background: #e7e7e7;
  }
</style>

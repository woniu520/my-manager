<template>
  <div id="app">
    <button @click="loginClick">登录</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      display : 'display'
    }
  },
  methods: {
    loginClick() {
      this.isActive = false
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped="scoped">
#app{
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}
</style>

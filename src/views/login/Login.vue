<template>
  <div class="login">
    <h2>我是登录页面</h2>
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    >
    </vue-particles>

  </div>
</template>

<script>

export default {
  name: "Login",
}
</script>
<style>
.login {
  width: 100%;
  background-color: #2d3a4b;
}
</style>

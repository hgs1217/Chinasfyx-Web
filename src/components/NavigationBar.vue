<template>
  <div>
    <h1>Chinasyfx Web</h1>
    <ul class="cont-ul">
      <router-link to="/">
        <li>首页</li>
      </router-link>
      <router-link to="/about">
        <li>关于我们</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavigationBar'
  }
</script>

<style lang="scss" scoped>
  .cont-ul {
    width: 100%;
    text-align: center;
  }
  li {
    float: left;
    width: 50%;
    list-style: none;
    text-align: center;
    font: {
      weight: 700;
      size: 18px;
    }
  }
</style>

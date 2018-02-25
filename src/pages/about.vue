<template>
  <div>
    <navigation-bar></navigation-bar>
    <span class="title">关于我们</span>
  </div>
</template>

<script>
  import NavigationBar from '../components/NavigationBar'

  export default {
    name: 'About',
    components: {
      NavigationBar
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    width: 100%;
    margin: 20px 0;
    text-align: center;
    font: {
      weight: 700;
      size: 20px;
    }
  }
</style>

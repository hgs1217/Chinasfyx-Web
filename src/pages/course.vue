<template>
  <div>
    <navigation-bar></navigation-bar>
    <span></span>
    <banner v-bind:index="1"></banner>
    <!-- <span class="title">精彩课程</span> -->
  </div>
</template>

<script>
  import NavigationBar from '../components/NavigationBar'
  import Banner from '../components/Banner'
  export default {
    name: 'Course',
    components: {
      NavigationBar,
      Banner
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

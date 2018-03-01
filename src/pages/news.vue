<template>
  <div>
    <navigation-bar></navigation-bar>
    <banner :index="3"></banner>
  </div>
</template>

<script>
  import NavigationBar from '../components/NavigationBar'
  import Banner from '../components/Banner'

  export default {
    name: 'News',
    components: {
      NavigationBar, Banner
    }
  }
</script>

<style lang="scss" scoped>

</style>

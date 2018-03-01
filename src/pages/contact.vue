<template>
  <div>
    <navigation-bar></navigation-bar>
    <banner :index="7"></banner>
  </div>
</template>

<script>
  import NavigationBar from '../components/NavigationBar'
  import Banner from '../components/Banner'

  export default {
    name: 'Contact',
    components: {
      NavigationBar, Banner
    }
  }
</script>

<style lang="scss" scoped>

</style>

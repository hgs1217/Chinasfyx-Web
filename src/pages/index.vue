<template>
  <div>
    <navigation-bar></navigation-bar>
    <slider></slider>
    <coach-item></coach-item>
  </div>
</template>

<script>
  import NavigationBar from '../components/NavigationBar'
  import CoachItem from '../components/CoachItem'
  import Slider from '../components/Slider'

  export default {
    name: 'Index',
    components: {
      NavigationBar, CoachItem, Slider
    }
  }
</script>

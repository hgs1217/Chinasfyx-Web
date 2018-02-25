<template>
  <div>
    <navigation-bar></navigation-bar>
    <coach-item></coach-item>
  </div>
</template>

<script>
  import NavigationBar from '../components/NavigationBar'
  import CoachItem from '../components/CoachItem'

  export default {
    name: 'Index',
    components: {
      NavigationBar, CoachItem
    }
  }
</script>

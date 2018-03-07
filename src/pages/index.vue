<template>
  <div>
    <navigation-bar></navigation-bar>
    <slider></slider>
    <news-item></news-item>
    <coach-item></coach-item>
  </div>
</template>

<script>
  import NavigationBar from '../components/NavigationBar'
  import CoachItem from '../components/index/CoachItem'
  import Slider from '../components/index/Slider'
  import NewsItem from '../components/index/NewsItem'

  export default {
    name: 'Index',
    components: {
      NavigationBar, CoachItem, Slider, NewsItem
    }
  }
</script>

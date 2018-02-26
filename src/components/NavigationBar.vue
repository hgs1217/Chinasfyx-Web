<template>
  <div>
    <h1>Chinasyfx Web</h1>
    <ul class="cont-ul">
      <router-link v-for="(navi, index) in navis" :key="index" :to="navi.link">
        <li>{{navi.title}}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavigationBar',
    data() {
      return {
        navis: [
          {
            title: '首页',
            link: '/'
          }, {
            title: '关于我们',
            link: '/about'
          }, {
            title: '精彩课程',
            link: '/course-category/package-course'
          }, {
            title: '资深名师',
            link: '/teacher'
          }, {
            title: '新闻中心',
            link: '/news'
          }, {
            title: '学员就业',
            link: '/xueyuanjiuye'
          }, {
            title: '招聘就业',
            link: '/career'
          }, {
            title: '在线报名',
            link: '/zxbm'
          }, {
            title: '联系我们',
            link: '/contact'
          }, {
            title: '下载专区',
            link: '/download'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cont-ul {
    width: 100%;
    text-align: center;
  }

  li {
    float: left;
    width: 10%;
    list-style: none;
    text-align: center;
    font: {
      weight: 700;
      size: 18px;
    }
  }
</style>

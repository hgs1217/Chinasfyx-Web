<template>
  <div class="wrapper">
    <h1 class="title">{{title}}</h1>
    <h4 class="sub-title">{{subTitle}}</h4>
  </div>
</template>

<script>
  export default {
    name: "web-wrapper",
    props: ['title', 'subTitle']
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    margin: 20px 50px;
  }
  .title {
    font: {
      weight: 700;
      family: "Microsoft YaHei", arial, sans-serif;
      size: 38px;
    }
    color: #B20000;

    margin-bottom: 25px;
    position: relative;
    text-align: center;
    line-height: 1.2;
  }
  .title:after {
    content: "";
    position: absolute;
    width: 200px;
    height: 2px;
    background-color: #ddd;
    bottom: -15px;
    left: 50%;
    margin-left: -100px;
  }
  .sub-title {
    color: black;
    margin-bottom: 0;
  }
</style>

<template>
  <div class="banner" :style="back_image">
    <h1 class="page-title">
      {{banners.title}}
    </h1>
    <h4 class="page-sub-title">
      {{banners.title_en}}
    </h4>
  </div>
</template>

<script>
  module.exports = {
    name: 'Banner',
    props: ['index'],
    data() {
      return {
        banners: [],
        back_image: []
      }
    },
    created() {
      this.$http.get('http://127.0.0.1:9527/data').then((data) => {
        // console.log(data.body);
        if (data.body.code === 0) {
          this.banners = data.body.body.banners[this.index]
          this.back_image = data.body.body.banners_back[this.index]
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .page-title-wrapper, .banner {
    background: {
      position: center center;
      repeat: no-repeat;
      size: cover;
    }
    padding: 200px 0 100px;
    text-align: center;
    position: relative;
  }

  .banner:after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .page-sub-title, .page-title {
    text-align: center;
    margin-top: 0;
    line-height: 1.2;
    z-index: 1;
    color: #fff;
  }

  .page-title {
    margin-bottom: 25px;
    position: relative;
    font-size: 38px;
  }

  .page-title::after {
    box-sizing: border-box;
    z-index: 1;
    content: "";
    width: 200px;
    height: 2px;
    background-color: #DDDDDD;
    position: absolute;
    bottom: -15px;
    left: 50%;
    margin-left: -100px;
  }
</style>

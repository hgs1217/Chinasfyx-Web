<template>
  <div class="slider">
    <ul class="main-ul">
      <li v-for="(slide, index) in slides" :key="index" class="slide-li">
        <img class="slide-img" :src="slide.img"/>
      </li>
    </ul>
    <div class="tp-arrow left-arrow"></div>
    <div class="tp-arrow right-arrow"></div>
    <div class="bullets-bar">
      <div v-for="(slide, index) in slides" :key="bullet-index" class="bullet"
           :style="{left: index*23 + 'px'}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "slider",
    data() {
      return {
        slides: []
      }
    },
    created() {
      this.$http.get('http://127.0.0.1:9527/data').then((data) => {
        // console.log(data.body);
        if (data.body.code === 0) {
          this.slides = data.body.body.slides
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: revicons;
    src: url("../assets/revicons.ttf")
  }

  .slider {
    height: 500px;
    max-height: 500px;
    margin: {
      top: 0;
      bottom: 0;
    }
  }
  .main-ul {
    overflow: hidden;
    height: 100%;
    width: 100%;
    max-height: none;
    padding: 0;
  }
  .slide-li {
    width: 100%;
    height: 100%;
    visibility: inherit;
    opacity: 1;
    background-color: rgba(255, 255, 255, 0);
    padding: 0;
  }
  .slide-img {
    background: {
      color: rgba(255, 255, 255, 0);
      repeat: no-repeat;
      size: 100% 100%;
      position: center center;
    }
    width: 100%;
    height: 100%;
    visibility: inherit;
    opacity: 1;
    z-index: 20;
  }
  .tp-arrow {
    cursor: pointer;
    background: rgba(0,0,0,0.5);
    width: 40px;
    height: 40px;
    position: absolute;
    z-index: 100;
    border-radius: 50%;
  }
  .tp-arrow:before {
    font: {
      family: "revicons";
      size: 20px;
    }
    color: rgb(255, 255, 255);
    display: block;
    line-height: 40px;
    text-align: center;
  }
  .left-arrow {
    top: 50%;
    left: 0;
    transform: matrix(1, 0, 0, 1, 30, -20);
  }
  .left-arrow:before {
    content: "\e82c";
    margin-left: -3px;
  }
  .right-arrow {
    top: 50%;
    left: 100%;
    transform: matrix(1, 0, 0, 1, -70, -20);
  }
  .right-arrow:before {
    content: "\e82d";
    margin-left: 3px;
  }
  .bullets-bar {
    position: absolute;
    width: 179px;
    height: 18px;
    left: 50%;
    transform: matrix(1, 0, 0, 1, -89, -48);
    z-index: 1000;
  }
  .bullet {
    position: absolute;
    width: 12px;
    height: 12px;
    left: 0;
    top: 0;
    background: rgba(153, 153, 153, 1);
    border: 3px solid rgba(255,255,255,0.9);
    border-radius: 50%;
    cursor: pointer;
    box: {
      sizing: content-box;
      shadow: 0 0 2px 1px rgba(130,130,130, 0.3);
    }
  }
  .bullet-selected {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 1);
  }
</style>

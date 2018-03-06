<template>
  <div class="slider">
    <div class="main-ul" @mouseenter="onEnter" @mouseleave="onLeave">
      <transition name="img-fade">
        <div v-for="(slide, index) in slides" :key="'slide'+index" class="slide-li"
             v-if="index === selectedIndex">
          <img class="slide-img" :src="slide.img"/>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="icons" v-if="enterSlider" @mouseenter="onEnter" >
        <div class="tp-arrow left-arrow" @click="onLeft"></div>
        <div class="tp-arrow right-arrow" @click="onRight"></div>
        <div class="bullets-bar">
          <div v-for="(slide, index) in slides" :key="'bullet'+index"
               :class="['bullet', index === selectedIndex ? 'bullet-selected' : '']"
               :style="{left: index*23 + 'px'}" @click="onSelect(index)"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "slider",
    data() {
      return {
        slides: [],
        selectedIndex: 0,
        enterSlider: false
      }
    },
    created() {
      this.$http.get('http://127.0.0.1:9527/data').then((data) => {
        // console.log(data.body);
        if (data.body.code === 0) {
          this.slides = data.body.body.slides
        }
      })
    },
    methods: {
      onSelect(index) {
        this.selectedIndex = index;
      },
      onLeft() {
        if (--this.selectedIndex < 0) this.selectedIndex += this.slides.length;
      },
      onRight() {
        if (++this.selectedIndex >= this.slides.length) this.selectedIndex -= this.slides.length;
      },
      onEnter() {
        this.enterSlider = true;
      },
      onLeave() {
        this.enterSlider = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  $slider-height: 500px;

  @font-face {
    font-family: revicons;
    src: url("../assets/revicons.ttf")
  }

  .slider {
    height: $slider-height;
    max-height: $slider-height;
    margin: {
      top: 128px;
      bottom: 0;
    }
  }
  .main-ul {
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  .slide-li {
    position: absolute;
    width: 100%;
    height: $slider-height;
    left: 0;
    top: 128px;
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
    top: 55%;
    left: 0;
    transform: matrix(1, 0, 0, 1, 30, -20);
  }
  .left-arrow:before {
    content: "\e82c";
    margin-left: -3px;
  }
  .right-arrow {
    top: 55%;
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

  .fade-enter-active , .fade-leave-active{
    transition: opacity 0.5s;
  }
  .img-fade-enter-active , .img-fade-leave-active{
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to, .img-fade-enter, .img-fade-leave-to {
    opacity: 0;
  }
</style>

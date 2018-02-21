<template>
  <div>
    <ul class="cont-ul">
      <li v-for="(item, index) in coaches" :key="index">
        <img :src="item.img" alt=""/>
        <div class="coach-name">
          <span class="coach-name-title">{{item.name}}</span>
          <span class="coach-position">{{item.position}}</span>
        </div>
        <div class="coach-desc">
          <p class="coach-desc-title">导师简介：</p>
          <p class="coach-excerpt" v-for="(ex, idx) in item.excerpt" :key="idx">{{ex}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CoachItem',
    data () {
      return {
        coaches: []
      }
    },
    created () {
      this.$http.get('http://127.0.0.1:9527/data').then((data) => {
        console.log(data.body)
        if (data.body.code === 0) {
          this.coaches = data.body.body.coaches
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .cont-ul .coach-name .coach-desc {
    width: 100%;
    text-align: center;
  }
  .coach-name-title {
    font: {
      weight: 700;
      size: 18px;
    }
    color: #B20000;
    line-height: 1.2;
  }
  .coach-desc-title {
    font: {
      weight: 700;
      size: 14px;
    }
  }
  .coach-position {
    color: #333;
    font-size: 14px;
  }
  .coach-excerpt {
    color: #666;
    line-height: 0.5;
    font-size: 14px;
  }
  li {
    float: left;
    width: 33.3%;
    list-style: none;
    text-align: center;
    box-sizing: border-box;
  }
  img {
    max-width: 80%;
    margin: 20px 0;
  }
</style>

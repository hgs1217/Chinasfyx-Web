<template>
  <div class="news-item">
    <web-wrapper :title="'新闻中心'" :subTitle="'News'"/>
    <div class="news-content">
      <div class="news-main">
        <div class="news-left" v-for="(item, index) in news" :key="'left'+index"
             v-if="index === 0">
          <div class="left-img-div">
            <img class="left-image" :src="item.img"/>
          </div>
          <a class="left-title" :href="item.href">
            {{item.title}}&nbsp;&nbsp;&nbsp;&nbsp;发表于：{{item.date}}
          </a>
        </div>
        <div class="news-right">
          <div class="right-item" v-for="(item, index) in news" :key="'news'+index">
            <div class="right-img-div">
              <img class="right-thumbnail" :src="item.img"/>
            </div>
            <div class="right-content">
              <div class="right-title">{{item.title}}</div>
              <div class="right-meta">发表于：{{item.date}}</div>
              <div class="right-excerpt">{{item.content}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="more">
        <div class="more-btn">更多新闻</div>
      </div>
    </div>
  </div>
</template>

<script>
  import WebWrapper from './WebWrapper'

  export default {
    name: "news-item",
    components: {
      WebWrapper
    },
    data () {
      return {
        news: []
      }
    },
    created () {
      this.$http.get('http://127.0.0.1:9527/data').then((data) => {
        // console.log(data.body);
        if (data.body.code === 0) {
          this.news = data.body.body.news
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .news-content {
    background: white;
    margin: 20px 50px;
  }
  .news-main {
    height: 100%;
    width: 100%;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
  }
  .news-left {
    width: 45%;
    height: 100%;
    margin: 0 20px;
  }
  .news-right {
    width: 55%;
    height: 100%;
    margin: 0 20px;
  }
  .left-img-div {
    height: 90%;
    width: 100%;
    text-align: center;
  }
  .left-image {
    max-width: 100%;
    height: 300px;
  }
  .left-title {
    width: 100%;
    height: 10%;
    color: #666;
    font-size: 15px;
    text: {
      align: center;
      decoration: none;
    }
    transition: all 1s;
  }
  .left-title:hover {
    color: #b20000;
  }

  .right-item {
    width: 100%;
    height: 50%;
    margin-bottom: 50px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
  }
  .right-img-div {
    height: 100%;
    width: 100px;
    margin-right: 15px;
  }
  .right-thumbnail {
    max-width: 100px;
    max-height: 100px;
    cursor: pointer;
  }
  .right-title {
    clear: none;
    color: #666;
    font: {
      size: 16px;
      weight: bold;
      family: "Microsoft YaHei", arial, sans-serif;
    }
    text-align: left;
    cursor: pointer;
    transition: all 1s;
  }
  .right-title:hover {
    color: #B20000;
  }
  .right-meta {
    margin: 5px 0 10px 0;
    font-size: 10px;
    opacity: 0.6;
    text-align: left;
  }
  .right-excerpt {
    color: #333;
    margin-bottom: 10px;
    text: {
      align: left;
      indent: 28px;
    }
    font: {
      size: 14px;
      family: "Microsoft YaHei", arial, sans-serif;
    }
  }

  .more {
    width: 100%;
    text-align: center;
  }
  .more-btn {
    background-color: #b20000;
    color: #fff;
    margin: auto;

    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.4;

    width: 60px;
    transition: all 1s;
  }
  .more-btn:hover {
    background-color: #000;
    color: #b20000;
    border-color: #000;
  }
</style>

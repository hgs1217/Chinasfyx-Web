<template>
  <div class="navigation-bar">
    <div class="content-bar">
      <router-link :to="'/'" title="上海体适能健身教练培训基地">
        <img src="http://www.shtsn.com/wp-content/themes/afcc/assets/images/logo.png"
             alt="上海体适能健身教练培训基地" class="logo-img" :style="logoTransform"/>
      </router-link>
      <div class="text-widget" :style="widgetTransform">
        <span :class="['tel-number', isTop ? '' : 'tel-number-collapse']" :style="numberTransform">
          400-878-0833&nbsp;&nbsp;&nbsp;&nbsp;021-54010911
        </span>
        <span class="tel-content" :style="contentTransform">中国私人健身教练行业真正的健康管理者</span>
      </div>
      <div class="header-form-wrap" :style="formWrapTransform">
        <form method="post" action="#">
          <div class="header-form">
            <input type="text" class="header-form-input" name="search" placeholder="证书查询"/>
            <button class="header-form-btn" type="submit" value="Search"></button>
          </div>
        </form>
      </div>
    </div>
    <ul class="link-bar" :style="linkTransform">
      <router-link v-for="(navi, index) in navis" :key="index" :to="navi.link"
                   :class="['link-title', index !== 0 ? 'left-border' : '']">
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
        ],
        isTop: true
      }
    },
    computed: {
      logoTransform () {
        return {
          maxHeight: this.isTop ? '70px': '40px'
        }
      },
      widgetTransform () {
        return {
          top: this.isTop ? '25px' : '10px'
        }
      },
      numberTransform () {
        return {
          fontSize: this.isTop ? '20px' : '16px'
        }
      },
      contentTransform () {
        return {
          fontSize: this.isTop ? '18px' : '14px'
        }
      },
      formWrapTransform () {
        return {
          top: this.isTop ? '22px' : '5px'
        }
      },
      linkTransform () {
        return {
          marginTop: this.isTop ? '' : '7px'
        }
      }
    },
    mounted () {
      window.onscroll = () => {
        this.isTop = (document.documentElement.scrollTop || document.body.scrollTop) < 100;
      }
    }
  }
</script>

<style lang="scss" scoped>
  $bar-margin: 20px;
  $title-interval: 30px;

  @font-face {
    font-family: Montserrat-bold;
    src: url("../assets/Montserrat-Bold.otf")
  }

  .navigation-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 0 15px 0;

    color: #fff;
    background-color: rgba(0,0,0,0.9);
    font: {
      size: 16px;
      family: "Microsoft YaHei", arial, sans-serif;
    }
  }

  .content-bar {
    text-align: left;
    position: relative;
    margin: 0 $bar-margin;
  }
  .logo-img {
    display: inline-block;
    max-height: 70px;
    padding-left: $title-interval;
    transition: all 0.2s ease-in-out 0s;
  }
  .text-widget {
    display: inline-block;
    position: absolute;
    top: 25px;
    line-height: 1.2;
    margin-left: 25px;
    transition: all 0.2s ease-in-out 0s;
  }
  .tel-number {
    position: relative;
    padding-left: 50px;
    font: {
      family: "Montserrat-bold";
      size: 20px;
    }
  }
  .tel-number:before {
    position: absolute;
    content: url("http://www.shtsn.com/wp-content/themes/afcc/assets/images/header-icon.png");
    left: 0;
    top: -5px;
  }
  .tel-number-collapse:before {
    content: url("http://www.shtsn.com/wp-content/themes/afcc/assets/images/header-icon-1.png");
  }
  .tel-content {
    position: relative;
    margin-left: 20px;
    font: {
      weight: bold;
      size: 18px;
    }
  }
  .header-form-wrap {
    position: absolute;
    right: 50px;
    top: 22px;
    min-width: 240px;
    transition: all 0.2s ease-in-out 0s;
  }
  .header-form-input {
    width: 100%;
    border: 0 none;
    border-radius: 20px;
    padding: 10px 15px;

    color: #666;
    font-size: 13px;
    line-height: 1.2;
  }
  .header-form-btn {
    background-color: transparent;
    border: 0 none;
    position: absolute;
    right: 0;
    top: 5px;
  }
  .header-form-btn:before {
    position: absolute;
    content: url("../assets/search.png");
  }

  .link-bar {
    width: 100%;
    padding-left: 0;
    display: block;
    margin: {
      left: $bar-margin;
      right: $bar-margin;
    }
  }
  .link-title {
    padding: 0 $title-interval;
    float: left;
    list-style-type: none;

    text-decoration: none;
    color: #fff;
    line-height: 1.2;
    font: {
      weight: bold;
      size: 15px;
    }
    transition: all 1s;
  }
  .link-title:hover {
    color: #b20000;
  }
  .left-border {
    border-left: 1px solid rgba(255, 255, 255, 0.3);
  }
</style>

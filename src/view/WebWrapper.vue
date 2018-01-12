<template>
  <div>
    <Header></Header>
    <div class="main-contain">
      <img src="../../static/img/slider-01de.jpg" class="img-contain">
      <div class="description-inner">
        <ul class="ul-slider">
          <li><a href="https://www.thekooples.com/en/men/best-sellers.html">SHOP WOMEN</a></li>
          <li>|</li>
          <li><a href="https://www.thekooples.com/en/men/best-sellers.html">SHOP MEN</a></li>
        </ul>
      </div>
    </div>
    <HomeNavigation></HomeNavigation>
    <HomeGallery></HomeGallery>
  </div>
</template>
<script>
  import Header from '../components/Header'
  import HomeNavigation from '../components/HomeNavigation'
  import HomeGallery from '../components/HomeGallery'
//  import VueResource from 'vue-resource'
//  import Vue from 'vue'
//  Vue.use(VueResource)
  export default {
    name: 'WebWrapper',
    components: {
      Header,
      HomeNavigation,
      HomeGallery
    },
    created () {
//      this.ff()
    },
    methods: {

      ff () {
        console.log('函数输出！')
      }
    }
  }
</script>

<style>
  /*@import "../assets/defaul.less";*/
  .main-contain{
    top:12rem;
    position: relative;
  }
  .description-inner{
    width: 100%;
    position: absolute;
    top: 52%;
    text-align: center;

  }

  li{
    font-size: 1.6rem;
    color: white;
    margin-top: 10px;
    letter-spacing: 1px;
    display: inline-block;
  }

  .ul-slider li {
    display: inline-block;
    margin: 0 10px;
  }
  .ul-slider a{
    color: white;
  }

  .ul-slider{
    /*position: absolute;*/
    /*top: 32rem;*/
    list-style-type: none;
    padding: 0;
  }
</style>

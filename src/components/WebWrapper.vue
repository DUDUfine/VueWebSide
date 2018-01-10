<template>
  <div>
    <Header></Header>
    <HomeNavigation></HomeNavigation>
    <HomeGallery></HomeGallery>
  </div>
</template>
<script>
  import Header from '../components/Header'
  import HomeNavigation from './HomeNavigation'
  import HomeGallery from './HomeGallery'
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
//      getData () {
//        this.$http.get('https://api.douban.com/v2/book/3884108').then(response => {
//          console.log(response.data)
//       }, response => {
//         console.log('error')
//       })
//    },
      ff () {
        console.log('函数输出！')
      }
    }
  }
</script>

<style>
</style>

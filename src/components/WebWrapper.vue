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
  export default {
    name: 'WebWrapper',
    components: {
      Header,
      HomeNavigation,
      HomeGallery
    }
  }
</script>
<style>
</style>

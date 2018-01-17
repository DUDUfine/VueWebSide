<template>
    <div id="storeContent">
      <Header></Header>
      <div class="store-nav">
        <home-navigation></home-navigation>
      </div>
      <div>
        <seller-flow></seller-flow>
      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
  import HomeNavigation from '../components/HomeNavigation'
  import SellerFlow from '../components/SellerFlow.vue'
  export default {
    components: {
      Header,
      HomeNavigation,
      SellerFlow
    }
  }
</script>

<style>
#storeContent a{
    color: #2c3e50;

}
  #header{
    overflow-y: scroll;
  }
</style>

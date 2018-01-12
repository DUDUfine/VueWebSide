<template>
    <div id="storeContent">
      <Header></Header>
      <div class="store-nav">
        <HomeNavigation></HomeNavigation>
      </div>
      <div>

      </div>
    </div>
</template>

<script>
  import Header from '../components/Header'
  import HomeNavigation from '../components/HomeNavigation'
  export default {
    components: {
      Header,
      HomeNavigation
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

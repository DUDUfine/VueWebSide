
<template>
	<div >
    <header id="header">
      <div class="alginCenter">
        <a class="logo-header"></a>
      </div>
      <div id="search">
        <label for="searchText" class="searchTitle">SEARCH</label>
        <input id="searchText" type="text"/>
      </div>
      <nav class="nav-menu">
        <ul><a>Log In</a></ul>
        <ul><a>Europe(EU)/€</a></ul>
        <ul><a>Contact</a></ul>
        <ul><a>Favourites</a></ul>
        <ul><a>My bag(0)</a></ul>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .logo-header{
    display: inline-block;
    background-image: url("../../static/img/tk.svg");
    background-repeat: no-repeat;
    width: 170px;
    height: 50px;
  }
  #header{
    padding-top: 30px;
    height: 110px;
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color:#fffffff7;
    position: fixed;
  }
  .searchTitle{
    font-size: 28px;
    color: #2c3e50;
  }
  #search{
    margin-left: 40px;
    display: inline;
  }
  .nav-menu{
    float: right;
    margin-right: 20px;
    position: absolute;
    right:2rem;
    top:8rem;

  }
  .nav-menu ul{
    display: inline-block;
  }

  .store-nav #header{
    overflow-y: scroll;
    height:100px;
  }

</style>

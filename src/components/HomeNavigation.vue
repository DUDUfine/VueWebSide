<template>

    <div class="slider-description-wrapper">
      <nav class="slider-menu">
        <ol>
          <li class="firstmenu"><router-link :to="{name: 'StoreWrapper'}">SALE</router-link></li>
          <li class="secondmenu"><a href="https://www.thekooples.com/en/women/best-sellers.html">WOMEN</a></li>
          <li class="secondmenu"><a href="https://www.thekooples.com/en/men/best-sellers.html">MEN</a></li>
          <li class="firstmenu"><a href="">WINTER COLLECTION</a></li>
          <li class="secondmenu"><a href="https://www.thekooples.com/en/women-sport/best-sellers.html">WOMEN</a></li>
          <li class="secondmenu"><a>MEN</a></li>
          <li class="secondmenu"><a>WOMEN SPORT</a></li>
          <li class="secondmenu"><a href="https://www.thekooples.com/en/men-sport/best-sellers.html">MEN SPORT</a></li>
          <li class="firstmenu"><a>HANDBAG COLLECTION</a></li>
          <li class="firstmenu"><a href="https://www.thekooples.com/en/women-pre-collection.html">MOONLIGHT CAPSULE COLLECTION</a></li>
          <li class="firstmenu"><a>PRE-SPRING 18</a></li>
          <li class="secondmenu"><a>WOMEN</a></li>
          <li class="secondmenu"><a>MEN</a></li>
          <li class="secondmenu"><a>STORES</a></li>
        </ol>
      </nav>
    </div>
</template>

<script>
  export default {
    name: 'HomeNavigation'
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/defaul.less";
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.slider-description-wrapper{
  position: absolute;
  width: 100%;
  top: 11rem;
  left:0;
  text-align: center;
}

  li{
    font-size: 1.6rem;
    color: white;
    margin-top: 10px;
    letter-spacing: 1px;
  }
a{
  font-size: 1.4rem;
  color: white;
  letter-spacing: 1px;
  text-decoration: none;
}

.slider-menu li{
  display: block;
  font-size: 1.3rem;
}

  .slider-menu{
    position: absolute;
    width: 200px;
    /*height: 100px;*/
    /*overflow-y: scroll;*/
    text-align: left;
    margin-top: 30px;
    padding-right: 3rem;
  }
  .firstmenu{
    font-weight: bold;
    margin-top: 20px;
  }
/*被引入StoreWrapper组件的样式*/
/*-----------start---------------*/
.store-nav .slider-menu{
  overflow-y: scroll;
  height: 450px;
}

.store-nav .slider-description-wrapper{
  position: fixed;
  top: 12rem;

}
/*-----------End---------------*/
</style>



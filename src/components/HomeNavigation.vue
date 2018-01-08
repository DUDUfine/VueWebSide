<template>
  <div class="main-contain">
    <!--<p>sdasd</p>-->
     <img src="../../static/img/slider-01de.jpg" class="img-contain">
    <div class="slider-description-wrapper">
      <nav class="slider-menu">
        <ol>
          <li class="firstmenu"><a>SALE</a></li>
          <li class="secondmenu"><a>WOMEN</a></li>
          <li class="secondmenu"><a>MEN</a></li>
          <li class="firstmenu"><a>WINTER COLLECTION</a></li>
          <li class="secondmenu"><a>WOMEN</a></li>
          <li class="secondmenu"><a>MEN</a></li>
          <li class="secondmenu"><a>WOMEN SPORT</a></li>
          <li class="secondmenu"><a>MEN SPORT</a></li>
          <li class="firstmenu"><a>HANDBAG COLLECTION</a></li>
          <li class="firstmenu"><a>MOONLIGHT CAPSULE COLLECTION</a></li>
          <li class="firstmenu"><a>PRE-SPRING 18</a></li>
          <li class="secondmenu"><a>WOMEN</a></li>
          <li class="secondmenu"><a>MEN</a></li>
          <li class="secondmenu"><a>STORES</a></li>
        </ol>
      </nav>
      <div class="description-inner">
        <ul class="ul-slider">
          <li><a href="https://www.thekooples.com/en/men/best-sellers.html">SHOP WOMEN</a></li>
          <li>|</li>
          <li><a href="https://www.thekooples.com/en/men/best-sellers.html">SHOP MEN</a></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeNavigation'
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-contain{
  position: relative;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.img-contain{
  width: 100%;
}
.slider-description-wrapper{
  position: absolute;
  width: 100%;
  top: 0;
  left:0;
  text-align: center;
}
.description-inner{

  align-items: center;
  margin-top: 27%;

}
  li{
    font-size: 1.6rem;
    color: white;
    margin-top: 10px;
    letter-spacing: 1px;
  }
a{
  font-size: 1.6rem;
  color: white;
  letter-spacing: 1px;
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
.slider-menu li{
  display: block;
  font-size: 1.3rem;
}

  .slider-menu{
    position: absolute;
    width: 200px;
    text-align: left;
    margin-top: 30px;
  }
  .firstmenu{
    font-weight: bold;
    margin-top: 20px;
  }
</style>


{
"role1": [
{
"per": "page11"
},
{
"per": "page12"
},
{
"per": "page13"
}
]
}

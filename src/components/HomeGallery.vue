<template>
    <div class="gellery">
      <div class="col-left">
        <div class="homepage-block">
          <img src="../../static/img/block-01.jpg">
        </div>
        <div class="homepage-block">
          <img src="../../static/img/block-02.jpg">
        </div>
        <div class="homepage-block">
          <img src="../../static/img/block-03.jpg">
        </div>
      </div>
      <div class="col-right">
        <div class="homepage-block">
            <img src="../../static/img/block-04.jpg">
        </div>
        <div class="col-2">
          <div class="col-1">
            <div class="homepage-block">
              <img src="../../static/img/block-06.gif">
            </div>
          </div>
          <div  class="col-1">
            <div class="homepage-block">
              <img src="../../static/img/block-06.gif">
            </div>
          </div>
        </div>
        <div class="homepage-block">
          <img src="../../static/img/block-07.jpg">
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)
  export default{
    getData: function () {
      this.$http.get("https://api.douban.com/v2/book/3884108")
    }
  }
</script>

<style >
  .gellery{
    margin: 20px ;
    white-space: nowrap;
    /*vertical-align: top;*/
  }
.col-left{
  width: 32%;
  /*height: 200px;*/
  /*background-color: #42b983;*/
  display: inline-block;
  margin-right: 10px;
  vertical-align:top;
}

.homepage-block{
  margin-bottom: 20px;
}
  .col-right{
    width: 67%;
    /*height: 200px;*/
    display: inline-block;
    vertical-align:top;
  }
  img{
    max-width: 100%;
  }

  .col-1{
    width: 50%;
    display: inline-block;
  }

</style>

<template>
    <div class="gellery" id="gellery">
      <div class="col-left">
        <div class="homepage-block" @mouseenter="visible()"  @mouseleave="dispaly()">
          <img src="../../static/img/block-01.jpg">
          <div class="homepage-inner" v-show="isShow" >
            <p>sdsadsa</p>
          </div>
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
//  import api from '../api'
//  import Vue from 'vue'
//  import VueResource from 'vue-resource'
//  Vue.use(VueResource)
  export default {
    data: {
      isShow: false
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$axios({
          methods: 'get',
          url: '/api/book/3884108'
        }).then(function (response) {
//          console.log('请求成功' + JSON.stringify(response.data.tags))
        }, function () {
          console.log('error')
        })
//        this.$http.get(api.getData()).then((response) => {
//          console.log(this.tags)
//        })
      },
      visible: function () {
        this.isShow = true
        console.log('开始')
      },
      display: function () {
        this.isShow = false
        console.log('结束')
      }

//      getData: function () {
//        this.$http.get('https://api.douban.com/v2/book/3884108').then(response => {
//          console.log(response.data)
//        }, response => {
//          console.log('error')
//        })
//      }
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
  position:relative
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
.homepage-inner{
  position: absolute;
  top: 0px;
  width: 90%;
  height: 90%;
  margin: 5% 5%;
  background-color: white;
  -moz-opacity:0.5;
  opacity: 0.8;
  /*visibility: hidden;*/
}
  /*.homepage-inner:hover{*/
    /*background-color: orange;*/
   /*visibility: visible;*/
  /*}*/
</style>

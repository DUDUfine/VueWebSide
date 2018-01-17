<template>
    <div class="gellery" id="gellery">
      <div class="col-left">
        <div class="homepage-block" @mouseenter="visible(0)"  @mouseleave="display(0)">
          <img src="../../static/img/block-01.jpg">
          <div class="homepage-inner" v-show="isShow[0]" id="pic-inner1">
            <div class="inner-content">
              <h2 class="innerfont"><a>PRE COLLECTION SUMMER 2018</a></h2>
              <h2 class="innerfont"><a>SHOP CHERRY LOVE BLACK SILK TOP WITH RUFFLES</a></h2>
            </div>
          </div>
        </div>
        <div class="homepage-block" @mouseenter="visible(1)"  @mouseleave="display(1)">
          <img src="../../static/img/block-02.jpg">
          <div class="homepage-inner" v-show="isShow[1]" id="pic-inner2">
           <div>
             <h2>PRE COLLECTION SUMMER 2018</h2>
             <a>SHOP CHERRY LOVE BLACK SILK TOP WITH RUFFLES</a>
           </div>
          </div>
        </div>
        <div class="homepage-block">
          <img src="../../static/img/block-03.jpg">
        </div>
      </div>


      <div class="col-right">
        <div class="homepage-block" @mouseenter="visible(3)"  @mouseleave="display(3)">
          <img src="../../static/img/block-04.jpg">
          <div class="homepage-inner" v-show="isShow[3]" id="pic-inner3">
            <p>sdsadsa</p>
          </div>
        </div>
        <div class="col-2">
          <div class="col-1">
            <div class="homepage-block">
              <img src="../../static/img/block-06.gif">
            </div>
          </div>
          <div  class="col-1">
            <div class="homepage-block" @mouseenter="visible(5)"  @mouseleave="display(5)">
              <img src="../../static/img/block-06.gif">
              <div class="homepage-inner" v-show="isShow[5]" id="pic-inner5">
                <p>sdsadsa</p>
              </div>
            </div>
          </div>
        </div>
        <div class="homepage-block" @mouseenter="visible(6)"  @mouseleave="display(6)">
          <img src="../../static/img/block-07.jpg">
          <div class="homepage-inner" v-show="isShow[6]" id="pic-inner6">
            <p>sdsadsa</p>
          </div>
        </div>
        <div id="der">

        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: [false, false, null, false, null, false, false]
      }
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
          console.log('请求成功' + JSON.stringify(response.data.tags))

          this.imgInfo = response.data.tags
        }, function () {
          console.log('error')
        })
      },
      visible: function (i) {
        this.$set(this.isShow, i, true)

        console.log('开始' + i)
      },
      display: function (i) {
        this.$set(this.isShow, i, false)
        console.log('结束' + i)
      }

    }
  }
</script>

<style >
  .gellery{
    margin: 20px ;
    white-space: nowrap;
    /*vertical-align: top;*/
    /*position: absolute;*/
    /*top: 72rem;*/
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

  /*.seperateLine{*/
    /*display: inline-block;*/
    /*color: #2c3e50;*/
    /*height: 3px;*/
    /*width: 90%;*/
  /*}*/

  .innerfont{
    display: block;
    font-family: "Conv_Montserrat-Bold";
    font-size: 25px;
    font-weight:bold;
    text-transform: uppercase;
  }
.inner-content{
  display: -webkit-flex; /* Safari */
  display: flex;
  align-self: center;
  justify-content: center;
}
</style>

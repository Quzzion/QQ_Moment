<template>
  <div class="banner">
    <!-- 用 v-for 渲染动态列表 -->
    <div class="container-banner-top">
          <div class="text">
              好友动态
          </div>
          <img  class="logo" :src="userInfo.data.avatar" alt="">
    </div>
    <div class="container-banner-bottom">
      <div class="left-image" @click="ToImage">
          <div class="img"></div>
          <div class="text">相册</div>
      </div>
      <div class="right-image" @click="ToMessage">
          <div class="img"></div>
          <div class="text">说说</div>
      </div>
    </div>

    <NewsList :userInfo ="userInfo" :newslists="newslists.data" />
  </div>
</template>

<script>
import NewsList from "../../components/NewsList/newsList.vue"
import request from "../../utils/request.js"
export default {
  name: "Home",
  components:{
    NewsList
  },
  data:function(){
    return{
      userInfo:{},
      newslists:[]
    }
  },
  async mounted(){
    await this.getUserInfo();
    await this.getNewslists();
  },
  methods:{
    ToMessage(){
      this.$router.push("/moment");
    },
    ToImage(){
      this.$router.push("/album");
    },
    async getUserInfo(){
       this.userInfo = await request("/api/account");
    },
    async getNewslists(){
      this.newslists = await request("/api/querynews");
    }
  }
};
</script>

<style scoped lang="scss">

    .banner{
      background-color: #fff;
      margin:0;
      padding: 0;
    }
    li{
  list-style: none;
}
  .container-banner-top{
    width: 375px;
    height: 215.43px;
    position: relative;
    background: url(../../assets/images/background.png) no-repeat center/contain;
    .text{
        font-size: 16px;
        position: absolute;
        top: 30px;
        left: 155px;
        color: #fff;
    }
    .logo{
        position: absolute;
        width: 60px;
        height: 60px;
        left: 30px;
        bottom: 30px;
        border-radius: 50%;
        // background: url(../../assets/images/logo1.png) no-repeat center/contain;
    }
  }
  .container-banner-bottom{
      width: 375px;
      height: 65px;
      box-sizing: border-box;
      padding:9.57px 20px 0;
      border-bottom: 1px solid #f2f2f2;
      display: flex;

      .left-image{
          cursor: pointer;
          margin-left: 61px;
          margin-right: 161px;
        .img{
        width: 26px;
        height: 21px;
        background: url(../../assets/images/image-right.png) no-repeat center/contain;
      }
      .text{
          font-size: 12px;
          margin-top: 10px;
      }
      }
      .right-image{
        cursor: pointer;
        .img{
        width: 26px;
        height: 21px;
        background: url(../../assets/images/image-left.png) no-repeat center/contain;
      }
      .text{
          font-size: 12px;
          margin-top: 10px;
      }
      }
      
  }
</style>
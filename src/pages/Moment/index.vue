<template>
  <div class="container">
    <div class="nav">
        <div class="goBack" @click="goBack"></div>
        <div class="title">说说</div>
    </div>
    <div class="banner" @click="creatMoment">
        <img :src="userInfo.data.avatar" alt="" class="avatar">
        <!-- <input type="text" placeholder="分享新鲜事"> -->
        <div class="input">分享新鲜事</div>
    </div>
    <NewsList :userInfo ="userInfo" :newslists="newslists.data" />
  </div>
</template>

<script>
import NewsList from "../../components/NewsList/newsList.vue"
import request from "../../utils/request.js"
export default {
  name: "Moment",
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
    creatMoment(){
      this.$router.push('/moment/creat');
    },
    goBack(){
      this.$router.go(-1);
    },
    async getUserInfo(){
       this.userInfo = await request("/api/account");
    },
    async getNewslists(){
      this.newslists = await request("/api/querymynews");
    }
  }
};
</script>

<style lang="scss" scoped>
.container{
  width: 375px;
}
  .nav{
    width:375px;
    height: 50px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 171px;
    border-bottom: #f1f1f1 solid 1px;
    .goBack{
      cursor: pointer;
        height: 21px;
        width: 11px;
        background: url(../../assets/images/back.png) center/contain no-repeat;
    }
    .title{
      font-size: 16px;
      color: #272727;
    }
  }
  .banner{
    width: 100%;
    box-sizing: border-box;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    .avatar{
      height: 40px;
      width: 40px;
      border-radius: 50%;
      // background: url(../../assets/images/logo1.png) center/contain no-repeat;
    }
    .input{
      width: 280px;
      height: 40px;
      background: #EEEEEE;
      border-radius: 100px;
      box-sizing: border-box;
      padding-left: 18px;
      text-align: left;
      line-height: 40px;
      font-size: 14px;
      color: #acacac;
      cursor: pointer;
    }
  }
</style>
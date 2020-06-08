<template>
  <div class="more">
    <div class="mask" v-if="moreVisible">
        <div class="container">
            <div class="downPull" @click="closeMore"></div>
            <div class="downPull-hidden" @click="hideMoment">
                <img src="../../assets/images/downPull-hidden.png" alt="">
                <span class="text">隐藏此条动态</span>
            </div>
            <div class="downPull-unsee" @click="hideUser">
                <img src="../../assets/images/downPull-unsee.png" alt="">
                <span class="text">不看她的动态</span>
            </div>
            <div class="cancel" @click="closeMore">
                取消
            </div>
        </div>
    </div>
    
    <div v-for="(news,index) in newslists" :key="index">
        <News :news="news" :userInfo="userInfo" :moreVisible.sync="moreVisible" :index = "index" v-if="news && !news.user.invisible" :NewsIndex.sync="NewsIndex"></News>
    </div>
    
  </div>
</template>

<script>
import News from './news.vue';
export default {
  name: "NewsList",
  props:['userInfo','newslists'],
  components:{
      News
  },
  data(){
      return{
          moreVisible:false,
          NewsIndex:0
      }
  },
  methods:{
      closeMore(){
          this.moreVisible = false;
      },
      hideMoment(){
          this.newslists[this.NewsIndex] = null;
          this.closeMore();
      },
      hideUser(){
          this.newslists.forEach(news => {
              if(news.user.nick === this.newslists[this.NewsIndex].user.nick){
                  news.user.invisible = true;
              }
          });
        this.closeMore();
      }
  }
};
</script>

<style lang="scss" scoped>
    .mask{
        z-index: 100;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.5);
        // display: none;
    }
    .container{
        width: 375px;
        height: 185px;
        padding: 15px 20px;
        box-sizing: border-box;
        border-radius: 15px  15px 0 0;
        background-color: #fff;
        text-align: left;
        position: fixed;
        bottom: 0;
        .downPull{
            cursor: pointer;
            height: 8.4px;
            width: 36px;
            margin:  auto;
            background: url(../../assets/images/Union.png) center/contain no-repeat;        
        }
        .downPull-hidden{
            cursor: pointer;
            display: flex;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 32px;
            img{
                width: 24px;
                height: 19px;
                margin-right: 12px;
            }
            .text{
                font-size: 14px;
            }
        }
        .downPull-unsee{
            cursor: pointer;
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            img{
                width: 24px;
                height: 19px;
                margin-right: 12px;
            }
            .text{
                font-size: 14px;
            }
        }
        .cancel{
            width: 100%;
            height: 40px;
            border-radius: 2px;
            background-color: #E9ECF1;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            cursor: pointer;
        }
    }
</style>
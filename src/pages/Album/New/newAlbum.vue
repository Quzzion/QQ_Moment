<template>
  <div class="container">
    <div class="nav">
      <div class="back" @click="back">取消</div>
      <div class="title">新建相册</div>
    </div>
    <input type="text" placeholder="添加相册名称" v-model="newAlbum.name">
    <div class="permission" @click="goVisible">
      <div class="left">权限</div>
      <div class="right">
        <div class="text" v-if="!newAlbum.private">公开</div>
        <div class="text" v-else>私密</div>
        <img src="../../../assets/images/icon.png" alt="">
      </div>
    </div>
    <div class="finish" @click="finish">完成创建</div>
  </div>
</template>

<script>
export default {
  name: "newAlbum",
  data(){
      return{
        newAlbum:{
          id:"123456789",
          cover:"",
          name:"",
          private:false,
          imgList:[]
        }
        
      }
  },
 async mounted(){
    this.newAlbum.private = this.$route.query.private;
  },
  methods:{
    goVisible(){
      this.$router.push("/newAlbum/visible");
    },
    finish(){
      if(this.newAlbum.name){
        this.$router.push({path:'/album',query:{newAlbum:this.newAlbum}});
      }else{
        this.$router.go(-1);
      }
      
    },
    back(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
    .container{
      height: 667px;
      width: 375px;
      background-color: #f5f5f5;
      .nav{
        height: 50px;
        width: 100%;
        background: url(../../../assets/images/nav.png);
        box-sizing: border-box;
        padding: 0 13px;
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #fff;
        .title{
          margin-left: 110px;
        }
        .back{
          cursor: pointer;
        }
      }
      input::-webkit-input-placeholder { 
        color: #c0c0c0; 
      } 
      input{
        width: 100%;
        height: 64px;
        border: none;
        outline: none;
        padding-left: 20px;
        font-size: 24px;
        // color: #e2dfdf;
      }
      .permission{
        cursor: pointer;
        width: 100%;
        height: 40px;
        margin: 0 auto;
        border-top: #f7f7f7 1px solid;
        background-color: #fff;
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        .right{
          display: flex;
          align-items: center;
          .text{
            margin-right: 12px;
            color: #969696;
          }
          img{
            height: 14px;
          }
        }
      }
      .finish{
        cursor: pointer;
        color: #fff;
        margin: 20px auto;
        width: 335px;
        height: 42px;
        background: #2CC4FD;
        border-radius: 6px;
        font-size: 16px;
        line-height: 42px;
      }
    }
</style>
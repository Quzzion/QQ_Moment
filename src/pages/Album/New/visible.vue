<template>
  <div class="container">
    <div class="nav">
      <div class="back" @click="back">取消</div>
      <div class="title">谁能看见</div>
      <div class="finish" @click="back">完成</div>
    </div>

    <div class="visible">
        <div class="item" @click="visibleChoose">
            <img src="../../../assets/images/ok.png" alt="" v-if="!Private">
            <div>所有人</div>
        </div>
        <div class="item" @click="visibleChoose">
            <img src="../../../assets/images/ok.png" alt="" v-if="Private">
            <div>私密</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newAlbum",
  data:function(){
      return{
          Private:true,
      }
  },
  methods:{
      back(){
          this.$router.push({path:"/newAlbum",query:{private:this.Private}});
      },
      visibleChoose(){
          this.Private = !this.Private;
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
          margin: 0 auto;
        }
        .back{
            cursor: pointer;
        }
        .finish{
            cursor: pointer;
        }
      }
      .visible{
          width: 100%;
          margin-top: 9px;
          background-color: #fff;
          position: relative;
         .item{
             cursor: pointer;
             height: 51px;
             display: flex;
             box-sizing: border-box;
             padding-left: 20px;
             align-items: center;
             font-size: 15px;
             img{
                 width: 20px;
                 margin-right: 10px;
             }
             div{
                position: absolute;
                left: 50px;
             }
         }
      }
    }
</style>
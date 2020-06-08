<template>
  <div class="container">
    <div class="nav">
        <div class="cancel" @click="back">取消</div>
        <div class="title">说说</div>
        <div class="post" :class="hoverObj" @click="Post">发表</div>
    </div>
    <div class="space"></div>
    <div class="area">
        <div class="hostInformation">
            <img :src="userInfo.data.avatar" alt="" class="avatar">
            <div class="nick">{{userInfo.data.nick}}</div>
        </div>
        <textarea cols="30" rows="10" placeholder="分享新鲜事......" v-model="message"></textarea>
        <div class="photoUpload">
            <input type="file">
            <img src="../../assets/images/photoUpload.png" alt="">
            <div>照片/视频</div>
        </div>
    </div>
    <div class="background">
    </div>
  </div>
</template>




<script>
import request from "../../utils/request.js";
export default {
  name: "Creat",
  data:function(){
    return{
      userInfo:{},
      message:"",
      index:-1
    }
  },
  async mounted(){
    await this.getUserInfo();
  },
  methods:{
    back(){
        this.$router.go(-1);
    },
    async getUserInfo(){
       this.userInfo = await request("/api/account");
    },
    Post(){
        if(this.message){
            this.message = "";
            alert("发表成功");
        }else{
            alert("请输入内容哦");
        }
        
    }
  },
  computed:{
      hoverObj(){
          return{
            base: this.message !== "",
          };
      },
  }
};
</script>

<style lang="scss" scoped>
    .container{
        width: 375px;
        background-color: #f5f5f5;
        .nav{
            background-color: #fff;
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding-left: 20px;
            padding-right: 12px;
            // border-bottom: #f5f5f5 solid 10px;
            .cancel{
                font-size: 16px;
                color: #272727;
                cursor: pointer;
            }
            .post{
                font-size: 14px;
                width: 50px;
                height: 22px;
                background:  rgba($color: #1DAEFF, $alpha: 0.2);
                border-radius: 100px;
                color: #fff;
                cursor: pointer;
            }
            .base{
                background-color: #1daeff;
                color: #fff;
            }
        }
        .space{
            width: 100%;
            height: 10px;
            background-color: #f5f5f5;
        }
        .area{
            background-color: #fff;
            width: 100%;
            height: 316px;
            box-sizing: border-box;
            padding-left: 20px;
            padding-top: 15px;
            .hostInformation{
                display: flex;
                height: 40px;
                align-items: center;
                img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin-right: 10px;
                }
                .nick{
                    font-size: 16px;
                }
            }
            textarea{
                margin-top: 20px;
                width: 100%;
                height: 120px;
                border: none;
                outline: none;
                font-size: 15px;
                color: #c9c9c9;
            }
            .photoUpload{
                // cursor: pointer;
                width: 100px;
                height: 100px;
                background: #EFEFEF;
                border-radius: 2px;
                position: relative;
                img{
                    width: 30px;
                    height: 25px;
                    margin-top: 26px;
                }
                div{
                    font-size: 12px;
                    color: #a3a3a3;
                    margin-top: 10px;
                }
                input{
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    position: absolute;
                }

            }
        }
        .background{
            height: 291px;
            width: 100%;
        }

        
    }
</style>
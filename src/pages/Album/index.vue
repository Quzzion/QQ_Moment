<template>
  <div>
    <div class="container">
      <div class="nav">
        <div class="back" @click="back"></div>
        <div class="title">
          <div class="main">相册</div>
          <div class="else" >{{albumInfo.data.length}}相册 {{photoNum}}照片</div>
        </div>
      </div>
      <div class="body">
        <div class="photoUpload" @click="goNewAlbum">
            <img src="../../assets/images/newAlbum.png" alt="">
            <div>新建相册</div>
        </div>
        <div class="image" v-for="album in albumInfo.data" :key="album.title" @click="clickCard(album)">
          <img :src="album.cover" alt="" v-if="album.cover">
          <img src="../../assets/images/noImage.jpg" alt="" v-else>
          <div class="name">{{album.name}}</div>
          <div class="number">
            <span class="photoNum">{{album.imgList.length}}张</span>
            <span v-if="album.private">私密</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request.js"
export default {
  name: "Album",
  data:function(){
    return{
      albumInfo:[],
      photoNum:0,
      newAlbum:{},
    }
  },
  async mounted(){
    await this.getAlbumInfo();
    this.photoNumber();
    this.newAlbum = this.$route.query.newAlbum;
    this.albumInfo.data.unshift(this.newAlbum);
  },
  methods:{
    goNewAlbum(){
      this.$router.push("/newAlbum");
    },
    clickCard(album){
      this.$router.push(`/album/${album.id}`);
    },
    photoNumber(){
      this.albumInfo.data.forEach(album => {
        if(album.imgList.length){
          this.photoNum += album.imgList.length;
        }
      });
    },
    back(){
      this.$router.go(-1);
    },
    async getAlbumInfo(){
       this.albumInfo = await request("/api/queryalbums");
    },
  },
};
</script>

<style lang="scss" scoped>
    .container{
      width: 375px;
      height: 667px;
      background-color: #fff;
      box-sizing: border-box;
      padding-left: 15px;
      padding-right: 15px;
      .nav{
        display: flex;
        width: 100%;
        height: 53px;
        box-sizing: border-box;
        padding-top: 15px;
        .back{
          background: url(../../assets/images/back.png) center/contain;
          width: 11px;
          height: 21px;
          cursor: pointer;
        }
        .title{
            margin-left: 131px;
            .main{
              font-size: 16px;
              color: #272727;
            }
            .else{
              font-size: 11px;
              color: #aaa;
              margin-top: 3px;
              
            }
        }
      }
      .body{
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .photoUpload{
                cursor: pointer;
                margin-right: 15px;
                width: 165px;
                height: 165px;
                background: #EFEFEF;
                border-radius: 6px;
                position: relative;
                img{
                    width: 40px;
                    height: 32px;
                    margin-top: 51px;
                }
                div{
                    font-size: 12px;
                    color: #a3a3a3;
                    margin-top: 10px;
                }
                input{
                    position: absolute;
                    left: 0;
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    position: absolute;
                }
      }
      .image{
        
        text-align: left;
        img{
          width: 165px;
          height: 165px;
          border-radius: 6px;
          margin-bottom: 10px;
          cursor: pointer;
        }
        .name{
          font-size: 14px;
          margin-bottom: 7px;
        }
        .number{
          font-size: 12px;
          color: #aaa;
          margin-bottom: 20px;
          .photoNum{
            margin-right: 8px;
          }
        }
      }
    }
  }
</style>
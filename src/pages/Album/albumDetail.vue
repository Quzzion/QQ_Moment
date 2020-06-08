<template>
<div>
    <div class="container">
        <div class="nav">
            <img :src="albumInfo.data.album.cover" alt="" class="background">
            <div class="mask">
                <div class="back" @click="back"></div>
                <div class="name">{{albumInfo.data.album.name}}</div>
                <div class="photoNum">{{albumInfo.data.album.imgList.length}}照片</div>
                <div class="like" v-if="!albumInfo.data.album.private" @click="goLike">
                    <img src="../../assets/images/likePeople.png" alt="">
                    <span>{{albumInfo.data.album.likedUserList.length}}</span>
                </div>
                <div class="comment like" v-if="!albumInfo.data.album.private" @click="goComment">
                    <img src="../../assets/images/comment1.png" alt="">
                    <span>{{albumInfo.data.album.commentList.length}}</span>
                </div>
            </div>
        </div>

        <div class="album">
            <div class="photo" v-for="album in albumInfo.data.album.imgList" :key="album.title">
                <div class="date">{{album.time}}</div>
                <img :src="album.url" alt="">
            </div>
        </div>
  </div>
    <div class="tabBar">
        <img src="../../assets/images/edit.png" alt="">
        <div>编辑相册</div>
    </div>
</div>
  
</template>

<script>
import request from "../../utils/request.js"
export default {
  name: "albumDetail",
  data:function(){
      return{
          albumInfo:{},
      }
  },
  async mounted(){
      await this.getAlbumInfo();
  },
  methods:{
    goLike(){
        this.$router.push({path:`/album/${this.$route.params.userId}/like`,
                           query:{albumInfo:this.albumInfo,
                                  userId:this.$route.params.userId
                            }
                           }
                        );
    },
    goComment(){
        this.$router.push({path:`/album/${this.$route.params.userId}/comment`,query:{albumInfo:this.albumInfo}});
    },
    async getAlbumInfo(){
       this.albumInfo = await request(`/api/getalbum?id=${this.$route.params.userId}`);
       console.log(this.albumInfo)
    },
      back(){
          this.$router.go(-1);
      }
  }
};
</script>

<style scoped lang="scss">
    .container{
        width: 375px;
        height: 617px;
        position: relative;
        overflow: auto;
        .nav{
            width: 100%;
            height: 186px;
            // background: url(../../assets/images/backImage.png) center/contain no-repeat;
            position: relative;
            .background{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
            .mask{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                background-color: rgba(255,255,255,0.8);
                .back{
                    cursor: pointer;
                    height: 21px;
                    width: 11px;
                    background: url(../../assets/images/back.png) center/contain;
                    position: absolute;
                    left: 15px;
                    top: 16px;
                }
                .name{
                    font-size: 24px;
                    margin-top: 50px;
                }
                .photoNum{
                    font-size: 11px;
                    color: #6d6d6d;
                    position: absolute;
                    top: 90px;
                    left: 169px;
                }
                .like{
                    cursor: pointer;
                    position: absolute;
                    top: 118px;
                    left: 70px;
                    height: 19px;
                    display: flex;
                    align-items: center;
                    img{
                        width: 20px;
                        height: 19px;
                        margin-right: 8px;
                    }
                    span{
                        font-size: 12px;
                    }
                }
                .comment{
                    left: 269px;
                }
            }
        }
        .album{
            box-sizing: border;
            padding-left: 20px;
            text-align: left;
            padding-top: 10px;
            .date{
                font-size: 16px;
                color: #272727;
                margin:15px 0 10px;
            }
            img{
                width: 109px;
                height: 109px;
            }
        }
        
    }
    .tabBar{
            width: 375px;
            height: 50px;
            border: 1px solid #ececec;
            cursor: pointer;

            background-color: #fff;
            img{
                width: 22px;
                margin-top: 5px;
            }
            div{
                font-size: 11px;
            }
        }
</style>
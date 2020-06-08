<template>
    <div class="news">
    <div class="newsList">
        <div class="newList-top">
            <div class="information">
                <img :src="news.user.avatar">
                <div class="text">
                  <div class="name">{{news.user.nick}}</div>
                  <div class="time">{{news.content.time}}</div>
                </div>
                
            </div>
            <div class="more" @click="openMore">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
        </div>
        <div class="message" v-if="news&& news.content.txt">
          {{news.content.txt}}
        </div>
        <div class="picture" v-if="news&& news.content.imgList">
            <img :src="news.content.imgList" alt="">
        </div>
        <div class="video-content" v-if="news&& news.content.video">
            <video :src="news.content.video.url" class="video" controls></video>
        </div>
        <div class="interactive">
            <div class="watchNum">
              浏览{{news.content.visitedNum}}次
            </div>
            <div class="LikeAndComment" >
                <img class="like"  src="../../assets/images/like1.png" alt="" @click="ClickLike" v-if="news.liked">
                <img class="like" src="../../assets/images/like.png" alt="" v-else @click="ClickLike">
                <img class="like" src="../../assets/images/comment.png" alt="" @click="focusInput">
                <!-- 处理img动态scr使用三元运算符是不行的，其实vue是将图片转换成base64的，所有我们最好的方式是用v-if: -->
                <!-- <img class="like" :src="news.liked ? '../assets/images/like1.png':'../assets/images/like.png'" alt=""> -->
                
            </div>
        </div>
        <div class="commonMessage"> 
          <div class="likedPeople">
            <div class="peopleName">
              <img src="../../assets/images/likePeople.png" alt="">
              {{likedTxt}}
            </div>
            <div class="commentMessage" v-for="comment in news.content.commentList" :key="comment.title" >
              <div class="userName">{{comment.userName}}</div>
              <div v-if="comment.feedUserName"> 
                  <span> </span>
                  <span>回复 </span>
                  <span>{{comment.feedUserName}}</span> 
              </div>
              <div class="commentTxt"> ：{{comment.txt}}</div>
            </div>
            <input class="commonInput" ref="input" type="text" placeholder="评论" v-model="Commenttxt" @keyup.enter="upload">
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "News",
  props:{
    news:Object,
    userInfo:Object,
    moreVisible:Boolean,
    index:Number,
    NewsIndex:Number
  },
  data(){
    return{
        Commenttxt:"",
        Comment:{
        userName:"",
        txt:""
      }
    }
    
  },
  computed:{

      likedTxt() {
      const likedList = (this.news && this.news.content.likedList) || [];
      const len = likedList.length || 0;
      return len > 1 ? `${likedList[0]}等${len}人觉得很赞` : likedList[0];
    }
  },
  methods:{
    openMore(){
      this.$emit("update:moreVisible",true);
      this.$emit("update:NewsIndex",this.index);
    },
    focusInput(){
      this.$refs.input.focus();
    },
    upload(){
      this.Comment.txt = this.Commenttxt;
      this.Comment.userName = this.userInfo.data.nick;
      this.news.content.commentList.push(this.Comment);
      this.Commenttxt = "";
    },
      ClickLike(){
      if(this.news.liked){
        this.news.liked = false;
        let host = this.news.content.likedList.indexOf(this.userInfo.data.nick);
        this.news.content.likedList.splice(host,1);
      }else{
        this.news.liked = true;
        this.news.content.likedList.unshift(this.userInfo.data.nick);
      }
    },
  }
};
</script>

<style scope lang="scss">

.news{
  background-color: #fff;
  margin-top: 10px;
}
li{
  list-style: none;
}
  .newsList{
    width: 375px;
    box-sizing: border-box;
    padding:15px 20px;
    .newList-top{
      margin-bottom: 10px;
      height: 45px;
      display: flex;
      justify-content: space-between;
      .information{
        display: flex;
        img{
          width: 40px;
          height: 40px;
          margin-right: 9px;
        }
        .text{
          .name{
          font-size: 14px;
          margin-bottom: 8px;
          }
          .time{
            font-size: 12px;
            color: #737373;

          }
        }
        
      }
      .more{
        cursor: pointer;
          ul{
            display: flex;
            li{
              height: 4px;
              width: 4px;
              border-radius: 50%;
              background-color: #c4c4c4;
              margin-left: 2px;
            }
          }
      }
    }
    .message{
      font-size: 15px;
      text-align: left;
    }
    .picture{
      margin-top: 10px;
      img{
        width: 100%;
      }
    }
    .video-content{
      margin-top: 10px;
      video{
        width: 100%;
      }
    }
    .interactive{
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: #f7f7f7 1px solid;
      .watchNum{
        color: #737373;
        font-size: 12px;
      }
      .LikeAndComment{
        img{
          width: 20px;
        }
        .like{
          margin-right: 28px;
          cursor: pointer;
        }
      }
    }
    .commonMessage{
      padding: 8px 0 15px;
      text-align: left;
      font-size: 14px;
      img{
        height: 16px;
        width: 16px;
      }
      .peopleName{
        font-size: 14px;
        color: #233268;
        margin-bottom: 8px;
      }
      .commentMessage{
        display: flex;
        margin-bottom: 10px;
        .userName{
          color: #233268;
        }
      }
    }
    input{
      width: 100%;
      height: 26px;
      background-color: #f5f5f5;
      border: none;
      border-radius: 2px;
      padding-left:13px;
      outline: none;
    }
  }
  .commentTxt{
    margin-bottom: 2px;
  }
</style>


<template>
    <div class="container">
        <div class="nav">
            <div class="back" @click="back">取消</div>
            <div class="title">赞</div>
        </div>
        <div class="banner">总赞量：{{albumInfo.data.album.likedUserList.length}}</div>
        <div class="isLike" v-if="!like" @click="Like">
            <img src="../../../assets/images/likePeople.png" alt="">
            <span>赞</span>
        </div>
        <div class="isLike" v-else @click="Like">
            <img src="../../../assets/images/likePeople1.png" alt="">
            <span>取消赞</span>
        </div>
        <div class="likeList" v-for="likedUSer in albumInfo.data.album.likedUserList" :key="likedUSer.index">
            <img :src="likedUSer.avatar" alt="" class="avatar">
            <span class="nick">{{likedUSer.nick}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"like",
    data(){
        return{
            albumInfo:{},
            like:false,
            userId:'123'
        }
    },
    mounted(){
        this.albumInfo = this.$route.query.albumInfo;
        this.userId = this.$route.query.userId;
    },
    methods:{
        back(){
            this.$router.push({path:`/album/${this.userId}`});
        },
        Like(){
            this.like = !this.like;
            if(this.like){
                this.albumInfo.data.album.likedUserList.unshift({
                    nick:"我",
                    avatar:"https://qgt-document.oss-cn-beijing.aliyuncs.com/P3-5-Vue/qzone/avatar2.jpg",
                });
            }else{
                this.albumInfo.data.album.likedUserList.shift();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        width: 375px;
        height: 667px;
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
            margin-left: 135px;
            }
            .back{
            cursor: pointer;
            }
        }
        .banner{
            height: 48px;
            width: 100%;
            box-sizing: border-box;
            padding: 15px 20px;
            text-align: left;
            color: #8f8f8f;
            font-size: 14px;
        }
        .isLike{
            cursor: pointer;
            width: 100%;
            height: 40px;
            background-color: #fff;
            box-sizing: border-box;
            padding-left: 21px;
            font-size: 14px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            img{
                width: 20px;
                margin-right: 12px;
            }
        }
        .likeList{
            width: 100%;
            height: 67px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            font-size: 14px;
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 12px;
            }
        }
    }
        
</style>
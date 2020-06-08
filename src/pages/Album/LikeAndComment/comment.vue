<template>
    <div class="container">
        <div class="nav">
            <div class="back" @click="back">取消</div>
            <div class="title">赞</div>
        </div>

        <div class="banner">
            <img src="../../../assets/images/likePeople.png" alt="">
            <span class="likeList">
                靖家小宝贝、小蘑菇、艾伦、小小弟 等10人觉得很赞
            </span>
        </div>

        <div class="commentList">
            <div class="top">
                <div class="left">
                <img src="../../../assets/images/logo1.png" alt="" class="avatar">
                <div class="timeAndNick">
                    <div class="nick">瞿智健</div>
                    <div class="time">2019/7/7</div>
                </div>
                </div>
                <div class="likeAndComment">
                    <img src="../../../assets/images/like.png" alt="" class="like">
                    <img src="../../../assets/images/comment.png" alt="" class="comment">
                </div>
            </div>
            <div class="commentContent">
                好好看
            </div>
        </div>
        
         <div class="commentList">
            <div class="top">
                <div class="left">
                <img src="../../../assets/images/logo1.png" alt="" class="avatar">
                <div class="timeAndNick">
                    <div class="nick">瞿智健</div>
                    <div class="time">2019/7/7</div>
                </div>
                </div>
                <div class="likeAndComment">
                    <img src="../../../assets/images/like.png" alt="" class="like">
                    <img src="../../../assets/images/comment.png" alt="" class="comment">
                </div>
            </div>
            <div class="commentContent">
                好好看
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"comment"
}
</script>

<style lang="scss" scoped>
     .container{
         width: 375px;
         height: 667px;
         box-sizing: border-box;
     }
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
            padding: 15px 15px 0;
            text-align: left;
            img{
                height: 15.2px;
                margin-right: 5px;
            }
            span{
                font-size: 14px;
                color: #233268;
            }
    }
    .commentList{
        padding: 20px 15px 0 20px;
        .top{
            display: flex;
            justify-content: space-between;
        }
        .left{
            display: flex;
        }
        .avatar{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 12px;
        }
        .nick{
            font-size: 14px;
        }
        .time{
            font-size:12px;
            color: #737373;
            margin-top: 5px;
        }
        .like{
            height: 20px;
            margin-right: 28px;
        }
        .comment{
            height: 20px;
        }
    }
    .commentContent{
        padding: 15px 20px 0 55px;
        text-align: left;
        font-size: 15px;
        color: #0c0c0c;
    }


</style>
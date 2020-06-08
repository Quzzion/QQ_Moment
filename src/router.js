// 0. 使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 1. 定义 (路由) 组件。
import Album from './pages/Album/index.vue';
import Home from './pages/Home/index.vue';
import Moment from './pages/Moment/index.vue';
import Layout from './Layout.vue';
import CreatMoment from './pages/Moment/creat.vue';
import AlbumDetail from './pages/Album/albumDetail.vue';
import NewAlbum from './pages/Album/New/newAlbum.vue';
import AlbumVisible from './pages/Album/New/visible.vue';
import AlbumLike from './pages/Album/LikeAndComment/like.vue';
import AlbumComment from './pages/Album/LikeAndComment/comment.vue';
// 2. 定义路由
const routes = [
  {
    path:'layout',
    component:Layout,
    alias: '/',
    children:[
      { path:"",component:Home},
      { path:"album",component:Album},
      { path:"moment",component:Moment},
      { path:"moment/creat",component:CreatMoment},
      { path:"album/:userId",component:AlbumDetail},
      { path:"album/:userId/like",component:AlbumLike},
      { path:"album/:userId/comment",component:AlbumComment},
      { path:"newAlbum",component:NewAlbum},
      { path:"newAlbum/visible",component:AlbumVisible},
    ]
  }
];

// 3. 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
});

// 4. 在 main.js 中创建和挂载根实例

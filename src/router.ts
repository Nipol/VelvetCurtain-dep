import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// import Home from './views/Home.vue';
// import About from './views/About.vue';

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home,
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: About,
//   },
//   // { path: '*', redirect: '/photos' }
// ];

import PhotosComponent from '@/views/Photos.vue';
import StaredComponent from '@/views/Stared.vue';
import UploadComponent from '@/views/Upload.vue';
import SettingComponent from '@/views/Setting.vue';

const routes = [
  {
    name: 'photos',
    path: '/photos',
    component: PhotosComponent,
  },
  {
    name: 'stared',
    path: '/stared',
    component: StaredComponent,
  },
  {
    name: 'upload',
    path: '/upload',
    component: UploadComponent,
  },
  {
    name: 'setting',
    path: '/setting',
    component: SettingComponent,
  },
  { path: '*', redirect: '/photos' },
];

export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
});

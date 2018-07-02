import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import photosComponent from '../components/Photos.vue';
import staredComponent from '../components/Stared.vue';
import uploadComponent from '../components/Upload.vue';
import settingComponent from '../components/Setting.vue';

const routes = [
	{
		name: 'photos',
		path: '/photos',
		component: photosComponent
	},
	{
		name: 'stared',
		path: '/stared',
		component: staredComponent
	},
	{
		name: 'upload',
		path: '/upload',
		component: uploadComponent
	},
	{
		name: 'setting',
		path: '/setting',
		component: settingComponent
	},
	{ path: '*', redirect: '/photos' }
];

export default new Router({
	mode: 'history',
	routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'exact-active'
});

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import albumComponent from '../components/Album.vue';
import uploadComponent from '../components/Upload.vue';
import settingComponent from '../components/Setting.vue';

const routes = [
	{
		name: 'album',
		path: '/album',
		component: albumComponent
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
	{ path: '*', redirect: '/album' }
];

export default new Router({ mode: 'history', routes });

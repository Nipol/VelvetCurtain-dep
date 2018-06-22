import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import albumComponent from '../components/albumComponent.vue';
import uploadComponent from '../components/uploadComponent.vue';
import settingComponent from '../components/settingComponent.vue';

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

export default new Router({ routes });

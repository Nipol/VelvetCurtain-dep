import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import indexComponent from '../components/indexComponent.vue';

const routes = [
	{
		name: 'index',
		path: '/',
		component: indexComponent
	},
	{ path: '*', redirect: '/counter' }
];

export default new Router({ routes });

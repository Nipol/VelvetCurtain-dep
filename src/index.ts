import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

import './assets/style.scss';
import 'normalize.css/normalize.css';

new Vue({
	store,
	router,
	render: (h) => h(App),
	el: 'app',
	components: {
		App
	}
});

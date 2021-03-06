'use strict';

import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router/index'
import store from './store/index';
import { sync } from 'vuex-router-sync'
import App from './pages/App.vue'

sync(store, router)

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})
Vue.use(VueSweetalert2);

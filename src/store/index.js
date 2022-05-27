'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import createLogger from 'vuex/dist/logger'
import usuarios from './store-usuarios'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		usuarios
	},
	strict: false,
	middlewares: debug ? [createLogger()] : []
})

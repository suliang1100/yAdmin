import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [createLogger()]
});
import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
        region: 'all_regions',
        regions: [],
        grid_count: 15,
        trends: []
    },
    getters: {
    },
    actions: {

    },
	mutations: {
	},
});

export default store;

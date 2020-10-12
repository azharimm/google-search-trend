import Vue from 'vue';
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
        region: 'all_regions',
        regions: [],
        grid_count: 15,
        trends: [],
        colors: ['yellow', 'red', 'green', 'blue']
    },
    getters: {
        region(state) {
            return state.region;
        },
        regions(state) {
            return state.regions;
        },
        gridCount(state) {
            return state.grid_count;
        },
        trends(state) {
            return state.trends;
        },
        colors(state) {
            return state.colors;
        }
    },
    actions: {
        async getRegions({commit}) {
            let response = await axios.get('https://cors-anywhere.azharimm.tk/?api_url=https://trends.google.com/trends/hottrends/visualize/internal/_static/307214494.426087741298950070/locale/en/locale.json');
            commit('SET_REGIONS', response.data);
        },
        setRegion({commit}, region) {
            commit('SET_REGION', region);
        },
        setGrid({commit}, gridCount) {
            commit('SET_GRID', gridCount);
        }
    },
	mutations: {
        SET_REGIONS(state, regions) {
            state.regions = regions;
        },
        SET_REGION(state, region) {
            state.region = region;
        },
        SET_GRID(state, gridCount) {
            state.grid_count = +gridCount;
        }
	},
});

export default store;

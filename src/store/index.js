import Vue from 'vue';
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
        region: 'argentina',
        regions: {
            "all_regions": "All Regions",
            "argentina": "Argentina",
            "australia": "Australia",
            "austria": "Austria",
            "belgium": "Belgium",
            "brazil": "Brazil",
            "canada": "Canada",
            "chile": "Chile",
            "colombia": "Colombia",
            "czech_republic": "Czech Republic",
            "denmark": "Denmark",
            "egypt": "Egypt",
            "finland": "Finland",
            "france": "France",
            "germany": "Germany",
            "greece": "Greece",
            "hong_kong": "Hong Kong",
            "hungary": "Hungary",
            "ireland": "Ireland",
            "india": "India",
            "indonesia": "Indonesia",
            "israel": "Israel",
            "italy": "Italy",
            "japan": "Japan",
            "kenya": "Kenya",
            "malaysia": "Malaysia",
            "mexico": "Mexico",
            "netherlands": "Netherlands",
            "new zealand": "New Zealand",
            "nigeria": "Nigeria",
            "norway": "Norway",
            "philippines": "Philippines",
            "poland": "Poland",
            "portugal": "Portugal",
            "romania": "Romania",
            "russia": "Russia",
            "saudi_arabia": "Saudi Arabia",
            "singapore": "Singapore",
            "south_africa": "South Africa",
            "south_korea": "South Korea",
            "sweden": "Sweden",
            "switzerland": "Switzerland",
            "taiwan": "Taiwan",
            "thailand": "Thailand",
            "turkey": "Turkey",
            "ukraine": "Ukraine",
            "united_kingdom": "United Kingdom",
            "united_states": "United States",
            "vietnam": "Vietnam"
        },
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
        async setRegion({commit, dispatch}, region) {
            commit('SET_REGION', region);
            await dispatch('fetchTrends', region);
        },
        setGrid({commit}, gridCount) {
            commit('SET_GRID', gridCount);
        },
        async fetchTrends({commit}, region = 'all_regions') {
            let response = await axios.get('https://cors-anywhere.azharimm.tk/?api_url=https://trends.google.com/trends/hottrends/visualize/internal/data');
            commit('SET_TREND', {trends: response.data, region});
        }
    },
	mutations: {
        SET_REGION(state, region) {
            state.region = region;
        },
        SET_GRID(state, gridCount) {
            state.grid_count = +gridCount;
        },
        SET_TREND(state, {trends, region}) {
            let trends_data = [];
            if(region == 'all_regions') {
                for(let key in state.regions) {
                    if(key != 'all_regions') {
                        trends_data = [...trends_data, ...trends[key]];
                    }
                }
            }else {
                trends_data = trends[region];
            }
            state.trends = trends_data;
        }
	},
});

export default store;

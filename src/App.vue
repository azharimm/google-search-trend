<template>
	<div id="app">
		<div :class="`grid-layout grid-${gridCount}`">
			<Grid v-for="i in gridCount" :key="i"/>
		</div>
		<Control />
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Grid from './components/Grid.vue';
import Control from './components/Control.vue';
export default {
	name: "App",
	components: {
		Grid,
		Control
	},
	mounted() {
		this.fetchTrends();
	},
	computed: {
		...mapGetters({
			'gridCount': 'gridCount'
		})
	},
	methods: {
		...mapActions({
			'fetchTrends': 'fetchTrends'
		})
	}
};
</script>

<style>
body {
	font-family: sans-serif;
	background-color: #fff;
	/*overflow: hidden!important;*/
}

.grid-layout {
	display: grid;
	grid-gap: 10px;
	grid-auto-flow: dense;
	padding: 10px;
}

.grid-15 {
	grid-template-columns: repeat(auto-fill, minmax(35vh, 1fr));
	grid-auto-rows: minmax(30.5vh, auto);
}

.grid-8 {
	grid-template-columns: repeat(auto-fill, minmax(40vh, 1fr));
	grid-auto-rows: minmax(46.5vh, auto);
}

.grid-4 {
	grid-template-columns: repeat(auto-fill, minmax(70vh, 1fr));
	grid-auto-rows: minmax(46.5vh, auto);
}

.grid-2 {
	grid-template-columns: repeat(auto-fill, minmax(640px, 1fr));
	grid-auto-rows: minmax(94vh, auto);
}

.grid-1 {
	grid-template-columns: repeat(auto-fill, minmax(100vh, 1fr));
	grid-auto-rows: minmax(94vh, auto);
}

.grid-item {
	padding: 1rem;
	font-size: 14px;
	font-weight: bold;
	text-transform: uppercase;
	color: #929796;
	border-radius: 5px;
}


.mt-grid-15 {
	margin-top: 13vh;
	font-size: 26px;
}

.mt-grid-8 {
	margin-top: 20vh;
	font-size: 28px;
}

.mt-grid-4 {
	margin-top: 20vh;
	font-size: 36px;
}

.mt-grid-2 {
	margin-top: 40vh;
	font-size: 48px;
}

.mt-grid-1 {
	margin-top: 40vh;
	font-size: 64px;
}

.ml-10 {
	margin-left: 10px;
}

.yellow {
	background: #fabb05;
}

.blue {
	background: #4285f4;
}

.red {
	background: #ea4335;
}

.green {
	background: #34a852;
}

.vue-typer {
  font-family: monospace;
}

.vue-typer .custom.char {
  color: white;
}

</style>

<template>
	<div :class="`grid-item ${color}`">
		<div :class="`text-white mt-grid-${gridCount}`">
			<vue-typer
				:text="trends"
				:repeat="Infinity"
				:shuffle="true"
				initial-action="typing"
				:pre-type-delay="70"
				:type-delay="70"
				:pre-erase-delay="2000"
				:erase-delay="250"
				erase-style="clear"
				:erase-on-complete="false"
				caret-animation="smooth"
				@typed='onTyped'
			></vue-typer>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			color: ''
		}
	},
	mounted() {
		const random = Math.floor(Math.random() * this.colors.length);
		this.color =  this.colors[random];
	},
	computed: {
		...mapGetters({
			'gridCount': 'gridCount',
			'colors': 'colors',
			'trends': 'trends'
		}),
	},
	methods: {
		onTyped() {
			const random = Math.floor(Math.random() * this.colors.length);
			this.color = this.colors[random];
		}
	}
}
</script>
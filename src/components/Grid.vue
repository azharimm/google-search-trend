<template>
	<div class="grid-item" style="background: #fabb05">
		<div class="text-white mt-grid-15">
			<vue-typer
				:text="[
					'Arya Stark',
					'Jon Snow Know',
					'Daenerys Targaryen',
					'Melisandre',
					'Tyrion Lannister',
				]"
				:repeat="1"
				:shuffle="true"
				initial-action="typing"
				:pre-type-delay="70"
				:type-delay="70"
				:pre-erase-delay="2000"
				:erase-delay="250"
				erase-style="clear"
				:erase-on-complete="false"
				caret-animation="smooth"
			></vue-typer>
		</div>
	</div>
</template>
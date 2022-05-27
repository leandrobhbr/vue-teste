<template>
	<div class="container">
		<!-- Header -->
		<app-header></app-header>
		<!-- Main content -->
		<div role="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/babel">
	import appHeader from '../components/Header.vue'
	import appNav from '../components/Nav.vue'
	import popover from '../components/Popover.vue'

	export default {
		components: {
			appHeader,
			appNav,
			popover
		}
	}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>

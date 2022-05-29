<template>
<div>
	<!-- Header -->
	<app-header></app-header>
	<div class="container">
		<!-- Main content -->
		<div role="main">
			<router-view></router-view>
		</div>
	</div>
</div>
</template>

<script type="text/babel">
	import appHeader from '../components/Header.vue'

	export default {
		components: {
			appHeader
		}
	}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>

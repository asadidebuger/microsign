<template>
<b-overlay id="global-overlay" :show="loading" spinner-type="grow">
	<div id="app-container" v-if="initialized" :class="menuType">
		<micro-top-nav />
		<micro-sidebar />
		<main>
			<div v-if="showNav" class="container-fluid">
				<b-row >
					<b-colxx xxs="12">
						<breadcrumb/>
						<div class="separator mb-1"></div>
					</b-colxx>
				</b-row>
			</div>
			<default-layout />
		</main>
		<micro-footer/>
	</div>
</b-overlay>
</template>


<script>
    import DefaultLayout from '~/layouts/default.vue';
    import {mapGetters,mapMutations} from "vuex";
    export default {
			// name: 'dashboard',
			// props: ['nav'],
			data() {
				return {
					// mode:'view',
					// meta_loaded:false,
					// meta:null
					// showNav: true
				}
			},
			mounted() {
				this.initial();
			},
			components: {
				DefaultLayout,
			},
			methods:{
				...mapMutations({initial:"initial"})
			},
			computed: {
				...mapGetters({menuType: 'menu/menuType',showNav:'layout/showNav',initialized:"initialized", initializing:"initializing",loading:'layout/loading'}),

			},
			watch:{
				initializing(v){
					// $nuxt.$loading=true;
				}
			}
		};
</script>
<style>
#global-overlay >.b-overlay{
	position: fixed !important;
	z-index: 1040 !important;
	top: 0 !important;bottom: 0 !important; right: 0 !important; left: 0 !important;
}
</style>

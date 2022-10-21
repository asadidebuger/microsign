
export default {
	state:()=>({
		showNav:true,
		heading:null,
		model:null,
		pageTitle:'',
		loading:false,
		// isOffline:true,
		// backgroundImage:null,
	}),
	getters: {
		showNav:state =>state.showNav,
		isOffline:state =>$nuxt.isOffline,
		heading:state=>state.heading,
		model:state=>state.model,
		loading:state=>state.loading,
		pageTitle:state=>state.pageTitle,
		backgroundImage:state=>{return `bkg-${Math.floor(Math.random() * 3 + 1)}.jpg`},
	},
	mutations: {
		setPageTitle(state, pageTitle) {
			state.pageTitle = pageTitle
		},
		setShowNav(state, payload) {
			state.showNav = payload
		},
		setHeading(state, heading) {
			state.heading = heading
		},
		setLoading(state, loading) {
			state.loading = loading
		},
		setModel(state, model) {
			$nuxt.$route.params.model=model;
			state.model = model
		},
	},
	actions: {
		showNavBar({ commit }) {
			commit('setShowNav',true);
		},
		hideNavBar({ commit }) {
			commit('setShowNav',false);
		},
		setHeading({ commit },heading) {
			commit('setHeading',heading);
		},
		setLoading({ commit },loading) {
			commit('setLoading',loading);
		},
		setModel({ commit },model) {
			commit('setModel',model);
		},
		setPageTitle({ commit },title) {
			commit('setPageTitle',title);
		}
	}
}

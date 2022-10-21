// import {api} from "~/utils";
// import _ from 'lodash';
const state = () => ( {
    initialized:false,
    initializing:false,

    // locales: ['fa', 'en'],
    // locale:localStorage.getItem('currentLanguage') || 'fa'
  })
const getters={
    initialized:state=>state.initialized,
    initializing:state=>state.initializing,
}
const mutations = {
    async initial(state, payload) {
        if (state.initialized||state.initializing)return;
        state.initializing=true;

        $nuxt.$store.commit('setInitialized',true);
    },
    setInitialized(state, initialized) {
        state.initialized=initialized
        state.initializing=false;
    },
    changeLang(state, locale) {
        $nuxt.$i18n.setLocale(locale.code||locale);
        localStorage.setItem('locale', locale.code||locale);
    },
  };

const actions= {
    initial({commit}, payload) {
        commit('initial', payload)
    },
    setLang({commit}, payload) {
        // console.log(payload);
        commit('changeLang', payload)
    },
    setInitialized(context, initialized) {
        context.commit('setInitialized', initialized);
    }
}
export {
    state,
    getters,
    mutations,
    actions,

}

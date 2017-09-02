import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const mutations = {
	sidebarNavMenuActive( state, item ) {
		state.sidebar.navMenuActive = item.navMenuActive
	}
};

const actions = {
	setSidebarNavMenuActive (dis, item) {
		dis.commit('sidebarNavMenuActive',item )
	}
};

const state = {
	sidebar: {
		navMenuActive: '1-1-2'
	}
};

export default new Vuex.Store({
	state,
  actions,
  mutations
})
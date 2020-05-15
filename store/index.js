import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		color: null
	},
	mutations: {
		switchModal(state, color) {
			if(color) {
				uni.hideTabBar()
			} else {
				uni.showTabBar()
				uni.navigateTo({
					url: '/pages/mineWarning/index'
				})
			}
			state.color = color
		}
	}
})

export default store;
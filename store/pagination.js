export const state = () => ({
	pages: 0,
	current: 1,
	perpage: 10
});

export const mutations = {
	setCurrent(state, value) {
		state.current = value;
	},
	setPages(state, value) {
		state.pages = value;
	}
};

export const actions = {
	setPages({ commit }, value) {
		commit('setPages', value);
	},
	setCurrent({ commit }, value) {
		commit('setCurrent', value);
	}
};

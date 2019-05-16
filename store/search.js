// import { orderBy } from 'lodash';

export const state = () => ({
	results: {
		items: []
	},
	searchterm: ''
});

export const mutations = {
	setResults(state, results) {
		state.results = results;
	},
	setSearchterm(state, value) {
		state.searchterm = value;
	}
};
export const getters = {
	totalJobs: (state) => {
		if (state.results.items) {
			return state.results.items.length;
		} else {
			return 0;
		}
	}
};

export const actions = {
	async fetchResults({ commit, state }) {
		console.log('is searching now for', state.searchterm);
		const results = await this.$axios.$get(`/search/repositories?q=${state.searchterm}`);
		commit('setResults', results);
	},
	setSearchterm({ commit }, value) {
		commit('setSearchterm', value);
	}
};

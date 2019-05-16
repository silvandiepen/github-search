// import { orderBy } from 'lodash';

export const state = () => ({
	results: {
		items: []
	},
	searching: false,
	searchterm: ''
});

export const mutations = {
	setResults(state, results) {
		state.results = results;
	},
	setSearchterm(state, value) {
		state.searchterm = value;
	},
	isSearching(state, value) {
		state.searching = value;
	},
	resetState(state) {
		state.searching = false;
		state.results.items = [];
		state.results.searchterm = '';
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
		commit('isSearching', true);
		if (state.searchterm.length === 0) {
			commit('resetState');
		} else {
			const results = await this.$axios.$get(`/search/users?q=${state.searchterm}`).then((response) => {
				console.log(response);
				response.items.forEach((user) => {
					const starred = this.$axios.$get(
						`/search/users/${
							user.login
						}/starred?client_id=cc0298bd4b92638986c6&client_secret=5b9d616561205d2152d61f1197cda1ebb6125510`
					);
					user.starred = starred;
				});
				return response;
			});
			commit('setResults', results);
			commit('isSearching', false);
		}
	},
	setSearchterm({ commit }, value) {
		commit('setSearchterm', value);
	},
	isSearching({ commit }, value) {
		commit('isSearching', value);
	}
};

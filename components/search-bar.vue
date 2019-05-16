<template>
	<div class="search-bar">
		<div class="search-bar__element">
			<input v-model="searchTerm" placeholder="Search GitHub" @input="searchForResults" />
		</div>
	</div>
</template>

<script>
import { debounce } from 'lodash';
export default {
	computed: {
		searchTerm: {
			get() {
				return this.$store.state.search.searchTerm;
			},
			set(value) {
				this.$store.commit('search/setSearchterm', value);
			}
		}
	},
	methods: {
		searchForResults: debounce(function() {
			this.$store.dispatch('search/fetchResults');
		}, 500)
	}
};
</script>

<style lang="scss" scoped>
@import '~tools';

.search-bar {
	width: 100%;
	&__element {
		width: 100%;
		border-bottom: 2px solid color(Blue);
		border-radius: 2px;
		box-shadow: 0 0.25rem grid(1) 0 color(Black, 0.15);
		input {
			width: 100%;
			border: none;
			font-size: 20px;
			padding: 1rem 2rem;
			&:focus {
				outline: none;
				border-color: color(Blue);
			}
			&::placeholder {
				opacity: 0.25;
			}
		}
	}
}
</style>

<template>
	<div class="search-bar">
		<div class="search-bar__element">
			<input v-model="searchTerm" placeholder="Search for GitHub Users" @input="searchForResults" />
			<span class="search-bar__icon"> </span>
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
		position: relative;
		width: 100%;
		box-shadow: 0 0.25rem grid(1) 0 color(Black, 0.15);
		border-bottom: 2px solid color(Blue);
		border-radius: 2rem;
		overflow: hidden;
		input {
			width: 100%;
			border: none;
			font-size: 20px;
			padding: 1rem 2rem;
			&:focus {
				border-color: color(Blue);
				outline: none;
			}
			&::placeholder {
				opacity: 0.25;
			}
		}
	}
	&__icon {
		position: absolute;
		top: 50%;
		right: 1.5rem;
		display: block;
		width: 1rem;
		height: 1rem;
		border: 2px solid color(Black);
		border-radius: 50%;
		transform: translateY(-50%) rotate(-45deg);
		&::before {
			content: '';
			position: absolute;
			top: 100%;
			left: 50%;
			display: block;
			width: 2px;
			height: 0.5rem;
			background-color: color(Black);
			transform: translateX(-50%);
		}
	}
}
</style>

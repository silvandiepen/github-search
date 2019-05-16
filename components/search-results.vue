<template>
	<div class="search-results">
		<!-- <div class="search-results__bar">
			<span class="search-results__total">total: {{ totalResults }}</span>
			<Pagination></Pagination>
		</div> -->
		<ul class="search-results__list">
			<li v-for="(item, index) in searchResults.items" :key="index" class="search-results__item">
				<h4>{{ item.full_name }}</h4>
				<p>{{ item.description }}</p>
			</li>
		</ul>
		<div class="search-results__bar">
			<span class="search-results__total">total: {{ totalResults }}</span>
			<Pagination></Pagination>
		</div>
	</div>
</template>

<script>
import Pagination from '~/components/pagination.vue';
export default {
	components: {
		Pagination
	},
	computed: {
		searchTerm() {
			return this.$store.state.search.searchterm;
		},
		totalResults() {
			return this.$store.getters['search/totalResults'];
		},
		searchResults() {
			return this.$store.state.search.results;
		}
	}
};
</script>

<style lang="scss">
@import '~tools';

.search-results {
	width: 100%;
	&__list {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	&__item {
		padding: 2rem;
		background-color: color(White);
		width: 100%;
		& + & {
			margin-top: 1rem;
		}
		h4 {
			font-size: 1.25rem;
		}
	}
	&__bar {
		display: flex;
	}
}
</style>

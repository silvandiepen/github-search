<template>
	<div class="search-results">
		<ul class="search-results__list">
			<li v-for="(item, index) in searchResults" :key="index" class="search-results__item" @click="goToItem(item)">
				<div class="search-results__info">
					<img class="search-results__avatar" :src="item.avatar_url" :alt="item.login" />
					<h4 class="search-results__name">
						{{ item.login }}
					</h4>
					<div class="search-results__details"></div>
				</div>
				<div class="search-results__buttons">
					<a class="button search-results__link search-results__link--repository" :href="item.html_url">
						<span class="button__text">View User</span>
					</a>
				</div>
			</li>
		</ul>
		<div v-if="isSearching" class="search-results__loader">
			<ResultLoader></ResultLoader>
		</div>
		<div v-if="totalResults" class="search-results__bar">
			<span class="search-results__total"
				><span>total:</span>
				<strong>{{ totalResults }}</strong>
			</span>
			<Pagination></Pagination>
		</div>
	</div>
</template>

<script>
import Pagination from '~/components/pagination.vue';
import ResultLoader from '~/components/result-loader.vue';
export default {
	components: {
		Pagination,
		ResultLoader
	},
	computed: {
		searchTerm() {
			return this.$store.state.search.searchterm;
		},
		totalResults() {
			return this.$store.state.search.results.items.length;
		},
		searchResults() {
			return this.$store.state.search.results.items.slice(
				(this.perPage - 1) * this.currentPage,
				(this.perPage - 1) * this.currentPage + this.perPage
			);
		},
		currentPage() {
			return this.$store.state.pagination.current;
		},
		perPage() {
			return this.$store.state.pagination.perpage;
		},
		isSearching() {
			return this.$store.state.search.searching;
		}
	},
	watch: {
		totalResults: function() {
			this.$store.dispatch('pagination/setPages', Math.ceil(this.totalResults / this.perPage));
		}
	},
	methods: {
		goToItem(item) {
			window.location = item.html_url;
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
		position: relative;
		width: 100%;
		box-shadow: 0 0 2rem 0 color(Black, 0.1);
		background-color: color(White);
		transition: box-shadow $base-transition $base-cubic-bezier;
		cursor: pointer;
		padding: 2rem;
		& + & {
			margin-top: 2rem;
		}
		h4 {
			font-size: 1.25rem;
		}
		&:hover {
			box-shadow: 0 0 2rem 0 color(Black, 0.25);
		}
	}
	&__bar {
		display: flex;
		padding: 2rem 0;
		justify-content: space-between;
	}
	&__info {
		display: flex;
	}
	&__avatar {
		width: calc(#{grid(0.75)} + 2.5rem);
		height: calc(#{grid(0.75)} + 2.5rem);
		border-radius: 50%;
	}
	&__name {
		margin: 0;
		padding-left: calc(#{grid(0.375)} + 1.25rem);
		line-height: calc(#{grid(0.75)} + 2.5rem);
	}
	&__link {
		&--repository {
			background-color: color(Skyblue);
			&::before {
				background-color: color(SkyblueDark);
			}
		}
		&--info {
			background-color: color(Dark);
			&::before {
				background-color: color(PurpleDark);
			}
		}
	}
	&__buttons {
		position: absolute;
		top: 100%;
		right: 1rem;
		display: flex;
		transform: translateY(-50%);
	}
	&__total {
		line-height: 2rem;
	}
}
</style>

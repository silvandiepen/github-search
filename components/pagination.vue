<template>
	<div v-if="totalResults > perPage" class="pagination">
		<ul class="pagination__list">
			<li
				v-for="i in totalPages"
				:key="i"
				class="pagination__item"
				:class="[currentPage === i ? 'pagination__item--active' : '']"
			>
				<button class="pagination__button" @click="setCurrent(i)">
					{{ i }}
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		totalResults() {
			return this.$store.state.search.results.items.length;
		},
		totalPages() {
			return this.$store.state.pagination.pages;
		},
		perPage() {
			return this.$store.state.pagination.perpage;
		},
		currentPage() {
			return this.$store.state.pagination.current;
		}
	},
	methods: {
		setCurrent(page) {
			this.$store.dispatch('pagination/setCurrent', page);
		}
	}
};
</script>

<style lang="scss">
@import '~tools';
.pagination {
	&__list {
		padding: 0 1rem;
	}
	&__item {
		& + & {
			margin-left: 0.5rem;
		}
		&--active button {
			background-color: color(Dark);
			color: color(White);
		}
	}
	&__button {
		min-width: 2rem;
		box-shadow: none;
		border: none;

		border-radius: 0px;
		background-color: white;
		line-height: 2rem;
		text-align: center;
		padding: 0 0.25rem;
		&:focus {
			box-shadow: 0 0 0.25rem 0 color(Skyblue);
			outline: none;
		}
	}
}
</style>

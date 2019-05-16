<template>
	<main class="page page--home">
		<section class="intro" :class="[results.length > 0 ? 'intro--has-results' : 'intro--no-results']">
			<div class="row center">
				<div class="column small-full medium-two-third intro__column">
					<SearchBar />
				</div>
			</div>
		</section>
		<section class="results">
			<div class="row center">
				<div class="column small-full medium-two-third results__column">
					<SearchResults />
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import SearchBar from '~/components/search-bar.vue';
import SearchResults from '~/components/search-results.vue';
export default {
	components: {
		SearchBar,
		SearchResults
	},
	computed: {
		results() {
			return this.$store.state.search.results.items;
		}
	}
};
</script>

<style lang="scss">
@import '~tools';

.page {
	// general page styles
	&--home {
		// specific home styles
	}
}

.intro {
	background-color: color(Blue);
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	&--has-results {
	}
	&__column {
		border: 1px solid red;
		padding: grid(2);
	}
}
.results {
	background-color: color(White);
	background-image: linear-gradient(-90deg, color(Black, 0.1), color(Black, 0));
	padding: grid(3);
	&__column {
		margin-top: calc(#{-grid(3)} - 2rem);
	}
	&.has-results {
		border: 2px solid red;
	}
}
</style>

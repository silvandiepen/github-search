<template>
	<div class="pagination">
		<ul class="pagination__list">
			<li v-for="i in 20" :key="i" class="pagination__item">
				<button class="pagination__button">
					{{ i }}
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.pagination {
	&__list {
	}
	&__item {
		& + & {
			margin-left: 0.5rem;
		}
	}
	&__button {
		border: 1px solid color(Black, 0.1);
		box-shadow: none;
		background-color: white;

		border-radius: 0px;
		line-height: 2rem;
		min-width: 2rem;
		padding: 0 0.25rem;
		text-align: center;
	}
}
</style>

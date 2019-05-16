<template>
	<header id="header" class="header">
		<h3 class="sub"><strong>GitHub</strong><span>Search</span>		</h3>
	</header>
</template>

<script>
import project from '~/package.json';
export default {
	data() {
		return {
			projectName: project.name
		};
	}
};
</script>

<style lang="scss">
@import '~tools';

.header {
	// Header styles
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	background-color: color(Dark);
	text-align: left;
	padding: 1rem;
	h3 {
		color: white;
		color: color(White, 0.5);
		font-weight: normal;
		font-size: 20px;
		strong {
			color: color(White);
		}
	}
}
</style>

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
	text-align: left;
	background-color: color(Dark);
	padding: 1rem;
	h3 {
		font-size: 20px;
		color: white;
		font-weight: normal;
		color: color(White, 0.5);
		strong {
			color: color(White);
		}
	}
}
</style>

<template>
	<div class="loader">
		<div class="loader__dot"></div>
		<div class="loader__dot"></div>
		<div class="loader__dot"></div>
		<div class="loader__dot"></div>
		<div class="loader__dot"></div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~tools';
.loader {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: grid(2);
	&__dot {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: color(Dark);
		& + & {
			margin-left: 2rem;
		}
		@for $i from 1 through 5 {
			&:nth-child(#{$i}) {
				animation: moveDot 1s calc(#{$i} * 0.1s) ease-in-out infinite;
			}
		}
	}
}
@keyframes moveDot {
	0% {
		transform: translateY(0);
	}
	33% {
		transform: translateY(-3rem);
	}
	66% {
		transform: translateY(3rem);
	}
	0% {
		transform: translateY(0);
	}
}
</style>

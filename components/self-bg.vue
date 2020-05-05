<template>
	<image class="self_bg" :src="src"></image>
</template>

<script>
	export default{
		props: {
			src: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_bg {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}
</style>

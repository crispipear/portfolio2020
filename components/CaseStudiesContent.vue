<template>
	<div class="cs__wrapper">
		{{JSON.stringify(body)}}
	</div>
</template>
<script>
export default {
	props: {
		body: Array
	},
}
</script>
<style lang="scss">
	.cs{
		&__wrapper{
			padding: 12vh 0;
		}
	}
</style>
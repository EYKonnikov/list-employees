<template>
	<v-chip :variant="selected ? 'elevated' : 'outlined'" :color="tagColor">
		{{ tagItem }}
		<slot></slot>
		<!-- :color="tagItem.color" -->
	</v-chip>
</template>

<script>
	import {
		computed
	} from "vue";

	export default {
		props: {
			selected: Boolean,
			tag: Object,
		},
		components: {},
		setup(props, {
			attrs,
			slots,
			emit,
			expose
		}) {
			const tagColor = computed(() => props.tag.color);
			return {
				tagColor
			};
		},
	};
</script>

<style lang="css">
	.selected {
		background-color: red;
	}
</style>

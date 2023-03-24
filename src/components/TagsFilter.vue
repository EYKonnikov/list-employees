<template>
	<Tag :selected="isAllSelected" @click="allSelected" :tag="tagAll">
		Весь список
	</Tag>
	<Tag v-for="tag in tagsType" :key="tag.id" :selected="tags[tag.id]" :tag="tag" @click="select(tag.id)">
		{{ tag.title }}
	</Tag>
</template>

<script>
	import {
		ref
	} from "vue";
	import {
		computed
	} from "vue";
	import Tag from "./Tag.vue";
	export default {
		props: {},
		components: {
			Tag
		},
		setup(props, {
			attrs,
			slots,
			emit,
			expose
		}) {
			const tagsType = [{
					id: 1,
					title: "Проблемные",
					slug: "ТД",
					color: "#E2BD06",
				},
				{
					id: 2,
					title: "Критические",
					slug: "ГПХ",
					color: "#E52E2E",
				},
				{
					id: 3,
					title: "Есть замечания",
					slug: "СМЗ",
					color: "#00B6ED",
				},
				{
					id: 4,
					title: "Выполнено",
					slug: "Кандидат",
					color: "#00AE5B",
				},
			];
			const tagAll = {
				id: 0,
				title: "Весь список",
				color: "#B0BCC7",
			};
			let tagsPrepared = {};
			tagsType.forEach((x) => {
				tagsPrepared[x.id] = false;
			});
			const tags = ref({
				...tagsPrepared
			});
			const tagsResult = computed(() => {
				let tagsResult = [];
				Object.keys(tags.value).forEach((x) => {
					if (tags.value[x]) {
						tagsResult.push(x);
					}
				});
				return tagsResult;
			});
			const isAllSelected = computed(() => {
				
				return (
					!tagsResult.value.length || tagsResult.value.length == tagsType.length
				);
			});
			const allSelected = () => {
				tagsType.forEach((x) => {
					tagsPrepared[x.id] = false;
				});
				tags.value = {
					...tagsPrepared
				};
				emit("tagsSelected", {
					tag_ids: [],
				});
			};
			const select = (value) => {
				tags.value[value] = !tags.value[value];

				emit("tagsSelected", {
					tag_ids: tagsResult,
				});
			};

			return {
				tagsType,
				tagAll,
				tags,
				isAllSelected,
				tagsResult,
				allSelected,
				select,
			};
		},
	};
</script>

<style lang="css"></style>

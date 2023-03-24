<template>
	<v-container class="pa-6 mb-6 bg-cardbg" height="150px">
		<v-row class="h-25 flex-nowrap mb-2">
			<span class="text-titleprimary mr-5 text-h6 text-nowrap-center name" v-html="employeeName">
			</span>

			<span class="mr-6 px-2 text-nowrap text-nowrap-center inn">
				ИНН {{ employee.inn }}
			</span>
			<span class="mr-2 text-nowrap text-nowrap-center bg-grenprimary rounded-lg px-2 py-1 contract">
				{{ employee.type_contract.slug }}
			</span>
			<span class="mr-2 text-nowrap text-nowrap-center">
				{{ employee.position.name }}
			</span>
		</v-row>
		<v-row class="mb-2">
			<v-img :src="require(`../assets/${employee.country.icon}.svg`)" max-height="20" max-width="20"
				class="mr-2 pr-4" contain />

			<span class="pr-4 border-right"> {{ employee.country.slug }} </span>
			<span class="px-4 border-right"> {{ employee.address }} </span>
			<span class="px-4 border-right">
				Дата рождения: {{ employee.date_birth }}
			</span>
			<span class="px-4 border-right"> Возраст: {{ employee.age }} </span>
			<span class="pl-4"> Пол: {{ employee.gender.title }} </span>
		</v-row>
		<v-row>
			<span class="text-white rounded-lg pa-2" :style="{ background: employee.status.tag.color }">
				{{ employee.status.description }}
			</span>
		</v-row>
	</v-container>
</template>

<script>
	import {
		computed
	} from "vue";
	export default {
		props: {
			employee: Object,
			searchedText: String,
		},
		setup(props, {
			attrs,
			slots,
			emit,
			expose
		}) {
			const employeeName = computed(() => {
				if (!props.searchedText) {
					return props.employee.full_name;
				} else {
					const regExp = new RegExp(props.searchedText, "gi");
					return props.employee.full_name.replace(
						regExp,
						`<span class="text-red"> ${props.searchedText} </span>`
					);
				}
			});
			return {
				employeeName,
			};
		},
	};
</script>

<style scoped lang="css">
	.border-right {
		border-right: 1px solid #cedae5;
	}

	.contract {
		line-height: 25px;
		max-height: 30px;
	}

	.text-nowrap-center {
		display: flex;
		align-items: center;
	}

	.inn {
		color: #84909B;
		background: #FFFFFF;
		border-radius: 4px;
	}
	
	.name {
		font-size: 18px;
		color: #2A358C;
	}
	
	span {
		font-size: 14px;
		color: #041423;
	}
</style>

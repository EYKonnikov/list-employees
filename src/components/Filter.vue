<template>
	<v-container class="pa-30 w-100 bg-mainbg custom-container-0" max-width="587" width="587px">
		<h2>Фильтр</h2>
		<v-row width="100%">
			<v-col>
				Гражданство
				<v-select class="rounded bg-inputbg pt-0 mt-0 pl-4 pr-4 custom-select" variant="plain" single-line
					:items="countryType" v-model="model.country_id" item-value="id" item-title="title"
					:menu-props="{ top: true, offsetY: true }" />
			</v-col>
			<v-col>
				Пол
				<v-select class="rounded bg-inputbg pt-0 mt-0 pl-4 pr-4 custom-select" variant="plain" single-line
					:items="genderType" v-model="model.gender_id" item-value="id" item-title="title"
					:menu-props="{ top: true, offsetY: true }" />
			</v-col>
		</v-row>
		<v-row>
			<v-col class="v-col-custom">
				Должность
				<v-select class="rounded bg-inputbg pt-0 mt-0 pl-4 pr-4 custom-select" variant="plain" single-line
					:items="positionType" v-model="model.position_id" item-value="id" item-title="name"
					:menu-props="{ top: true, offsetY: true }" />
			</v-col>
		</v-row>

		Тип договора
		<v-container fluid class="custom-container-1">
			<v-checkbox class="checkbox" height="25px" v-for="contract in contractType" :key="contract.id"
				v-model="model.type_contract_id" :label="contract.slug" :value="contract.id" />
		</v-container>
		<v-card-actions>
			<v-btn class="ms-2 text-white text-none" variant="elevated" color="#00AE5B" size="large" width="50%"
				@click="applyFilter">
				Применить
			</v-btn>
			<v-btn class="ms-2 text-white text-none" variant="elevated" color="#84909B" size="large" width="50%"
				@click="onReset">
				очистить
			</v-btn>
		</v-card-actions>
	</v-container>
</template>

<script>
	import {
		ref
	} from "vue";

	export default {
		setup(props, {
			attrs,
			slots,
			emit,
			expose
		}) {
			const model = ref({
				type_contract_id: [],
				gender_id: 0,
				country_id: 0,
				position_id: 0,
			});

			const contractType = [{
					id: 1,
					title: "Трудовой договор",
					slug: "ТД",
				},
				{
					id: 2,
					title: "гражданско-правового характера",
					slug: "ГПХ",
				},
				{
					id: 3,
					title: "Самознятый",
					slug: "СМЗ",
				},
				{
					id: 4,
					title: "Кандидат на должность",
					slug: "Кандидат",
				},
			];
			const countryType = [{
					id: 0,
					icon: "null",
					title: "Все страны",
					slug: "null",
				},
				{
					id: 1,
					icon: "rus",
					title: "Россия",
					slug: "RUS",
				},
				{
					id: 2,
					icon: "tj",
					title: "Таджикистан",
					slug: "TJ",
				},
				{
					id: 3,
					icon: "uz",
					title: "Узбекистан",
					slug: "uz",
				},
			];
			const positionType = [{
					id: 0,
					name: "Все должности",
				},
				{
					id: 1,
					name: "Менеджер по персоналу",
				},
				{
					id: 2,
					name: "Тракторист",
				},
				{
					id: 3,
					name: "Машинист",
				},
				{
					id: 4,
					name: "Инженер сетей"
				},
				{
					id: 5,
					name: "Преподователь"
				},
				{
					id: 6,
					name: "Инженер-строитель"
				},
				{
					id: 7,
					name: "Менеджер по продажам"
				}
			];
			const genderType = [{
					id: 0,
					title: "Без разницы",
					slug: null
				},
				{
					id: 2,
					title: "Женский",
					slug: "Ж"
				},
				{
					id: 1,
					title: "Мужской",
					slug: "М"
				},
			];
			const onReset = () => {
				model.value = {
					type_contract_id: [],
					gender_id: 0,
					country_id: 0,
					position_id: 0,
				};
				emit("applyFilter", model.value);
			};
			const applyFilter = () => {
				emit("applyFilter", model.value);
			};

			return {
				contractType,
				countryType,
				positionType,
				genderType,
				model,
				applyFilter,
				onReset,
			};
		},
	};
</script>

<style lang="css">
	.checkbox .v-selection-control {
		min-height: 24px;
	}

	.checkbox .v-selection-control {
		height: 20px;
	}

	.custom-select .v-input__control {
		margin-top: -10px;
		height: 35px;

	}

	.custom-container-1 {
		padding-left: 0;
		margin-left: -10px;
		border-bottom: 1px solid #e8e7e7;
		margin-bottom: 20px;
	}

	.custom-container-0 h2 {
		margin-bottom: 15px;
	}

	.custom-container-0 .v-card-actions {
		margin: 0px 22px 0px -16px;
	}

	.custom-container-0 .v-col-custom {
		margin-bottom: 25px;
	}

	.custom-select .v-field__append-inner {
		padding-top: 21px;
	}
</style>

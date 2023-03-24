<template>
	<v-container class="modal-base h-screen w-screen m-w">
		<v-card class="pa-10" color="dddddd" max-width="1000" width="100%">
			<v-card-title class="text-h5"> Добавление пользователя </v-card-title>
			<v-form ref="form">
				<v-container>
					<v-row>
						<v-col cols="5">
							<v-text-field class="rounded bg-inputbg pt-0 mt-0 pl-4 pb-4" label="ФИО" :rules="rules"
								hide-details="auto" variant="plain" single-line v-model="model.full_name">
							</v-text-field>
						</v-col>
						<v-col cols="3">
							<v-select class="rounded bg-inputbg pt-0 mt-0 pl-4 pb-4" :rules="rules" :items="genderType"
								variant="plain" single-line v-model="model.gender_id" item-value="id" item-title="title"
								:menu-props="{ top: true, offsetY: true }" label="пол"></v-select>
						</v-col>
						<v-col cols="4">
							<v-text-field class="rounded bg-inputbg pt-0 mt-0 pl-4 pb-4" :rules="rules"
								v-model="model.inn" variant="plain" single-line label="ИНН"></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="5">
							<v-text-field class="rounded bg-inputbg pt-0 mt-0 pl-4" :rules="rules"
								v-model="model.address" variant="plain" single-line label="Адресс"></v-text-field>
						</v-col>
						<v-col cols="2">
							<v-text-field class="rounded bg-inputbg pt-0 mt-0 pl-4 pr-1" :rules="rules"
								v-model="model.date_birth" variant="plain" single-line type="date"
								label="дата рождения"></v-text-field>
						</v-col>
						<v-col cols="2">
							<v-text-field class="rounded bg-inputbg pt-0 mt-0 pl-4" :rules="rules" v-model="model.age"
								variant="plain" single-line label="Возраст"></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							Тип договора
							<v-select class="rounded bg-inputbg pt-0 mt-0 pl-4" :rules="rules" :items="contractType"
								variant="plain" single-line item-value="id" item-title="title"
								v-model="model.type_contract_id" :menu-props="{ top: true, offsetY: true }" />
						</v-col>
						<v-col>
							Гражданство
							<v-select class="rounded bg-inputbg pt-0 mt-0 pl-4" :rules="rules" :items="countryType"
								variant="plain" single-line v-model="model.country_id" item-value="id"
								item-title="title" :menu-props="{ top: true, offsetY: true }"></v-select>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							Должность
							<v-select class="rounded bg-inputbg pt-0 mt-0 pl-4" :rules="rules" :items="positionType"
								variant="plain" single-line v-model="model.position_id" item-value="id"
								item-title="name" :menu-props="{ top: true, offsetY: true }"></v-select>
						</v-col>
						<v-col>
							Тэг
							<v-select class="rounded bg-inputbg pt-0 mt-0 pl-4" :rules="rules" v-model="model.status_id"
								variant="plain" single-line :items="tagsType" item-value="id" item-title="title"
								:menu-props="{ top: true, offsetY: true }"></v-select>
						</v-col>
					</v-row>

					<v-row>
						<v-col>Статус сотрудника
							<v-text-field class="rounded bg-inputbg pt-0 mt-0 pl-4" :rules="rules"
								v-model="model.statusDescription" variant="plain" single-line></v-text-field>
						</v-col>
					</v-row>
				</v-container>
			</v-form>
			<v-card-actions>
				<v-btn class="ms-2 text-white" variant="elevated" color="#00AE5B" size="large" width="50%"
					@click="apply">
					Добавить
				</v-btn>
				<v-btn class="ms-2 text-white" variant="elevated" color="#84909B" size="large" width="50%"
					@click="onClose">
					Отмена
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
	import {
		ref
	} from "vue";

	export default {
		props: {},
		setup(props, {
			attrs,
			slots,
			emit,
			expose
		}) {
			const valid = true;
			const form = ref(null);
			const rules = [(value) => !!value || "Не заполнено"];

			const model = ref({
				full_name: null,
				inn: null,
				address: null,
				date_birth: null,
				age: null,
				type_contract_id: null,
				gender_id: null,
				country_id: null,
				position_id: null,
				status_id: null,
				statusDescription: null,
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
			const countryType = [{
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
					slug: "UZ",
				},
			];
			const positionType = [{
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
			const onClose = () => {
				emit("onClose");
			};
			const apply = () => {
				form.value.validate().then((x) => {
					if (x.valid) {
						let tag = {
							...tagsType.find((x) => x.id == model.value.status_id),
						};
						emit("addEmployee", {
							...model.value,
							type_contract: contractType.find(
								(x) => x.id == model.value.type_contract_id
							),

							gender: genderType.find((x) => x.id == model.value.gender_id),

							country: countryType.find((x) => x.id == model.value.country_id),

							position: positionType.find((x) => x.id == model.value.position_id),

							status: {
								tag_id: tag.id,
								description: model.value.statusDescription,
								tag: tag,
							},
						});
					}
				});
			};

			return {
				form,
				contractType,
				tagsType,
				countryType,
				positionType,
				genderType,
				model,
				rules,
				apply,
				onClose,
			};
		},
	};
</script>

<style>
	.modal-base {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.3);
		overflow: hidden;
		z-index: 1;
		max-width: 100%;
	}
</style>

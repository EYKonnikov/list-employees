import {
	createStore
} from "vuex";

const store = createStore({
	state: {
		employees: [{
				full_name: "Воробъёв Алексей Петрович",
				inn: "287654567895",
				address: "г. Санкт-Петербург",
				date_birth: " 10.10.1982",
				age: 41,
				type_contract: {
					id: 2,
					title: "гражданско-правового характера",
					slug: "ГПХ",
				},
				type_contract_id: 2,
				gender: {
					id: 1,
					title: "Мужской",
					slug: "М"
				},
				gender_id: 1,
				country: {
					id: 3,
					icon: "uz",
					title: "Узбекистан",
					slug: "UZ",
				},
				country_id: 3,
				position: {
					id: 2,
					name: "Тракторист"
				},
				position_id: 2,
				status: {
					tag_id: 2,
					tag: {
						id: 2,
						title: "Критические",
						slug: "ГПХ",
						color: "#E52E2E",
					},
					description: "Истекла рабочая виза",
				},
			}, {
				full_name: "Баринов Александр Венияминович",
				inn: "8785456789864",
				address: "пос. Пески",
				date_birth: "01.08.1975",
				age: "48",
				type_contract_id: 4,
				gender_id: 1,
				country_id: 3,
				position_id: 7,
				status_id: 1,
				statusDescription: "Всё чисто",
				type_contract: {
					id: 4,
					title: "Кандидат на должность",
					slug: "Кандидат",
				},
				gender: {
					id: 1,
					title: "Мужской",
					slug: "М"
				},
				country: {
					id: 3,
					icon: "uz",
					title: "Узбекистан",
					slug: "UZ",
				},
				position: {
					id: 7,
					name: "Менеджер по продажам"
				},
				status: {
					tag_id: 4,
					description: "Прошёл аттестацию",
					tag: {
						id: 4,
						title: "Выполнено",
						slug: "Кандидат",
						color: "#00AE5B",
					},
				},
			}, {
				full_name: "Иванова Анна Ивановна",
				inn: "18567564758",
				address: "г. Казань",
				date_birth: " 12.09.1984",
				age: 39,
				type_contract: {
					id: 1,
					title: "Трудовой договор",
					slug: "ТД"
				},
				type_contract_id: 1,
				gender: {
					id: 2,
					title: "Женский",
					slug: "Ж"
				},
				gender_id: 2,
				country: {
					id: 1,
					icon: "rus",
					title: "Россия",
					slug: "RUS"
				},
				country_id: 1,
				position: {
					id: 1,
					name: "Менеджер по персоналу"
				},
				position_id: 1,
				status: {
					tag_id: 1,
					tag: {
						id: 1,
						title: "Проблемные",
						slug: "ТД",
						color: "#E2BD06",
					},
					description: "Истекают все документы",
				},
			},

			{
				full_name: "Андронов Владимир Александрович",
				inn: "ххххххх",
				address: "г. Москва",
				date_birth: "13.07.1980",
				age: "43",
				type_contract_id: 3,
				gender_id: 1,
				country_id: 1,
				position_id: 3,
				status_id: 3,
				statusDescription: "ожидание подтверждения из налоговой",
				type_contract: {
					id: 3,
					title: "Самознятый",
					slug: "СМЗ"
				},
				gender: {
					id: 1,
					title: "Мужской",
					slug: "М"
				},
				country: {
					id: 1,
					icon: "rus",
					title: "Россия",
					slug: "RUS"
				},
				position: {
					id: 3,
					name: "Машинист"
				},
				status: {
					tag_id: 3,
					description: "Ожидание ИНН",
					tag: {
						id: 3,
						title: "Есть замечания",
						slug: "СМЗ",
						color: "#00B6ED",
					},
				},
			},

			{
				full_name: "Быстрицкий Виктор Николаевич",
				inn: "75647854673",
				address: "г. Астрахань",
				date_birth: "12.10.1985",
				age: "38",
				type_contract_id: 3,
				gender_id: 1,
				country_id: 1,
				position_id: 4,
				status_id: 1,
				statusDescription: "Есть замечания",
				type_contract: {
					id: 3,
					title: "Самознятый",
					slug: "СМЗ"
				},
				gender: {
					id: 1,
					title: "Мужской",
					slug: "М"
				},
				country: {
					id: 1,
					icon: "rus",
					title: "Россия",
					slug: "RUS"
				},
				position: {
					id: 4,
					name: "Инженер сетей"
				},
				status: {
					tag_id: 4,
					description: "Все этапы пройдены",
					tag: {
						id: 4,
						title: "Выполнено",
						slug: "Кандидат",
						color: "#00AE5B",
					},
				},
			},
			{
				full_name: "Антонова Елена Игоревна",
				inn: "8547664345989",
				address: "г. Самара",
				date_birth: "14.08.2004",
				age: "20",
				type_contract_id: 2,
				gender_id: 2,
				country_id: 2,
				position_id: 5,
				status_id: 4,
				statusDescription: "Все хорошо",
				type_contract: {
					id: 2,
					title: "гражданско-правового характера",
					slug: "ГПХ",
				},
				gender: {
					id: 2,
					title: "Женский",
					slug: "Ж"
				},
				country: {
					id: 2,
					icon: "tj",
					title: "Таджикистан",
					slug: "TJ"
				},
				position: {
					id: 5,
					name: "Преподователь",
				},
				status: {
					tag_id: 4,
					tag: {
						id: 4,
						title: "Выполнено",
						slug: "ГПХ",
						color: "#00AE5B",
					},
					description: "Прошла аттестацию",
				},
			},
			{
				full_name: "Леонидов Алексей Генадьевич",
				inn: "87654567389",
				address: "г. Волгоград",
				date_birth: "14.10.1997",
				age: "27",
				type_contract_id: 3,
				gender_id: 1,
				country_id: 3,
				position_id: 6,
				status_id: 1,
				statusDescription: "Каие-то проблемки",
				type_contract: {
					id: 3,
					title: "Самознятый",
					slug: "СМЗ"
				},
				gender: {
					id: 1,
					title: "Мужской",
					slug: "М"
				},
				country: {
					id: 3,
					icon: "uz",
					title: "Узбекистан",
					slug: "UZ",
				},
				position: {
					id: 6,
					name: "Инженер-строитель"
				},
				status: {
					tag_id: 3,
					description: "Нет загран паспорта",
					tag: {
						id: 3,
						title: "Нет замечаний",
						slug: "СМЗ",
						color: "#00B6ED",
					},
				},
			},
			{
				full_name: "Кайсина Анна Дмитриевна",
				inn: "56789012345",
				address: "г.Краснодар",
				date_birth: "15.10.1993",
				age: "27",
				type_contract_id: 3,
				gender_id: 2,
				country_id: 1,
				position_id: 6,
				status_id: 2,
				statusDescription: "Всё в норме",
				type_contract: {
					id: 3,
					title: "Самозанятая",
					slug: "СМЗ"
				},
				gender: {
					id: 2,
					title: "Женский",
					slug: "Ж"
				},
				country: {
					id: 1,
					icon: "rus",
					title: "Россия",
					slug: "RUS"
				},
				position: {
					id: 6,
					name: "Инженер-строитель"
				},
				status: {
					tag_id: 2,
					tag: {
						id: 2,
						title: "Условно",
						slug: "ГПХ",
						color: "#E52E2E",
					},
					description: "Истекла рабочая виза",
				},
			},
			{
				full_name: "Гулящ Анатолий Андреевич",
				inn: "86745635890",
				address: "г. Тубурук",
				date_birth: "13.04.2003",
				age: "20",
				type_contract_id: 4,
				gender_id: 1,
				country_id: 2,
				position_id: 6,
				status_id: 4,
				statusDescription: "Все хорошо",
				type_contract: {
					id: 4,
					title: "Кандидат на должность",
					slug: "Кандидат",
				},
				gender: {
					id: 1,
					title: "Мужской",
					slug: "М"
				},
				country: {
					id: 2,
					icon: "tj",
					title: "Таджикистан",
					slug: "TJ"
				},
				position: {
					id: 6,
					name: "Инженер-строитель"
				},
				status: {
					description: "Истекает разрешение на работу",
					tag_id: 1,
					tag: {
						id: 1,
						title: "Проблемные",
						slug: "ТД",
						color: "#E2BD06",
					},
				},
			},
		],
		filteredEmployees: [],
		filterModel: {
			query: null,
			tag_ids: null,
			country_id: null,
			gender_id: null,
			position_id: null,
			type_contract_id: null,
		},
	},
	getters: {
		totalEmployees(state) {
			return state.employees.length;
		},
		getEmployees(state) {
			return state.employees;
		},
		getFilteredEmployees(state) {
			return state.filteredEmployees;
		},
	},
	mutations: {
		SAVE_EMPLOYEE(state, employee) {
			state.employees.unshift(employee);
		},
		FILTER_EMPLOYEES(state, filter) {
			state.filterModel = {
				...state.filterModel,
				...filter
			};
			state.filteredEmployees = state.employees
				.filter((x) => {
					const regex = new RegExp(`${state.filterModel.query || ""}`, "gi");
					return !state.filterModel.query || !!x.full_name.match(regex);
				})
				.filter((x) => {
					return (
						!state.filterModel.tag_ids ||
						!state.filterModel.tag_ids.length ||
						!!state.filterModel.tag_ids.find((j) => j == x.status.tag_id)
					);
				})
				.filter(
					(x) =>
					!state.filterModel.country_id ||
					state.filterModel.country_id == x.country_id
				)
				.filter(
					(x) =>
					!state.filterModel.gender_id ||
					state.filterModel.gender_id == x.gender_id
				)
				.filter(
					(x) =>
					!state.filterModel.position_id ||
					state.filterModel.position_id == x.position_id
				)
				.filter(
					(x) =>
					!state.filterModel.type_contract_id ||
					!state.filterModel.type_contract_id.length ||
					state.filterModel.type_contract_id.find(
						(j) => j == x.type_contract_id
					)
				);
		},
	},
	actions: {
		saveEmployee({
			commit
		}, employee) {
			commit("SAVE_EMPLOYEE", employee);
		},
		filterEmployees({
			commit
		}, filter) {
			commit("FILTER_EMPLOYEES", filter);
		},
	},
});

export default store;

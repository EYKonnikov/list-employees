<template>
	<v-app :class="{ modalopen: modalOpen }">
		<v-main class="bg-mainbg pt-10">
			<v-container>
				<v-row no-gutters>
					<v-row>
						<v-col cols="12" sm="7" class="v-col--modified mr-8">
							<v-text-field class="custom-input-search" label="Поиск сотрудника" clearable variant="plain"
								append-inner-icon="mdi-magnify" hint="Например: Иванов Иван" persistent-hint
								v-model="searchText" />
						</v-col>
						<v-col cols="4" sm="4" class="v-col--modified-1">
							<v-btn class="text-white text-none" variant="elevated" block size="x-large" color="#00B6ED"
								prepend-icon="mdi-account-plus-outline" @click="onOpen">
								Добавить нового сотрудника
							</v-btn>
						</v-col>
					</v-row>
					<v-row style="margin-top: -27px;">
						<v-col cols="7" class="v-col--modified mr-8">
							<h1>Список Сотрудников</h1>
							<TagsFilter @tagsSelected="applyFilter" />
							<EmployeeCard v-for="employee in employees" :key="employee.inn" :employee="employee"
								:searchedText="searchText" />
							<v-row no-gutters>
								<v-btn v-if="showCountBtn" class="mx-auto text-none" variant="outlined" size="large"
									color="#2A358C" prepend-icon="mdi-cached" @click="showMore">
									Показать еще
								</v-btn>
							</v-row>
						</v-col>
						<v-col cols="4" class="v-col--modified-3">
							<Filter @applyFilter="applyFilter" />
						</v-col>
					</v-row>
				</v-row>
			</v-container>
		</v-main>
		<AddEmployeeModal @onClose="onClose" v-if="modalOpen" @addEmployee="addEmployee" />
	</v-app>
</template>

<script>
	import EmployeeCard from "./components/EmployeeCard.vue";
	import AddEmployeeModal from "./components/AddEmployeeModal.vue";
	import Filter from "./components/Filter.vue";
	import TagsFilter from "./components/TagsFilter.vue";
	import {
		ref,
		watch
	} from "vue";
	import {
		useStore
	} from "vuex";
	import {
		computed
	} from "vue";

	export default {
		name: "App",

		components: {
			EmployeeCard,
			AddEmployeeModal,
			Filter,
			TagsFilter,
		},
		props: {
			title: String,
		},
		setup(props, {
			attrs,
			slots,
			emit,
			expose
		}) {
			const store = useStore();
			const getters = store.getters;
			const modalOpen = ref(false);
			const anyFilterActive = ref(false);
			const searchText = ref(null);
			const showCount = ref(3);
			const showCountBtn = computed(() => {
				return anyFilterActive.value ?
					getters.getFilteredEmployees.length > showCount.value :
					getters.getEmployees.length > showCount.value;
			});
			const employees = computed(() => {
				return anyFilterActive.value ?
					getters.getFilteredEmployees.slice(0, showCount.value) :
					getters.getEmployees.slice(0, showCount.value);
			});

			const showMore = () => {
				showCount.value += 3;
			};
			const onClose = () => {
				modalOpen.value = false;
				return getters.getEmployees
			};
			const onOpen = () => {
				modalOpen.value = true;
			};
			const addEmployee = (value) => {
				store.dispatch("saveEmployee", value);
				modalOpen.value = false;
			};
			const applyFilter = (value) => {
				anyFilterActive.value = true;
				store.dispatch("filterEmployees", value);
				showCount.value = 3;
			};

			watch(
				() => searchText.value,
				(newValue) => {
					applyFilter({
						query: newValue
					});
				}
			);
			return {
				searchText,
				modalOpen,
				showCountBtn,
				showMore,
				addEmployee,
				onOpen,
				onClose,
				applyFilter,
				employees,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.v-container {
		font-family: "montserrat";
		background-color: #F7F8F9;

	}

	.v-col--modified {
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		background: #FFFF !important;
		padding: 27px 45px 25px 45px !important;
		
		h1 {
			font-size: 26px;
			padding-bottom: 15px;
		}
		
		::v-deep .v-chip {
			margin: 0px 10px 20px 0px;
		}
	}
	
	.v-col--modified-1 {
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		background: #FFFF !important;
		padding: 30px 45px 5px 45px !important;
		margin-bottom: 7px;
		
		
	}
	
	.v-col--modified-3 {
		box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
		background: #FFFF !important;
		padding: 20px 30px 5px 30px !important;
		margin-top: -9px;
		
		h1 {
			font-size: 26px;
			padding-bottom: 15px;
		}
		
		h2 {
			margin-bottom: 15px;
		}
		
	}
	

	.v-row {
		margin: 25px 35px 30px 35px;

	}

	.custom-input-search {
		::v-deep .v-input__control {
			padding: 0px 10px 0px 10px;
			border-radius: 4px;
			background: #E8F1F4 !important;
			font-family: "montserrat"
		}

		::v-deep .v-messages__message {
			margin-top: 12px;
			color: #B0BCC7;
			font-size: 13px;
		}
	}

	.modalopen {
		height: 100vh;
		overflow: hidden;
	}
</style>

<template>
    <div class="wrapper">
        <h1>ALSECO test task</h1>
        <list
            table-name="Список сотрудников"
            :headers="['ФИО', 'Количество', 'Общая стоимость']"
            :table-data="tableData"
            :row-limit="10"
            :numerable="false"
            :on-delete="deleteAction"
            @selectedEmp="formHandler($event)"

        ></list>
        <div class="add-item">
            <div class="add-item__title">
                Добавить сотрудника
            </div>
            <div class="block__flex">
                <input v-model="newEmployeeFirstName" type="text" placeholder="Имя">
                <input v-model="newEmployeeSecondName" type="text" placeholder="Фамилия">
                <input v-model="newEmployeePatronymic" type="text" placeholder="Отчество">
                <button @click="submitNewEmployee" class="add-item__btn">Добавить</button>
            </div>
        </div>
        <employee-material-value-form
            v-if="formVisible"
            :id="selectedEmpId"
            @closeForm="formVisible = false"
        />
    </div>
</template>

<script>
import List from "./components/List.vue";
import EmployeeMaterialValueForm from "./components/EmployeeMaterialValueForm.vue";

    export default {
        name: "app",
        components: {
            List,
            EmployeeMaterialValueForm,
        },
        created() {
            window.getSelection().addRange(new Range())
            fetch("http://localhost:3000/employeesTable")
                .then(res => res.json())
                    .then(data => {
                        this.tableData = data
                        this.$store.commit('getData', data)
                    })
        },
        data: () => {
            return {
                tableData: [],
                selectedEmpId: null,
                formVisible: false,
                newEmployeeFirstName: "",
                newEmployeeSecondName: "",
                newEmployeePatronymic: "",
            }
        },
        methods: {
            deleteAction(id) {
                fetch(`http://localhost:3000/employee/${id}`, {
                    method: 'DELETE'
                }).then(res => {
                    console.log(res)
                    this.$store.commit('removeEmployee', id)
                })
            },
            formHandler(id) {
                this.selectedEmpId = id
                this.formVisible = true
            },
            submitNewEmployee() {
                let obj = {
                    firstName: this.newEmployeeFirstName,
                    secondName: this.newEmployeeSecondName,
                    patronymic: this.newEmployeePatronymic
                }
                fetch(`http://localhost:3000/employees/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(obj)
                }).then((res) => {
                    res.json().then(r => {
                        obj.id = r.id
                        this.$store.commit('addEmployee', obj)
                    })
                })
            }
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

    body {
        margin: 0;
        font-family: 'Ubuntu', sans-serif;
    }

    .wrapper {
        width: 80%;
        margin: 0 auto;
    }

    .block__flex {
        display: flex;
        flex-direction: column;
    }

    input {
        font-size: 1.2em;
        margin-bottom: 10px;
        outline: none;
        border: 1px solid #302E30;
        padding: 5px;
        border-radius: 10px;
    }

    .add-item__title {
        font-size: 1.5em;
        margin-bottom: 10px;
    }

    .add-item__btn {
        outline: none;
        font-size: 1.2em;
        border: none;
        padding: 10px;
        border-radius: 7px;
        background-color: #c3c3c3;
        cursor: pointer;
    }

    .add-item {
        margin: 0 auto;
        width: 50%;
    }
</style>
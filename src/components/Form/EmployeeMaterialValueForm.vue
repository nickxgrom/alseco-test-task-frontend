<template>
    <form-wrapper
        title="Сотрудник"
        @closeForm="$emit('closeForm')"
    >
        <div class="employee-info">
            Фамилия: <span class="employee-name">{{employee.secondName}}</span> <br>
            Имя: <span class="employee-name">{{employee.firstName}}</span> <br>
            Отчество: <span class="employee-name">{{employee.patronymic}}</span> <br>
        </div>
        <list
            @openForm="formVisible = true"
            table-name="Материальные ценности сотрудника"
            :numerable="true"
            :table-data="employeeMaterialValues"
            :headers="['Название', 'Стоимость']"
            :row-limit="10"
            :on-delete="deleteAction"
        ></list>
        <div class="amount">
            Итого:
            <span class="amount-diff-color">{{$store.getters.MVTotalPrice}}</span>
        </div>

        <add-material-value-form
            @closeForm="formVisible = false"
            v-if="formVisible"
            :id="$props.id"
        />

    </form-wrapper>
</template>

<script>
    import Overlay from "../Overlay.vue";
    import List from "../List.vue";
    import FormWrapper from "./FormWrapper.vue";
    import AddMaterialValueForm from "./AddMaterialValueForm.vue";
    export default {
        name: "Form",
        components: {
            Overlay,
            List,
            FormWrapper,
            AddMaterialValueForm,
        },
        data() {
            return {
                employee: {},
                employeeMaterialValues: [],
                formVisible: false,
            }
        },
        props: {
            id: Number,
        },
        created() {
            fetch(`http://localhost:3000/employees/${this.$props.id}`)
                .then(res => res.json())
                    .then(mv => {
                        this.$store.commit('setCurrentEmployeeMV', mv)
                        this.employeeMaterialValues = mv
                    })
            fetch(`http://localhost:3000/employee/${this.$props.id}`)
                .then(res => res.json())
                    .then(employee => {
                        this.employee = employee
                    })
        },
        methods: {
            deleteAction(id) {
                fetch(`http://localhost:3000/materialValue/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(mv => {
                        this.$store.commit('removeEmployeeMV', mv)
                    })
            },
        }
    }
</script>

<style scoped>
    form {
        padding: 30px;
        width: 40%;
        background-color: #FFFFFF;
        border-radius: 7px;
        margin: 0 auto;
        text-align: center;
    }
    
    .amount {
        font-size: 1.2em;
        float: right;
    }

    .amount-diff-color {
        padding: 5px;
        border-radius: 7px;
        background-color: #01987A;
    }
    
    .employee-info {
        margin: 10px 0;
        text-align: left;
        font-size: 1.1em;
    }

    .employee-name {
        font-weight: bold;
    }
</style>
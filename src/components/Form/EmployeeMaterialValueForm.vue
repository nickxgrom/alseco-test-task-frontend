<template>
    <form-wrapper
        title="Сотрудник"
        @closeForm="$emit('closeForm')">
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
                employeeMaterialValues: [],
                newMV: '',
                newMVPrice: '',
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
</style>
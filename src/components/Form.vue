<template>
    <overlay>
        <form @submit="$event.preventDefault()">
            <h2>Сотрудник</h2>
            <div>
            </div>
            <list
                table-name="Материальные ценности сотрудника"
                :numerable="true"
                :table-data="employeeMaterialValues"
                :headers="['Название', 'Стоимость']"
                :row-limit="10"
                :on-delete="deleteAction"
            ></list>
            <div>Итого {{$store.getters.MVTotalPrice}}</div>

            <div class="add-item">
                <div class="add-item__title">
                    Добавить МЦ для сотрудника
                </div>
                <div class="block__flex">
                    <input v-model="newMV" type="text" placeholder="Название">
                    <input v-model="newMVPrice" type="text" placeholder="Цена">
                    <button
                        class="add-item__btn"
                        @click="createEmployeeMV"
                    >
                        Добавить
                    </button>
                </div>
            </div>

            <button
                @click="$emit('closeForm')"
            >
                Закрыть
            </button>
        </form>
    </overlay>
</template>

<script>
    import Overlay from "./Overlay.vue";
    import List from "./List.vue";
    export default {
        name: "Form",
        components: {
            Overlay,
            List
        },
        data() {
            return {
                employeeMaterialValues: [],
                newMV: '',
                newMVPrice: '',
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
                }).then(res => {
                    console.log(res)
                    this.$store.commit('removeEmployeeMV', id)
                })
            },
            createEmployeeMV() {
                let obj = {
                    materialValueName: this.newMV,
                    materialValuePrice: this.newMVPrice,
                    id: this.$props.id
                }
                fetch(`http://localhost:3000/employees/${this.$props.id}`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(obj)
                }).then(() => {
                    this.$store.commit('addEmployeeMV', obj)
                })
            }
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

    .add-item__title {
        font-size: 1.5em;
        margin-bottom: 10px;
    }

    .add-item__btn {
        outline: none;
        font-size: 1.2em;
        cursor: pointer;
    }

    .add-item {
        margin: 0 auto;
        width: 70%;
    }
</style>
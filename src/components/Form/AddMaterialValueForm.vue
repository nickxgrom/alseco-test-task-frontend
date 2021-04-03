<template>
    <form-wrapper
        title="Добавить МЦ сотрудника"
        @closeForm="$emit('closeForm')"
    >
        <div class="block__flex">
            <input
                v-for="field in fields"
                v-model="field.value"
                :placeholder="field.placeholder"
                type="text"
            >
            <button @click="submit" class="add-item__btn">Добавить</button>
        </div>
    </form-wrapper>
</template>

<script>
    import FormWrapper from "./FormWrapper.vue";
    export default {
        name: "AddMaterialValueForm",
        props: {
            id: Number,
        },
        components: {
            FormWrapper
        },
        data() {
            return {
                fields: [
                    {
                        value: "",
                        placeholder: "Название",
                        rule: /\./
                    },
                    {
                        value: "",
                        placeholder: "Цена",
                        rule: /\./
                    },
                ]
            }
        },
        methods: {
            submit() {
                let obj = {
                    materialValueName: this.fields[0].value,
                    materialValuePrice: this.fields[1].value,
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

</style>
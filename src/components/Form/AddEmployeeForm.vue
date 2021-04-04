<template>
    <form-wrapper
        title="Добавить сотрудника"
        @closeForm="$emit('closeForm')"
    >
        <div class="block__flex">
            <input
                type="text"
                v-for="field in fields"
                :placeholder="field.placeholder"
                v-model="field.value"
            >
            <button class="add-item__btn" @click="submit">Добавить</button>
        </div>
    </form-wrapper>
</template>

<script>
    import FormWrapper from "./FormWrapper.vue";
    export default {
        name: "AddEmployeeForm",
        components: {
            FormWrapper,
        },
        data() {
            return {
                fields: [
                    {
                        value: '',
                        placeholder: 'Фамилия',
                        rule: /\./
                    },
                    {
                        value: '',
                        placeholder: 'Имя',
                        rule: /\./
                    },
                    {
                        value: '',
                        placeholder: 'Отчество',
                        rule: /\./
                    },
                ],
            }
        },
        methods: {
            submit() {
                let obj = {
                    firstName: this.fields[1].value,
                    secondName: this.fields[0].value,
                    patronymic:  this.fields[2].value
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
                        this.$emit('closeForm')
                    })
                })
            },
        }
    }
</script>

<style scoped>

</style>
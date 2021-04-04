<template>
    <form-wrapper
        title="Добавить сотрудника"
        @closeForm="$emit('closeForm')"
    >
        <div class="block__flex">
            <div
                v-for="field in fields"
            >
                <input
                    v-model="field.value"
                    :placeholder="field.placeholder"
                    type="text"
                    :class="{ 'input_error': field.touched && !field.rule.test(field.value) }"
                    @input="field.touched = true"
                >
                <div
                    v-show="field.touched && !field.rule.test(field.value)"
                    class="error-message"
                >
                    {{ field.errorMessage }}
                </div>
            </div>
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
                        rule: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
                        errorMessage: "Введите корректную фамлию",
                        touched: false,
                    },
                    {
                        value: '',
                        placeholder: 'Имя',
                        rule: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
                        errorMessage: "Введите корректное имя",
                        touched: false,
                    },
                    {
                        value: '',
                        placeholder: 'Отчество',
                        rule: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
                        errorMessage: "Введите корректное отчество",
                        touched: false,
                    },
                ],
            }
        },
        methods: {
            submit() {
                let err = false
                this.fields.forEach(field => {
                    field.touched = !field.rule.test(field.value)
                    err = err || !field.rule.test(field.value)
                })

                if (err) {
                    return
                }

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
    .input_error {
        outline-color: #FF5252;
        outline-style: auto;
    }

    .error-message {
        color: #FF5252;
        user-select: none;
    }
</style>
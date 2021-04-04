<template>
    <form-wrapper
        title="Добавить МЦ сотрудника"
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
                        rule: /^.{1,}$/,
                        errorMessage: "Поле не может быть пустым",
                        touched: false,
                    },
                    {
                        value: "",
                        placeholder: "Цена",
                        rule: /^\d{1,}((\.|,)\d{2})?$/,
                        errorMessage: "Поле должно содержать только цифры и дробную часть",
                        touched: false,
                    },
                ]
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
                    this.$emit('closeForm')
                })
            }
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
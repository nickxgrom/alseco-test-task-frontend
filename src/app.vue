<template>
    <div class="wrapper">
        <h1>ALSECO test task</h1>
        <list
            table-name="Список сотрудников"
            :headers="['ФИО', 'Количество', 'Общая стоимость']"
            :table-data="tableData"
            :row-limit="10"
        ></list>
    </div>
</template>

<script>
import List from "./components/List.vue";
    export default {
        name: "app",
        components: {
            List,
        },
        created() {
            fetch("http://localhost:3000/employeesTable")
                .then(res => res.json())
                    .then(data => {
                        this.tableData = data
                    })
        },
        data: () => {
            return {
                tableData: [],
            }
        }
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

</style>
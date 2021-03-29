<template>
    <div class="wrapper">
        <h1>ALSECO test task</h1>
        <list
            table-name="Список сотрудников"
            :headers="['ФИО', 'Количество', 'Общая стоимость']"
            :table-data="tableData"
            :row-limit="1"
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
        data: () => {
            return {
                tableData: [
                    {
                        fullName: "Иванов Иван Иванович",
                        totalMaterialValues: 2,
                        totalPrice: 231000
                    },
                    {
                        initials: "Петров Петр Петрович",
                        totalMaterialValues: 3,
                        totalPrice: 31200
                    },
                    {
                        initials: "Пахомов Исаак Андреевич",
                        totalMaterialValues: 1,
                        totalPrice: 98300
                    },
                ]
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
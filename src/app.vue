<template>
    <div class="wrapper">
        <h1>ALSECO test task</h1>
        <list
            table-name="Список сотрудников"
            :rows="8"
            :columns="4"
        ></list>
    </div>
</template>

<script>
import List from "./components/List.vue";
    export default {
        name: "app",
        components: {
            List,
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
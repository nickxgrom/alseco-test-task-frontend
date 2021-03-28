<template>
    <div>
        <div class="block_flex">
            <h3>{{tableName}}</h3>
            <button>Добавить</button>
        </div>
        <div class="employee-list">
            <table class="table_block">
                <tr class="table-header">
                    <th
                        v-for="header in headers"
                    >{{ header }}</th>
                </tr>
                <tr
                    v-for="i in tableData.length"
                    :class="{ 'row-diff-color': !(i%2) }"
                >
                    <td
                        v-for="value in Object.values(tableData[i-1])"
                    >
                        {{ value }}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: {
            tableName: String,
            rowLimit: Number,
            headers: Array,
            tableData: Array,
        },
    }
</script>

<style scoped>
    .block_flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .employee-list {
        border-radius: 10px 10px 0 0;
        overflow: hidden;
    }

    table {
        font-size: 1.2em;
        text-align: center;
        width: 100%;
        border-collapse: collapse;
        user-select: none;
        border-bottom: 2px solid #01987A;
        color: #302E30;
    }

    .table-header {
        background-color: #01987A;
        border-radius: 7px;
        border-bottom: none;
    }

    td {
        padding: 7px 0;
        width: 33%;
    }

    tr {
        border-bottom: 1px solid #E0E0E0;
    }

    th {
        padding: 10px 0;
        color: #FFF;
    }

    .row-diff-color {
        background: #F3F3F3;
    }

    .page-selector {
        width: 20%;
        height: 20px;
        background: aqua;
    }

    button {
        height: 40px;
        padding: 0 30px;
        border: none;
        border-radius: 10px;
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.1em;
        color: #FFF;
        background-color: #01987A;
        cursor: pointer;
        outline: none;
    }
</style>
<template>
    <div>
        <div class="block_flex">
            <h3>{{tableName}}</h3>
            <button class="btn btn_action">Добавить</button>
        </div>
        <div class="employee-list">
            <table class="table_block">
                <tr class="table-header">
                    <th v-if="numerable">
                        №
                    </th>
                    <th
                        v-for="header in headers"
                    >{{ header }}</th>
                </tr>
                <tr
                    v-for="row in tableData.length"
                    :class="{ 'row-diff-color': !(row%2), 'row_focused': row === focusedRow }"
                    @click="focusedRow = row"
                >
                    <td
                        v-if="numerable"
                    >{{row}}</td>
                    <td
                        v-for="key in Object.keys(tableData[row-1])"
                        v-if="key !== 'id'"
                    >
                        {{ tableData[row-1][key] }}
                    </td>
                </tr>
            </table>
        </div>
        <div class="page-selector block-button_flex">
            <button
                v-for="pageNumber in Math.ceil(tableData.length/rowLimit)"
                class="btn page-btn"
            >
                {{pageNumber}}
            </button>
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
            numerable: Boolean,
        },
        data: () => {
            return {
                focusedRow: null,
            }
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
        table-layout: fixed;
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
        margin: 20px auto;
    }

    .btn {
        border: none;
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.1em;
        color: #FFF;
        background-color: #01987A;
        cursor: pointer;
        outline: none;
    }

    .btn_action {
        height: 40px;
        padding: 0 30px;
        border-radius: 10px;
    }

    .block-button_flex {
        display: flex;
        justify-content: center;
    }

    .page-btn {
        border-radius: 5px;
        padding: 5px;
        margin: 0 5px;
    }

    .row_focused {
        color: #01987A;
    }
</style>
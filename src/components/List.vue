<template>
    <div class="employee-list">
        <table class="table_block">
            <tr class="table-header">
                <th
                    v-for="c in columns"
                >{{c}} column</th>
            </tr>
            <tr
                v-for="i in rows"
                :class="{ 'row-diff-color': !(i%2) }"
            >
                <td
                    v-for="j in columns"
                >
                    {{i}} | {{j}}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
    name: "List",
        props: {
            columns: Number,
            rows: Number
        }
    }
</script>

<style scoped>
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
</style>
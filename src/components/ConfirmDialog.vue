<template>
    <overlay @closeOverlay="$emit('close')">
        <div class="confirm-dialog">
            <div class="title">
                Подтверждение
            </div>
            <div class="confirm-message">
                {{message}}
            </div>
            <div class="block-button">
                <button
                    @click="delRecord"
                >
                    Подтвердить
                </button>
                <button
                    class="reject"
                    @click="$emit('close')"
                >
                    Отмена
                </button>
            </div>
        </div>
    </overlay>
</template>

<script>
    import Overlay from "./Overlay.vue";
    export default {
        name: "ConfirmDialog",
        components: {
            Overlay,
        },
        props: {
            message: String,
            deleteRecordId: Number,
            deleteAction: Function,
        },
        methods: {
            delRecord() {
                this.deleteAction(this.deleteRecordId)
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .confirm-dialog {
        border-radius: 7px;
        text-align: center;
        width: 400px;
        margin: 0 auto;
        padding: 20px 0;
        background-color: #fff;
    }

    .title {
        margin-bottom: 10px;
        font-size: 1.2em;
    }

    .confirm-message {
        margin: 0 10px 20px 10px;
    }

    button {
        padding: 10px;
        border-radius: 7px;
        border: none;
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.1em;
        color: #FFF;
        background-color: #01987A;
        cursor: pointer;
        outline: none;
    }

    .reject {
        background-color: #c3c3c3;
    }

</style>
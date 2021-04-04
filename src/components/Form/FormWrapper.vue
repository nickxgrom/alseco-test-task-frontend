<template>
    <overlay @closeOverlay="$emit('closeForm')">
        <form @submit="$event.preventDefault()">
            <div class="form-title">
                {{title}}
            </div>
            <slot></slot>
        </form>
    </overlay>
</template>

<script>
    import Overlay from "../Overlay.vue";
    export default {
        name: "FormWrapper",
        components: {
            Overlay
        },
        props: {
            title: String,
        },
    }
</script>

<style scoped>
    form {
        padding:  20px;
        margin: 0 auto;
        width: 40%;
        background-color: #fff;
        border-radius: 7px;
        text-align: center;
    }

    .form-title {
        font-size: 1.5em;
    }
</style>
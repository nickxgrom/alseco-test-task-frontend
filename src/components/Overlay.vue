<template>
    <div class="overlay">
        <slot class="slot"></slot>
        <button class="btn_close" @click="$emit('closeOverlay')">Закрыть</button>
    </div>
</template>

<script>
export default {
    name: "Overlay",
}
</script>

<style scoped>
    .overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .6);
    }

    .slot {
        margin: 0 auto;
    }

    .btn_close {
        display: block;
        margin: 10px auto;
        font-size: 1.2em;
        font-family: 'Ubuntu', sans-serif;
        outline: none;
        border: none;
        border-radius: 7px;
        padding: 5px 20px;
        cursor: pointer;
    }
</style>
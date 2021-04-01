<template>
    <div class="overlay">
        <slot class="slot"></slot>
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
</style>
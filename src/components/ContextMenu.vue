<template>
    <div class="context-menu" ref="contextMenu">
        <div
            class="context-menu_item"
            v-for="item in items"
            @click="clickHandler(item)"
            @contextmenu="$event.preventDefault()"
        >{{item.title}}</div>
    </div>
</template>

<script>
    export default {
        name: "ContextMenu",
        props: {
            items: Array,
            position: Object,
        },
        mounted() {
            document.addEventListener('click', event => this.clickOutsideHandler(event))
            this.updatePosition()

        },
        destroyed() {
            document.removeEventListener('click', event => this.clickOutsideHandler(event))

        },
        updated() {
            this.updatePosition()
        },
        methods: {
            clickOutsideHandler(e){
                if (e.target !== this.$el && !this.$el.contains(e.target))
                    this.$emit('close')
            },
            updatePosition() {
                this.$refs.contextMenu.style.top = this.position.y + 'px'
                this.$refs.contextMenu.style.left = this.position.x + 'px'
            },
            clickHandler(item) {
                item.action()
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .context-menu {
        position: absolute;
        border: 1px solid #01987A;
        border-radius: 7px;
        background-color: #FFF;
        user-select: none;
    }

    .context-menu_item {
        padding: 7px 30px;
    }

    .context-menu_item:hover {
        background-color: #c3c3c3;
    }
</style>
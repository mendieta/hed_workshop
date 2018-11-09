<template>
    <div class="NavButton"
         @click="onClick"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave">
        <div class="left">
            <p>{{id}}.</p>
            <span></span>
        </div>
        <div class="right">
            <h3>{{title}}</h3>
            <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavButton",
        props: {
            id: {
                type: String,
                default: "00",
            },
            title: {
                type: String,
            },
            to: {
                type: String,
            },
        },
        methods: {
            onClick() {
                this.$router.push(this.to);
            },
            onMouseEnter() {
            },
            onMouseLeave() {
            }
        },
    }
</script>

<style lang="stylus" src="../styles/components/NavButton.styl"></style>

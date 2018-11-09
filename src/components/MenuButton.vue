<template>
    <button class="MenuButton" @click="onClick">
        <svg id="Burger" xmlns="http://www.w3.org/2000/svg" width="49"
             height="15" viewBox="0 0 49 15">
            <path class="cls-1" d="M96,75h48"
                  transform="translate(-95.5 -74.5)"/>
            <path data-name="Stroke" class="cls-1" d="M96,88h48"
                  transform="translate(-95.5 -74.5)"/>
        </svg>
    </button>
</template>

<script>
    import {mapMutations} from "vuex";
    import {TOGGLE_MENU} from "../store";

    export default {
        name: "MenuButton",
        methods: {
            onClick() {
                this.toggleMenu();
            },
            ...mapMutations({toggleMenu: TOGGLE_MENU}),
        },
    }
</script>

<style lang="stylus" src="../styles/components/MenuButton.styl"></style>

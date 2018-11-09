<template>
    <div id="app">
        <main @click="onClickMain">
            <router-view/>
        </main>
        <menu-button/>
        <side-bar/>
    </div>
</template>

<script>
    import SideBar from "@/components/SideBar";
    import {mapState, mapMutations} from "vuex";
    import {CLOSE_MENU} from "./store";
    import MenuButton from "@/components/MenuButton";

    export default {
        name: "App",
        components: {MenuButton, SideBar},
        methods: {
            onClickMain() {
                if (this.menuOpened) {
                    this.closeMenu();
                }
            },
            ...mapMutations({closeMenu: CLOSE_MENU}),
        },
        computed: {
            ...mapState({menuOpened: "menuOpened"}),
        }
    }
</script>

<template>
    <nav v-show="opened" class="SideBar">
        <svg ref="svg" class="bg" width="548" :height="height"></svg>
        <div class="closeButton" @click="onClose">
            <svg id="Close" xmlns="http://www.w3.org/2000/svg"
                 width="35.657" height="36.375" viewBox="0 0 35.657 36.375">
                <path class="cls-1"
                      d="M101.737,62.322l33.941,33.941"
                      transform="translate(-100.531 -61.813)"/>
                <path data-name="Stroke" class="cls-1"
                      d="M101.029,96.971l33.942-33.941"
                      transform="translate(-100.531 -61.813)"/>
            </svg>
        </div>
        <div class="content">
            <nav-button title="Home" id="01" to="/"/>
            <nav-button title="Services" id="02" to="/services"/>
            <nav-button title="Contact" id="03" to="/contact"/>
        </div>
    </nav>
</template>

<script>
    import {mapState, mapMutations} from "vuex";
    import {CLOSE_MENU} from "../store";
    import NavButton from "@/components/NavButton";

    export default {
        name: "SideBar",
        components: {NavButton},
        data() {
            return {
                height: window.innerHeight
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                this.$refs["svg"].appendChild(polygon);
                let arr = [
                    [0, 0],
                    [548, 0],
                    [548, this.height],
                    [0, this.height],
                ];
                for (let value of arr) {
                    let point = this.$refs["svg"].createSVGPoint();
                    point.x = value[0];
                    point.y = value[1];
                    polygon.points.appendItem(point);
                    window.point = point;
                }
            },
            onClose() {
                this.closeMenu();
            },
            ...mapMutations({closeMenu: CLOSE_MENU}),
        },
        computed: {
            ...mapState({opened: "menuOpened"}),
        }
    }
</script>

<style lang="stylus" src="../styles/components/SideBar.styl"></style>

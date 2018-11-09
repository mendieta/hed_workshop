<template>
    <transition @enter="onEnter" @leave="onLeave">
        <div class="section">
            <h2 ref="text">Services</h2>
        </div>
    </transition>
</template>

<script>
    import Splitting from "splitting";
    import {TweenMax, Power2} from "gsap";

    export default {
        name: 'home',
        components: {},
        mounted() {
            this.init();
        },
        methods: {
            init() {
                if (!this.split) this.createSplit();
            },
            createSplit() {
                this.split = Splitting({
                    target: this.$refs["text"],
                    by: "chars"
                })[0].chars;
            },
            onEnter(el, done) {
                if (!this.split) this.createSplit();
                TweenMax.staggerFrom(this.split, 0.28, {
                    y: "+150",
                    ease: Power2.easeOut,
                }, 0.083, done)
            },
            onLeave(el, done) {
                TweenMax.staggerTo(this.split, 0.28, {
                    y: "-150",
                    ease: Power2.easeIn,
                }, 0.083, done)
            }
        },
    }
</script>

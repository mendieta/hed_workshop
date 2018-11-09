import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "./main.styl";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store, {CLOSE_MENU} from './store'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    store.commit(CLOSE_MENU);
    next();
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

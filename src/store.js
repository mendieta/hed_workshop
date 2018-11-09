import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const TOGGLE_MENU = "toggle_menu";
export const CLOSE_MENU = "close_menu";

export default new Vuex.Store({
    state: {
        menuOpened: false,
    },
    mutations: {
        [TOGGLE_MENU](state) {
            state.menuOpened = !this.state.menuOpened;
        },
        [CLOSE_MENU](state) {
            state.menuOpened = false;
        }
    },
    actions: {}
})

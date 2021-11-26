import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = createStore({
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
    },
    actions: {
        increment(context) {
            setTimeout(() => context.commit('increment'), 2000)
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
    }
})

const store = createStore({
    modules: {
        numbers: counterModule,
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        },
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false} );
        },
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn; 
        }
    }
})

const app = createApp(App);

app.use(store);

app.mount('#app');

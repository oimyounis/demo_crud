import Vue from 'vue'
import http from '@/http'
import store from "@/store"

export function login(username, password){
    return new Promise((resolve, reject) => {
        http().post(`api-auth-token/`, {username: username, password: password})
            .then(res => {
                if (res.hasOwnProperty('data') && res.data.hasOwnProperty('token')) {
                    Vue.localStorage.set('token', res.data.token);
                    resolve();
                }
                else {
                    reject();
                }
            });
    });
}

export function isLoggedIn() {
    if (Vue.localStorage.get('token') && !store.state.isLoggedIn) {
        store.commit('login');
    }
    return store.state.isLoggedIn;
}

export function logout() {
    store.commit('logout');
}
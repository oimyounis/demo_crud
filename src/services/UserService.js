import http from '@/http'
import Vue from 'vue'

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
    return Vue.localStorage.get('token');
}

export function logout() {
    Vue.localStorage.remove('token');
}
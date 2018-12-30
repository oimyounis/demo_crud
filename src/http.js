import axios from 'axios'
import Vue from 'vue'

export default function() {
    let headers = {};

    const token = Vue.localStorage.get('token');

    if (token) {
        headers['Authorization'] = `Token ${token}`;
    }

    return axios.create({
        baseURL: `http://192.168.0.192:818/`,
        headers: headers
    });
}
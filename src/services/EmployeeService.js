import http from '@/http'
import store from '@/store'

export async function get(pk){
    return await http().get(`employees/${pk}/`);
}
export async function getAll(){
    return await http().get('employees');
}
export async function add(user){
    return await http().post('add-employee/', user);
}
export async function update(pk, user){
    return await http().put(`employee/${pk}/update`, user);
}
export async function del(pk){
    return await http().delete(`employee/${pk}/delete`);
}

export async function loadEmployees(){
    getAll().then(res => {
        store.commit('setUsers', res.data);
    });
}
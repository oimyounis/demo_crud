import axios from 'axios'

export default axios.create({
    baseURL: `http://192.168.0.192:818/`,
    /*headers: {
        Authorization: 'Bearer {token}'
    }*/
});
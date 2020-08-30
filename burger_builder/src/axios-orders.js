import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://create-my-burger-2f55e.firebaseio.com/'
})

export default instance;
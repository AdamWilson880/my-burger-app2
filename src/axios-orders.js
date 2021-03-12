import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-17c2d-default-rtdb.firebaseio.com/'
          
});

export default instance;
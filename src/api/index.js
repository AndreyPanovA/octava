import panov from 'axios';

let axios = panov.create({
    baseURL: '',
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
    },
});



export default axios;

import axios from 'axios';
import fetch from 'node-fetch';

const path = 'https://jsonplaceholder.typicode.com/posts/1/comments';
export const fetchData = async () => {
    try {
        const res = await fetch(path);
        const data = res.json();
        return data;
    } catch (err) {
        throw `fetch error is: ${err.message || err}`;
    }
}

export const fetchDataWithAxios = async () => {
    try {
        const data = await axios.get(path);
        return data.data;
    } catch (err) {
        throw `axios error is: ${err.message || err}`;
    }
}

export const fName = 'Vikram';


console.log('loaded from file1');
const path = 'https://api-qa-embedded-builder.myperfectcoverletter.com/api/v1/config/features/mpc?skipCache=true&includeInActiveFeatures=true';
const fetchData = () => {
    const fetch = require('node-fetch');
    return fetch(path)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            return data;
        })
        .catch(err => console.log(err));
}

const fetchDataWithAxios = () => {
    const axios = require('axios').default;
    return axios.get(path)
        .then(data => {
            // console.log(data.data);
            return data.data;
        })
        .catch(err => console.log(err));
}

const fName = 'Vikram';

module.exports = { fetchData, fName, fetchDataWithAxios };

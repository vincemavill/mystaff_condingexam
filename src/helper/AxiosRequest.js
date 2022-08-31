import axios from 'axios';
const AxiosHeader = axios.create({
    headers: {
        "Content-type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-Control': 'no-cache',
    }
})
export const AxiosRequest = (method, api, data) => {
    let promise = new Promise((resolve, reject) => {
        AxiosHeader({
            method: method,
            url: api,
            data: data,
        })
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error.response.data);
            })
            .then(function () {
                // always executed
            });
    });
    return promise
};

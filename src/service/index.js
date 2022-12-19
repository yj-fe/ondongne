import axios from 'axios';

export const client = axios.create({
    // baseURL: 'https://ondongnemarket.com',
    baseURL: 'http://localhost:8080',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
    },
    responseType: 'json',
});

const executingRequests = {};

client.interceptors.request.use(function(config) {
    return config;
}, function(request) {

    const currentRequest = request;

    if(executingRequests[currentRequest.url]) {
        const source = executingRequests[currentRequest.url];
        delete executingRequests[currentRequest.url];
        source.cancel();
    }

    const source = axios.CancelToken.source();
    currentRequest.CancelToken = source.token;
    executingRequests[currentRequest.url] = source;

    return currentRequest;
});

client.interceptors.response.use(function(response) {
    console.log(response)

    if(executingRequests[response.request.reponseURL]) {
        delete executingRequests[response.request.reponseURL];
    }

    if (response.status !== 200) {
        const error = new Error(response.data.message);
        return Promise.reject(error);
    }

    return response;   
}, function(error) {
    const { config } = error;
    const originalRequest = config;

    if(axios.isCancel(error)) {
        return new Promise(() => {});
    }

    if(executingRequests[originalRequest.url]) {
        delete executingRequests[originalRequest.url];
    }

    if(error.response) {
        return error.response;
    } else {
        return error.message;
    }
});

client.defaults.withCredentials = true;



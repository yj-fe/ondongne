import axios from "axios";
import { getExpiry } from "utils/localStorage";

export const client = axios.create({
    baseURL: "https://ondongnemarket.com/api",
    // baseURL: "http://localhost:8080/api",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
    },
    responseType: "json",
});

const executingRequests = {};

client.interceptors.request.use(
    (config) => {
        const data = getExpiry("accessToken");
        if (data) {
            config.headers["Authorization"] = data.accessToken;
        }
        return config;
    },
    (request) => {
        const currentRequest = request;

        if (executingRequests[currentRequest.url]) {
            const source = executingRequests[currentRequest.url];
            delete executingRequests[currentRequest.url];
            source.cancel();
        }

        const source = axios.CancelToken.source();
        currentRequest.CancelToken = source.token;
        executingRequests[currentRequest.url] = source;

        return currentRequest;
    }
);

client.interceptors.response.use(
    (response) => {
        if (executingRequests[response.request.reponseURL]) {
            delete executingRequests[response.request.reponseURL];
        }

        return response;
    },
    (error) => {
        const { config } = error;
        const originalRequest = config;

        if (
            error.response?.status === 401 &&
            error.response?.data.message !== "자격 증명에 실패하였습니다."
        ) {
            window.location.href = "/login?unAuth=401";
        }

        if (axios.isCancel(error)) {
            return new Promise(() => {});
        }

        if (executingRequests[originalRequest.url]) {
            delete executingRequests[originalRequest.url];
        }

        if (error.response) {
            return error.response;
        } else {
            return error.message;
        }
    }
);

client.defaults.withCredentials = true;

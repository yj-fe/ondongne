import { client } from ".";

const urls = {
    login: '/auth/login'
};

/* ==============================
    로그인
============================== */
export function login(account) {
    console.log("account : ",account)
    return client.post(urls.login, account);
};
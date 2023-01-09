import { client } from ".";

const urls = {
    signup: '/auth/signup',
    login: '/auth/login',
};

/* ==============================
    회원가입
============================== */
export function signup(userData) {
    return client.post(urls.signup, userData);
};

/* ==============================
    로그인
============================== */
export function login(account) {
    return client.post(urls.login, account);
};

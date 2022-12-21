import { client } from ".";

const urls = {
    signup: '/auth/signup',
    login: '/auth/login',
    reissue: '/auth/reissue'
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

/* ==============================
    토큰 재발급
============================== */
export function tokenReissue(refreshToken) {
    return client.post(urls.reissue, { refreshToken });
};
import { client } from ".";

const urls = {
    logout: '/member/logout',
    get: '/member/get',
    passwordChange: '/member/change/password',
};

/* ==============================
    인증 회원 정보
============================== */
export function logout() {
    return client.post(urls.logout);
};

/* ==============================
    인증 회원 정보
============================== */
export function getMember() {
    return client.get(urls.get);
};

/* ==============================
    비밀번호 변경
============================== */
export function memberPasswordChange(id, password) {
    return client.post(`${urls.passwordChange}/${id}?password=${password}`);
};

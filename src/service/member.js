import { client } from ".";

const urls = {
    signup: '/member/signup',
    phoneValidation: '/member/validation/phone',
    emailValidation: '/member/validation/email',
    nicknameValidation: '/member/validation/nickname',
};

/* ==============================
    휴대폰 중복체크
============================== */
export function memberPhoneValidation(phone) {
    return client.get(`${urls.phoneValidation}?phone=${phone}`);
};


/* ==============================
    이메일 중복체크
============================== */
export function memberEmailValidation(email) {
    return client.get(`${urls.emailValidation}?email=${email}`);
};

/* ==============================
    닉네임 중복체크
============================== */
export function memberNicknameValidation(nickname) {
    return client.get(`${urls.nicknameValidation}?nickname=${nickname}`);
};

/* ==============================
    회원가입
============================== */
export function signup(userData) {
    return client.post(urls.signup, userData);
};

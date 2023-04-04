import { client } from ".";

const urls = {
    get: "/member/get",
    passwordChange: "/member/change/password",
    profileChange: "/member/change/profile",
    nicknameChange: "/member/change/nickname",
    phoneChange: "/member/change/phone",
    memberDelete: "/member/delete",
    marketingUpdate: "/member/marketing/update",
    pushUpdate: "/member/push/update",
    tokenUpdate: "/member/token/update",
    logout: "/member/logout",
};

/* ==============================
    인증 회원 정보
============================== */
export function getMember() {
    return client.get(urls.get);
}

/* ==============================
    비밀번호 변경
============================== */
export function memberPasswordChange(password) {
    return client.post(`${urls.passwordChange}?password=${password}`);
}

/* ==============================
    프로필 변경
============================== */
export function memberProfileChange(file) {
    const headers = { "Content-Type": "multipart/form-data" };
    const data = new FormData();
    data.append("file", file);

    return client.post(urls.profileChange, data, { headers });
}

/* ==============================
    닉네임 변경
============================== */
export function memberNicknameChange(nickname) {
    return client.post(`${urls.nicknameChange}?nickname=${nickname}`);
}

/* ==============================
    휴대전화 변경
============================== */
export function memberPhoneChange(phone) {
    return client.post(`${urls.phoneChange}?phone=${phone}`);
}

/* ==============================
    회원 탈퇴
============================== */
export function memberDelete(deleteReason) {
    return client.post(`${urls.memberDelete}?deleteReason=${deleteReason}`);
}

/* ==============================
    회원 동의 정보 변경
============================== */
export function memberAgreeStatusChange(key, value) {
    if (key === "sms") {
        return client.post(urls.marketingUpdate, {
            emailSmsAgreeStatus: value,
        });
    }

    if (key === "push") {
        return client.post(urls.pushUpdate, { pushAgreeStatus: value });
    }

    return;
}

/* ==============================
    회원 토큰 삭제
============================== */
export function memberLogout() {
    return client.post(`${urls.logout}`);
}

/* ==============================
    회원 토큰 주입
============================== */
export function memberInjectToken(token) {
    return client.patch(`${urls.tokenUpdate}/${token}`);
}

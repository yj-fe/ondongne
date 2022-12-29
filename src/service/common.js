import { client } from ".";

const urls = {
	sms: "/sms/send",
	phoneValidation: "/validation/phone",
	emailValidation: "/validation/email",
	nicknameValidation: "/validation/nickname",
	findEmail: "/find/email",
	findPassword: "/find/password",
	searchLocation: "/search/location",
	getLocal: "/getLocal",
};

/* ==============================
    휴대폰 인증 발송
============================== */
export function sendSMS(phone) {
	return client.get(`${urls.sms}?phone=${phone}`);
}

/* ==============================
    휴대폰 중복체크
============================== */
export function memberPhoneValidation(phone) {
	return client.get(`${urls.phoneValidation}?phone=${phone}`);
}

/* ==============================
    이메일 중복체크
============================== */
export function memberEmailValidation(email) {
	return client.get(`${urls.emailValidation}?email=${email}`);
}

/* ==============================
    닉네임 중복체크
============================== */
export function memberNicknameValidation(nickname) {
	return client.get(`${urls.nicknameValidation}?nickname=${nickname}`);
}

/* ==============================
    이메일 찾기
============================== */
export function memberFindEmail(phone) {
	return client.post(`${urls.findEmail}?phone=${phone}`);
}

/* ==============================
    비밀번호 찾기
============================== */
export function memberFindPassword(email, phone) {
	return client.post(`${urls.findPassword}?email=${email}&phone=${phone}`);
}

/* ==============================
    지역 검색
============================== */
export function searchLocation(address) {
	return client.get(`${urls.searchLocation}?address=${address}`);
}

/* ==============================
    지역 조회
============================== */
export function getLocal(address) {
	return client.get(`${urls.getLocal}?address=${address}`);
}

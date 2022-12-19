import { client } from ".";

const urls = {
    sms: '/sms/send',
};

/* ==============================
    휴대폰 인증 발송
============================== */
export function sendSMS(phone) {
    console.log(phone)
    return client.get(`${urls.sms}?phone=${phone}`);
};

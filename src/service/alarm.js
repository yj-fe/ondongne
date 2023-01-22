import { client } from ".";

const urls = {
    memberList: '/alarm/member/list',
    bizList: '/alarm/biz/list',
    read: "/alarm/read"
};

/* ==============================
    회원 알림 목록
============================== */
export function getAlarmMemberList() {
    return client.get(`${urls.memberList}`);
};

/* ==============================
    비즈 회원 알림 목록
============================== */
export function getAlarmBizList() {
    return client.get(`${urls.bizList}`);
};


/* ==============================
    알림 읽음 처리
============================== */
export function alarmRead(id) {
    return client.patch(`${urls.read}/${id}`);
};


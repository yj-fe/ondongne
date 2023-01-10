import { client } from ".";

const urls = {
  list: '/border/list',
  details: '/border/details/:id',
  faq: '/faq/list',
  inquiry: '/member/border/insert',
  voc: '/member/border/insert',
  marketing: '/member/marketing/update',
  push: '/member/push/update',
};


/* ==============================
    공지사항 목록
============================== */
export function noticeList(requestData) {
    return client.post(urls.list, requestData);
};

/* ==============================
    공지사항 상세
============================== */
export function detailsList(requestDetails) {
    return client.post(urls.details, requestDetails);
};

/* ==============================
    자주하는 질문
============================== */
export function faqList(requestData) {
    return client.post(urls.faq, requestData);
};

/* ==============================
    1 : 1 문의하기
============================== */
export function postInquiry(requestData) {
    return client.post(urls.inquiry, requestData);
};

/* ==============================
   voc 문의하기
============================== */
export function postVoc(requestData) {
    return client.post(urls.voc, requestData);
};

/* ==============================
   마케팅 수신 동의
============================== */
export function postMarketing(requestData) {
    return client.post(urls.marketing, requestData);
};

/* ==============================
   Push 수신 동의
============================== */
export function postPush(requestData) {
    return client.post(urls.push, requestData);
};
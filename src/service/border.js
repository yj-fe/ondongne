import { client } from ".";

const urls = {
  list: '/border/list',
  details: '/border/details/:id',
  faq: '/faq/list',
  inquiry: '/member/border/insert',
  voc: '/member/border/insert',
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
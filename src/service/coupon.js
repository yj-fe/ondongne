import { client } from ".";

const urls = {
    list: "/coupon/list",
    storeList: "/coupon/store/list",
    memberList: "/coupon/member/list",
    download: "/coupon/download",
    use: "/coupon/use",
    save: "/biz/coupon/save",
    bizList: "/biz/coupon/list",
    getBizCoupon: "/biz/coupon/get",
    delete: "/biz/coupon/delete",
    update: "/biz/coupon/update",
};

/* ==============================
    쿠폰 등록
============================== */
export function couponSave(data) {
    return client.post(urls.save, data);
}

/* ==============================
    쿠폰 수정
============================== */
export function couponUpdate(data) {
    return client.patch(urls.update, data);
}

/* ==============================
    쿠폰 삭제
============================== */
export function couponDelete(id) {
    return client.delete(`${urls.delete}/${id}`);
}

/* ==============================
    비즈 쿠폰 목록
============================== */
export function bizCouponList(storeId) {
    return client.get(`${urls.bizList}/${storeId}`);
}

/* ==============================
    비즈 쿠폰 상세
============================== */
export function getBizCoupon(id) {
    return client.get(`${urls.getBizCoupon}/${id}`);
}

/* ==============================
    상점 쿠폰 목록
============================== */
export function storeConponList(id) {
    return client.get(`${urls.storeList}/${id}`);
}

/* ==============================
    회원 쿠폰 목록
============================== */
export function getMemberCouponList(id, useStatus) {
    return client.get(`${urls.memberList}/${id}?useStatus=${useStatus}`);
}

/* ==============================
    쿠폰 다운로드
============================== */
export function couponDownload(id) {
    return client.post(`${urls.download}/${id}`);
}

/* ==============================
    쿠폰 사용
============================== */
export function couponUse(id) {
    return client.post(`${urls.use}/${id}`);
}

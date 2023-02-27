import { client } from ".";

const urls = {
    list: "/item/coupon/list",
    save: "/biz/coupon/save",
    bizList: "/biz/coupon/list",
    getBizCoupon: "/biz/coupon/get",
    delete: "/biz/coupon/delete",
    update: "/biz/coupon/update",
};

/* ==============================
    쿠폰 상품 리스트
============================== */
export function getCouponList(id) {
    return client.get(`${urls.list}/${id}`);
}

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

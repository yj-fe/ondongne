import { client } from ".";

const urls = {
	list: "/item/coupon/list",
};

/* ==============================
    쿠폰 리스트
============================== */
export function getCouponList(id) {
	return client.get(`${urls.list}/${id}`);
}


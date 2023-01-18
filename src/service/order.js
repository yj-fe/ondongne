import { client } from ".";

const urls = {
	list: "/order/list",
	details: "/order/details",
	unView: "/order/unView",
};

/* ==============================
   주문 내역 목록
============================== */
export function orderList() {
	return client.get(urls.list);
}

/* ==============================
   주문 내역 상세
============================== */
export function orderDetails(id) {
	return client.get(`${urls.details}/${id}`);
}

/* ==============================
   주문 내역 미노출 처리
============================== */
export function unView(id) {
	return client.patch(`${urls.unView}/${id}`);
}

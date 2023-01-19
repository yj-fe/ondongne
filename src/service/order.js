import { client } from ".";

const urls = {
	list: "/order/list",
	details: "/order/details",
	unView: "/order/unView",
	request: "/order/request",
	cancel: "/order/cancel",
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

/*
 * 주문 요청
 */
export function requestPayment(data) {
	return client.post(urls.request, data);
}

/* ==============================
   주문 취소
============================== */
export function orderCancel(id) {
	return client.get(`${urls.cancel}/${id}`);
}

/* ==============================
   주문 내역 미노출 처리
============================== */
export function orderUnView(id) {
	return client.patch(`${urls.unView}/${id}`);
}

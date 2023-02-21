import { client } from ".";

const urls = {
	list: "/biz/order/list",
	details: "/biz/order/details",
	statusUpdate: "/biz/order/statusUpdate",
};

/* ==============================
   주문 내역 목록
============================== */
export function bizOrderList(storeId) {
	return client.get(`${urls.list}/${storeId}`);
}

/* ==============================
   주문 내역 상세
============================== */
export function bizOrderDetails(id) {
	return client.get(`${urls.details}/${id}`);
}

/* ==============================
   주문 상태 변경
============================== */
export function orderStatusUpdate(id, status) {
	return client.patch(`${urls.statusUpdate}`, {
		orderId: id,
		orderStatus: status,
	});
}

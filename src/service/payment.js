import { client } from ".";

const urls = {
	request: "/payment/request",
};

/*
 * 주문 요청
 */
export function requestPayment(data) {
	return client.post(urls.request, data);
}

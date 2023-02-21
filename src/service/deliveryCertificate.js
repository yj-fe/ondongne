import { client } from ".";

const urls = {
	get: "/deliveryCertificate/get",
	save: "/deliveryCertificate/save",
};

/* ==============================
   배달 인증서
============================== */
export function getDeliveryCertificate(orderId) {
	return client.get(`${urls.get}/${orderId}`);
}

/* ==============================
   배달 인증서 등록
============================== */
export function deliveryCertificateSave(item) {
	const headers = { "Content-Type": "multipart/form-data" };
	const data = new FormData();
	data.append("orderId", item.orderId);
	data.append("storeId", item.storeId);
	data.append("title", item.type);
	data.append("contents", item.text);
	item.files.forEach((file) => {
		data.append("files", file);
	});

	return client.post(urls.save, data, { headers });
}

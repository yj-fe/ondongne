import { client } from ".";

const urls = {
	insert: "/biz/item/insert",
	list: "/biz/item/list",
	details: "/biz/item/getItem",
};

/* ==============================
   비즈 상점 상품 목록
============================== */
export function bizItemList(page, sort) {
	return client.get(`${urls.list}?page=${page}&sort=${sort}`);
}

/* ==============================
   비즈 상점 상품 목록
============================== */
export function getBizItem(id) {
	return client.get(`${urls.details}/${id}`);
}

/* ==============================
   비즈 상품 등록
============================== */
export function createItem(data) {
	const headers = { "Content-Type": "multipart/form-data" };
	const formData = new FormData();
	formData.append("type", data.type);
	formData.append("name", data.name);
	formData.append("description", data.description);
	formData.append("price", data.price);
	formData.append("salePercent", data.salePercent);
	formData.append("minCount", data.minCount);
	formData.append("maxCount", data.maxCount);
	formData.append("endDate", data.endDate);
	formData.append("recetiveType", data.recetiveType.join(","));

	data.categories.forEach((category) => {
		formData.append("categories", category);
	});

	data.files.forEach((file) => {
		formData.append("files", file);
	});

	return client.post(urls.insert, formData, { headers });
}

/* ==============================
   비즈 상품 수정
============================== */
export function updateItem(data) {
	const headers = { "Content-Type": "multipart/form-data" };
	const formData = new FormData();
	formData.append("type", data.type);
	formData.append("name", data.name);
	formData.append("description", data.description);
	formData.append("price", data.price);
	formData.append("salePercent", data.salePercent);
	formData.append("minCount", data.minCount);
	formData.append("maxCount", data.maxCount);
	formData.append("endDate", data.endDate);
	formData.append("recetiveType", data.recetiveType.join(","));

	data.categories.forEach((category) => {
		formData.append("categories", category);
	});

	data.files.forEach((file) => {
		formData.append("files", file);
	});

	return client.post(urls.insert, formData, { headers });
}

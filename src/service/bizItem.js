import { client } from ".";

const urls = {
	insert: "/biz/item/insert",
	update: "/biz/item/update",
	list: "/biz/item/list",
	details: "/biz/item/details",
	updateDetails: "/biz/item/getItem",
	fileDelete: "/biz/item/deleteFile",
};

/* ==============================
   비즈 상점 상품 목록
============================== */
export function bizItemList(page, sort) {
	return client.get(`${urls.list}?page=${page}&sort=${sort}`);
}

/* ==============================
   비즈 수정할 상품 상세
============================== */
export function getBizItemDetails(id) {
	return client.get(`${urls.details}/${id}`);
}

/* ==============================
   비즈 수정할 상품 정보
============================== */
export function getBizItem(id) {
	return client.get(`${urls.updateDetails}/${id}`);
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

	data.categories.forEach((category) => {
		formData.append("categories", category);
	});

	data.files.forEach((file) => {
		formData.append("files", file);
	});

	return client.post(urls.insert, formData, { headers });
}

/* ==============================
   비즈 상품 사진 삭제
============================== */
export function bizItemdeleteFile(file) {
	return client.post(urls.fileDelete, file);
}

/* ==============================
   비즈 상품 수정
============================== */
export function updateItem(data) {
	const headers = { "Content-Type": "multipart/form-data" };
	const formData = new FormData();
	formData.append("itemId", data.itemId);
	formData.append("type", data.type);
	formData.append("name", data.name);
	formData.append("description", data.description);
	formData.append("price", data.price);
	formData.append("salePercent", data.salePercent);
	formData.append("minCount", data.minCount);
	formData.append("maxCount", data.maxCount);
	formData.append("endDate", data.endDate);

	data.categories.forEach((category) => {
		formData.append("categories", category);
	});

	data.files.forEach((file) => {
		formData.append("files", file);
	});

	return client.post(urls.update, formData, { headers });
}
